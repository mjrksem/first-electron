# PowerShell script to create desktop shortcut for Electron app

$WshShell = New-Object -comObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut("$Home\Desktop\My Electron App.lnk")
$Shortcut.TargetPath = "C:\Users\PC\ElectronApp\launch-app.vbs"
$Shortcut.WorkingDirectory = "C:\Users\PC\ElectronApp"
$Shortcut.Description = "My Awesome Electron Desktop App"
$Shortcut.IconLocation = "C:\Windows\System32\shell32.dll,13"
$Shortcut.Save()

Write-Host "Desktop shortcut created successfully!" -ForegroundColor Green
Write-Host "You can now find 'My Electron App' on your desktop." -ForegroundColor Yellow
