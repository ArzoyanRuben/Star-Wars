import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

import { SearchWrapper } from "./styled";

export function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const search: string | null = searchParams.get("search");
  let handler: any;
  const handleChange = (event: any) => {
    const value: string = event.target.value;

    if (handler !== undefined) {
      clearTimeout(handler);
    }

    handler = setTimeout(() => {
      navigate(`/dashboard${value ? `?search=${value}&page=1` : ""}`);
    }, 300);
  };

  return (
    <SearchWrapper>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        defaultValue={search || undefined}
      />
      <SearchIcon />
    </SearchWrapper>
  );
}

export default Search;
