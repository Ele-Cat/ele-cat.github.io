# JNPF 笔记

1. JNPF 是什么
   - 约定大于配置，egg、node→Node，springboot→Java，thinkphp→Php
   - 引出下一个问题
2. 研究方向问题
   - 如何用，而不是如何实现
3. 分级概念
   - [分级](#46-分级管理)
4. 在线开发与流程引擎异同
   - 相同点
   - 不同点
5. 重点概念讲解
   - [集成助手](#_1-5-集成助手)
   - [系统调度](#_3-3-系统调度)
   - [单据模板](#_3-8-3-单据模板)
   - [数据建模](#_3-9-2-数据建模)
   - [数据接口](#_3-9-4-数据接口)
6. 未来研究方向
   - [操作文档](https://service.jnpfsoft.com/index/index/operate.html?cid=184&product_id=89)
   - [操作视频](https://service.jnpfsoft.com/index/index/operate_video.html?is_single=1&product_id=89)

## 01. 在线开发

### 1.1 功能设计

1. 外链功能可提供非登录状态下的数据填写、查询功能

#### 1.1.1 表单【业务功能表单】

1. 功能类型中，若配置为`流程表单`，则在发布表单前需配置流程
2. 数据库连接需在【系统管理-数据建模】中提前配置数据表、字段；未设置数据连接时，在模板设计完成后发布模板，会自动进行数据表创建，主表以“mt+功能 ID”命名，子表以“ct+雪花 ID”命名
3. 表单设计【左侧控件、中部面板、右侧属性】根据用户需求设计界面功能。
4. 表单设计属性
   - 子表动作：在子表添加数据后，所设目标表单字段会根据映射来源（支持接口字段、固定值）对应的映射值进行数据填充
   - 组件脚本事件：[参考教程](132)
   - 表单 Css、Class 绑定：在`表单属性`中配置
   - 表单脚本事件：支持表单加载触发、提交前置触发、提交后置触发
5. 列表设计【查询字段、列表字段、列表属性】
   - 列表布局【普通表格、左侧树形+普通表格、分组表格、编辑表格、树形表格】
   - 子表样式

#### 1.1.2 视图【数据视图】

> 数据视图是一种纯列表展示方式

1. 数据接口【不显示静态类型和带分页的接口】

### 1.2 报表设计

1. 数据源配置【添加数据库连接】
2. 内置数据源【已有数据库信息】
3. 右键已添加数据源，可添加、删除数据集
4. 在弹窗中，点击左侧表名可添加数据集
5. 点击已选中数据集字段列表，可将字段填充到对应高亮单元格
6. 单元格属性若干配置
7. 新增的报表，可以在【系统管理-系统菜单】新增菜单时，选择类型为`报表`

### ~~1.3 大屏设计~~

> 在新的界面展示全屏图表

### ~~1.4 门户设计~~

> 在门户中展示图表

### 1.5 集成助手

> 在满足指定的触发条件后，自动在目标表单中执行新增、编辑、删除等操作

#### 1.5.1 事件触发

当监听到所设表单发生某个动作后，触发执行另一个动作

1. 配置名称、编码等基本信息后，点击`确定并设计`
2. 触发动作设置节点-触发表单【显示在线开发中已发布且开启列表的普通表单】
3. 添加节点【新增数据、更新数据、删除数据、数据接口、消息通知】

#### 1.5.2 定时触发

按照指定的时间周期循环触发

## 02. 代码生成

> 此处生成的表单代码，可用于【流程表单、流程设计的系统表单】绑定使用

### 2.1 功能表单

用于下载后二开的功能表单

### 2.2 发起表单

用于【流程设计-系统表单】绑定【不支持无表，需提前绑定数据表】

## 03. 系统管理

### 3.1 系统配置

### 3.2 系统公告

### 3.3 系统调度

基于给定时间点、时间间隔、执行次数去自动执行任务

### 3.4 系统缓存

### 3.5 系统日志

### 3.6 系统监控

### 3.7 系统图标

### 3.8 系统模板

#### 3.8.1 审批常用语

#### 3.8.2 打印模板

支持自定义打印格式，与【功能设计-列表、工作流程-列表】结合使用

- 流程表单
- 功能表单

#### 3.8.3 单据模板

用于工作流程的系统表单中自定义单据规则

### 3.9 数据应用

#### 3.9.1 数据连接

#### 3.9.2 数据建模

用于新建、编辑、展示数据库中表、字段

#### 3.9.3 数据字典

#### 3.9.4 数据接口

- 静态数据
- SQL 操作
- API 操作

#### 3.9.5 接口认证

配置允许外部访问的接口设置

1. 接口授权 - 选择要授权的接口列表
2. 授权用户 - 授权后，外部接口调用本地 API 和 SQL 接口时，会按照 appId、appSecret 以及 UserKey 接口认证逻辑

#### 3.9.6 数据同步

#### 3.9.7 行政规划

### 3.10 消息中心

#### 3.10.1 账号配置

- 邮箱配置
- 短信配置
- webhook 配置
- 微信公众号配置

#### 3.10.2 消息模板

#### 3.10.3 发送配置

#### 3.10.4 消息监控

## 04. 系统权限

### 4.1 组织管理

> 操作权限需在【分级管理】中配置，已关联组织不允许被删除

### 4.2 岗位管理

> 操作权限需在【分级管理】中配置，已绑定成员的岗位无法切换组织、被删除

### 4.3 用户管理

> 操作权限需在【分级管理】中配置

### 4.4 角色管理

> 操作权限需在【分级管理】中配置，全局角色仅可由超级管理员操作，全局角色在所有组织均可使用

### 4.5 分组管理

> 临时虚拟组别，用于批量分配权限

### 4.6 分级管理

> 1. 统一管理组织、岗位、用户、角色的操作权限授权
> 2. 普通用户使用上述功能的新建、编辑、删除等权限时，需要由超级管理或拥有对应权限的用户在【分级管理】中配置所属组织的本层级权限或上级组织的子层级权限。

1. 后台菜单
2. 应用权限【系统管理-数据应用-接口认证】
3. 组织权限

### 4.7 权限管理

### 4.8 在线用户

## 05. 流程引擎

### 5.1 流程表单

#### 5.1.1 自定义表单

1. 填写基础信息
2. 未选择数据表时，会自动创建相关数据表、字段
3. 可选择已创建的数据表【系统管理-数据应用-数据建模】
4. 刚创建好的流程表单需要`发布表单`后，才可在【流程设计】中使用

#### 5.1.2 系统表单

与【代码生成】的流程表单配合使用

### 5.2 流程设计

#### 5.2.1 发起流程

> 用于协同办公的业务流程

1. 填写基本信息，点击下一步进入`流程设计`
2. `流程设计`左侧为多流程管理区域，实现多表单、多流程
3. `流程发起`节点可配置表单设置【自定义表单、系统表单】、选择可发起此流程的发起人、抄送人等
4. `审批节点`
5. 启用流程-版本管理

#### 5.2.2 功能流程

> 用于业务系统的功能流程

1. `流程发起`节点可配置表单设置【自定义功能、系统功能】

### 5.3 流程监控

> 操作权限需在【分级管理】中配置

1. 可在`详情`中查看流程信息、流转记录，执行变更、指派、终止、复活等操作

## 06. 工作流程

### 6.1 新建流程

- 单流程
- 多流程

### 6.2 我发起的

### 6.3 流程委托

> 指定代理人，由代理人代办某类型流程的发起、审批权限

- 委托发起
- 委托设置
- 委托给我的

### 6.4 待办事宜

### 6.5 已办事宜

### 6.6 抄送事宜