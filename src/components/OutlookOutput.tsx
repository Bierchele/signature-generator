import { Box, Link, SxProps, Typography } from "@mui/material";

import { ISignatureInfo } from "../App";

const classes = () => ({
  outputBox: {
    width: 400,
    height: "auto",
    marginTop: "50px",
    border: "1px solid grey",

    paddingLeft: "20px",
  } as SxProps,

  devider: {
    width: 250,
    borderTop: "1px solid #e8e8e8",
  } as SxProps,

  imgBox: {
    witdh: 150,
    height: 75,
  },
  contactBoxes: {
    width: "auto",
    display: "flex",
  } as SxProps,
});

export const OutlookOutput: React.FC<ISignatureInfo> = ({
  firstName,
  lastName,
  title,
  tel,
  email,
  mobilNumber,
  fax,
}) => {
  const infos = [
    [tel, "Telefon"],
    [fax, "Fax"],
    [mobilNumber, "Mobil"],
    [email, "E-Mail"],
  ];
  return (
    <Box sx={classes().outputBox}>
      <Box>&nbsp;</Box>
      <Box>&nbsp;</Box>
      <Box>&nbsp;</Box>
      <Box sx={classes().imgBox}>
        <Box
          sx={{ width: 150, height: 75 }}
          component="img"
          src="https://signature.ticket.io/img/tio_logo.png"
        />
      </Box>
      <Box>&nbsp;</Box>
      <Box sx={classes().devider}></Box>
      <Box>&nbsp;</Box>
      <Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h6" color="primary.main">
            {firstName ? firstName.toUpperCase() : firstName}
          </Typography>
          &nbsp;
          <Typography variant="h6" color="primary.main">
            {lastName ? lastName.toUpperCase() : lastName}
          </Typography>
        </Box>
        <Typography
          sx={{ lineHeight: "1" }}
          variant="subtitle1"
          color="info.main"
        >
          {title}
        </Typography>
      </Box>

      <Box>&nbsp;</Box>
      <Box>
        <Typography variant="subtitle2">ticket i/O GmbH</Typography>
        <Typography variant="subtitle2">Im Zollhafen 2-4</Typography>
        <Typography variant="subtitle2">50678 Köln</Typography>
      </Box>
      <Box>&nbsp;</Box>
      <Box sx={classes().contactBoxes}>
        <Box sx={{ width: "auto" }}>
          {infos.map((signaturInfo, key) => {
            return signaturInfo[0] ? (
              <Typography
                sx={{ height: "21px" }}
                variant="h6"
                color="primary.main"
              >
                {signaturInfo[1]}
              </Typography>
            ) : (
              <Box />
            );
          })}
          <Typography variant="h6" color="primary.main">
            Web
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "20px",
          }}
        >
          {infos.map((signaturInfo, key) => {
            return signaturInfo[0] ? (
              <Typography sx={{ height: "21px" }} variant="subtitle2">
                {signaturInfo[0]}
              </Typography>
            ) : (
              <Box />
            );
          })}

          <Typography sx={{ height: "21px" }} variant="subtitle2">
            <Link href="https://ticket.io/">https://ticket.io</Link>
          </Typography>
        </Box>
      </Box>
      <Box>&nbsp;</Box>
      <Box sx={classes().devider}></Box>
      <Box>&nbsp;</Box>
      <Box>
        <Typography variant="subtitle2" color="info.main">
          HRB 87898, Amtsgericht Köln
        </Typography>
        <Typography variant="subtitle2" color="info.main">
          GF: Jannusch Frontzek
        </Typography>
      </Box>
      <Box>&nbsp;</Box>
    </Box>
  );
};
