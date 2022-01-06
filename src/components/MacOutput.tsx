import { Box, SxProps } from "@mui/material";

const classes = () => ({
  outputBox: {
    width: 400,
    height: "auto",
    marginTop: "50px",
    border: "1px solid grey",
    paddingLeft: "20px",
  } as SxProps,
});

export const MacOutput = () => {
  const string = ``;
  return (
    <Box sx={classes().outputBox}>
      <pre>{string}</pre>
    </Box>
  );
};
