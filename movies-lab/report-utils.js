export const getDirectorLine = movie => `Director:${movie.director.name}`;

export const getShortMovies = movies =>
  movies.filter(movie => {
   return movie.duration < 100
  });

export const findByTitle = (movies, title) =>
  movies.find(movie => movie.title === title );

export const getOscarsLine = movie => `Oscars:${movie.awards?.oscars ?? 0}`;

export const sortByYear = movies => [...movies].sort((a, b) => a.year - b.year);

export const markAsWatched = (movies, id) => {
  const copy = [...movies];
  const movie = copy.find(movie => movie.id === id);
  const movieCopy = { ...movie };
  movieCopy.watched = true;
  copy[copy.indexOf(movie)] = movieCopy;
  return copy;
};

export const renameActor = (movie, index, newName) => {
  const copy = { ...movie };
  copy.cast = [...movie.cast];
  copy.cast[index] = { ...movie.cast[index] };
  copy.cast[index].name = newName;
  return copy;
};
