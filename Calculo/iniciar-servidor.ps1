param(
  [int]$Puerto = 8080
)

$raiz = Split-Path -Parent $MyInvocation.MyCommand.Path
$servidor = [System.Net.HttpListener]::new()
$servidor.Prefixes.Add("http://localhost:$Puerto/")
$servidor.Start()

Write-Host "Proyecto disponible en http://localhost:$Puerto/"
Write-Host "Mantén esta ventana abierta mientras estudias. Presiona Ctrl+C para detener el servidor."
Start-Process "http://localhost:$Puerto/"

$tipos = @{
  ".css" = "text/css; charset=utf-8"
  ".html" = "text/html; charset=utf-8"
  ".ico" = "image/x-icon"
  ".jpg" = "image/jpeg"
  ".jpeg" = "image/jpeg"
  ".js" = "application/javascript; charset=utf-8"
  ".png" = "image/png"
  ".svg" = "image/svg+xml"
}

try {
  while ($servidor.IsListening) {
    $solicitud = $servidor.GetContext()
    $ruta = [uri]::UnescapeDataString($solicitud.Request.Url.AbsolutePath).TrimStart("/")
    if ([string]::IsNullOrWhiteSpace($ruta)) { $ruta = "index.html" }

    $archivo = [IO.Path]::GetFullPath((Join-Path $raiz $ruta))
    if (-not $archivo.StartsWith($raiz, [StringComparison]::OrdinalIgnoreCase) -or -not (Test-Path -LiteralPath $archivo -PathType Leaf)) {
      $solicitud.Response.StatusCode = 404
      $solicitud.Response.Close()
      continue
    }

    $extension = [IO.Path]::GetExtension($archivo).ToLowerInvariant()
    $solicitud.Response.ContentType = if ($tipos.ContainsKey($extension)) { $tipos[$extension] } else { "application/octet-stream" }
    $contenido = [IO.File]::ReadAllBytes($archivo)
    $solicitud.Response.ContentLength64 = $contenido.Length
    $solicitud.Response.OutputStream.Write($contenido, 0, $contenido.Length)
    $solicitud.Response.Close()
  }
}
finally {
  if ($servidor.IsListening) { $servidor.Stop() }
  $servidor.Close()
}
