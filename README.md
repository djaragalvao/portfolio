# Portfólio

Site feito com [Astro](https://astro.build) e [Bun](https://bun.sh), publicado em https://djaragalvao.github.io/portfolio/.

## Rodando localmente

```sh
bun install       # instala as dependências
bun dev           # abre em http://localhost:4321/portfolio/
bun run build     # gera o site em dist/
bun preview       # serve o build localmente
```

## Estrutura

- `src/pages/` — a home (`index`, uma página só com todas as seções) e os cases em `cases/`
- `src/layouts/BaseLayout.astro` — `<head>`, tema claro/escuro, cabeçalho, contato e rodapé
- `src/components/` — partes reutilizáveis (`Header`, `ProjetoCard`, `TimelineItem`, `FeedbackCard`, `Stepper`, `CaseAbertura`...)
- `src/styles/global.css` — estilos e variáveis do design system (cores dos temas claro e escuro no topo)
- `public/img/` — imagens (servidas como `img/...`)

## Publicação

Cada push na `main` publica o site pelo workflow `.github/workflows/deploy.yml`.
Em **Settings → Pages**, o *Source* precisa estar como **GitHub Actions**.
