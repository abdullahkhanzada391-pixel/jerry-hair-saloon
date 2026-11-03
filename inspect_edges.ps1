Add-Type -AssemblyName System.Drawing

function Inspect-Edges {
    param([string]$Path, [string]$Name)
    $bmp = [System.Drawing.Bitmap]::FromFile($Path)
    Write-Output "=== $Name ($($bmp.Width) x $($bmp.Height)) ==="
    # Check top row, middle rows
    $pTopLeft = $bmp.GetPixel(300, 20)
    $pTopMid = $bmp.GetPixel(512, 10)
    $pTopRight = $bmp.GetPixel(700, 20)
    Write-Output "Top: Left=($($pTopLeft.R),$($pTopLeft.G),$($pTopLeft.B)) Mid=($($pTopMid.R),$($pTopMid.G),$($pTopMid.B)) Right=($($pTopRight.R),$($pTopRight.G),$($pTopRight.B))"
    $bmp.Dispose()
}

Inspect-Edges "C:\Users\Ocean Developers LTD\.gemini\antigravity\brain\0c6523e1-2c71-4552-a083-b5ef2a377473\.user_uploaded\media_1793208505160_629ce913.jpg" "Jerry Original"
Inspect-Edges "C:\Users\Ocean Developers LTD\.gemini\antigravity\brain\0c6523e1-2c71-4552-a083-b5ef2a377473\.user_uploaded\media_1793208505166_5710c152.jpg" "Tariq Original"

