import React from "react";

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function PokemonDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{selectedValue.name} - {selectedValue.order}</DialogTitle>
            <DialogContent dividers>
                <Typography gutterBottom>
                    weight: {selectedValue.weight}
                </Typography>
                <Typography gutterBottom>
                    height: {selectedValue.height}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose}>
                    CLOSE
                </Button>
            </DialogActions>
        </Dialog>
    );
}
