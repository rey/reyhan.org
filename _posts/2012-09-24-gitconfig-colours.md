---
layout: post
title: ".gitconfig colours"
tags:
- git
---

_Pretty colours for your GIT terminal._

Place the following in your `~/.gitconfig` file:

    [color]
      branch = auto
      diff = auto
      status = auto

    [color "branch"]
      current = yellow reverse
      local = yellow
      remote = green

    [color "diff"]
      meta = yellow bold
      frag = magenta bold
      old = red bold
      new = green bold

    [color "status"]
      added = yellow
      changed = green
      untracked = cyan