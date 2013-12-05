---
layout: post
title: "Colours on Vim and tmux"
tags:
- vim
- tmux
---

When using Vim (7.3) through tmux (1.8) I found that the Vim colour scheme looked strange. After much googling this was the solution that worked for me.

Set the following in your `.vimrc`[^1]:

`set term=screen-256color`

Set the following in your `.tmux.conf`[^2]:

`set -g default-terminal "screen-256color"`

This was very much trial and error[^3] but seems to work across both OS X and Debian boxes.

**EDIT** (5/12/13): Since I was struggling to understand colours in the terminal, I emailed the knowledgable <a href="http://twitter.com/geraintrjones">@geraintrjones</a> who sent me an excellent explanation (with some brilliant Serengeti animal analogies):

> Terminal emulators tell the world about their capabilities with something called a `$TERM` variable.
>
> The `$TERM` variable is a label that says "I am this kind of thing" - for instance, OS X's Terminal.app has its default `$TERM` set to `xterm256-color`. You can see this by typing `echo $TERM` in the terminal. (you might see something else, and this is where the problem starts...)
>
> This doesn't tell you much on its own, but there is a big database called `terminfo` that lists all the `$TERM` variables, and what features something with, say, `xterm256-color`, supports.
>
> Its like a label saying 'Elephant'. When you look up 'Elephant' in the animal list, you see it has 4 legs, a trunk, and can support palanquins but requires a mahout.
>
> You can see the `terminfo` entry for your terminal by typing `infocmp $TERM` (which will look up that terminal's `$TERM` in your system's `terminfo` database ).
>
> You will see the number of colours listed like this: `colors#[number]`. `xterm256-color` for instance, will show `colors#256`, `xterm-color` will show `colors#8`.
>
> This means that OS X's Terminal.app is telling the world it can handle that number of colours. Applications like Vim see a label saying "I have all the xterm-color features!" and think, "Okay, I'd  better give this old timer 8 colours". Or they see `xterm256-color` and think, "Lets give this dude 256 colors".
>
> What *should* happen, is that tmux reads the `$TERM` value of your terminal, sees `xterm256-color` (or similar) , thinks "Okay, that's a 256 colour terminal" and sets *its* `$TERM` to `screen256-color`. Vim running in tmux then reads tmux's `$TERM` and goes, "Cool, I looked `screen256-color` up and it has 256 colours - let me crack out the 256 colour palettes, like a colourful boss".
>
> **Terminal tells tmux its an Elephant, tmux tells Vim its an Elephant, Vim gets the mahouts out and preps the palanquin.**
>
> Whats probably happening is that your `.bash_profile` is setting a different `$TERM` - for instance, `xterm-color`.
>
> Tmux then goes, "Okay, this is an 8 colour terminal, I'm gonna set my `$TERM` to `screen`", which only has 8 colours. Vim then reads tmux's `$TERM` and serves up a paltry 8 colours only.
>
> So, terminal is telling tmux its an Antelope, so tmux tells vim its an Antelope, Vim leaves the mahout at home and you don't get a palanquin, even though you could handle that sh\_t.
>
> So by setting `set -g default-terminal "screen-256color"`  in your `.tmux.conf`, you are telling tmux to always set its `$TERM` to `screen-256color`, and then apps like Vim will look that up in `terminfo` and see, yup, supports 256 colours.
>
> However, your `.bash_profile` gets run every new terminal right - so it's *run again* , overriding the `$TERM`.
>
> So, telling vim to use a *different* `$TERM`, i.e. `set term=screen-256color` in your `.vimrc` makes it use the features `terminfo` lists for `screen-256color` ,which includes 256 colours. You can use `infocmp screen-256color` if you'd like to see this.
>
> So Tmux says, its an Elephant, then your `.bash_profile` changes the label to Antelope - then you have to have Vim tell itself "ignore that, its really an Elephant".
>
> Only setting the Vim `$TERM` means tmux isn't set up for 256 colour, so Vim tries giving 256 and fails. Only setting the tmux one means tmux is loaded for 256, but due to the `.bash_profile` changing the `$TERM`, everything thinks tmux is only prepped for 8.
>
> Really, you shouldn't be trying to override `$TERM` in `.vimrc` - because now, whenever you open Vim it thinks it's in a terminal that has all the `screen-256color` features. This is only the case when its being opened in tmux!
>
> Really really, you shouldn't be overriding tmux *either* - if you make sure your terminal (in this example, OS X's Terminal.app) has its `$TERM` set correctly, tmux will read it, see it can handle 256 colors and *automatically* set its `$TERM` to `screen-256color`.
>
> The best solution would be to gently reassure the terminal that it is in fact an Elephant after all. Which probably means nixing a rouge `export TERM=xterm-color` from your `.bash_profile`.
>
> **TL;DR** `echo $TERM` in a new terminal. If it doesn't say `xterm256-color`, go look at your `.bash_profile` and wipe out any evil `export TERM=`.

[^1]:
My [`.vimrc` is on GitHub](https://github.com/rey/.vim/blob/master/vimrc#L8)

[^2]:
My [`.tmux.conf` is on GitHub](https://github.com/rey/.tmux/blob/master/tmuxrc#L2)

[^3]:
This thread on Stack Overflow was useful: [Vim: Difference between t_Co=256 and term=xterm-256color in conjunction with TMUX](http://stackoverflow.com/questions/15375992/vim-difference-between-t-co-256-and-term-xterm-256color-in-conjunction-with-tmu)
