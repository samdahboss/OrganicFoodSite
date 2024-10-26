import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
// import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function BasicModal({ currentProduct }) {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img
            src={currentProduct.lgImage}
            alt="Modal Image"
            style={{ width: "100%", borderRadius: 8 }}
          />
        </Box>
        {/* <Typography>
          {currentProduct.title}
        </Typography> */}
      </Modal>
    </div>
  );
}

BasicModal.propTypes = {
  currentProduct: PropTypes.object,
};
