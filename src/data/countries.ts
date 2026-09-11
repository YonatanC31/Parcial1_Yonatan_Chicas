export type Country = {
  name: string
  population: string
  region: string
  capital: string
  flag: string
  alt: string
}

export const countries: Country[] = [
  {
    name: 'El Salvador',
    population: '6.3 M',
    region: 'América Central',
    capital: 'San Salvador',
    flag: '/assets/flags/el-salvador.svg',
    alt: 'Bandera de El Salvador',
  },
  {
    name: 'Japón',
    population: '124 M',
    region: 'Asia Oriental',
    capital: 'Tokio',
    flag: '/assets/flags/japon.svg',
    alt: 'Bandera de Japón',
  },
  {
    name: 'Brasil',
    population: '203 M',
    region: 'América del Sur',
    capital: 'Brasilia',
    flag: '/assets/flags/brasil.svg',
    alt: 'Bandera de Brasil',
  },
  {
    name: 'Islandia',
    population: '393 mil',
    region: 'Europa',
    capital: 'Reikiavik',
    flag: '/assets/flags/islandia.svg',
    alt: 'Bandera de Islandia',
  },
]
