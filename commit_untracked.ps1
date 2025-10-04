$untrackedFiles = git status --porcelain | Where-Object { $_ -match '^\?\?' } | ForEach-Object { $_.Substring(3) }
foreach ($file in $untrackedFiles) {
    git add $file
    git commit -m "Add $file"
}