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

_Random commands that have no other home :(_

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


