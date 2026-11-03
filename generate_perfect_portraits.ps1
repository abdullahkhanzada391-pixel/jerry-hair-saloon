Add-Type -AssemblyName System.Drawing

function Build-LuxuryPortrait {
    param(
        [string]$SrcPath,
        [string]$OutPath,
        [int]$FocusCenterX,
        [int]$FocusCenterY,
        [int]$CircleCenterX,
        [int]$CircleCenterY,
        [double]$CircleRadius,
        [int]$OutW,
        [int]$OutH,
        [int]$Headroom
    )
    $src = [System.Drawing.Bitmap]::FromFile($SrcPath)
    $dest = New-Object System.Drawing.Bitmap($OutW, $OutH)
    
    # Calculate crop region in source
    # We want OutW x (OutH - Headroom) roughly mapped from source
    # Let's say source window is 480 wide x 570 high
    $srcW = 480
    $srcH = 570
    $srcStartX = [int]($FocusCenterX - ($srcW / 2))
    $srcStartY = 0
    
    for ($y = 0; $y -lt $OutH; $y++) {
        # map y to srcY with headroom offset
        $srcY = [int]($y - $Headroom)
        
        for ($x = 0; $x -lt $OutW; $x++) {
            $srcX = [int]($srcStartX + $x)
            
            # Check distance from circle center
            $dx = $srcX - $CircleCenterX
            $dy = $srcY - $CircleCenterY
            $dist = [Math]::Sqrt($dx * $dx + $dy * $dy)
            
            if ($srcY -ge 0 -and $srcY -lt $src.Height -and $dist -lt ($CircleRadius - 4)) {
                $p = $src.GetPixel($srcX, $srcY)
                $dest.SetPixel($x, $y, $p)
            } else {
                # Outside circle or in headroom!
                # Project onto circle border to sample nearest background/hair color
                $scale = ($CircleRadius - 8) / [Math]::Max($dist, 1.0)
                $sampleX = [int]($CircleCenterX + $dx * $scale)
                $sampleY = [int]($CircleCenterY + $dy * $scale)
                
                $sampleX = [Math]::Max(0, [Math]::Min($src.Width - 1, $sampleX))
                $sampleY = [Math]::Max(0, [Math]::Min($src.Height - 1, $sampleY))
                
                $dest.SetPixel($x, $y, $src.GetPixel($sampleX, $sampleY))
            }
        }
    }
    
    # High-quality JPEG save
    $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
    $encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]95)
    $dest.Save($OutPath, $codec, $encoderParams)
    
    $dest.Dispose()
    $src.Dispose()
    Write-Output "Successfully built $OutPath ($OutW x $OutH)"
}

$base = "C:\Users\Ocean Developers LTD\.gemini\antigravity\brain\0c6523e1-2c71-4552-a083-b5ef2a377473\.user_uploaded"
$destDir = "C:\Users\Ocean Developers LTD\Downloads\jerry stitch"

# 1. Jerry:
# Head/Face is centered around X=550. Circle center is 512, 285. Radius=285.
# Target 480x600 with 30px headroom
Build-LuxuryPortrait -SrcPath "$base\media_1793208505160_629ce913.jpg" -OutPath "$destDir\barber_jerry.jpg" -FocusCenterX 540 -FocusCenterY 285 -CircleCenterX 512 -CircleCenterY 285 -CircleRadius 285 -OutW 480 -OutH 600 -Headroom 30

# 2. Tariq:
# Face is centered at X=512. Circle center is 512, 275. Radius=273.
# Target 480x600 with 30px headroom
Build-LuxuryPortrait -SrcPath "$base\media_1793208505166_5710c152.jpg" -OutPath "$destDir\barber_tariq.jpg" -FocusCenterX 512 -FocusCenterY 275 -CircleCenterX 512 -CircleCenterY 275 -CircleRadius 273 -OutW 480 -OutH 600 -Headroom 30

# Copy to public/images folder
Copy-Item "$destDir\barber_jerry.jpg" "$destDir\public\images\barber_jerry.jpg" -Force
Copy-Item "$destDir\barber_tariq.jpg" "$destDir\public\images\barber_tariq.jpg" -Force

Write-Output "Portraits updated successfully!"

