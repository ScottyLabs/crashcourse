# CrashCourse

This is the site source for TartanHacks CrashCourse. We're using Jekyll to build
and compile our site. We're not using GitHub Pages, though, because we wanted to
host the site from <http://tartanhacks.com/crashcourse>.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Local Development](#local-development)
  - [I want to...](#i-want-to)
    - [... change the style of the site.](#-change-the-style-of-the-site)
    - [... add information about a talk.](#-add-information-about-a-talk)
    - [... add content to the site.](#-add-content-to-the-site)
- [Production Environment](#production-environment)
  - [Directory Structure](#directory-structure)
  - [Deploying](#deploying)
    - [Troubleshooting](#troubleshooting)
  - [Dependencies](#dependencies)
  - [Permissions](#permissions)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Local Development

Make sure you have a recent version of Ruby installed and run

```console
$ gem install bundler
$ bundle install
```

If that failed, and you're on OS X, you might have to run this:

```
gem install nokogiri -v 1.6.8.1 -- --with-xml2-include=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.11.sdk/usr/include/libxml2 --use-system-libraries
```

and then re-run `bundle install`.

Once you've done that, you can preview the site locally by running

```console
$ jekyll serve
```

This will compile the static files, including all Sass assets. Then, in your
browser, navigate to <http://localhost:4000/> to view the generated site.


### I want to...

This is a typical Jekyll project. The [Jekyll documentation][jekyll] online is
really well put together; you should give it a skim. In the mean time, here's a
list of points where you might want to look:

#### ... change the style of the site.

Since this is a Jekyll site, the repetitive content is pulled out into
_templates_. These files are located in `_includes/` and `_layouts/`. Altering
these files will alter all files based off of them. You can tell if a file is
based off another file if it includes the line `layout: <something>` or `{%
include <something> %}` somewhere inside it.

To change the stylesheets, you should look in `assets/css/`. Here' you'll see
that we're using Sass, which is a CSS preprocessor. This just means we're using
a language that compiles to CSS, instead of writing CSS directly. Look it up
online for more information. The `main.scss` file `@import`s the files which are
located in the folder `_sass/`. To change the styles, you'll want to change
the files located in there.


#### ... add information about a talk.

First, you'll have to make a talk page:

```
cd _talks
mkdir TITLE-OF-TALK
cat _template.md | sed -e 's/my-fancy-talk/TITLE-OF-TALK/' > TITLE-OF-TALK/index.md
```

Now fill in the template (things like description, title, etc.).

Finally, add a timeslot for the event by editing `_data/days.yml`. Make sure you
follow the same structure as what's already there.

#### ... add content to the site.

Any file or folder that doesn't start with an underscore will end up being a
web page visible to users. To add content, simply create a file that doesn't
have a leading underscore.

Jekyll allows you to write content using Markdown, a language that compiles to
HTML. You should probably use Markdown, not HTML, to create content.


## Production Environment

This site is deployed in production using Nginx on `unix.scottylabs.org`. These
are the notes related to how it's configured there.


### Directory Structure

- `crashcourse.git/`
  - This is a bare Git repo tracking <https://github.com/ScottyLabs/crashcourse>
  - It has the `post-receive` hook configured, which is in charge of compiling
    and deploying the Jekyll site on pushes.
- `www/`
  - Jekyll is told to compile our site and is also where nginx looks to serve
    our site.
- `.gems/` and `.tmp`
  - The `post-receive` hook creates some temporary directories in order to make
    the Jekyll compile times faster. These can be deleted at any time, but the
    next push will rebuild them (and the rebuild will take longer than normal).


### Deploying

You can deploy the CrashCourse site over git push. Since both GitHub and
production are Git repositories, and Git is distributed, we have to take a bit
of extra work to keep them in sync. Here's the step-by-step from scratch method
to get everything set up.


First, make sure you've cloned the repo to your laptop somewhere:

```console
$ git clone https://github/ScottyLabs/crashcourse
```

Next up we need to tell our laptop's Git repo how to find production. Run these
commands on your laptop:

```console
$ git remote add prod ssh://USERNAME@unix.scottylabs.org/opt/github/crashcourse/crashcourse.git
$ git remote add all https://github/ScottyLabs/crashcourse
$ git remote set-url --add all ssh://USERNAME@unix.scottylabs.org/opt/github/crashcourse/crashcourse.git
```

That's it! Here's how you use it:

```console
# To push to both GitHub and production server
$ git push all master

# To push only to production server
$ git push prod master

# To push only to GitHub
$ git push origin master
```

Nearly always, you'll want to push to both production and GitHub. The exception
is if you're opening a pull-request; this you should only push to GitHub. If you
push to GitHub and not to production, the site becomes out of date!


#### Troubleshooting

If you can't push correctly after doing those instructions, make sure you're in
the `admin` group. See [Permissions](#permissions).


#### `post-receive` hook

We're compiling the Jekyll site in production using the `post-receive` Git hook.
A copy of this hook has been added here for posterity's sake. However, if you
make changes to the post-receive in this repo, those changes won't be reflected
in production. You have to copy it there manually.


### Dependencies

This site depends on nginx the TartanHacks site's nginx config. In particular,
it needs to forward traffic coming in through `/crashcourse` to `www/` in this
folder.

Jekyll depends on `ruby` and `gem` being available, preferably at version 2.0 or
higher. It also needs ruby-dev for building native extensions. These
dependencies were met by running

```console
sudo apt-get install ruby ruby-dev
```


### Permissions

If you did an `ls -l` on `/opt/github/crashcourse`, you might have noticed the
little '+' sign in the permission listing--that's what this section is here to
explain.

Permissions are important consideration here because we'd like a few things:

- nginx should be able to read and serve our site
- the correct users should be able to push & pull from the repository without
  needing to be root

With this in mind, we're using some cool permissions tricks called ACLs.
Traditional Unix groups don't quite give us as much flexibility as ACLs do. For
further reading, you might want to take a look at the [Ubuntu
documentation][ubuntu-acl] or the [Arch documentation][arch-acl].

When the permissions were initially set up, I used these commands __on our
server__:

```console
# Let nginx have it's way with this folder
$ sudo chown -R www:www /opt/github/crashcourse

# Treat anyone in the admin group (see /etc/group) as an owner
$ sudo setfacl -R -m g:admin:rwX /opt/github/crashcourse
```

As a side note, the `X` in `rwX` (as opposed to `rwx`) means "execute only if
the file is a directory or already has execute permission for some user."

You can verify these by permissions by running:

```console
$ getfacl /opt/github/crashcourse
```


[ubuntu-acl]: https://help.ubuntu.com/community/FilePermissionsACLs
[arch-acl]: https://wiki.archlinux.org/index.php/Access_Control_Lists


## License

MIT License. See LICENSE. (c) 2015 ScottyLabs



[jekyll]: http://jekyllrb.com/
