import React from "react";

import { Link, useSearchParams } from "react-router-dom";

import { PaginationItem, Pagination } from "@mui/material";
import { PaginationWrapper } from "./styles";

interface IProps {
  dataCount: number;
}

export default function MainPagination(props: IProps) {
  const { dataCount } = props;
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page");
  const search = searchParams.get("search");

  return (
    <PaginationWrapper>
      <Pagination
        page={page ? +page : 1}
        count={Math.round(dataCount / 10)}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={`/dashboard${item.page === 1 ? "" : `?page=${item.page}`}${
              search ? `&search=${search}` : ""
            }`}
            {...item}
          />
        )}
      />
    </PaginationWrapper>
  );
}
