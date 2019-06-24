# Adding an existing project to GitHub using the command line

## Create a new repository on GitHub. To avoid errors, do not initialize the new repository with README, license, or gitignore files. You can add these files after your project has been pushed to GitHub

- Create New Repository.

- Open Git Bash.

- Change the current working directory to your local project.

- `git init`: Initialize the local directory as a Git repository.

- `git add .`: Add the files in your new local repository. This stages them for the first commit.

- `git reset "HEAD YOUR-FILE"`: To unstage a file.

## Commit the files that you've staged in your local repository

- `git commit -m "First commit"`: Commits the tracked changes and prepares them to be pushed to a remote repository.

- `git reset --soft HEAD~1`: To remove this commit and modify the file, and commit and add the file again.

- `git remote add _origin remote repository URL_`

## Sets the new remote

- `git remote -v`: Verifies the new remote URL

- `git push origin master`: Push the changes in your local repository to GitHub.
