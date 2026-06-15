# AI 面试题

## LLM 原理
- **Transformer 架构**：自注意力机制 + 前馈网络 + 位置编码
- **预训练 + 微调**：大规模无监督预训练 → 下游任务微调
- **Prompt Engineering**：通过提示词引导模型输出
- **常见模型**：GPT、Claude、LLaMA、Qwen

## RAG 全流程
- **索引阶段**：文档切分 → Embedding → 存入向量数据库
- **检索阶段**：用户查询 → Embedding → 向量相似度检索
- **生成阶段**：查询 + 检索结果 → 拼接 Prompt → LLM 生成
- **常用工具**：LangChain、LlamaIndex、Chroma、Pinecone

## AI Agent 架构
- **LLM 作为核心**：推理决策 + 工具调用
- **工具（Tool）**：搜索引擎、代码执行器、API 调用
- **记忆（Memory）**：短期上下文 + 长期存储
- **规划（Planning）**：多步任务分解（ReAct、Plan-and-Execute）

## LangChain
- 开源框架，用于构建 LLM 应用
- 核心概念：Chain、Agent、Tool、Memory、Retriever
- 支持多种模型提供商（OpenAI、Claude、本地模型）
