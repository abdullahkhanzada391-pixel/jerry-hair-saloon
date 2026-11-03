Add-Type -AssemblyName System.Drawing

function Crop-ImageExact {
    param(
        [string]$InputPath,
        [string]$OutputPath,
        [int]$CropX,
        [int]$CropY,
        [int]$CropW,
        [int]$CropH
    )
    $src = [System.Drawing.Bitmap]::FromFile($InputPath)
    $rect = New-Object System.Drawing.Rectangle($CropX, $CropY, $CropW, $CropH)
    $dest = New-Object System.Drawing.Bitmap($CropW, $CropH)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($src, (New-Object System.Drawing.Rectangle(0, 0, $CropW, $CropH)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $dest.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    
    # Check 4 corners
    $tl = $dest.GetPixel(4, 4)
    $tr = $dest.GetPixel($CropW - 5, 4)
    $bl = $dest.GetPixel(4, $CropH - 5)
    $br = $dest.GetPixel($CropW - 5, $CropH - 5)
    Write-Output "$OutputPath : TL=($($tl.R),$($tl.G),$($tl.B)) TR=($($tr.R),$($tr.G),$($tr.B)) BL=($($bl.R),$($bl.G),$($bl.B)) BR=($($br.R),$($br.G),$($br.B))"
    
    $g.Dispose()
    $dest.Dispose()
    $src.Dispose()
}

$base = "C:\Users\Ocean Developers LTD\.gemini\antigravity\brain\0c6523e1-2c71-4552-a083-b5ef2a377473\.user_uploaded"
$destDir = "C:\Users\Ocean Developers LTD\Downloads\jerry stitch"

# 1. Jerry: mirror selfie, beard, fade
# Center is 511.5, 285.5.
# X from 360 to 660 (W=300). Y from 65 to 495 (H=430)
Crop-ImageExact -InputPath "$base\media_1793208505160_629ce913.jpg" -OutputPath "$destDir\barber_jerry.jpg" -CropX 360 -CropY 65 -CropW 300 -CropH 430

# 2. Tariq: headphones, yellow tank top
# Center is 511.5, 275.
# X from 360 to 660 (W=300). Y from 65 to 475 (H=410)
Crop-ImageExact -InputPath "$base\media_1793208505166_5710c152.jpg" -OutputPath "$destDir\barber_tariq.jpg" -CropX 360 -CropY 65 -CropW 300 -CropH 410

# Also copy to public/images
Copy-Item "$destDir\barber_jerry.jpg" "$destDir\public\images\barber_jerry.jpg" -Force
Copy-Item "$destDir\barber_tariq.jpg" "$destDir\public\images\barber_tariq.jpg" -Force

Write-Output "Done!"
