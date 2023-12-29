import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres, isLoading } = useGenres();

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
