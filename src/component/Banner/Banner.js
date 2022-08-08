import { Box, Typography } from '@mui/material';
import { fontWeight } from '@mui/system';
import React from 'react';
import IMG_BACKGROUND from '../../constant/img';

const bannerContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

    padding: '5rem',
};

function Banner({ text, img }) {
    return (
        <Box
            sx={bannerContainer}
            style={{
                backgroundImage: `url(${
                    img ? IMG_BACKGROUND[img] : IMG_BACKGROUND.default
                })`,
            }}
        >
            <Typography
                sx={{
                    color: '#f5f6fa',
                    fontWeight: '400',
                    backgroundColor: '#00000052',
                    padding: '0.6rem 2rem',
                    borderRadius: '10px',
                    textAlign: 'center',
                    width: 'fit-content'
                }}
                variant="h2"
                component="h2"
            >
                {text}
            </Typography>
        </Box>
    );
}

export default Banner;
