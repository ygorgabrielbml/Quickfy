# Quickfy

Aplicação web full-stack construída com Next.js para autenticação, sessão segura e base escalável para funcionalidades de agendamento em tempo real.

## Visão Geral

O Quickfy é um projeto em desenvolvimento com foco em:

- autenticação de usuários
- gerenciamento de sessão no servidor
- integração com MongoDB
- estrutura organizada para evolução de funcionalidades

Este repositório representa a base técnica da aplicação (frontend, validação, autenticação e persistência).

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- MongoDB + Mongoose
- Zod (validação)
- bcryptjs (hash de senha)
- Server Actions

## Status do Projeto

Em desenvolvimento ativo.

Funcionalidades já implementadas:

- telas iniciais de login, registro e dashboard
- validação de formulário com Zod
- fluxo de autenticação via Server Actions
- criação e leitura de sessão no servidor
- conexão com MongoDB
- modelagem inicial de usuário com Mongoose
- script local para testes de CRUD com usuário

## Estrutura de Pastas

```txt
src/
  app/
    actions/          # server actions
    login/            # página e componentes de login
    register/         # página e componentes de cadastro
    dashboard/        # área autenticada
    components/       # componentes compartilhados de UI
  lib/
    auth/             # sessão/autenticação
    db/               # conexão e models do MongoDB
    errors/           # tratamento de erros de formulário
    validations/      # schemas Zod
  types/              # tipos compartilhados
scripts/
  test-user.ts        # script de teste local com MongoDB
```

## Pré-requisitos

- Node.js 18+
- npm
- MongoDB local ou cloud

## Configuração

1. Instalar dependências:

```bash
npm install
```

2. Criar arquivo `.env.local` com:

```env
MONGO_URI=...
SESSION_SECRET=...
```

## Executando o Projeto

Desenvolvimento:

```bash
npm run dev
```

Lint:

```bash
npm run lint
```

Build:

```bash
npm run build
```

Teste de CRUD local com usuário:

```bash
npm run test:user
```

## Fluxo Atual de Autenticação

- envio de formulário via `form action={...}` no frontend
- processamento no servidor com Server Actions
- validação com Zod
- leitura de dados para autenticação
- criação de sessão segura com cookie HttpOnly

## Convenções do Projeto

- código em inglês (nomes técnicos)
- mensagens e interface em pt-BR quando aplicável
- validações centralizadas em schemas
- separação entre UI, actions, persistência e tipos

## Roadmap Técnico (Resumo)

- finalizar login com dados reais do banco
- concluir fluxo real de cadastro
- padronizar tratamento de erros de autenticação
- evoluir dashboard com operações protegidas
