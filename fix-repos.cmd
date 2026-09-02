@echo off
set FILTER_BRANCH_SQUELCH_WARNING=1

set repos=sdx30 startuplaunchai CAMPUS360 FlowSync-Ai shubham-997800 WorkOS GlobeTrotter SofaWala assetrix

for %%r in (%repos%) do (
    echo === Fixing %%r ===
    set "tmp=%TEMP%\fix5_%%r"
    if exist "!tmp!" rmdir /s /q "!tmp!"
    
    git clone --quiet "https://github.com/Shubham-997800/%%r.git" "!tmp!"
    cd /d "!tmp!"
    
    git filter-branch -f --env-filter "if [ \"$GIT_AUTHOR_EMAIL\" = \"shubham@users.noreply.github.com\" ]; then export GIT_AUTHOR_NAME=\"Shubham Dangi\"; export GIT_AUTHOR_EMAIL=\"shubhamkumars997800@gmail.com\"; fi; if [ \"$GIT_COMMITTER_EMAIL\" = \"shubham@users.noreply.github.com\" ]; then export GIT_COMMITTER_NAME=\"Shubham Dangi\"; export GIT_COMMITTER_EMAIL=\"shubhamkumars997800@gmail.com\"; fi" -- --all
    
    git remote add origin "https://github.com/Shubham-997800/%%r.git" 2>nul
    git push --force --all origin 2>nul
    git push --force --tags origin 2>nul
    
    echo Done: %%r
    cd /d "C:\Users\SHUBH\Desktop\portfolio"
    rmdir /s /q "!tmp!"
)

echo === ALL DONE ===
