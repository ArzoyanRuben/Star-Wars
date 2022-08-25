import { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { useAppSelector } from "../../store";
import { vehicleOp, vehicleSel } from "../../store/vehicle";

import {
  NoData,
  MainPagination,
  Search,
  CardList,
  Loader,
} from "../../components";

function Dashboard() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const data = useAppSelector(vehicleSel.vehicles);
  const isLoading = useAppSelector(vehicleSel.isLoading);
  const dataCount = useAppSelector(vehicleSel.dataCount);

  const page = searchParams.get("page");
  const search = searchParams.get("search");

  useEffect(() => {
    dispatch(vehicleOp.getVehicleListDataAsync({ page, search }));
  }, [page, search]);

  if (isLoading || !data) {
    return <Loader />;
  }

  return (
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
}

export default Dashboard;
