import React, { useState } from 'react';
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Slide,
  Dialog,
} from '@material-ui/core';

import PropTypes from 'prop-types';

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Popup = ({ open, setOpenPopup, content }) => {
  const isOpen = false;
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => setOpenPopup(false)}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">Notification</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpenPopup(false)} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

Popup.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpenPopup: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default Popup;
