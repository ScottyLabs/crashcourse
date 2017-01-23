---
layout: guide
title: Home
---

<div class="hero-logo">
  <img src="{{ site.baseurl }}/assets/img/crashcourse-logo.png">
</div>

# CrashCourse

###### let's get ready for TartanHacks

CrashCourse is a collection of talks and workshops designed to help you make the
most of TartanHacks. Topics range from web programming to game design to
mobile apps and more.

The talks are all student-led and focused on hands-on activities. They're
designed to launch you right into the midst of app and game development so you
can make something awesome.


## How do I attend?

1. __[Register]({{ site.registration_link }})__
  - You certainly don't have to register to attend, but we like knowing how many
    people to expect and which topics people are interested in learning.
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


## Schedule

All the talks will be held in __WEH 5201 (the Mac Cluster)__.

{% for day in site.data.days %}

### {{ day.date }}

<table class="full-width">
  <tbody>
  {% for talk in day.talks %}
  {% assign talk_docs = site.talks | where:"name",talk.name %}
  {% assign talk_doc = talk_docs[0] %}
    <tr>
      {% if talk_doc.haspage %}
        <td><a href="{{ site.baseurl }}{{ talk_doc.url | remove: 'index.html' }}">{{ talk_doc.title }}</a></td>
      {% else %}
        <td>{{ talk_doc.title }}</td>
      {% endif %}
      <td>{{ talk_doc.speaker }}</td>
      <td>{{ talk.time }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>
{% endfor %}



## Who's running CrashCourse?

CrashCourse is run by [ScottyLabs](https://scottylabs.org). We also run
[TartanHacks](http://tartanhacks.com/) (CMU's largest software hackathon) and
other educational events like [Web Dev Weekend](https://scottylabs.org/wdw/).


[basics]: basics/
[calendar]: https://calendar.google.com/calendar/embed?src=cmu.scottylabs%40gmail.com&ctz=America/New_York
