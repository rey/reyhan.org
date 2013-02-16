---
layout: post
title: "IRC commands"
tags:
- irc
- commands
- terminal
---

_A bunch of (Freenode) IRC commands I always seem to find myself googling._

Register a channel on Freenode

    /msg ChanServ register #channel

Set a password on a channel 

    /mode #channel +k password
    
Get ChanServ to join your #channel

    /msg ChanServ SET #channel GUARD ON 

Get ops

    /msg ChanServ op #channel nick

Set auto op on join

    /msg ChanServ FLAGS #channel +O 