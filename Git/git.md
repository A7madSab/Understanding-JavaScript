# Git

## All Commands

- `git init`:
- `git log`: show all commits
- `git log -p`: show all commits with changes
- `git log --auther=""`: show all commits for an author
- `git status`: comapers repo with local files(working copy), shows edited untracked files
- `git add .`: add all files to the staging area
- `git add [file.js]` : adds this file to the staging area
- `git commit -m`: moves the files from the staging area to the repo with the message
- `git diff`: show the difference between local copy and repo
- `git diff --staged`: show the difference between staged and repo
- `git rm [filename]`: removes file from local copy and repo ALSO need to commit
- `git mv [file1][folder/file]` : move file1 to the name
- `git checkout -- [file]` : gets the file from the repo to the working area
- `git reset HEAD [file]` : removes file from the staging area to the woxrking area
- `git checkout [commit id] -- index.html` : gets the file from the repo formto the working area
- `git remote add [link]` : connections the git bash to github
- `git branch`: show all branches
- `git branch [branchname]`: create new branch
- `git merge [branchname]`: merge the branch that the head is pointing at to mentioned branchname
- `git merge --abort`: cancels the merge command
- `git branch --merged`: shows if the branches are merged and can safely delete one of the branches
- `git branch -d [BranchName]`: Delete branch
- `git log --all --decorate --oneline --graph`: display a simple representation of the repo graphically
- `git stash`: saves changes aside and cleans the working
- `git stash save [c]`: saves changes aside and cleans the working with message
- `git stash list`: lists all stashs
- `git stash apply`: wil reapply the most recent stash (don't remove from the stash list)
- `git stash pop`: wil reapply the most recent stash (will remove from the stash list)
- `git push --set-upstream origin dev`
- `git remote -v`: will list all remote

  working tree > staging area > repository
