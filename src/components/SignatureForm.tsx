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
});

export const SignatureForm: React.FC<ISignatureInfo> = ({
  setSignatureInfo,
  ...signatureInfo
}) => {
  return (
    <form>
      <Box sx={classes().formBox}>
        <Box sx={classes().nameBox}>
          <TextField
            sx={{ marginRight: "5px" }}
            size="small"
            variant="outlined"
            value={signatureInfo.firstName}
            label="Vorname"
            fullWidth
            onChange={(e) =>
              setSignatureInfo({ ...signatureInfo, firstName: e.target.value })
            }
          />
          <TextField
            sx={{ marginLeft: "5px" }}
            size="small"
            variant="outlined"
            value={signatureInfo.lastName}
            label="Nachname"
            fullWidth
            onChange={(e) =>
              setSignatureInfo({ ...signatureInfo, lastName: e.target.value })
            }
          />
        </Box>
        <Box>
          <TextField
            sx={{ marginTop: "7px" }}
            size="small"
            variant="outlined"
            value={signatureInfo.title}
            fullWidth
            label="Title"
            onChange={(e) =>
              setSignatureInfo({ ...signatureInfo, title: e.target.value })
            }
          />
          <TextField
            sx={{ marginTop: "7px" }}
            size="small"
            variant="outlined"
            value={signatureInfo.tel}
            fullWidth
            label="Telefon"
            onChange={(e) =>
              setSignatureInfo({
                ...signatureInfo,
                tel: e.target.value,
              })
            }
          />
          <TextField
            sx={{ marginTop: "7px" }}
            size="small"
            variant="outlined"
            value={signatureInfo.mobilNumber}
            fullWidth
            label="Mobil"
            onChange={(e) =>
              setSignatureInfo({
                ...signatureInfo,
                mobilNumber: e.target.value,
              })
            }
          />
          <TextField
            sx={{ marginTop: "7px" }}
            size="small"
            variant="outlined"
            value={signatureInfo.fax}
            fullWidth
            label="Fax"
            onChange={(e) =>
              setSignatureInfo({ ...signatureInfo, fax: e.target.value })
            }
          />
          <TextField
            sx={{ marginTop: "7px" }}
            size="small"
            variant="outlined"
            value={signatureInfo.email}
            fullWidth
            label="E-Mail"
            onChange={(e) =>
              setSignatureInfo({ ...signatureInfo, email: e.target.value })
            }
          />
        </Box>
      </Box>
    </form>
  );
};
