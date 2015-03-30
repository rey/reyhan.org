---
layout: post
title: "Fun with temperature sensors"
tags:
- howto
- linux
- raspberrypi
---

Late November 2013 I bought [a cheap USB temperature sensor for
&pound;8.69](http://www.amazon.co.uk/gp/product/B009RETJIO) and put it in a
drawer and forgot about it.

![gnuplot graph of temperature against
time](/assets/images/posts/temperature.png "gnuplot graph of temperature against
time")

Having rediscovered it yesterday I decided to see if I could get it logging some
temperatures running on a [Raspberry Pi
B+](http://www.raspberrypi.org/products/model-b-plus/).

From what I've read this afternoon, there's a bunch of different variations of
this temperature sensor, named `TEMPer1`. The output from running `lsusb` was:

    Bus 001 Device 008: ID 0c45:7401 Microdia

The following is cribbed from the commands I wrote whilst getting this running
and is pretty hacky but seems to work okay. ONWARDS!

### Get the drivers for the temperature sensor

    # Get the `libusb-dev` library
    apt-get install libusb-dev

    # Clone the driver
    cd ~ && git clone https://github.com/petechap/usb-thermometer.git

    # Jump to the repo folder
    cd usb-thermometer

    # Complile
    make

    # Plug in the temperature sensor + test it works
    sudo ./pcsensor

    # Allow `pcsensor` to be run without root
    sudo cp ~/usb-thermometer/99-tempsensor.rules /etc/udev/rules.d/.

    # Copy to `/usr/local/bin`
    sudo cp pcsensor /usr/local/bin/

    # Test as a grub user
    pcsensor

### Create a data file

We want to create a data file that can be used to build a graph. I imagine
`gnuplot` could probably work from the unsanitised `pcsensor` output but since
I've never used `gnuplot` before, coupled with the fact that I'm impatient:

    # Get `pcsensor` output and throw it in a temporary file
    pcsensor -c >> ~/temp.tmp

    # Delete date as we only want the temperature for the last 24 hours
    sed -i 's/^[^ ]* //' ~/temp.tmp 

    # Delete word `Temperature` from `pcsensor` output
    sed -i 's/\<Temperature\>//g' ~/temp.tmp

    # Delete letter `C` from `pcsensor` output
    sed -i 's/.$//' ~/temp.tmp

    # Copy the sanitised data to `temperature_log`
    cat ~/temp.tmp >> ~/temperature_log

    # Remove the `temp.tmp` file
    rm ~/temp.tmp

### Plot a graph

Install [gnuplot](http://www.gnuplot.info):

    sudo apt-get install gnuplot

Create a `gnuplot.conf` file for `gnuplot`:

    set terminal png
    set output "temperature_graph.png"
    set title "Room Temperature"
    set ylabel "Temperature"
    set xlabel "Time"
    set xdata time
    set xtics rotate
    set timefmt "%H:%M:%S"
    set grid
    set key left
    plot "temperature_log" using 1:2 title "Temperature" with lines

Plot the graph

    gnuplot ~/gnuplot.conf

### Put it all together

    #!/bin/bash

    # log_temperature.sh
    #
    # Get the current temperature and create a handy graph

    # Get `pcsensor` output and throw it in a temporary file
    pcsensor -c >> ~/temp.tmp

    # Delete date as we only want the temperature for the last 24 hours
    sed -i 's/^[^ ]* //' ~/temp.tmp 

    # Delete word `Temperature` from `pcsensor` output
    sed -i 's/\<Temperature\>//g' ~/temp.tmp

    # Delete letter `C` from `pcsensor` output
    sed -i 's/.$//' ~/temp.tmp

    # Copy the sanitised data to `temperature_log`
    cat ~/temp.tmp >> ~/temperature_log

    # Remove the `temp.tmp` file
    rm ~/temp.tmp

    # Create a new graph
    gnuplot ~/gnuplot.conf

### Create a cron job

You'll probably want to create a cron job that will run every 15 minutes, which
seems like a nice number:

    # take the temperature every 15 minutes
    */15 * * * * source /home/rey/log_temperature.sh

As I'm only interested in the temperature for the last 24 hours I'll also delete
the `temperature_log file at 00:00:

    # remove `temperature_log` file every 24 hours at midnight
    0 0 * * * rm /home/rey/temperature_log
