import React from "react";

const Info = (props) => (
  <>
    <h2> This was passed as props: {props.name}</h2>
    <h2> And this too: {props.numberId}</h2>
  </>
);

export default Info;
