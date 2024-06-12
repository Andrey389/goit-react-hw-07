import css from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
// import {  } from "../../redux/store";
import { setStatusFilter, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilter = (event) => {
    const name = event.target.value.trim();
    dispatch(setStatusFilter(name));
  };
  return (
    <>
      <h2>Find contacts by name</h2>
      <input
        className={css.box}
        type="text"
        value={filter}
        onChange={handleFilter}
      />
    </>
  );
}
