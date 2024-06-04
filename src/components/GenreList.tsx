import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  genres: Genre[];
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ genres, selectedGenre, onSelectGenre}: Props) => {
  const sortedGenres = [...genres].sort((a, b) => a.name.localeCompare(b.name))

  return (
    <List>
      {sortedGenres.map((genre) => (
        <ListItem paddingY="5px" key={genre.id}>
          <HStack>
            <Image
              borderRadius={8}
              boxSize="32px"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="lg"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
