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

### SSH into the Raspberry Pi

1. Hook the Raspberry Pi up to the power and internets
2. `ssh pi@the-ip-address` with the password `raspberry`

### Create new user

1. `sudo adduser your-username`
2. `sudo adduser your-username sudo`
3. `logout`

### Login as your new user

`ssh your-username@the-ip-address` with whatever password you chose

### Delete default `pi` user because security

`sudo userdel -r pi`

### Update your box

* `sudo apt-get update`
* `sudo apt-get upgrade`

### get bashrc

    cd ~
    git clone git@github.com:rey/dotfiles.git
    ln -s ~/dotfiles/.bash_profile ~/.bash_profile
    ln -s ~/dotfiles/.bashrc ~/.bashrc
    ln -s ~/dotfiles/.gitconfig ~/.gitconfig
    ln -s ~/dotfiles/.gitconfig_global ~/.gitconfig_global
    cd ~/dotfiles
    git submodule init
    git submodule update

### get vimrc

    cd ~
    git clone git@github.com:rey/.vim.git ~/.vim
    ln -s ~/.vim/vimrc ~/.vimrc
    cd ~/.vim
    git submodule init
    git submodule update
    ln -s /home/rey/.vim/vimrc /root/.vimrc
    ln -s /home/rey/.vim/ /root/.vim

### sudo vim /etc/network/interfaces

`sudo vim /etc/network/interfaces`

auto lo
    
iface lo inet loopback
iface eth0 inet dhcp
  
allow-hotplug wlan0
auto wlan0
 
iface wlan0 inet dhcp
wpa-ssid "ssid"
wpa-psk "password"
