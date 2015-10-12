---
layout: post
title: "How to get up and running with Hubot on Ubuntu"
tags:
- howto
- hubot
- linux
- ubuntu
---

I've been experimenting with [Hubot](https://hubot.github.com), an extendable
chat bot and wanted to get it running on my own infrastructure after testing it
out on Heroku.

1. Create your Hubot
   1. [Generate a Hubot instance](https://hubot.github.com/docs/#getting-started-with-hubot)
   2. [Daemonize Hubot](https://web.archive.org/web/20151012130522/http://www.freshblurbs.com/blog/2013/06/16/hubot-hipchat-daemon.html)
      1. Create `daemon.sh`
      2. Create `.hubotrc` 
   3. Push to repo on GitHub/Bitbucket
2. Spin up a Ubuntu instance (using Ubuntu 15.04) and clone your Hubot repo
3. Create Hubot integration on Slack
   1. [https://your_project.slack.com/services/new/hubot](https://your_project.slack.com/services/new/hubot)
   2. Add Slack API token to `.hubotrc`
4. Start Hubot
   1. `sh daemon.sh debug` to test
   2. `sh daemon.sh start` to run proper
