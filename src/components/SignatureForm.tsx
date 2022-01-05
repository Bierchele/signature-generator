import { Box, TextField } from "@mui/material";
import { SxProps } from "@mui/system";
import { ISignatureInfo } from "../App";

const classes = () => ({
  formBox: {
    width: "400px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
  } as SxProps,

  nameBox: {
    display: "flex",
  } as SxProps,

  nameInput: {
    witdh: "200px",
    margin: "0px 15px 5px 0px",
  } as SxProps,
});

export const SignatureForm: React.FC<ISignatureInfo> = ({
  firstName,
  lastName,
  title,
  mobilNumber,
  fax,
  email,
}) => {
  const setSignatureInfos = (signatureFrgament: string) => {};
  return (
    <form>
      <Box sx={classes().formBox}>
        <Box sx={classes().nameBox}>
          <TextField
            sx={classes().nameInput}
            size="small"
            variant="outlined"
            value={firstName}
            label="Vorname"
          />
          <TextField
            size="small"
            variant="outlined"
            value={lastName}
            label="Nachname"
          />
        </Box>
        <Box>
          <TextField
            size="small"
            variant="outlined"
            value={title}
            fullWidth
            label="Title"
          />
          <TextField
            size="small"
            variant="outlined"
            value={mobilNumber}
            fullWidth
            label="Mobil"
          />
          <TextField
            size="small"
            variant="outlined"
            value={fax}
            fullWidth
            label="Fax"
          />
          <TextField
            size="small"
            variant="outlined"
            value={email}
            fullWidth
            label="E-Mail"
          />
        </Box>
      </Box>
    </form>
  );
};
