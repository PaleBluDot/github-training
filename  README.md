# Working with Git and Github

**Git** is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.

**GitHub** is a Git repository hosting service, but it adds many of its own features. While Git is a command line tool, GitHub provides a Web-based graphical interface. It also provides access control and several collaboration features, such as a wikis and basic task management tools for every project.

1. [Command Line](#command-line)
   1. [Setting Up Repository](#setting-up-repository)
      a. [Start](#start)
      b. [Clone](#clone)
      c. [Settings](#settings)
   2. [Saving Changes](#saving-changes)
      c. [Staging](#staging)
      d. [Commit](#commit)
   3. [Sync to Remote](#sync-to-remote)
      a. [Remote](#remote)
      a. [Fetch](#fetch)
      a. [Pull](#pull)
      a. [Push](#push)
2. [Github GUI](#github-gui)

## 1. Command Line

### Setting Up Repository

Setting up your local termial.

#### Start

The git `init` command creates a new Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository. Most other Git commands are not available outside of an initialized repository, so this is usually the first command you'll run in a new project.

```bash
git init
```

### Clone

The git `clone` is a Git command line utility which is used to target an existing repository and create a clone, or copy of the target repository.

```bash
git clone https://github.com/palebludot/github-training
```

#### Config

The git `config` command is a convenience function that is used to set Git configuration values on a global or local project level.

- The `-g` flag for global.
- `[user.name]` Your Github username.
- `[user.email]` Your Github Email.
- You should use your github email addresses to have it tied to your account.

```bash
git config -g user.name "Name"
git config -g user.email "test@test.com"
```

### Saving Changes

The git `add` command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way — changes are not actually recorded until you run git `commit`.

- Replace `<file.path>` with your file path/name
- Using a `.` will add all files

```bash
git add <file.path>
git add .
```

#### Status

The git `status` command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven’t, and which files aren’t being tracked by Git. Status output does not show you any information regarding the committed project history.

```bash
git status
```

#### Commit

The git `commit` command captures a snapshot of the project's currently staged changes. Committed snapshots can be thought of as “safe” versions of a project—Git will never change them unless you explicitly ask it to.

- `-m` is a flag to add your commit message

```bash
git commit -m "Your commit message"
```

### Sync to Remote

Synchronize changes made to local files to remote repository.

#### Remote

The git `remote` command lets you create, view, and delete connections to other repositories. Remote connections are more like bookmarks rather than direct links into other repositories. Instead of providing real-time access to another repository, they serve as convenient names that can be used to reference a not-so-convenient URL.

- Flags:
  - `add` - Create a new connection to a remote repository. After adding a remote, you’ll be able to use `<name>` as a convenient shortcut for `<url>` in other Git commands.
  - `rm` - Remove the connection to the remote repository called `<name>`.
  - `rename` - Rename a remote connection from `<old-name>` to `<new-name>`.

```bash
git remote
```


## Github Desktop

![Giuthub for Mac](/images/github-desktop-screenshot-mac.png)

Download the desktop app at https://desktop.github.com/
