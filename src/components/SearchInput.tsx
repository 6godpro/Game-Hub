import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        variant="filled"
        onChange={(e) => console.log(e.target.value)}
        placeholder="Search games..."
      />
    </InputGroup>
  );
};

export default SearchInput;
