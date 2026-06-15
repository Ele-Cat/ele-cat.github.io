# 系统设计面试题

## 高并发设计
- **水平扩展**：加机器，无状态设计
- **缓存策略**：Redis / CDN / 本地缓存
- **读写分离**：主库写、从库读
- **消息队列**：削峰填谷、异步解耦（Kafka / RabbitMQ）
- **限流**：令牌桶 / 漏桶 / 滑动窗口
- **降级熔断**：Hystrix / Sentinel

## 分布式系统
- **CAP 理论**：一致性、可用性、分区容忍性三者不可兼得
- **BASE 理论**：Basically Available + Soft State + Eventual Consistency
- **一致性算法**：Paxos / Raft / Zab
- **分布式事务**：2PC / TCC / 最终一致性（消息表 + 重试）
- **分布式 ID**：雪花算法（Snowflake）
- **分布式锁**：Redis RedLock / ZooKeeper

## 微服务架构
- **服务拆分**：按业务域（DDD 限界上下文）
- **服务发现**：Nacos / Consul / Eureka
- **配置中心**：Nacos / Apollo
- **API 网关**：Kong / Spring Cloud Gateway / Nginx
- **观测性**：日志（ELK）、指标（Prometheus）、链路追踪（Jaeger）
- **容器化部署**：Docker + K8s
