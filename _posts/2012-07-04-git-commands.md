---
layout: post
title: "Git commands"
tags:
- git
- commands
- terminal
---

_A bunch of commands I use, forget and have to Google again._

Save your stash with a handy comment

	git stash save "your message here"

See a list of changes the next `git push` will make

	git diff --name-status origin/your-branch
	
Unstage local commits

    git reset --soft HEAD^
  
Amend most recent commit

    git commit --amend

Delete a Local branch

	git branch -D your-branch

Delete a Remote branch

	git push origin --delete your-branch

Clone a Remote branch

	git checkout -b branch-name origin/the-branch-you-want-to-clone

Rename a branch

	git branch -m old-branch-name new-branch-name

Reset your Current branch to origin/a-branch (Any changes to tracked files in the working tree since commit are discarded)

	git reset --hard origin/a-branch
