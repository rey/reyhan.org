---
layout: post
title: "Cheap and cheerful uptime monitoring"
tags:
- apache
- gitlab
- monitoring
---

When I was setting up [zzmag.org](https://zzmag.org) I wanted to check that
everything was working as expected, part of which was ensuring that requests
were responding with `200` [HTTP status
codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_Success),
and if not then notify accordingly.

Running the following script using GitLab's [Pipeline
Schedules](https://docs.gitlab.com/ce/user/project/pipelines/schedules.html)
does the job nicely:

<script src="https://gist.github.com/rey/c47eae6c6d934ebc88c1131411d5bd48.js">
</script>

A schedule was created to run `updog.sh` on an hourly basis.

The "build" passes if a `200` status code is returned, otherwise it fails.
What's useful is that GitLab will send an email if a build fails that contains
the log output including the HTTP status code :)
