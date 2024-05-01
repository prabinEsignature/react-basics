import PropTypes from "prop-types";
import { memo } from "react";

const Child = memo(function Child({ prop }) {
  console.log("child is re-rendering");
  return (
    <div>
      <h1>{prop}</h1>
    </div>
  );
});

Child.propTypes = {
  prop: PropTypes.any,
};

export default Child;
