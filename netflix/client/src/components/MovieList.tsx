import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <div className="px-12 mt-4 space-y-8">
      <div>
        <p className="text-blacktext-2xl font-semibold mb-4"> Popular Shows</p>
        <div className="grid grid-cols-4 gap-2">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
