---
layout: default
title: The Basics
subject: basics
---
<span class="anchor" id="register1">
# CrashCourse
###### let's get ready for TartanHacks

CrashCourse is a collection of talks and workshops designed to help you make the
most of TartanHacks. Topics range from web programming and React to data science and machine learning with TensorFlow and even advertising your product!

The talks are all student-led and focused on hands-on activities. They're designed to launch you right into the midst of development so you can make something awesome.



<span class="anchor" id="schedule1">
# Schedule

  All talks will be held on Zoom!

{% for day in site.data.days %}

### {{ day.date }}

<table class="full-width">
  <thead>
    <th>Session</th>
    <th>Speaker</th>
    <th>Time</th>
  </thead>
  <tbody>
  {% for talk in day.talks %}
  {% assign talk_docs = site.talks | where:"name",talk.name %}
  {% assign talk_doc = talk_docs[0] %}
    <tr>
      {% if talk_doc.haspage %}
        <td><a a href="{{ site.baseurl }}{{ talk_doc.url | remove: 'index.html' }}">{{ talk_doc.title }}</a></td>
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

<span class="anchor" id="register2">
# How do I attend?

1. __[Register]({{ site.registration_link }})__
  - You certainly don't have to register to attend, but we like knowing how many
    people to expect and which topics people are interested in learning.
