---
layout: post
title: "How to migrate from Jekyll to WordPress"
tags:
- jekyll
- wordpress
---

Last month the decision was made to consolidate years of newsletters, weblog
posts and other minutiae from various Jekyll instances to [one WordPress-powered
deal](https://zzmag.org).

A fair amount of time was spent researching the best, quickest (and easiest!)
way to do this but, unsurprisingly, most searches turned up the opposite:
_migrating from WordPress to Jekyll_ -- anyway -- here's now it's done:

### Jekyll instance

1. Install the [Jekyll Feed](https://github.com/jekyll/jekyll-feed) plugin.
2. Do a `jekyll build` and ensure the generated `feed.xml` has all the posts
   that are intended to be migrated.

### WordPress instance

1. Download and install the [WP All
   Import](https://wordpress.org/plugins/wp-all-import) plugin: `wp plugin
   install wp-all-import --activate`.
2. In WordPress Admin, click on the All Import link and upload the `feed.xml`
   file generated earlier.
3. Follow the four-step process to map and import the `feed.xml` data file into
   the WordPress instance.

I'd have saved a bunch of time had I been pointed at the WP All Import plugin
from the beginning, so hopefully this will help somebody in the future.
