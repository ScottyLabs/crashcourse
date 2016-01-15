---
layout: guide
title: Home
---

<br>

<div class="hero-logo">
  <img src="{{ site.baseurl }}/assets/img/logo-red.png">
  <div class="hero-title">Crash<br>Course</div>
</div>

###### two weekends of talks and workshops to get you ready for TartanHacks

CrashCourse is a collection of talks and workshops designed to help you make the
most of TartanHacks. Topics range from web programming, to game design, to
mobile apps, and more.

The talks are all student-led and focused on hands-on activities. They're
designed to launch you right into the midst of app and game development so you
can make something awesome.


## How do I attend?

1. __[Register]({{ site.registration_link }})__
  - You certainly don't have to register to attend, but we like knowing how many
    people to expect and what people will be interested in learning.
1. __[Read "The Basics"][basics]__
  - This quick read will introduce you to some common concepts and explain what
    the workshops are about.
1. __[Pick some workshops!](#schedule)__
  - Workshops are largely independent of each other: you can attend as many or
    as few as you'd like.
  - In fact, there are tons of them! So many that you probably can't make it to
    all of them. __This is very much expected!__ If you're looking for help
    deciding which to go to, first decide whether you'd like to learn to make
    web sites or mobile apps, and go from there.


## What will I learn?

We'll teach you enough to get your feet wet. Combined with a couple of hours
on your own between CrashCourse and TartanHacks, you'll have had enough exposure
to make progress once you finally get to TartanHacks.

Exactly what you learn will depend on what workshops you go to, and you can
learn what each workshop is about by reviewing [basics][basics].

It's not possible to teach you everything you need to know in an hour. Many
things that we consider "essential" have been left out because of time. However,
we aim to lay out some road maps that you can use to orient yourself instead of
being completely "lost at sea."


## Schedule

All the talks will be held in __WEH 5201 (the Mac ClusteR)__.

{% for day in site.data.days %}
### Day {{ forloop.index }}: {{ day.date }}

<table class="full-width">
  <thead>
    <th>Session</th>
    <th>Time</th>
    <th>Speaker</th>
  </thead>
  <tbody>
  {% for talk in day.talks %}
  {% assign talk_docs = site.talks | where:"name",talk.name %}
  {% assign talk_doc = talk_docs[0] %}
    <tr>
      <td><a href="{{ site.baseurl }}{{ talk_doc.url | remove: 'index.html' }}">{{ talk_doc.title }}</a></td>
      <td>{{ talk.time }}</td>
    <td>{% if talk_doc.speaker %}{{ talk_doc.speaker }}{% else %}To be decided{% endif %}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
{% endfor %}


## Talks

{% assign talks_sort_title = site.talks | sort: 'title' %}
{% for talk in talks_sort_title %}
  {% capture summary %}{% include talk-summary.md talk=talk %}{% endcapture %}
  {{ summary | markdownify }}
{% endfor %}



## Who's running CrashCourse?

CrashCourse is run by [ScottyLabs](https://scottylabs.org). We also run
[TartanHacks](http://tartanhacks.com/) (CMU's largest software hackathon) and
other educational events like [Web Dev Weekend](https://scottylabs.org/wdw/).


[basics]: basics/
[calendar]: https://calendar.google.com/calendar/embed?src=cmu.scottylabs%40gmail.com&ctz=America/New_York
