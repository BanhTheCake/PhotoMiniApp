import { Button, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function PhotoItem({ handleEditPhoto, handleDeletePhoto, photo, handleOpen }) {
    return (
        <Paper
            onClick={() => {
                handleOpen(photo)
            }}
            sx={{
                width: '100%',
                height: '200px',
                position: 'relative',
                borderRadius: '6px',
                overflow: 'hidden',
                '& .photo-img': {
                    objectFit: 'cover',
                    transition: 'all .25s linear',
                },
            }}
            elevation={3}
        >
            <Box
                sx={{
                    position: 'absolute',
                    inset: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    zIndex: '99',
                    opacity: '0',
                    transition: 'all .25s linear',
                    padding: '1rem',

                    '.buttonGroup': {
                        width: '100%',
                        marginTop: 'auto',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                    },

                    '& p': {
                        margin: '0',
                        overflowWrap: 'break-word',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 4,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        wordBreak: 'break-word',
                    },

                    '&:hover + .photo-img': {
                        filter: 'brightness(0.5)',
                        transform: 'scale(1.1)',
                    },
                    '&:hover': {
                        opacity: '1',
                        color: 'white',
                    },
                }}
            >
                <p>{photo.Title}</p>
                <p>{photo.Descriptions}</p>
                <div className="buttonGroup">
                    <Button
                        onClick={(e) => {
                            e.stopPropagation()
                            return handleEditPhoto(photo.id)
                        }}
                        color="primary"
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={(e) => {
                            e.stopPropagation()
                            return handleDeletePhoto(photo.id)
                        }}
                        color="error"
                    >
                        Delete
                    </Button>
                </div>
            </Box>
            <img
                className="photo-img"
                width="100%"
                height="100%"
                src={photo.img}
                alt="SomeThing Wrong ... "
            ></img>
        </Paper>
    );
}

export default PhotoItem;
