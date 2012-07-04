---
layout: post
title: "GIT commands"
category: 
category: 
tags:
- git
- commands
- terminal
---

Save your stash with a handy comment

	git stash save "your message here"

See a list of changes the next GIT PUSH will make

	git diff --name-status origin/your-branch

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
