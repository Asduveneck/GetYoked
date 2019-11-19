This is a simple Git Tutorial of the commands I use the most often.

### Intro to git

#### Working on a shared branch:

After you've written your code
```shell
git add < RELATIVE_FILE_PATHS >
git commit -m "Your messages"
git pull
git push
```

Avoid using `force` for the time being

#### Going ham on your own branch

1. To make a new branch:

```shell
git branch < New_Branch_Name >
```

2. Now that you've made a branch, switch to it

```shell
git checkout < New_Branch_Name >
```

3. Do some coding, make your changes. Now it's time to add your changes.

```shell
git add < Relative_File_Paths>
git commit -m "Your commit message"
```

4. It's time to push

  * If this is the first time you're about to push that branch up to github (as in, you've never pushed before), do

```shell
git push -u origin < New_Branch_Name >
```

  * If you've pushed before, or you're not sure if you've pushed before, use 

```shell
git push 
```

  * If it's a new branch and you haven't pushed before, this will return something like `no upstream branch`. That's okay. 
  * Just go to the previous push command and run that instead.


#### How do I merge branches?

  If you are currently on branch B, and you want to merge branch B into branch A,

1. Change to branch A 
```shell
git checkout branch_A
```
2. Merge branch B into branch A
```shell
git merge branch_B
```

Personally, don't merge branches until you get someone else to double check!

### What are commands I use often?

#### To view all branches available, I use

```shell
git branch
```

#### To see what git I've done, I use
```shell
git l # abbreviated
git log # longer more detailed 
```

#### To see what files are being tracked by git...

  * We don't always want to add all the files we've changed. Sometimes, we don't know what files we've edited either, or what will be registered as a change.
  * To see what files we've changed, and which files have already been `committed`, run
  
```shell
git status
git s
```

  * To see how an `uncommited` file has changed (the file has been edited, but hasn't gone through a `git add` ), use 

  ```shell
  git diff <file_path(s)>
  ```

  * What if you want to undo changes you made? As in, you accidentally introduced a space, and you want to revert the file back to its last `committed` state, use 

  ```shell
  git checkout < file_paths >
  ```

### Things to always be consistent on

  Make sure you push and pull regularly. If you'll be working on the same file as someone else (unrecommended), give them a heads up.
  Don't change branches without committing. Uncommitted changes will transfer over when you switch from branch to branch.


### When do git conflicts occur?

  They occur when the same `line` (by `line number`) is edited. So if Zaid is working on line 7, and Alex decides to add 3 lines of code after line 5, Alex will have technically edited lines 5-8. Thus, Alex caused a merge conflict.

#### So how do we avoid `merge conflicts`? 

  Ideally, we don't work on the same files at the same time. 


### Apocalyptic GIT situations

Git merges aren't apocalyptic. They're just a nuissance most of the time. Apocalyptic situations occur when you accidentally delete a branch, screw up the Head of the branch, or even accidentally revert back and delete all your progress. Don't worry, I've done all of those. Here are some commands to look into.

```shell
git reflog # lets you look into the reference log, displays the commits and overall structure. 
git fsck # you fscked up. You reverted HARD and accidentally deleted the entire day's work. 
```

  * In general, once you recover what you want, make a branch, do your stuff, push it up to github, and THEN attempt to merge it to master.
  * We can clean up branches afterwards.

### Deleting branches 

```shell
  git branch -d < branch_name > # preferred
  git branch -D branch_name # not as ideal
```

  * `-D`is forced. It'll force a delete. It's riskier.
  * `-d` won't let you delete until you merge the changes over. g