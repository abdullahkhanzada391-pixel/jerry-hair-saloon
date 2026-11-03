Add-Type -AssemblyName System.Drawing

function Create-SeamlessPortrait {
    param(
        [string]$SrcPath,
        [string]$OutPath,
        [int]$CropX,
        [int]$CropY,
        [int]$CropW,
        [int]$CropH,
        [int]$CircleCenterX,
        [int]$CircleCenterY,
        [double]$CircleRadius
    )
    $src = [System.Drawing.Bitmap]::FromFile($SrcPath)
    $dest = New-Object System.Drawing.Bitmap($CropW, $CropH)
    
    # First, copy pixels from src
    for ($y = 0; $y -lt $CropH; $y++) {
        $srcY = $CropY + $y
        if ($srcY -ge $src.Height) { $srcY = $src.Height - 1 }
        for ($x = 0; $x -lt $CropW; $x++) {
            $srcX = $CropX + $x
            if ($srcX -ge $src.Width) { $srcX = $src.Width - 1 }
            
            $p = $src.GetPixel($srcX, $srcY)
            $dest.SetPixel($x, $y, $p)
        }
    }
    
    # Now, for any pixel outside the circle (black), find the nearest pixel on the circle border
    for ($y = 0; $y -lt $CropH; $y++) {
        $srcY = $CropY + $y
        $dy = $srcY - $CircleCenterY
        for ($x = 0; $x -lt $CropW; $x++) {
            $srcX = $CropX + $x
            $dx = $srcX - $CircleCenterX
            $dist = [Math]::Sqrt($dx * $dx + $dy * $dy)
            
            if ($dist -ge ($CircleRadius - 2)) {
                # Outside circle or on fuzzy edge!
                # Project back along radius to (CircleRadius - 6) to sample clean interior pixel
                $scale = ($CircleRadius - 6) / [Math]::Max($dist, 1.0)
                $sampleX = [int]($CircleCenterX + $dx * $scale)
                $sampleY = [int]($CircleCenterY + $dy * $scale)
                
                # Clamp within src bounds
                $sampleX = [Math]::Max(0, [Math]::Min($src.Width - 1, $sampleX))
                $sampleY = [Math]::Max(0, [Math]::Min($src.Height - 1, $sampleY))
                
                $borderPixel = $src.GetPixel($sampleX, $sampleY)
                $dest.SetPixel($x, $y, $borderPixel)
            }
        }
    }
    
    # Save as high quality JPEG
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)
    $dest.Save($OutPath, $codec, $encoderParams)
    
    $dest.Dispose()
    $src.Dispose()
    Write-Output "Successfully generated $OutPath ($CropW x $CropH)"
}

$base = "C:\Users\Ocean Developers LTD\.gemini\antigravity\brain\0c6523e1-2c71-4552-a083-b5ef2a377473\.user_uploaded"
$destDir = "C:\Users\Ocean Developers LTD\Downloads\jerry stitch"

# 1. Jerry:
# Circle center: X=511.5, Y=285. Radius=285.
# In Jerry, the head is centered at X=560, hair starts at Y=10.
# We want to crop from X=320 to 760 (Width=440), Y=0 to 570 (Height=570).
# Add 25px headroom at top so hair is not touching top border!
# Let's create seamless portrait:
Create-SeamlessPortrait -SrcPath "$base\media_1793208505160_629ce913.jpg" -OutPath "$destDir\barber_jerry_seamless.jpg" -CropX 320 -CropY 0 -CropW 440 -CropH 570 -CircleCenterX 512 -CircleCenterY 285 -CircleRadius 285

# 2. Tariq:
# Circle center: X=511.5, Y=275. Radius=273.
# Hair starts at Y=15. Face center is X=512.
# We want to crop from X=292 to 732 (Width=440), Y=0 to 550 (Height=550).
Create-SeamlessPortrait -SrcPath "$base\media_1793208505166_5710c152.jpg" -OutPath "$destDir\barber_tariq_seamless.jpg" -CropX 292 -CropY 0 -CropW 440 -CropH 550 -CircleCenterX 512 -CircleCenterY 275 -CircleRadius 273

