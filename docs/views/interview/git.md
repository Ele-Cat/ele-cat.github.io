# Git 面试题

## 1、Git是什么

Git 是一个**分布式版本控制系统**，主要用于跟踪和管理软件开发过程中的代码变更。以下是 Git 的核心要点：

### 核心特点

1. **版本控制**：记录文件的所有历史修改，可回溯到任意版本
2. **分布式架构**：每个开发者都有完整的代码仓库副本
3. **高效协作**：支持多人并行开发，轻松合并代码变更
4. **分支管理**：轻量级分支使功能开发和实验更安全

### 基本功能

- 记录代码的每次修改（谁、何时、改了什么）
- 支持创建多个开发分支并行工作
- 可回退到任意历史版本
- 提供代码合并和冲突解决工具
- 与GitHub/GitLab等平台集成实现团队协作

### 典型工作流程

1. 初始化仓库：`git init`
2. 添加文件到暂存区：`git add .`
3. 提交变更：`git commit -m "描述"`
4. 创建分支：`git branch develop`
5. 合并分支：`git merge`
6. 同步远程仓库：`git push/pull`

Git 已成为现代软件开发的标准工具，适用于从个人项目到大型企业级应用的所有规模项目。

## 2、简述Git中如何将一个新增文件添加到本地仓库

```bash
# 1. 创建新文件
echo "Hello Git" > greeting.txt

# 2. 检查文件状态
git status  # 输出会显示 `Untracked files` 部分列出新文件

# 3. 添加到暂存区
git add greeting.txt # 添加单个文件
# 或
git add.  # 添加所有新文件和修改过的文件

# 4. 确认已暂存
git status  # 此时文件会出现在 "Changes to be committed" 下

# 5. 提交到仓库
git commit -m "Add greeting file with initial content"  # 提交更改并添加描述

# 6. 验证提交
git log -1  # 查看最新提交记录
```

## 3、Git常用命令

### 1、基础配置命令

1. **设置用户信息**
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

2. **查看配置**
   ```bash
   git config --list
   ```

### 2、仓库操作命令

1. **初始化仓库**
   ```bash
   git init
   ```

2. **克隆远程仓库**
   ```bash
   git clone https://github.com/user/repo.git
   ```

3. **克隆指定分支**
   ```bash
   git clone -b branch_name https://github.com/user/repo.git
   ```

### 3、文件操作命令

1. **查看文件状态**
   ```bash
   git status
   ```

2. **添加文件到暂存区**
   ```bash
   git add file.txt          # 添加单个文件
   git add .                 # 添加所有修改和新文件
   git add -u                # 添加所有修改（不包括新文件）
   ```

3. **提交更改**
   ```bash
   git commit -m "提交信息"
   ```

4. **添加并提交**
   ```bash
   git commit -am "提交信息"  # 仅对已跟踪文件有效
   ```

### 四、分支操作命令

1. **查看分支**
   ```bash
   git branch               # 查看本地分支
   git branch -a            # 查看所有分支（包括远程）
   ```

2. **创建分支**
   ```bash
   git branch branch_name
   ```

3. **切换分支**
   ```bash
   git checkout branch_name
   git switch branch_name   # Git 2.23+ 推荐方式
   ```

4. **创建并切换分支**
   ```bash
   git checkout -b branch_name
   git switch -c branch_name
   ```

5. **合并分支**
   ```bash
   git merge branch_name
   ```

6. **删除分支**
   ```bash
   git branch -d branch_name     # 安全删除
   git branch -D branch_name     # 强制删除
   ```

### 五、远程仓库操作

1. **添加远程仓库**
   ```bash
   git remote add origin https://github.com/user/repo.git
   ```

2. **查看远程仓库**
   ```bash
   git remote -v
   ```

3. **推送分支**
   ```bash
   git push origin branch_name
   ```

4. **拉取更新**
   ```bash
   git pull origin branch_name
   ```

5. **获取远程更新**
   ```bash
   git fetch origin
   ```

### 六、撤销与回退

1. **撤销工作区修改**
   ```bash
   git checkout -- file.txt
   ```

2. **撤销暂存区修改**
   ```bash
   git reset HEAD file.txt
   ```

3. **回退到指定提交**
   ```bash
   git reset --hard commit_id
   ```

4. **修改最后一次提交**
   ```bash
   git commit --amend
   ```

### 七、日志与比较

1. **查看提交历史**
   ```bash
   git log
   git log --oneline        # 简洁显示
   git log --graph          # 图形化显示
   ```

2. **查看文件修改**
   ```bash
   git diff
   git diff --cached        # 查看暂存区修改
   ```

3. **查看某行代码历史**
   ```bash
   git blame file.txt
   ```

### 八、标签管理

1. **创建标签**
   ```bash
   git tag v1.0.0
   ```

2. **查看标签**
   ```bash
   git tag
   ```

3. **推送标签**
   ```bash
   git push origin v1.0.0
   git push origin --tags    # 推送所有标签
   ```

### 九、高级操作

1. **储藏修改**
   ```bash
   git stash                # 储藏当前修改
   git stash list           # 查看储藏列表
   git stash apply          # 恢复最近储藏
   ```

2. **交互式暂存**
   ```bash
   git add -p
   ```

3. **重写提交历史**
   ```bash
   git rebase -i HEAD~3     # 交互式变基最近3次提交
   ```

### 十、实用技巧

1. **忽略文件**
   ```bash
   # 编辑 .gitignore 文件
   echo "node_modules/" >> .gitignore
   ```

2. **查看仓库大小**
   ```bash
   git count-objects -vH
   ```

3. **清理无效文件**
   ```bash
   git gc
   ```

4. **子模块管理**
   ```bash
   git submodule add https://github.com/user/repo.git path/to/submodule
   ```

掌握这些常用 Git 命令可以应对日常开发中的大部分版本控制需求。建议根据实际工作流程灵活组合使用这些命令。

## 4、Git和SVN有什么区别