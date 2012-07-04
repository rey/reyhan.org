---
layout: post
title: "Random commands"
category: 
tags:
- commands
- git
- osx
- terminal
---

_Creating a page so I have an easy place to refer to when I need to relookup a command. This will be better than dumping it in Simplenote (he says)._

### Git
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

Reset your Current branch to origin/a-branch (Any changes to tracked files in the working tree since commit are discarded)

	git reset --hard origin/a-branch

### OS X
Replace the default, garish 3D dock with a nice, simple 2D dock

	defaults write com.apple.dock no-glass -boolean YES; killall Dock

Resize an image

	sips --resampleWidth 500 your-image.jpg


### Terminal
Get the distro/version/etc of the operating system you're running

	cat /proc/version

### ffmpeg
Encode MP3 at 192k bit rate

	ffmpeg -i [input] -ab 192k [output.mp3]


