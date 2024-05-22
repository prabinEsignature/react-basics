import { useCallback, useRef, useState } from "react";
import Billboard from "../components/Billboard";
import MovieList from "../components/MovieList";
import Navbar from "../components/Navbar";
import useMoviesList from "../hooks/useMoviesList";
import LoadingCards from "../components/LoadingCards";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";

const BrowsePage = () => {
  const [offset, setOffset] = useState(0);
  const { data, loading, error } = useMoviesList(offset);
  const observer = useRef<null | IntersectionObserver>();

  const { user, isLoading } = useSelector(
    (state: RootState) => state.user.value
  );

  console.log(isLoading, user);

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setOffset(offset + 12);
        }
      });

      if (node) observer.current.observe(node);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading]
  );

  if (error === "Unauthorized; no plan") return <Navigate to="/plans" />;

  return (
    <div>
      <Navbar />
      <Billboard />
      <div className="pb-5">
        {loading && <Loader />}
        {error && <p>{error}</p>}
        {data && <MovieList movies={data} lastElementRef={lastElementRef} />}
        {loading ? <LoadingCards /> : null}
      </div>
    </div>
  );
};

export default BrowsePage;
