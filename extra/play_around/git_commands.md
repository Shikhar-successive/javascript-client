# GIT COMMANDS

> ## GIT CLONE
> - **GIT CLONE** is used to target an existing repository and create a clone, or copy of the target repository.
> - **Command** -> *git clone repository_name*
>
>## GIT STATUS
> - **GIT STATUS** shows the state of the local directory and the staging area. It lets you see the changes that have been staged, and that haven't, and which files aren't being tracked by Git.
> - **Command** -> *git status*
>
>## GIT BRANCH
> - **GIT BRANCH** shows in which branch you are currently working. Any push will update the same branch.
> - **Command** -> *git branch*
>
>## GIT CHECKOUT
> - **GIT CHECKOUT** changes your current branch to that, where you want to work on.
> - **Command** -> *git checkout branch_name*
>
>## GIT CHECKOUT -B
> - **GIT CHECKOUT -B** changes and creates a new branch specified with the provided name.
> - **Command** -> *git checkout branch_name*
>
>## GIT DIFF
> - **GIT DIFF** is used to show all the files the new added updates to a file. It is a multi-use git command
> - **Command** -> *git diff* , *git diff --staged*
>
>## GIT ADD
> - **GIT ADD** is used to add changes in the working directory to the staging area.
> - **command** -> *git add file_name* , *git add .*(add all files)
>
>## GIT COMMIT
> - **GIT COMMIT** is used to commit all the changes after adding a file to staging area.
> - **Command** -> *git commit* [ -m (message) ]
>
>## GIT PUSH
> - **GIT PUSH** is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo.
> - **Command** -> *git push origin branch_name*
>
>## GIT PULL
> - **GIT PULL** is used to update the local version of a repository from a remote. It does two things, Updates the current local working branch and Updates the remote tracking branches for all other branches.
> - **Command** *git pull origin branch_name*