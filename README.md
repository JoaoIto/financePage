# FinancePro - Página de Divulgação

<img src="./public/img.png">

## Sobre o Projeto

Este projeto é uma página de divulgação (landing page) para o FinancePro, uma aplicação de gerenciamento financeiro pessoal. A página foi desenvolvida para apresentar as principais características e benefícios do FinancePro, incentivando os visitantes a experimentar a plataforma.

## Características

- Design responsivo e moderno
- Animações suaves utilizando Framer Motion
- Seções interativas demonstrando funcionalidades do FinancePro
- Gráficos dinâmicos para visualização de dados financeiros
- Formulários de exemplo para entrada de receitas e despesas

## Tecnologias Utilizadas

- React
- Next.js
- Tailwind CSS
- Framer Motion
- Recharts (para gráficos)
- Componentes UI personalizados

## Estrutura do Projeto

```

financeproLanding/
│
├── public/
│   ├── print.png
│   └── [outros assets públicos]
│
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       └── table.tsx
│   │
│   └── app/
│       └── page.tsx
│
├── README.md
└── package.json

```

## Conteúdo Público

Na pasta `public/`, você encontrará os seguintes arquivos:

- `print.png`: Uma captura de tela do dashboard do FinancePro, utilizada na seção "Dashboard Intuitivo" da landing page.
- Outros assets públicos que podem incluir ícones, imagens de fundo ou logos utilizados na página.

## Como Executar o Projeto

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Execute o servidor de desenvolvimento com `npm run dev`
4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## Personalização

Para personalizar a landing page:

1. Modifique o conteúdo em `src/app/page.tsx`
2. Atualize os estilos em `src/app/globals.css`
3. Substitua as imagens na pasta `public/` conforme necessário

## Contribuição

Contribuições são bem-vindas! Por favor, abra uma issue ou envie um pull request para sugerir melhorias ou adicionar novos recursos.

## Autor

Esta landing page foi desenvolvida por [@JoaoIto](https://github.com/JoaoIto) como parte do projeto FinancePro.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

This README.md file provides a comprehensive overview of the FinancePro landing page project in Portuguese. It includes information about the project's purpose, features, technologies used, project structure, public assets, setup instructions, customization guidelines, contribution information, author credits, and licensing details.

To implement this README:

1. Create a new file named `README.md` in the root directory of your project.
2. Copy and paste the content provided above into the file.
3. If necessary, update any specific details about file locations, additional public assets, or project structure to match your actual project setup.
4. If you have a `LICENSE` file, ensure it's present in the project root. If not, consider adding one to clarify the terms under which your project can be used or modified.


This README will help anyone who accesses your project repository to understand what the project is about, how it's structured, and how to get it up and running. It also provides clear information about the public assets used in the project, specifically mentioning the `print.png` file used for the dashboard screenshot.


---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
