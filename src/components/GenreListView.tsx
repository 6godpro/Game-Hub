import useGenres from "../hooks/useGenres";
import { Text } from "@chakra-ui/react";
import GenreList from "./GenreList";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreListView = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && null}
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
      <GenreList genres={data} />
    </>
  );
};

export default GenreListView;
