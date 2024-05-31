import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    // templateAreas define the grid pattern of the website
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      {/* area positions a particular GridItem in the Grid */}
      <GridItem area="nav" bg="red">
        NavBar
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="coral">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
