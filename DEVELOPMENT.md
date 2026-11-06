# Meting-API · 开发与部署

## 环境要求
- Node.js（LTS）、npm
- 可选：Deno（走 `start:deno`）、Docker

## 安装与运行
```bash
npm ci
npm run start:node      # Node 运行时
npm run start:deno      # Deno 运行时
npm test                # 测试
```

## 构建
```bash
npm run build:all
```
构建配置见 `esbuild.config.js`，产物由 `scripts/` 下的脚本组织。

## 部署
`Dockerfile` 可直接构建镜像；`api/`、`functions/`、`src/` 为服务端代码入口。
反向代理与环境变量说明见 `README.md`。
