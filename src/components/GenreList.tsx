import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, isLoading } = useGenres();
  console.log("Genres:", genres);
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
