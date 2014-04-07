---
layout: post
title: "Jekyll archive page (without plugins)"
tags:
- webdev
- jekyll
- reyhan.org
---

I got round to putting up an [archive page](http://reyhan.org/archive.html) for reyhan.org and thought I'd jot some notes down for anybody who else who wanted to do the same.

I publish reyhan.org with [GitHub Pages](http://pages.github.com/) which supports [Jekyll](https://github.com/mojombo/jekyll)[^1].

GitHub [runs Jekyll with](https://help.github.com/articles/using-jekyll-with-pages#troubleshooting):

    jekyll --pygments --no-lsi --safe

The `--safe` flag disables custom plugins which means if you're going to run your blerg through GitHub Pages you won't be able to use custom plugins, for example, [this one](https://gist.github.com/stympy/986652).

There are ways around this, namely generating your blerg locally then publishing just contents of the `_site` folder to your `gh-pages` branch but being me, a lazy developer, this sounds like more hassle than it's worth, especially when I have a nice workflow for creating a new blog post, having it all in one repo and having GitHub do all the heavy lifting.

Anyhoo, to get my Archive page up and running[^2], I used [this template code by Michael Rowe](http://mikerowecode.com/2010/08/jekyll_archives_grouped_by_year.html) and tweaked it for my own needs[^3]:

<script src="https://gist.github.com/rey/5142484.js">
</script>

[^1]: Jekyll is awesome &mdash; I should probably list the ways one day

[^2]: Originally this read <q>Anyhoo, to get my Archive page cracking</q> but I didn't think I could get away with it.

[^3]: If you look at the actual `archive.html` template [in my repo](https://github.com/rey/reyhan.org/blob/gh-pages/archive.html), you'll notice that the indentation is somewhat odd. This is because when I [view source](view-source:http://reyhan.org/archive.html) I like to see properly indented markup. It's just how I roll. 
