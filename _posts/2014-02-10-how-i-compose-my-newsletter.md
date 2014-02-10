---
layout: post
title: "How I compose my newsletter"
tags:
- howto
- zzmag
---

Four weeks ago I decided to start putting out my own weekly newsletter. It's called [zzmag](http://zzmag.com), full of internet and delivered every Monday. Some folk have asked how I go about publishing it so decided to jot down some notes.

### Prerequisites

* A text file for your work-in-progress newsletter. I use [Simplenote](http://simplenote.com)[^1].
* A [Jekyll](http://jekyllrb.com)-powered website to host your newsletter archive and handily convert Markdown to HTML.
* An account with [TinyLetter](http://tinyletter.com) to send your newsletter.

### Drafting

1. Create a new text file for your newsletter.
2. Write all content in the [Markdown](https://daringfireball.net/projects/markdown) format.

### Jekyll

1. Once your newsletter is ready to go out, create a new Markdown file in your Jekyll-powered website and paste in the content from your text file[^2].
2. `jekyll serve --watch` and visit [localhost:4000](http://localhost:4000) to view your newsletter.
3. [View the source](http://www.computerhope.com/issues/ch000746.htm) of the HTML page and copy the HTML markup of the newsletter.

### TinyLetter

1. Log in to TinyLetter and click `Compose`.
2. Click the `View Source Code` button on the WYSIWYG editor and paste the HTML markup you copied earlier, replacing any existing markup.
3. Click `Send Preview` and admire your handiwork!

### Good things!

* Jekyll provides a handy way of generating only valid, essential HTML markup for your TinyLetter newsletter. In my experience WYSIWYG editors have a bad habit of creating surplus and spurious HTML tags.
* Own your platform: if anything happens to TinyLetter you have your own archive of newsletters, hosted on your own domain.

[^1]:
I keep my draft newsletter in Simplenote as I make heavy use of the Simplenote web, iPad and iPhone apps. It's readily available wherever I'm consuming internet.
[^2]:
Here is [Issue 4's Markdown file](https://gist.github.com/rey/8918619/raw/bde6c80614bfa127089720a5486209c32e126cfa/example-newsletter.md) as an example
