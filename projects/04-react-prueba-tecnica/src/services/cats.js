export const getRandomCat = async (firstWord) => {
  const res = await fetch(`https://cataas.com/cat/says/${firstWord}`)
  const response = res.json
  const { url } = response
  return url
}
