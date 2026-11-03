Add-Type -AssemblyName System.Drawing

function Analyze-Image {
    param([string]$Path, [string]$Name)
    $bmp = [System.Drawing.Bitmap]::FromFile($Path)
    Write-Output "=== $Name (Width: $($bmp.Width), Height: $($bmp.Height)) ==="
    
    # Let's sample colors in a grid to locate the person's features
    # Center circle is ~ X=512, Y=285
    # Let's check X ranges where brightness is significant
    for ($y = 20; $y -lt $bmp.Height; $y += 40) {
        $rowInfo = ""
        for ($x = 220; $x -lt 820; $x += 60) {
            $p = $bmp.GetPixel($x, $y)
            $lum = [int](0.299 * $p.R + 0.587 * $p.G + 0.114 * $p.B)
            if ($lum -lt 10) { $rowInfo += " . " }
            elseif ($lum -lt 60) { $rowInfo += " # " } # dark (hair/beard)
            elseif ($lum -lt 150) { $rowInfo += " * " } # skin/medium
            else { $rowInfo += " @ " } # bright (tank top / highlight)
        }
        Write-Output ("Y={0:D3}: {1}" -f $y, $rowInfo)
    }
    $bmp.Dispose()
}

Analyze-Image "C:\Users\Ocean Developers LTD\.gemini\antigravity\brain\0c6523e1-2c71-4552-a083-b5ef2a377473\.user_uploaded\media_1793208505160_629ce913.jpg" "Image 1 (Jerry - Gym Mirror)"
Analyze-Image "C:\Users\Ocean Developers LTD\.gemini\antigravity\brain\0c6523e1-2c71-4552-a083-b5ef2a377473\.user_uploaded\media_1793208505166_5710c152.jpg" "Image 2 (Tariq - Headset/Laptop)"

