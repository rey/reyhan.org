---
layout: post
title: "Colours on Vim and tmux"
tags:
- vim
- tmux
---

When using Vim (7.3) through tmux (1.8) I found that the Vim colour scheme looked strange. After much googling this was the solution that worked for me.

Set the following to your `.vimrc`[^1]:

`set term=screen-256color`

Set the following to your `.tmux.conf`[^2]:

`set -g default-terminal "screen-256color"`

This was very much trial and error[^3] but seems to work across both OS X and Debian boxes.

[^1]:
My [`.vimrc` is on GitHub](https://github.com/rey/.vim/blob/master/vimrc#L8)

[^2]:
My [`.tmux.conf` is on GitHub](https://github.com/rey/.tmux/blob/master/tmuxrc#L2)

[^3]:
This thread on Stack Overflow was useful: [Vim: Difference between t_Co=256 and term=xterm-256color in conjunction with TMUX](http://stackoverflow.com/questions/15375992/vim-difference-between-t-co-256-and-term-xterm-256color-in-conjunction-with-tmu)
