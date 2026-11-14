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

- `src/pages/` — uma página por arquivo (`index`, `sobre`, `case-1`)
- `src/layouts/BaseLayout.astro` — `<head>`, cabeçalho, contato e rodapé
- `src/components/` — partes reutilizáveis (`Header`, `Footer`, `Contato`, `CaseCard`)
- `src/styles/global.css` — estilos do site
- `public/img/` — imagens (servidas como `img/...`)

## Publicação

Cada push na `main` publica o site pelo workflow `.github/workflows/deploy.yml`.
Em **Settings → Pages**, o *Source* precisa estar como **GitHub Actions**.
