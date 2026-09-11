import './style.css'
import { countries, type Country } from './data/countries'

type Page = 'home' | 'resultados' | 'detalle'

const bodyPage = document.body.dataset.page as Page | undefined
const app = document.querySelector<HTMLElement>('#app')

if (!app) throw new Error('No se encontró #app')

const buttonClasses = [
  'inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-md',
  'text-label font-semibold text-text-inverse transition',
  'hover:bg-primary-dark hover:shadow-card',
  'active:bg-primary-dark active:shadow-inner',
  'focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-focus',
].join(' ')

function header(active: 'Inicio' | 'Resultados') {
  const item = (label: 'Inicio' | 'Resultados', href: string) => {
    const current = active === label
    return `<a href="${href}" ${current ? 'aria-current="page"' : ''}
      class="relative py-2 text-label font-medium text-text-inverse focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-focus">
      ${label}
      ${current ? '<span class="absolute inset-x-0 -bottom-0.5 h-[3px] rounded-full bg-secondary" aria-hidden="true"></span>' : ''}
    </a>`
  }

  return `
    <header class="h-20 bg-primary text-text-inverse">
      <div class="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-10 lg:px-20">
        <a href="/" class="text-section font-semibold tracking-tight text-text-inverse">Explorer</a>
        <nav aria-label="Navegación principal" class="hidden items-center gap-7 md:flex">
          ${item('Inicio', '/')}
          ${item('Resultados', '/resultados.html')}
          <a href="#acerca" class="py-2 text-label font-medium text-text-inverse focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-focus">Acerca de</a>
        </nav>
        <span class="text-label font-medium md:hidden" aria-label="Navegación compacta">Menú</span>
      </div>
    </header>`
}

function searchControls() {
  return `
    <form class="grid gap-4 md:grid-cols-[minmax(0,1fr)_13rem] lg:grid-cols-[minmax(0,790px)_260px]" aria-label="Controles de búsqueda">
      <label class="flex h-14 items-center gap-sm rounded-sm border border-border bg-surface px-md focus-within:outline-3 focus-within:outline-offset-2 focus-within:outline-focus">
        <span aria-hidden="true" class="text-section text-text-secondary">⌕</span>
        <span class="sr-only">Buscar un país</span>
        <input type="search" placeholder="Buscar un país…" class="min-w-0 flex-1 bg-transparent text-body text-text-primary outline-none placeholder:text-text-secondary" />
      </label>
      <label class="sr-only" for="region">Filtrar por región</label>
      <select id="region" class="h-14 rounded-sm border border-border bg-surface px-md text-body text-text-secondary outline-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-focus">
        <option>Filtrar por región</option>
        <option>América</option>
        <option>Asia</option>
        <option>Europa</option>
      </select>
    </form>`
}

function countryCard(country: Country) {
  return `
    <article class="group overflow-hidden rounded-lg border border-border bg-surface shadow-card">
      <div class="aspect-[5/3] w-full overflow-hidden bg-surface">
        <img src="${country.flag}" alt="${country.alt}" class="h-full w-full object-cover" />
      </div>
      <div class="flex flex-col gap-xs p-md">
        <h3 class="text-card font-bold text-text-primary">${country.name}</h3>
        <dl class="grid gap-1 text-label font-medium text-text-secondary">
          <div><dt class="inline">Población</dt><dd class="inline"> · ${country.population}</dd></div>
          <div><dt class="inline">Región</dt><dd class="inline"> · ${country.region}</dd></div>
          <div><dt class="inline">Capital</dt><dd class="inline"> · ${country.capital}</dd></div>
        </dl>
        <a href="/detalle.html" class="${buttonClasses} mt-1 w-fit">Ver detalles</a>
      </div>
    </article>`
}

function cardsGrid() {
  return `<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">${countries.map(countryCard).join('')}</div>`
}

function footer() {
  return `
    <footer id="acerca" class="mt-16 border-t border-border bg-surface">
      <div class="mx-auto max-w-7xl px-5 py-6 text-label text-text-secondary md:px-10 lg:px-20">
        Explorer App · Interfaz estática responsiva
      </div>
    </footer>`
}

