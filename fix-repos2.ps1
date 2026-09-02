$env:FILTER_BRANCH_SQUELCH_WARNING = "1"

$repos = @("sdx30", "startuplaunchai", "CAMPUS360", "FlowSync-Ai", "shubham-997800", "WorkOS", "GlobeTrotter", "SofaWala", "assetrix")

foreach ($repo in $repos) {
    Write-Host "=== Fixing $repo ==="
    $tmp = "$env:TEMP\fix4_$repo"
    if (Test-Path $tmp) { Remove-Item -Recurse -Force $tmp }
    
    git clone --quiet "https://github.com/Shubham-997800/$repo.git" $tmp
    Set-Location $tmp

    $filterScript = @"
if [ "`$GIT_AUTHOR_EMAIL" = "shubham@users.noreply.github.com" ]; then
    export GIT_AUTHOR_NAME="Shubham Dangi"
    export GIT_AUTHOR_EMAIL="shubhamkumars997800@gmail.com"
fi
if [ "`$GIT_COMMITTER_EMAIL" = "shubham@users.noreply.github.com" ]; then
    export GIT_COMMITTER_NAME="Shubham Dangi"
    export GIT_COMMITTER_EMAIL="shubhamkumars997800@gmail.com"
fi
"@

    Set-Content -Path "env-filter.sh" -Value $filterScript

    git filter-branch -f --env-filter Get-Content env-filter.sh -- --all

    git remote add origin "https://github.com/Shubham-997800/$repo.git" 2>$null
    git push --force --all origin 2>$null
    git push --force --tags origin 2>$null
    
    Write-Host "Done: $repo"
    Set-Location "C:\Users\SHUBH\Desktop\portfolio"
    Remove-Item -Recurse -Force $tmp
}

Write-Host "=== ALL DONE ==="
