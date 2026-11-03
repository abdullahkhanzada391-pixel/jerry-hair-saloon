Add-Type -AssemblyName System.Drawing

function Find-CircleCenter {
    param([string]$Path)
    $bmp = [System.Drawing.Bitmap]::FromFile($Path)
    # Scan horizontally along Y=285 to find first and last non-black pixel
    $y = 285
    $left = -1
    $right = -1
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $p = $bmp.GetPixel($x, $y)
        if (($p.R + $p.G + $p.B) -gt 20) {
            if ($left -eq -1) { $left = $x }
            $right = $x
        }
    }
    # Scan vertically along X=512 to find top and bottom non-black pixel
    $xMid = 512
    $top = -1
    $bottom = -1
    for ($y2 = 0; $y2 -lt $bmp.Height; $y2++) {
        $p2 = $bmp.GetPixel($xMid, $y2)
        if (($p2.R + $p2.G + $p2.B) -gt 20) {
            if ($top -eq -1) { $top = $y2 }
            $bottom = $y2
        }
    }
    Write-Output "$Path : Left=$left Right=$right Top=$top Bottom=$bottom (W=$($right-$left), H=$($bottom-$top))"
    $bmp.Dispose()
}

Find-CircleCenter "C:\Users\Ocean Developers LTD\.gemini\antigravity\brain\0c6523e1-2c71-4552-a083-b5ef2a377473\.user_uploaded\media_1793208505160_629ce913.jpg"
Find-CircleCenter "C:\Users\Ocean Developers LTD\.gemini\antigravity\brain\0c6523e1-2c71-4552-a083-b5ef2a377473\.user_uploaded\media_1793208505166_5710c152.jpg"

