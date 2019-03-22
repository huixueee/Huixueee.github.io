---
layout: post
title: HEXO操作指南（一）
description: 安装HEXO，从本地上传Repository到GitHub
date: 2019-02-11 20:09:10
comments: true
categories: Technology
tags: HEXO
toc: true
---
## Intall
下载并安装[Git](https://git-scm.com/)和[Node.js](https://nodejs.org/zh-cn/).（安装完后最好重启电脑）

鼠标右键任意地方，选择Git Bash，使用以下命令安装hexo
```python
npm install hexo-cli -g
```
如果这里出现WARN并没有关系.
使用以下命令,查看安装是否成功:
鼠标右键任意地方，选择Git Bash，使用以下命令安装hexo
```python
hexo v
```
如果安装成功,你就会看到各种版本信息:
```python
hexo-cli: 1.0.1
os: Windows_NT 6.1.7601 win32 x64
http_parser: 2.5.2
node: 4.4.3
v8: 4.5.103.35
uv: 1.8.0
zlib: 1.2.8
ares: 1.10.1-DEV
icu: 56.1
modules: 46
openssl: 1.0.2g
```
如果在执行`nmp install hexo-cli -g`卡住不动,执行以下命令.由于官方npm源有时链接不通，故将源指向国内下载地址.
```python
npm --registry http://registry.cnpmjs.org info underscore
```

创建文件夹（如E:\hexo）, 并在这个文件夹内右键Git bash Here,执行命令:
```python
hexo install
```
查看hexo文件夹带来什么:
```python
hexo g
hexo s
```
用浏览器访问 (http://localhost:4000/ ) 此时，你应该看到了一个漂亮的本地博客.

## 注册GitHub
<br>极其简单.我不写了. 假设这里创建的信息:</br>
<br>用户名: huixueee</br>
<br>注册邮箱: huixueee@163.com</br>

## 创建repository
<br>**注意**:这里的repository 名称只能为: huixueee.github.io</br>
<br>千万要注意!这里的名称,是不能使用一个随便的repository!!</br>

## 部署本地文件到GitHub
编辑E:\hexo下的_config.yml文件
在文件的最后加入代码:
```python
deploy: 
  type: git
  repository: https://github.com/xiaoming/xiaoming.github.io.git
  branch: master
  
```
执行以下命令:
```python
hexo g
hexo d
```
出现错误:
<strong>ERROR Deployer not found : git

执行命令:
```python
npm install hexo-deployer-git --save
hexo g
hexo d
```
接下来又是一个错误, 这个错误是:
```python
npm install hexo-deployer-git --save
INFO  Deploying: git
INFO  Setting up Git deployment...
Initialized empty Git repository in E:/hexo/.deploy_git/.git/

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'dan@dan-PC.(none)')
FATAL Something's wrong. Maybe you can find the solution here: http://hexo.io/do
cs/troubleshooting.html
Error:
*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'XXX@XXX-PC.(none)')

    at ChildProcess.<anonymous> (E:\hexo\node_modules\hexo-deployer-git\node_mod
ules\hexo-util\lib\spawn.js:37:17)
    at emitTwo (events.js:87:13)
    at ChildProcess.emit (events.js:172:7)
    at ChildProcess.cp.emit (E:\hexo\node_modules\hexo-deployer-git\node_modules
\hexo-util\node_modules\cross-spawn\node_modules\cross-spawn-async\lib\enoent.js
:37:29)
    at maybeClose (internal/child_process.js:827:16)
    at Process.ChildProcess._handle.onexit (internal/child_process.js:211:5)
FATAL
```
这个错误是因为当前本地的Git还没配置用户信息, 所以执行以下命令:
```python
git config --global user.email "huixueee@163.com"

git config --global user.name "huixueee"

hexo d
```
<br>此时,会要求输入用户名, 你就输入你的用户名: huixueee
<br>接着要求输入密码, 你就入密码. 密码输入期间不会看到任何字符.然后直接回车即可.

## 结束
至此, 博客创建完成. 登陆网站: huixueee.github.io 就可以看到啦!

## 常用命令备注
```python
hexo g #完整命令为hexo generate,用于生成静态文件
hexo s #完整命令为hexo server,用于启动服务器，主要用来本地预览
hexo d #完整命令为hexo deploy,用于将本地文件发布到github上
hexo n #完整命令为hexo new,用于新建一篇文章
```

## 安装主题
[在主题仓库](https://github.com/hexojs/hexo/wiki/Themes)中找到你喜欢的主题.

安装主题
```python
git clone <repository> themes/<theme-name>
```
例如选择[NexT](https://github.com/iissnan/hexo-theme-next)主题
```python
git clone https://github.com/iissnan/hexo-theme-next.git themes/NexT
```
## 启用主题
修改你的博客根目录下的config.yml配置文件中的theme属性，将其设置为NexT.
```python
theme: NexT
```