---
layout: post
title: "Custom Arabic fonts"
tags:
- design
- webdev
- typography
---

A few days ago I was having difficulty in getting a custom Arabic font to work.

I was using the [Webfont Generator](http://www.fontsquirrel.com/tools/webfont-generator) to convert [Droid Arabic Kufi](http://openfontlibrary.org/en/font/droid-arabic-kufi) to all the magical font types[^1] but as much as I tried it wouldn't work.

In the end I found [this thread on Stack Overflow](http://stackoverflow.com/questions/6437061/convert-arabic-ttf-otf-fonts-to-woff-eof) which had the solution.

You need to choose `Expert` mode and then select `Custom Subsetting` or `No Subsetting`[^2].

[^1]:
All the font types for all the browser support. [How to use CSS @font-face](http://nicewebtype.com/notes/2009/10/30/how-to-use-css-font-face/)
[^2]:
I started looking into font subsetting but ended up banishing this thread to Instapaper: [Subsetting a TTF font - How to do efficiently](http://typophile.com/node/75698)