---
layout: post
title: "Updates to zzmag.com"
tags:
- zzmag
---

I had some time yesterday to make some changes to [zzmag.com](http://zzmag.com).

### New RSS feed

Although zzmag is primarily a newsletter I appreciate that some folk prefer to
read it on the website, where others love their feedreader. You can now
subscribe to zzmag using [the RSS feed](http://zzmag.com/atom.xml).

### New issue URLs

Over the past few weeks I've been testing different URL structures. As a
proponent of [beautiful URLs](http://reyhan.org/2011/01/beautiful-urls.html) I
wanted a user to be able to navigate through issues using the URL alone.

Long story short, I've removed the year and month from the issue URLs:

#### Old issue URL

    http://zzmag.com/2014/07/issue-27.html

#### New issue URL

    http://zzmag.com/issue-27.html

### New 404 page

To support the new issue URLs, I've added a [more useful 404
page](http://zzmag.com/404.html).

### Paragraph IDs

It was a bit of a pain trying to link somebody to a specific paragraph in an
issue. A user would have to visit an issue page then either search in page for a
keyword or scroll through the entire issue.

To allow linking to a specific paragraph, each paragraph now has an ID.

For example, to link to the paragraph about NASA's Astronomy Picture of the Day
in [Issue 27](http://zzmag.com/issue-27.html), inspect the paragraph[^1] in
question and note the ID:

<script src="https://gist.github.com/rey/7e381dbf6e274186640c.js">
</script>

Then append it to the end of the issue URL like so:

    http://zzmag.com/issue-27.html#zz:10

I've also [added a cheeky highlight](http://zzmag.com/issue-27.html#zz:10) to
help your eyeballs.

[^1]: This is quite a technical "solution" but it works for me. To <q>inspect the paragraph</q>, right click on the paragraph in the question, click `Inspect Element` then you'll see the ID in question, for example: `<p id="zz:10"></p>`.
