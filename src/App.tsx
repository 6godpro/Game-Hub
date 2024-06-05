import GameGrid from "./components/GameGrid";
import GenreListView from "./components/GenreListView";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import { useState } from "react";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
  });

  return (
    // templateAreas define the grid pattern of the website
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "270px 1fr",
      }}
    >
      {/* area positions a particular GridItem in the Grid */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreListView
            selectedGenre={gameQuery.genre}
            setSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
