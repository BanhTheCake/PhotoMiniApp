import { Box, Button, Modal, Typography } from '@mui/material';
import React from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 3,
    '& img' : {
        width: '100%',
        heigh: '100%',
        objectFit: 'contain'
    }
  };

export default function ShowItem({ isOpenModal, handleClose, photoSelected }) {
  
    return (
      <div>
        <Modal
          open={isOpenModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img src={photoSelected.img} alt="SomeThing Wrong ... " />
          </Box>
        </Modal>
      </div>
    );
  }
