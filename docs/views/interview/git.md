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

## 标准操作流程

1. **创建新文件**
   ```bash
   echo Hello World > newfile.txt  # 创建新文件
   ```

2. **检查文件状态**
   ```bash
   git status  # 查看当前仓库状态
   ```
   输出会显示 `Untracked files` 部分列出新文件

3. **将文件添加到暂存区**
   ```bash
   git add newfile.txt  # 添加单个文件
   ```
   或添加所有新文件：
   ```bash
   git add .  # 添加所有新文件和修改过的文件
   ```

4. **确认已暂存**
   ```bash
   git status  # 此时文件会出现在 "Changes to be committed" 下
   ```

5. **提交到本地仓库**
   ```bash
   git commit -m "Add newfile.txt"  # 提交更改并添加描述
   ```

## 注意事项

1. 新文件必须显式使用 `git add` 命令添加，Git 不会自动跟踪新文件
2. 使用 `git add .` 会添加当前目录及子目录下所有新文件和修改
3. 提交前务必检查 `git status` 确认要添加的文件正确
4. 提交信息应清晰描述更改内容

## 完整示例

```bash
# 1. 创建新文件
echo "Hello Git" > greeting.txt

# 2. 添加到暂存区
git add greeting.txt

# 3. 提交到仓库
git commit -m "Add greeting file with initial content"

# 4. 验证提交
git log -1  # 查看最新提交记录
```

## 3、Git常用命令

## 4、Git和SVN有什么区别