---
layout: post
title: "Redirect common URLs"
tags:
- userexperience
- URLs
---

I've previously [pointed to thoughts on URL design](http://reyhan.org/2011/01/beautiful-urls.html). I am of the school of thought that a user should be able to navigate and understand your website's hierarchy from the URL alone.

Continuing on this theme, **your website should redirect common URLs**.

For example, if a user visits `http://example.com/contact`, expecting your website's Contact page where your Contact page actually lives at `http://example.com/contact_us.html` the user is going to have a bad time and probably a [404](http://en.wikipedia.org/wiki/HTTP_404) for their troubles.

The solution is to redirect common URLs to their actual locations[^1].

Here are a bunch of URLs that I would expect to redirect to their respective locations:

* `http://example.com/contact`
* `http://example.com/about`
* `http://example.com/help`
* `http://example.com/join`, `http://example.com/signup`, `http://example.com/register`
* `http://example.com/signin`, `http://example.com/login`
* `http://example.com/signout`, `http://example.com/logout`
* `http://example.com/terms`
* `http://example.com/privacy`

I appreciate this sounds like common sense but you'd be amazed at the amount of websites that don't do this[^2].

[^1]:
You could argue that you should be using these common URLs to start with but, you know.
[^2]:
It's at this point I try to play _click-the-link_ when the webpage has infinite scrolling &mdash; the rage.
