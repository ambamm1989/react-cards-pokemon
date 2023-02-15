import { v4 as uuid} from './uuid'

function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

function formatCard(data) {
  return {
    image: data.card[0].image,
    id: uuid()
  };
}

function formatPokemons(data) {
  return {
    id: uuid(),
    back: data.sprite.back_default,
    name: data.name,
    front: data.sprite.front_default,
    stats: data.stats.map(stat => ({
      values: stat.base_stat,
      name: stat.stat.name
    }))
  };
}

export { choice, formatCard, formatPokemons };