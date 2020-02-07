import React from "react";
import { InputBase, InputLabel, Select, FormControl } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector, useDispatch } from "react-redux";
import { setSearch, setOrder } from "../../ducks/reducers/filterReducer";
import { useStyles } from "../../styles/drawer";

const renderOptions = options =>
  options.map((option, i) => (
    <option value={option.value} key={i}>
      {option.label}
    </option>
  ));

export const Filters = () => {
  const classes = useStyles;
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>

        <InputBase
          placeholder="Search…"
          onChange={() => dispatch(setSearch(event.target.value))}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel}>Sort By</InputLabel>
        <Select
          id="demo-simple-select"
          value={filters.orderBy}
          labelWidth={labelWidth}
          onChange={e => {
            dispatch(setOrder(e.target.value));
          }}
        >
          {renderOptions(filters.orderByOptions)}
        </Select>
      </FormControl>
    </>
  );
};