1. <span data-scroll="about1">__[Read "The Basics"](#)__</span>
  - This quick read will introduce you to some common concepts and explain what
    the workshops are about.
1. <span data-scroll="schedule1">__[Pick some workshops!](#)__</span>
  - Workshops are largely independent of each other: you can attend as many or
    as few as you'd like.
  - In fact, there are tons of them! So many that you probably can't make it to
    all of them. __This is very much expected!__ If you're looking for help
    deciding which to go to, first decide whether you'd like to learn to make
    web sites or mobile apps, and go from there.

<span class="anchor" id="about1">
# The Basics

###### read on as we demystify web and app development and prepare you for your first workshop

Many technologies make up the experience we call "The Web." The following is an
overview of the most common ones.

A <mark>web browser</mark> is a program—such as Google Chrome, Mozilla Firefox, Apple
Safari, or Internet Explorer—that retrieves the source code of a website and
renders it in a way that you can interact with.

A <mark>client</mark> is a program that request information from another computer. For
example, your web browser acts as a client when it requests a web page from a
server, and a mobile app acts as a client any time it needs to request content
from online.

A <mark>server</mark> is a computer that responds to requests from a client. Servers are
often responsible for storing information permanently: when you create an
account on a website, that information is stored on the server.

<mark>Web application</mark> is a more all encompassing term for all the code that goes
into a particular web experience. This means the HTML and CSS code that makes up
what you actually see, the JavaScript makes those pages interactive, and any
code that runs on a web server. Because this is a lot to talk about, we
generally break it up into two parts, the <mark>frontend</mark> and the <mark>backend</mark>.

A mobile app (or native mobile app) is installed ahead of time at the users
request, unlike web apps which are downloaded on the fly. Native mobile apps
tend to be granted more powers than you'd find in a typical web app, like being
able to write to the file system and access system libraries. This means native
apps excel where control over the user experience is paramount.

Most web development is split up into frontend and backend development, so let’s
dive a little deeper into these areas.
<span class="anchor" id="about2">
# The Frontend

###### everything you can touch

The frontend of a web application is everything that ends up running in the
browser. It is written in three main languages, <mark>HTML</mark>, <mark>CSS</mark>, and
<mark>JavaScript</mark>.

HTML and CSS store information about a page. HTML contains the <mark>content</mark>,
which could include text, images, videos, and any number of other things.
Complementary to this, CSS stores information about how to <mark>display</mark> the
content stored by the HTML. This includes layout, color, fonts, and other
information about how our site looks. With just HTML and CSS we can create
beautiful, informational web pages that display the same information for
everyone who loads them.

On the other hand, JavaScript is a fully featured programming language.

When run in a web browser, JavaScript can alter HTML and CSS on the fly,
communicate with a web server, or perform computation all by itself. This opens
the door to modern, interactive, experiences.
<span class="anchor" id="about3">
# The Backend

###### everything behind the curtain

The backend is all of the code that runs on the web server.

A backend is necessary if you want to store information long term, sign people
in, or perform complex computations.

Most backends have a set of HTML, CSS, and JavaScript that is sent to the client
on request, so that the client can interact with the backend. Different parts of
the frontend are called using different routes or URLs, for example the route of
this page is "/basics/" whereas the route of the homepage is just "/". Finally,
there is generally a database, which is where lots of information can be stored
long term and accessed quickly.

Backends can be written in any programming language, but some languages are
easier to use than others. In addition, to the language, web developers often
use a web framework, which is a collection of code that handles common server
tasks and helps organize code.
<span class="anchor" id="about4">
# Mobile

###### it's all the rage these days

Mobile development is quite a bit different from web development. While it's
true that mobile development shares the goal of displaying an interface that
users can see and touch, they go about this in entirely different ways.
Developing for mobile means you're either program for iOS devices or Android
devices, and that you're locked into a specific ecosystem's tooling and
standards.

For many applications, these tradeoffs pay off. Mobile apps can be much faster,
much more polished, and have much higher rates of engagement compared with
comparable mobile web apps. For others, the ubiquity of the web draws people
away from platform-specific apps. The decision is ultimately yours to make.

<span class="anchor" id="about5">
# Design

###### optimizing the user's experience

When creating a web application, it’s important to remember that in a good
design can make or break your site’s success. Design is best described as all of
the choices that go into making a website. Design is more than the way a website
looks; a good design considers every aspect of a user’s experience. This
includes how a user signs up, how information is laid out, and overall every
action the user has to take inside your app. The goal of any good design is to
be unobtrusive, intuitive, and pleasant.

We group the choices a designer makes about how a piece of software fits into a
user’s life under the term <mark>User Experience</mark>, or UX. Another common term you
will hear discussed in relation to UX is the UI, or <mark>User Interface</mark>. The user
interface is what the user sees and actually interacts with. <mark>Wireframes</mark>,
<mark>mockups</mark> and <mark>prototypes</mark> are examples of tools which facilitate the
development of a good user experience.

Wireframes are like an outline to an essay. They’re non-functional, ugly, and
generally use a visual style that will not end up in the app. They do help at
visualizing a very rough an idea. Wireframing focuses on the broad ideas of an
interface—the functionality and layout—rather than on the specific details.

Making mockups is like filling in your bulleted outline with the most important
pieces of text. We say that they can be done with varying degrees of
<mark>Fidelity</mark>. Low fidelity mockups serve roughly the same purpose as wireframes,
while high fidelity mockups are pixel-perfect examples of what a developer
should be implementing.

Prototypes are like rough drafts. With prototypes, users can actually interact
with an interface, though it still may be rough and clunky. Prototypes are
valuable because they can identify problems before developers take the time to
implement a full design, which can save engineering resources.

<span class="anchor" id="about6">
# Deployment

###### the final flourish

After a website has been designed, and the frontend and backend implemented,
it’s time for it to be <mark>deployed</mark>. Deployment is the process of taking the
code a developer has written, and setting it up to run on a server where the
whole world can interact with it. It is a very important step, but it can be
complicated because software is often not developed in the same environment it
is deployed in. Deploying and running a webapp is generally called
__operations__, and it’s an important step in the life cycle of creating a web
application.

# Attending More Workshops

###### where to go from here

Thank you for reading this guide, and we hope that you will join us for Crash
Course on January 27th and 28th and February 3rd and 4th!

We’ve specifically designed the workshops so that they can be taken in any
order, although we recommend taking the deployment workshop after you’ve
completed at least one technical workshop (so you have something to deploy).

If you haven't already, __[be sure to register]({{ site.registration_link }})__!
You certainly don't have to register to attend, but we like knowing how many
people to expect and what people will be interested in learning. We can't wait,
and we hope to see you there!

If you have any comments or questions about this guide, please write to info at
scottylabs dot org.

