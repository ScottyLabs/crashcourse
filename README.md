CrashCourse Website
===================

There's nothing special about this site: it's just static HTML and CSS. If you need to edit something, you can go ahead and change the HTML directly. At some point this will change to jekyll (either as a learning exercise for Ruby/jekyll or for CrashCourse last year to improve maintainability).

Site Contents
-------------

- `index.html`
    - Main landing page
- `CNAME`
    - This site is hosted on GitHub Pages, so including this file tells the world that this site will be accessed from crashcourse.scottylabs.org
- `assets/`
    - `css/`
        - Contains Bootstrap source code and extra modifications
    - `docs/`
        - Used for storing materials from presentations and other docs
    - `img/`
        - Contains the images used for styling and content
    - `js`
        - Okay I lied: this site has more than jusy HTML and CSS. This Javascript is only used for the navbar on the mobile responsive site.
- `register/`
    - Landing page for event registration
- `schedule/`
    - Landing page for event schedule
- `workshops`
    - Each course description page is enclosed by a subdirectory within this folder. The template with blanks in all appropriate places (a prime candidate for use with jekyll!) is located within the `intro-to-html-css` foler

Note About Pushing
------------------

Because this site is hosted on GitHub Pages as a project page (not a user/organization page), all changes must be pushed to the branch `gh-pages`. This can get annoying because there is no way to delete the `master` branch, so you should probably update your `.git/config` file to look like this:
    [core]
      repositoryformatversion = 0
      filemode = true
      bare = false
      logallrefupdates = true
      ignorecase = true
      precomposeunicode = false
    [remote "origin"]
      url = https://github.com/ScottyLabs/crashcourse-website.git
      fetch = +refs/heads/*:refs/remotes/origin/*
      push = +refs/heads/master:refs/heads/gh-pages
      push = +refs/heads/master:refs/heads/master
    [branch "master"]
      remote = origin
      merge = refs/heads/master
    [branch "gh-pages"]
      remote = origin
      merge = refs/heads/gh-pages
Note how the last two lines of `[remote "origin"]` make it so that every time you type
    git push
you push the same code to both branches. This makes sure that both branches are always in sync.

