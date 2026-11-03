Add-Type -AssemblyName System.Drawing
foreach ($name in @('barber_jerry_seamless.jpg', 'barber_tariq_seamless.jpg')) {
    $bmp = [System.Drawing.Bitmap]::FromFile("C:\Users\Ocean Developers LTD\Downloads\jerry stitch\$name")
    $tl = $bmp.GetPixel(5, 5)
    $tr = $bmp.GetPixel($bmp.Width - 6, 5)
    $bl = $bmp.GetPixel(5, $bmp.Height - 6)
    $br = $bmp.GetPixel($bmp.Width - 6, $bmp.Height - 6)
    Write-Output "$name : TL=($($tl.R),$($tl.G),$($tl.B)) TR=($($tr.R),$($tr.G),$($tr.B)) BL=($($bl.R),$($bl.G),$($bl.B)) BR=($($br.R),$($br.G),$($br.B))"
    $bmp.Dispose()
}

