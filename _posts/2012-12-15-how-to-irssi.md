---
layout: post
title: "How to Irssi"
category: 
tags:
- howto
- irssi
---

_When I worked at [Aframe](http://aframe.com), [@mikesten](http://twitter.com/mikesten) put me onto [IRCCloud](http://irccloud.com) which I used for many moons until it's poor reliability forced me to look for a more robust solution. Here is how to [Irssi](http://www.irssi.org)._

### Preamble

1. This is for setting up Irssi on a Mac. You mileage may vary.
2. Make sure you have the latest version of [Xcode](https://itunes.apple.com/gb/app/xcode/id497799835?mt=12) and have the Command Line Tools installed
3. Be using [Homebrew](http://mxcl.github.com/homebrew/), the brilliant package manager for OS X

### Download Irssi

    brew install irssi
    
Let that er, brew. It'll take a minute.
    
### Set it up

Create the following file if it doesn't already exist

    ~/.irssi/config

Here is a basic example that should get you up and running -- replace with your details.

<script src="https://gist.github.com/4296075.js">
</script>

### Run Irssi

Using the following command from your terminal

    irssi
    
Use `CTRL + P` and `CTRL + N` to cycle through windows -- [here is list of all the commands](http://irssi.org/beginner/#c2).

### Enable auto logging

If you want to keep logs of your chats, etc then you want to

    /set autolog on
    
Logs can be found in `~/irclogs/

### Use Screen because awesome

I use `screen` to keep a persistent connection to IRC -- [here is how to do that](http://quadpoint.org/articles/irssi/#learning_screen).

* Detach from your screen session `CTRL + A, D` 
* Reattach your screen session `screen -rd`
