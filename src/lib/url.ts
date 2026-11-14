// Prefixa caminhos internos com o "base" do site (/portfolio no GitHub Pages).
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

// Compara o caminho atual com um link interno, ignorando a barra final.
export function isCurrent(pathname: string, path: string) {
  const strip = (p: string) => p.replace(/\/$/, '');
  return strip(pathname) === strip(url(path));
}
