Add-Type -AssemblyName System.Drawing

function Crop-Image {
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
    $g.Dispose()
    $dest.Dispose()
    $src.Dispose()
    Write-Output "Saved $OutputPath ($CropW x $CropH)"
}

$base = "C:\Users\Ocean Developers LTD\.gemini\antigravity\brain\0c6523e1-2c71-4552-a083-b5ef2a377473\.user_uploaded"
$destDir = "C:\Users\Ocean Developers LTD\Downloads\jerry stitch"

# Original width is 1024, height is 571.
# Center circle is at X=512, Y=285.
# If we take a portrait crop from X = 512 - 200 = 312 to 512 + 200 = 712 (width = 400),
# from Y = 20 to Y = 560 (height = 540), it completely avoids the black left/right borders!
# Let's crop centered portrait:
Crop-Image -InputPath "$base\media_1793208505160_629ce913.jpg" -OutputPath "$destDir\barber_jerry_real_crop.jpg" -CropX 300 -CropY 10 -CropW 424 -CropH 550
Crop-Image -InputPath "$base\media_1793208505166_5710c152.jpg" -OutputPath "$destDir\barber_tariq_real_crop.jpg" -CropX 300 -CropY 10 -CropW 424 -CropH 550

# Also copy raw original images:
Copy-Item "$base\media_1793208505160_629ce913.jpg" "$destDir\barber_jerry_real_raw.jpg" -Force
Copy-Item "$base\media_1793208505166_5710c152.jpg" "$destDir\barber_tariq_real_raw.jpg" -Force

# Also update the primary barber_jerry.jpg and barber_tariq.jpg:
Copy-Item "$destDir\barber_jerry_real_crop.jpg" "$destDir\barber_jerry.jpg" -Force
Copy-Item "$destDir\barber_tariq_real_crop.jpg" "$destDir\barber_tariq.jpg" -Force
Copy-Item "$destDir\barber_jerry.jpg" "$destDir\public\images\barber_jerry.jpg" -Force
Copy-Item "$destDir\barber_tariq.jpg" "$destDir\public\images\barber_tariq.jpg" -Force

Write-Output "Processing completed successfully!"

