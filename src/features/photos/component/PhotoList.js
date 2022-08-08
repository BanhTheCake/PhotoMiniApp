import { Button, Grid, Modal, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import ShowItem from '../../../component/Modals/ShowItem';
import PhotoItem from './PhotoItem';

function PhotoList({ photoList, handleEditPhoto, handleDeletePhoto }) {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [photoSelected, setPhotoSelected] = useState('')

    const handleClose = () => {
        setIsOpenModal(false)
    }

    const handleOpen = (photo) => {
        setIsOpenModal(true)
        setPhotoSelected(photo)
    }

    return (
        <>
            {photoList &&
                photoList.length > 0 &&
                photoList.map((photo) => {
                    return (
                        <Grid key={photo.id} item md={3} sm={6} xs={12}>
                            <PhotoItem
                                handleOpen={handleOpen}
                                photo={photo}
                                handleDeletePhoto={handleDeletePhoto}
                                handleEditPhoto={handleEditPhoto}
                            />
                        </Grid>
                    );
                })}
            <ShowItem isOpenModal={isOpenModal} handleClose={handleClose} photoSelected={photoSelected} />
        </>
    );
}

export default PhotoList;
