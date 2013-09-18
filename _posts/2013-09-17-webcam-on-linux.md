---
layout: post
title: "How to webcam on linux"
tags:
- howto
- linux
---

I wanted to keep an eye on a family pet when I was out the house so installed Debian on an old box and set about investigating the weird and wonderful world of webcams on Linux[^1].

## My requirements

1. A webcam that takes a photo on detecting motion.
2. Archive is kept of past photo taken[^2].
3. The most recent photo is uploaded to my server.

## What I did

After a bit of a Google about, I decided on a piece of a software called (funnily enough) [webcam](http://packages.debian.org/sid/webcam).

It's quite straightforward and after poking the `.webcamrc` config file got it working nicely.

### Install `webcam`

`apt-get install webcam`

### Create a .webcamrc

`touch ~/.webcamrc`

### Example .webcamrc

<script src="https://gist.github.com/rey/6606468.js">
</script>

## Run `webcam`

Assuming all is working correctly you should have a local archive being kept at the `webcam` folder and the latest photo should be uploaded to `your.server.com/cam` on detecting a change.

## Running more than one webcam with er, `webcam`

On investigating webcam software that supported multiple webcams I discovered [motion](http://www.lavrsen.dk/foswiki/bin/view/Motion/WebHome) which seems to be the go-to webcam software for Linux that does all the things. After a day of messing about it with I got it working but, believing the simplest solution to be the best, went back to using webcam. That said, I'll be sticking my motion config on GitHub for future reference.

### Create one `.webcamrc` per webcam

`touch .webcamrc.1 .webcamrc.2`

### Edit the config files

You'll want to change:

1. The webcam device ID.
2. The archive path.
3. The temp uploading file.

## Run the `webcam` processes with `screen`

### Create a `.screenrc.webcam`

Mine looks like this:

```
screen -t "CAM1" sh -c "cd ~/ && webcam .webcamrc.1"
screen -t "CAM2" sh -c "cd ~/ && webcam .webcamrc.2"
```

### Create a new bash alias because handy

`alias watch='screen -S cam -c .screenrc.webcam'`

### Run the webcams using `watch`

[^1]:
When I was much, much younger in the days of Mandrake Linux I did try and get various webcams working, to little success.

[^2]:
You could do loads of cool things with an archive, namely with ffmpeg.
