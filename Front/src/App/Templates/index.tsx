import React from "react";

import Box from "@mui/material/Box";

import useStyles from "./styles";

type TemplateProps = {
  children: React.ReactNode;
};

const Template = ({ children }: TemplateProps) => {
  const style = useStyles();

  return (
    <>
      <Box sx={style.root}>
      {children}
      </Box>
    </>
  );
};

export default Template;
