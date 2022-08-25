import React, { ChangeEvent, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

import { SearchWrapper } from "./styled";

export function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const handler = useRef<ReturnType<typeof setTimeout>>(0);

  const search: string | null = searchParams.get("search");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;

    if (handler !== undefined) {
      clearTimeout(handler.current as ReturnType<typeof setTimeout>);
    }

    handler.current = setTimeout(() => {
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
