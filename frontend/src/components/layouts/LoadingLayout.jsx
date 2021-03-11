import { StyledSpinnerNext } from "baseui/spinner";
import { Paragraph1 } from "baseui/typography";
import React from "react";

const LoadingLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <StyledSpinnerNext />
      <Paragraph1 $style={{ paddingLeft: "1rem" }}>Loading</Paragraph1>
    </div>
  );
};

export default LoadingLayout;