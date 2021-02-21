import React from "react";

export const Small = React.memo(({ value }) => {
  console.log("Llamada de hook Small");
  return <small>{value}</small>;
});
