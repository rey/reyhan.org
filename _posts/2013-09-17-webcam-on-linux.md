---
layout: post
title: "How to webcam on Linux"
tags:
- howto
- linux
---

I wanted to keep an eye on a family pet when I was out the house so installed Debian on an old box and set about investigating the weird and wonderful world of webcams on Linux[^1].

## My requirements

1. A webcam that takes a photo on detecting motion.
2. Keep archive of past photos[^2].
3. The most recent photo is uploaded to my server.

## What I did

After a bit of a Googling, I decided on a piece of a software called [webcam](http://packages.debian.org/sid/webcam). Here's how I got up and running:

### Install `webcam`

    apt-get install webcam

### Create a .webcamrc

    touch ~/.webcamrc

### Example .webcamrc

<script src="https://gist.github.com/rey/6606468.js">
</script>

## Run `webcam`

    cd ~/
    webcam

Assuming you don't get any errors your webcam should now be watching for changes. You can view the latest photo at `your.server.com/webcam/capture.jpg` and a local archive can be found at `~/webcam`.

## Running more than one webcam with er, `webcam`

Now that's running you may want to use more than one webcam[^3], I initially struggled with this but eventually realised I could just duplicate the `webcam` processes.

### Create a `.webcamrc` per webcam

    touch .webcamrc.1 .webcamrc.2

### Edit the config files

You'll want to change:

1. The webcam device ID.
2. The archive path.
3. The temp uploading file.

## Run the `webcam` processes with `screen`

I wanted to keep these running `webcam` processes tidied away so decided to stick them in a `screen` session.

### Create a `.screenrc.webcam`

    touch .screenrc.webcam

Mine looks like this:

    # Create a new window called `CAM1` and start the `webcam` process using the `.webcamrc.1` config file
    screen -t "CAM1" sh -c "cd ~/ && webcam .webcamrc.1"
    # Create a new window called `CAM2` and start the `webcam` process using the `.webcamrc.2` config file
    screen -t "CAM2" sh -c "cd ~/ && webcam .webcamrc.2"

### Create a new bash alias because handy

    alias watch='screen -S cam -c .screenrc.webcam'

### Run the webcams using `watch`

[^1]:
When I was much, much younger in the days of Mandrake Linux I did try and get various webcams working, to little success.

[^2]:
You could do loads of cool things with an archive, namely with ffmpeg.

[^3]:
On investigating webcam software that supported multiple webcams I discovered [motion](http://www.lavrsen.dk/foswiki/bin/view/Motion/WebHome) which seems to be the go-to webcam software for Linux that does all the things. After a day of messing about it with I got it working but found it did way more than I needed it to. I'll stick my config on GitHub when I get the chance.
