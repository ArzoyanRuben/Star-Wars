import { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { CardList } from "../../components/CardList";
import { Loader } from "../../components/Loader";
import { NoData } from "../../components/NoData";
import { MainPagination } from "../../components/Pagination";
import Search from "../../components/Search/Search";
import { useAppSelector } from "../../store";

import { vehicleOp, vehicleSel } from "../../store/vehicle/index";

const Dashboard: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const data = useAppSelector(vehicleSel.vehicles);
  const isLoading = useAppSelector(vehicleSel.isLoading);
  const dataCount = useAppSelector(vehicleSel.dataCount);

  const page = searchParams.get("page");
  const search = searchParams.get("search");

  useEffect(() => {
    dispatch(vehicleOp.getVehiclesDataAsync({ page, search }));
  }, [page, search]);

  return isLoading || !data ? (
    <Loader />
  ) : (
    <div>
      <Search />
      {!data.length ? (
        <NoData />
      ) : (
        <>
          <CardList itemList={data} />
          {dataCount && <MainPagination dataCount={dataCount} />}
        </>
      )}
    </div>
  );
};

export default Dashboard;
