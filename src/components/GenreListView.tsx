import { Heading } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreList from "./GenreList";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  setSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreListView = ({ selectedGenre, setSelectedGenre }: Props) => {
  const { data } = useGenres();
  // const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {/* {error && null} */}
      <Heading marginBottom={3} fontSize='2xl'>Genres</Heading>
      {/* {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)} */}
      <GenreList
        onSelectGenre={(genre) => setSelectedGenre(genre)}
        genres={data}
        selectedGenre={selectedGenre}
      />
    </>
  );
};

export default GenreListView;
