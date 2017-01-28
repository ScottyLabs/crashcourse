---
name: terminal-git
title: Using the Terminal & Git
subtitle: two ubiquitous technologies for developing software
description: >
    Using the terminal is a core foundation of any software (or even hardware)
    hack, and basic terminal experience goes a long way—downloading and
    installing packages and libraries, manipulating and writing code, and
    accessing frameworks all can be done extraordinarily easily through the
    terminal.
speaker: Josh Zhanson
---


In particular, the version control system Git (and GitHub), is best used through
the terminal. Git, besides being easy to use, fun to say, and quite stylish, is
a lifesaver during hackathons when anything can cause your whole project to
collapse and you don’t have the time to track it down—with Git, reverting is as
easy as a single terminal command. You can also make branches with Git to work
on features of the project while your teammates work on other features—no more
emailing zip files whenever anybody makes a change!

This workshop will consist of three parts: first, we’ll give a quick rundown of
the basic terminal commands and what they do, just in case you haven’t worked
with the terminal before. Then, we’ll introduce Git, explain the relationship
between Git and GitHub, and then go over the Git workflow and the commands that
go with it. Finally, with the aid of provided command cheat sheets, participants
will run through a short lab practicing major tasks and Git workflow.

## Before We Begin

Register for a GitHub account if you don’t already have one
([GitHub](https://github.com)). Bring a computer, preferably a Mac or Linux
(Windows is acceptable but install [Bash for Ubuntu for Windows prior][install])
with a web browser and a text editor. Make sure you know where the terminal
application is. Note: `cmd.exe` is not a suitable terminal for our purposes.

[install]: https://msdn.microsoft.com/en-us/commandline/wsl/install_guide


## Setup

- You will need a GitHub account, so make one if you don't already have one

- Talk is designed on a UNIX system, like macOS or Linux

- If GitHub detects that you're using Windows, it'll link you to some basic
  bash tools which should be more than enough
- You can also do the lab through GitHub Desktop, but the commands will go
  over your head
- Windows 10 users: Follow the instructions to install Bash on Ubuntu on
  Windows:
  - <https://msdn.microsoft.com/en-us/commandline/wsl/install_guide>
- Other Windows users: You'll have to ssh into Andrew for the commands to make
  sense. Follow the Windows-specific setup instructions here if you haven't
  already set up SSH on your machine:
  -  <https://www.cs.cmu.edu/~15131/f16/topics/terminal-usage/initial-setup/>


## Talk Schedule

1. Setup (5 minutes)
2. Bash (20 minutes)
  1. Overview
  2. History and features
  3. Commands and usage
3. Break and questions (5 min)
4. Git and GitHub (20 minutes)
  1. Overview
  2. Commands and usage
5. Steve Crusader against the Earth (30 minutes)


## Config Files

- Run the following commands (if you already have dotfiles of your own, you're welcome to use those or move them aside for now

```
$ curl https://raw.githubusercontent.com/cmugpi/dotfiles/master/bash_login > ~/.bash_login
$ curl https://raw.githubusercontent.com/jzhanson/terminal-setup/master/.bashrc > ~/.bashrc
$ curl https://raw.githubusercontent.com/jzhanson/terminal-setup/master/.vimrc > ~/.vimrc
$ git clone https://github.com/gmarik/Vundle.vim
$ vim +PluginInstall +qall
```


## Terminal

- Shell: a program where you type commands which are executed by the system
- Bash history
    - Bourne Again SHell
    - Brian Fox, 1989
    - Replaced Bourne Shell
- A UNIX shell and command language
  - Default shell for Linux and macOS
  - CLI (Command Line Interface) vs. GUI (Graphical User Interface)
  - Can also read commands from a file, or script


## Features

- Command history
- Command-line completion (autocompletion)
- Filename expansion
  - Globbing (wildcards) with `*`, `?`
- NO regular expressions (instead use sed, awk, grep)
- Piping with `|` to let output of a program to be input of other program
- Command substitution
- Can be found on pretty much every Linux and macOS
- Advanced alternative: zsh


## Command + Flags + Arguments

### Navigation

"." is current directory, ".." is parent directory to current directory
"~" is home directory

List contents of directory

```
$ ls
```

Print working directory

```
$ pwd
```

Change directory

```
$ cd
```



### Files

Move and rename files

```
$ mv
```

Copy files

```
$ cp
```

Create files (or update their timestamps if they exist)

```
$ touch
```

Remove files

```
$ rm
```


### Directories

Make directory

```
$ mkdir
```

Remove directory (only if empty)

```
$ rmdir
```

Force remove directory (if nonempty) CAREFUL!!!!!!

```
$ rm -rf
```

Open directory in Finder or open files in appropriate program

```
$ open
```


### File Manipulation, Miscellaneous

Print contents of files

```
$ cat
```

Open in Vim

```
$ vim
```

in Emacs

```
$ emacs
```

### Resources:

Get help on a command

```
$ man
```

Also, Google.


## Git

- Git is an open-source distributed version-control system
  - Use it for protecting the integrity of your project
  - Made a bad change and now everything is broken? Revert is super easy
  - Can create branches for team members to work on separate features
  - No more emailing zip files back and forth
- GitHub is just a hosting service for Git repositories
  - Access through adding a remote repo to local Git repo
  - Extra features like sharing repos, issues, stat trackers
- Git paradigm
  - Working directory → Index (staging area) → Head (points to last commit)
    - Make changes → Add files to staging → Commit changes
- Committing is like saving your game in a video game: whenever you reach a
  point where you think you might want to come back to, you commit!


### Getting started

- Best to either start a repo locally and push to GitHub or clone an existing repo

- To create new git repo in current directory

```
$ git init
```

- To clone (copy) an existing repo

```
$ git clone /path/to/repository
```

- To clone from GitHub

```
$ git clone <url>
```


![](https://d2mxuefqeaa7sj.cloudfront.net/s_9053F9BECF88C2499338162FFE93D56C74F966A6DC6DFAA8917E5CE12A049A1C_1484621625966_Screen+Shot+2017-01-16+at+9.52.59+PM.png)


### Adding/committing

- To propose changes by adding changed files to staging:

```
$ git add <filename>, git add *, git add .
```

- Check staging area for changes waiting to be committed:

```
$ git status
```

- Commit changes in staging area:

```
$ git commit, git commit -m "message"
```

-  To add a remote repo:

```
$ git remote add origin <server>
```

-  Push changes to a remote repo, like on GitHub:

```
$ git push origin master
```


### Branching

- To see branches:

```
$ git branch
```

- To create a new branch:

```
$ git checkout -b branch_name
```

- To change branches:

```
$ git checkout <branch_name>
```

- To delete branches:

```
$ git branch -d branch_name
```

- To push branches to remote repo:

```
$ git push origin <branch>
```

- To check differences between two branches:

```
$ git diff <source_branch> <target_branch>
```


### Reverting changes

- To reset staged changes:

```
$ git reset --hard
```

- To check commit history:

```
$ git log
```

- To see which commits are responsible for particular lines of code in a file:

```
$ git blame <file>
```

- To revert to a previous commit (which is, in itself, a commit), use git log to
  find the commit hash and then run:

```
$ git revert <commit_hash>
```


### Pulling and merging

- To pull (grab) most recent changes from a remote repo (update your local repo
  to most current version of remote):

```
$ git pull
```

- To merge (combine) two branches, first git checkout to the branch you want to
  KEEP after the merge (the one that is being merged INTO) and then replace
  <branch> with the branch you want to get rid of (merge)

```
$ git merge <branch>
```

Conflicts happen when the branches being merged have different code on the same
lines. Git will resolve as much as it can but you might need to resolve some
conflicts manually.

- When you're done, make sure they're marked as merged with

```
$ git add <filename>
```


### Resolving merge conflicts!

Steve Crusader against the Earth

- Pair up
- ONE person forks the repo:
  <https://github.com/jzhanson/steve-crusader-against-the-earth>
- BOTH clone the forked repo to local
- Follow the directions in README.md
- Have fun (optional)

Resources:

- Try Git
  - <https://try.github.io/>
- git-the simple guide
  - <http://rogerdudler.github.io/git-guide/>
- Learn Git Branching
  - <http://learngitbranching.js.org>

