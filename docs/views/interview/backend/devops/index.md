# DevOps 面试题

## Docker

- **镜像 vs 容器**：镜像是只读模板，容器是运行实例
- **Dockerfile 指令**：FROM → RUN → COPY → CMD/ENTRYPOINT
- **多阶段构建**：减少最终镜像体积
- **常用命令**：`docker build`、`docker run`、`docker compose`、`docker ps`

## K8s 基础

- **Pod**：最小调度单元，包含一个或多个容器
- **Deployment**：管理 Pod 副本数和滚动更新
- **Service**：提供稳定的网络入口和负载均衡
- **ConfigMap / Secret**：配置管理
- **Ingress**：七层路由和 TLS 终止

## CI/CD

- **CI（持续集成）**：每次代码提交自动构建和测试
- **CD（持续部署/交付）**：自动部署到生产或预发布环境
- **常见工具**：GitHub Actions、GitLab CI、Jenkins、ArgoCD
- **Pipeline 阶段**：Checkout → 依赖安装 → 测试 → 构建 → 部署
