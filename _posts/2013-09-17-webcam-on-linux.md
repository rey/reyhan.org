---
layout: post
title: "How to webcam on Linux"
tags:
- howto
- linux
---

I wanted to keep an eye on a family pet when I was out the house so installed Debian on an old box and set about investigating the weird and wonderful world of webcams on Linux[^1].

I stuck both [single](https://github.com/rey/webcam-single) and [multiple](https://github.com/rey/webcam-multi) webcam configs on GitHub.

## My requirements

1. A webcam that takes a photo on detecting motion.
2. Keep archive of past photos[^2].
3. The most recent photo is uploaded to my server.

## What I did

After a bit of a Googling, I decided on a piece of a software called [webcam](http://packages.debian.org/sid/webcam). Here's how I got up and running:

### Install webcam

    apt-get install webcam

### Create a .webcamrc

    touch ~/.webcamrc

### Example .webcamrc

<script src="https://gist.github.com/rey/6606468.js">
</script>

### Run webcam

    webcam

Assuming you don't get any errors your webcam should now be watching for changes. You can view the latest photo at `your.server.com/webcam/capture.jpg` and a local archive can be found at `~/webcam`.

On investigating webcam software that supported multiple webcams I discovered [Motion](http://www.lavrsen.dk/foswiki/bin/view/Motion/WebHome) which seems to be the go-to webcam software for Linux that does all the things. After a day of messing about it with I got it working but found it did way more than I needed it to. I'll stick my config on GitHub when I get the chance.

**EDIT** (1/10/13) My Motion config is now [on GitHub](https://github.com/rey/.motion).

Things I need to add to this post: ssh-agent + ssh-add; how webcam resolution is dependant on whether you're using one USB bus for multiple webcams; managing your local archive with `cron`.

[^1]: When I was younger in the days of Mandrake Linux I did try and get various webcams working, to little success.

[^2]: You can do loads of cool things with an archive! Shall experiment with [ffmpeg](http://www.ffmpeg.org).
