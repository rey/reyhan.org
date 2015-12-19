---
layout: post
title: "How to create your own Twitter archive"
tags:
- twttr
---

### About

`twttr_autodestructor.sh` is a handy bash script that shifts my Twitter archive
from Twitter's servers to my own.

It save any tweets that have been created since the last backup locally then
then deletes said tweets from Twitter's servers.

### Prerequisites

1. Install [t](https://github.com/sferik/t), a command-line tool for Twitter.
2. Create a backup folder eg. `mkdir ~/archive_twitter_user`.
3. Add something like the following to your crontab:

        SHELL=/bin/bash
        # Run `twttr_autodestructor.sh`at 11:45 every Sunday
        45 23 * * 0 source twttr_autodestructor.sh

### Script

Stick this wherever you run scripts from.

    #!/bin/bash

    # Variables
    BOX_USER=vagrant
    TWITTER_USER=hello_ebooks
    FILE=${TWITTER_USER}_$(date +%d%m%y).csv

    # Make workspace directory
    mkdir /tmp/twttr_autodestructor && cd /tmp/twttr_autodestructor

    # Create archive file
    /usr/local/bin/t timeline @${TWITTER_USER} --csv --number 1000 --decode-uris > ${FILE}

    # If the file has contents (twttr updates to backup)
    if [ -s ${FILE} ] ; then

      # Copy archive
      cp $FILE /home/${BOX_USER}/archive_${TWITTER_USER}/.

      # Remove columns headers		
      sed -i '1d' ${FILE}

      # Get IDs only
      awk -F"," '{print $1}' ${FILE} > delete_me_column

      # Put the IDs on one line for t
      sed ':a;N;$!ba;s/\n/ /g' delete_me_column > delete_me_row

      # Delete!
      /usr/local/bin/t delete status -f `cat delete_me_row`
     
    else
      
      # Send an email saying there were no twttr updates to backup
      echo "${FILE} is empty" | mail -s "${FILE} is empty" ${BOX_USER}@localhost
        
    fi ;

    # Delete workspace directory
    cd ~ && rm -rf /tmp/twttr_autodestructor

### Extending `twttr_autodestructor.sh`

I intend to throw my updates into GitHub, who do some [nice formatting with `.csv` files](https://help.github.com/articles/rendering-csv-and-tsv-data).
