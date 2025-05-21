# Projeto Mega-Sena Fullstack

## 🎯 Descrição
Atividade 5 – Server e HTTP request

## 🚀 Como rodar o projeto
1- rodar "npm install" na raiz do projeto para instalar a pasta node_module no front e back ao mesmo tempo
2- "npm run dev" na raiz do projeto para inciar o backend e o front ao mesmo tempo.


### Acessos:
- Backend → http://localhost:3001
- Frontend → http://localhost:5173

## 📂 Estrutura

megasena/
├── backend/   → Server 
├── frontend/  → Aplicação React
├── package.json (orquestra tudo)


## ⚙️ Banco de Dados
- PostgreSQL
- Configurações estão no arquivo .env dentro da pasta backend.
- Arquivo bd.txt na pasta raiz para caso precise do SQL
- Arquivo env.txt caso precise criar outro .env

## 🗺️ Rotas API
- GET /concurso/mais-recente → retorna o concurso mais recente
- GET /concurso/:numero → retorna um concurso pelo número

## 💡 Tecnologias
- Backend: Node.js, Express, TypeScript, PostgreSQL
- Frontend: React, Vite, TypeScript, Styled-components