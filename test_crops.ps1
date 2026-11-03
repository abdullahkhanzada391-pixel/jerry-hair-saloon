Add-Type -AssemblyName System.Drawing

$base = "C:\Users\Ocean Developers LTD\.gemini\antigravity\brain\0c6523e1-2c71-4552-a083-b5ef2a377473\.user_uploaded"
$destDir = "C:\Users\Ocean Developers LTD\Downloads\jerry stitch"

function Test-Crop {
    param(
        [string]$SrcPath,
        [string]$OutName,
        [int]$X, [int]$Y, [int]$W, [int]$H
    )
    $src = [System.Drawing.Bitmap]::FromFile($SrcPath)
    $dest = New-Object System.Drawing.Bitmap($W, $H)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    
    $srcRect = New-Object System.Drawing.Rectangle($X, $Y, $W, $H)
    $destRect = New-Object System.Drawing.Rectangle(0, 0, $W, $H)
    $g.DrawImage($src, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
    
    $outPath = "$destDir\$OutName"
    $dest.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    
    $g.Dispose()
    $dest.Dispose()
    $src.Dispose()
    Write-Output "Generated $outPath ($W x $H)"
}

# Test Jerry options:
# In Jerry, the head is centered at X=580, Y=140.
# Full circle is roughly X: 215 to 808, Y: 0 to 570.
# Let's test a framing that captures his full head, fade, face, beard, and chest:
Test-Crop "$base\media_1793208505160_629ce913.jpg" "test_jerry_opt1.jpg" 340 0 440 560
Test-Crop "$base\media_1793208505160_629ce913.jpg" "test_jerry_opt2.jpg" 380 0 410 520
Test-Crop "$base\media_1793208505160_629ce913.jpg" "test_jerry_opt3.jpg" 320 0 480 570

# Test Tariq options:
# In Tariq, the head is centered at X=512, Y=130.
# Hair starts at Y=10.
# Let's test a framing that captures his full hair, eyes, headphones, and chest:
Test-Crop "$base\media_1793208505166_5710c152.jpg" "test_tariq_opt1.jpg" 290 0 440 550
Test-Crop "$base\media_1793208505166_5710c152.jpg" "test_tariq_opt2.jpg" 320 0 400 520
Test-Crop "$base\media_1793208505166_5710c152.jpg" "test_tariq_opt3.jpg" 280 0 470 550

