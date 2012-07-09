---
layout: post
title: "How to backup your twttr"
category: 
tags:
- twttr
---

_I've been a twttr user since [July 14, 2006](http://twbirthday.com/rey). It recently dawned on me that my twttr archive is an (albeit mudane) running commentary of my life. I've never been one to keep a diary so I thought it important that I have a backup &mdash; this is what I did._

### Preamble

Currently, you can't get more than ~3000 updates from the twttr API. It is what it is. To get to the point where I own all 19,477 of my twttr updates took a bit of time. Your mileage may vary.

### Request to access your personal data

When I realised that there was no feasible way of getting access to my historical twttr updates, I found [Privacy International's handy guide](https://www.privacyinternational.org/blog/what-does-twitter-know-about-its-users-nologs) which walks you through the convoluted process of filing a request to Twitter for all the data they hold on a specific account if you're a citizen of the EU.

I sent my request on __April 18, 2012__ and received a ZIP file containing a bunch of text files on __May 11, 2012__.

### I'm lazy

When I received my ZIP file I was thrilled, skimmed through my twttr updates then promptly forgot about it. Dave Winer's [Twitter is a Corporate API](http://scripting.com/stories/2012/07/07/twitterIsACorporateApi.html) motivated me to make my twttr archive robust and automatic.

### Getting my last 3000 updates

Before I could look at the automation bit I needed to get hold of all the updates from May 10 (the latest update in the `rey-tweets.txt` file from the ZIP) up to my latest update (July 9).

I used [Erik Michaels-Ober's](https://github.com/sferik) [t](http://sferik.github.com/t/). This is a  a command-line interface for Twitter. It's pretty sick.

After setting it up, running the following command gave me more than I needed:

	t timeline @rey --csv --number 3000 > rey-twttrs.csv

### Automate!

So I now have all my updates from the beginning of time!

There's probably a zillion different ways of automagically backing up your updates (eg. [jphpsf](http://github.com/jphpsf)'s blog post about [backing up with t](http://blog.jphpsf.com/2012/05/07/backing-up-your-twitter-account-with-t/) has a handy shell script) but it took me 30 seconds to find [an ifttt recipe](http://ifttt.com/recipes/42084) which sticks all your new updates in a single Evernote er, note.

### To do

1. Implement a daily shell script backup deal to replace ifttt
2. Whack the entirety of my updates into a single database
2. Sweet data analysis (<em>How often do I have a hangover on a Thursday?</em>)
