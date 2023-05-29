export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=5b194620&s=${search}`)
    const data = await response.json()

    const movies = data.Search

    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster === 'N/A' ? 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png' : movie.Poster
    }))

    return mappedMovies
  } catch (error) {
    throw new Error('Error searching movies')
  }
}
