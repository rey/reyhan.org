---
layout: post
title: "How to create (and destroy) your own Twitter archive"
tags:
- twttr
---

### About

I wrote a handy bash script that creates an archive of all the tweets posted
then deletes them from Twitter's servers. I run it with cron on a weekly basis.

### Prerequisites

1. Install [t](https://github.com/sferik/t), an awkwardly named command-line tool for Twitter.
2. Add something like the following to your crontab if you planning on running
   it on a schedule:

        SHELL=/bin/bash
        # Run `twttr_autodestructor.sh`at 11:45 every Sunday
        45 23 * * 0 source /home/kanye/twttr_autodestructor.sh

### Script

Set the `BOX_USER`, `TWITTER_USER` and `BACKUP_FOLDER` variables (and don't
forget to create the path to the `BACKUP_FOLDER` eg. `mkdir
/home/kanye/archive_kanyewest`).

    #!/bin/bash

    # twttr_autodestructor.sh
    # For all your automatic Tweet backup and destruction needs

    # Variables

    # The user you're running the script as eg. `kanye`
    BOX_USER=
    # The Twitter account you want to backup eg. `hello_ebooks`
    TWITTER_USER=
    BACKUP_FOLDER=/home/${BOX_USER}/archive_${TWITTER_USER}/
    FILE=${TWITTER_USER}_$(date +%d%m%y).csv

    # Make workspace directory
    mkdir /tmp/twttr_autodestructor && cd /tmp/twttr_autodestructor

    # Create archive file
    /usr/local/bin/t timeline @${TWITTER_USER} --csv --number 1000 --decode-uris > ${FILE}

    # If the file has contents (twttr updates to backup)
    if [ -s ${FILE} ] ; then

      # Copy archive
      cp ${FILE} /home/${BOX_USER}/archive_${TWITTER_USER}/.

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

### Extending

I intend to throw my updates into GitHub, who do some [nice formatting with `.csv` files](https://help.github.com/articles/rendering-csv-and-tsv-data).
