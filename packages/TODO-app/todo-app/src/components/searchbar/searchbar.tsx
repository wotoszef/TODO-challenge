import React from "react";
import { SearchbarWrapper } from "./searchbar.style";
import { FormInput } from "../todo-form/todo-form.style";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <SearchbarWrapper>
      <FormInput
        type="text"
        placeholder="Search TODOs"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </SearchbarWrapper>
  );
};

export default SearchBar;
