# Exposição de Artes - Isabella Faustino

Aplicação web desenvolvida com **Next.js** para exibição de artes, com sistema de autenticação, galeria dinâmica e suporte a tema claro/escuro.

---

## Funcionalidades

- Login de usuário
- Cadastro de conta
- Esqueceu Senha
- Alternância de tema (Dark / Light)
- Galeria de artes
- Carrossel de imagens
- Destaque de artigos
- Layout responsivo
- Contato
- Política de Privacidade
- Sobre

---

## Tecnologias utilizadas

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Heroicons / React Icons
- API interna (`/api/artigos`)

---

## Como rodar o projeto

Clone o repositório:

```bash
git clone https://github.com/KellyFaustino/Artes-Isabella.git
```

Acesse a pasta:

```bash
cd Artes-Isabella
```

Instale as dependências:

```bash
yarn
```

Execute o projeto:

```bash
yarn dev
```

Acesse no navegador:

```bash
http://localhost:3000
```

---

## Estrutura do projeto

```bash
src/
 ├── app/
 │    ├── login/
 │    ├── cadastro/
 │    ├── home/
 │
 ├── components/
 │    ├── login/
 │    ├── form/
 │    ├── header/
 │    ├── carrossel/
 │    ├── destaque-artigo/
 │    ├── alerta/
 │    └── ToggleTheme/
```

---

## Tema Dark/Light

O projeto possui alternância de tema utilizando Tailwind CSS e manipulação da classe `dark` no HTML.

---

## Deploy

Você pode publicar facilmente usando:

https://vercel.com

---

## Desenvolvido por

Kelly Faustino 💙
