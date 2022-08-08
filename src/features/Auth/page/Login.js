import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../../firebase/config';
import { useNavigate } from "react-router-dom";


function Login(props) {
    const provider = new GoogleAuthProvider();
    let navigate = useNavigate();

    const handleLoginGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
               return navigate("/");
            })
            .catch((error) => {
                throw new Error('SomeThing wrong with login with popup')
            });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            mt={4}
        >
            <Typography mb={3} variant="h3" component="div">
                Photo App
            </Typography>
            <Button onClick={handleLoginGoogle} variant="contained">Login with Google</Button>
        </Box>
    );
}

export default Login;
