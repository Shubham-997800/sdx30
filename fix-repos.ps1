$env:FILTER_BRANCH_SQUELCH_WARNING = "1"

$repos = @("sdx30", "startuplaunchai", "CAMPUS360", "FlowSync-Ai", "shubham-997800", "WorkOS", "GlobeTrotter", "SofaWala", "assetrix")

foreach ($repo in $repos) {
    Write-Host "=== Fixing $repo ==="
    $tmp = "$env:TEMP\fix3_$repo"
    if (Test-Path $tmp) { Remove-Item -Recurse -Force $tmp }
    
    git clone --quiet "https://github.com/Shubham-997800/$repo.git" $tmp
    Set-Location $tmp

    # Create mailmap
    Set-Content -Path ".git/mailmap" -Value "Shubham Dangi <shubhamkumars997800@gmail.com> Shubham <shubham@users.noreply.github.com>"
    
    # Use git filter-branch with mailmap
    git filter-branch -f --env-filter '
        OLD_EMAIL="shubham@users.noreply.github.com"
        CORRECT_NAME="Shubham Dangi"
        CORRECT_EMAIL="shubhamkumars997800@gmail.com"
        if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]; then
            export GIT_AUTHOR_NAME="$CORRECT_NAME"
            export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
        fi
        if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]; then
            export GIT_COMMITTER_NAME="$CORRECT_NAME"
            export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
        fi
    ' -- --all

    git remote add origin "https://github.com/Shubham-997800/$repo.git" 2>$null
    git push --force --all origin 2>$null
    git push --force --tags origin 2>$null
    
    Write-Host "Done: $repo"
    Set-Location "C:\Users\SHUBH\Desktop\portfolio"
    Remove-Item -Recurse -Force $tmp
}

Write-Host "=== ALL DONE ==="
