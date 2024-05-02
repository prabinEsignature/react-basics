import PropTypes from "prop-types";
import { memo } from "react";

const Search = memo(function Search({ onChange: handleChange }) {
  console.log("search rerendered");
  return (
    <div>
      <input type="text" onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
});

Search.propTypes = {
  onChange: PropTypes.func,
};

export default Search;
