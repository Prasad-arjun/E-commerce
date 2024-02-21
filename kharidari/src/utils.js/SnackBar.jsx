import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export const SnackBar = ({open ,onClose,vertical="top", horizontal="center"}) => {
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={onClose}
        autoHideDuration={1200}
        key={vertical + horizontal}
      >
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Added to cart
        </Alert>
      </Snackbar>
    </>
  );
};