function homePage() {
  return `
    ${header('Inicio')}
    <main class="mx-auto min-h-[calc(100vh-80px)] max-w-7xl px-5 pb-xl pt-lg md:px-10 md:pt-xl lg:px-20 lg:pt-xl">
      <section aria-labelledby="home-title">
        <p class="mb-2 text-label font-medium uppercase tracking-wide text-primary">Descubra · Compare · Aprenda</p>
        <h1 id="home-title" class="text-[2rem] font-semibold leading-10 text-text-primary md:text-title">Explora el mundo</h1>
        <p class="mt-2 max-w-4xl text-body text-text-secondary">Busque un país, filtre por región y descubra información esencial en una experiencia clara y accesible.</p>
      </section>
      <section class="mt-10" aria-label="Búsqueda y filtros">${searchControls()}</section>
      <section class="mt-12" aria-labelledby="featured-title">
        <h2 id="featured-title" class="mb-6 text-section font-semibold text-text-primary">Países recomendados</h2>
        ${cardsGrid()}
      </section>
    </main>
    ${footer()}`
}

function resultsPage() {
  return `
    ${header('Resultados')}
    <main class="mx-auto min-h-[calc(100vh-80px)] max-w-7xl px-5 pb-xl pt-lg md:px-10 md:pt-xl lg:px-20 lg:pt-xl">
      <section aria-labelledby="results-title">
        <p class="mb-2 text-label font-medium uppercase tracking-wide text-primary">Búsqueda · América</p>
        <h1 id="results-title" class="text-[2rem] font-semibold leading-10 text-text-primary md:text-title">Resultados de búsqueda</h1>
        <p class="mt-2 max-w-4xl text-body text-text-secondary">Mostrando 4 países relacionados con su búsqueda. Ajuste el filtro para explorar otras regiones.</p>
      </section>
      <section class="mt-10" aria-label="Búsqueda y filtros">${searchControls()}</section>
      <section class="mt-12" aria-labelledby="count-title">
        <h2 id="count-title" class="mb-6 text-section font-semibold text-text-primary">4 países encontrados</h2>
        ${cardsGrid()}
      </section>
    </main>
    ${footer()}`
}

function detailPage() {
  const country = countries[0]
  return `
    ${header('Resultados')}
    <main class="mx-auto min-h-[calc(100vh-80px)] max-w-7xl px-5 pb-xl pt-lg md:px-10 md:pt-11 lg:px-20">
      <section aria-labelledby="country-title">
        <div class="flex items-center gap-4">
          <a href="/resultados.html" aria-label="Regresar a resultados" class="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-section font-semibold text-text-primary focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-focus">←</a>
          <p class="text-label font-medium uppercase tracking-wide text-primary">América Central</p>
        </div>
        <h1 id="country-title" class="mt-6 text-[2rem] font-semibold leading-10 text-text-primary md:text-title">${country.name}</h1>
        <div class="mt-8 grid items-start gap-8 lg:grid-cols-[480px_610px] lg:gap-[70px]">
          <div class="overflow-hidden rounded-lg bg-surface">
            <img src="${country.flag}" alt="${country.alt}" class="aspect-[5/3] h-auto w-full object-cover" />
          </div>
          <section aria-labelledby="info-title" class="rounded-lg border border-border bg-surface p-lg shadow-card">
            <h2 id="info-title" class="text-section font-semibold text-text-primary">Información general</h2>
            <dl class="mt-4 grid gap-[18px] text-body text-text-secondary">
              <div><dt class="inline">Capital</dt><dd class="inline"> · San Salvador</dd></div>
              <div><dt class="inline">Población</dt><dd class="inline"> · 6.3 millones</dd></div>
              <div><dt class="inline">Región</dt><dd class="inline"> · América Central</dd></div>
              <div><dt class="inline">Idiomas</dt><dd class="inline"> · Español</dd></div>
              <div><dt class="inline">Fronteras</dt><dd class="inline"> · Guatemala y Honduras</dd></div>
            </dl>
            <a href="/resultados.html" class="${buttonClasses} mt-6 w-fit">Comparar país</a>
          </section>
        </div>
      </section>
    </main>
    ${footer()}`
}

app.innerHTML = bodyPage === 'resultados' ? resultsPage() : bodyPage === 'detalle' ? detailPage() : homePage()
