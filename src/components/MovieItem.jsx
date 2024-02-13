export const MovieItem = ({ movieData }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
        alt={movieData.title}
      />
      <h1>{movieData.title}</h1>
      <p>User score:{movieData.popularity}%</p>
      <h2>Owerview</h2>
      <p>{movieData.overview}</p>
      <h3>Ganres </h3>
      <ul>
        {movieData.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};
