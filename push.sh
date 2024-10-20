git remote set-head origin --delete
git remote set-head origin main
git remote prune origin
git fetch --prune origin
git remote show origin
git push --force origin main
