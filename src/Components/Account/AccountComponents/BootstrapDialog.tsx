import React from 'react';
import { DialogTitle } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = (props) => {

    return (
        <div>
            <Dialog open={props.open} onClose={props.onClose}>
                    <DialogTitle sx={{ fontFamily: 'Hind', fontSize: '20px'}} >
                        {props.title}
                        <IconButton
                            aria-label="close"
                            onClick={props.onClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 11,
                                color: (theme) => theme.palette.grey[500],
                            }}
                            >
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    {props.children}
                </Dialog>
        </div>
    )
}

export default BootstrapDialog;