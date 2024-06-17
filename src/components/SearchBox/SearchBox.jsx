import css from "./SearchBox.module.css";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { statusFilters, selectNameFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  return (
    <>
      <h2>Find contacts by name</h2>
      <input
        className={css.box}
        type="text"
        id={id}
        value={filter}
        onChange={(event) => dispatch(statusFilters(event.target.value))}
      />
    </>
  );
}
