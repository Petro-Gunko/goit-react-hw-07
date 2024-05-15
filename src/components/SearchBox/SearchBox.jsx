import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const reduxValue = useSelector(selectNameFilter);

  return (
    <div>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={reduxValue}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
