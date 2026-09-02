import subprocess, os, shutil, tempfile, time, stat

repos = ["sdx30", "startuplaunchai", "CAMPUS360", "FlowSync-Ai", "shubham-997800", "WorkOS", "GlobeTrotter", "SofaWala", "assetrix"]

FILTER = 'if [ "$GIT_AUTHOR_EMAIL" = "shubham@users.noreply.github.com" ]; then export GIT_AUTHOR_NAME="Shubham Dangi"; export GIT_AUTHOR_EMAIL="shubhamkumars997800@gmail.com"; fi; if [ "$GIT_COMMITTER_EMAIL" = "shubham@users.noreply.github.com" ]; then export GIT_COMMITTER_NAME="Shubham Dangi"; export GIT_COMMITTER_EMAIL="shubhamkumars997800@gmail.com"; fi'

def force_delete(path, retries=5):
    for i in range(retries):
        try:
            shutil.rmtree(path, onerror=handle_remove_readonly)
            return True
        except:
            time.sleep(1)
    return False

def handle_remove_readonly(func, path, exc_info):
    os.chmod(path, stat.S_IWRITE)
    func(path)

for repo in repos:
    print(f"=== Fixing {repo} ===")
    tmp = os.path.join(tempfile.gettempdir(), f"pyfix_{repo}")
    if os.path.exists(tmp):
        force_delete(tmp)
    
    subprocess.run(["git", "clone", "--quiet", f"https://github.com/Shubham-997800/{repo}.git", tmp], check=True)
    os.chdir(tmp)
    
    result = subprocess.run(["git", "filter-branch", "-f", "--env-filter", FILTER, "--", "--all"], 
                   env={**os.environ, "FILTER_BRANCH_SQUELCH_WARNING": "1"},
                   capture_output=True, text=True)
    
    subprocess.run(["git", "remote", "add", "origin", f"https://github.com/Shubham-997800/{repo}.git"], capture_output=True)
    subprocess.run(["git", "push", "--force", "--all", "origin"], capture_output=True)
    subprocess.run(["git", "push", "--force", "--tags", "origin"], capture_output=True)
    
    print(f"Done: {repo}")
    os.chdir(r"C:\Users\SHUBH\Desktop\portfolio")
    force_delete(tmp)

print("=== ALL DONE ===")
