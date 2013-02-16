---
layout: post
title: "How to Raspberry Pi"
tags:
- raspberrypi
---
 
 _I bought a [Raspberry Pi](http://en.wikipedia.org/wiki/Raspberry_Pi) because. Here are a bunch of instructions I used to get up and running._
 
### Get an Operating System

1. [Download an operating system](http://www.raspberrypi.org/downloads). I used Raspbian “wheezy” which is Debian, optimised for Raspberry Pi.
2. Plug in your SD card and run `df -h` to find out the device name of the filesystem's partition (eg. `/dev/disk1s1`)
3. Unmount that bad boy

       sudo diskutil unmount /dev/disk1s1
4. Get the raw device name for the disk (eg. `/dev/disk1s1 => /dev/rdisk1` -- ignore the trailing `s1`)
5. Write the image

       sudo dd bs=1m if=~/Downloads/2012-09-18-wheezy-raspbian.img of=/dev/rdisk1
6. Happy days