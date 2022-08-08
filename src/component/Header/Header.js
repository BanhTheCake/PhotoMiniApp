import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import React from 'react';

import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { auth } from '../../firebase/config';

const headerContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.6rem',
};

function Header( ) {

    const { isHasUser } = useSelector(state => state.user)

    const handleSignOut = () => {
        auth.signOut()
    }

    console.log('isHasUser: ', isHasUser);

    return (
        <div>
            <Container sx={headerContainer}>
                <Typography variant="h6" component="div">
                    <Link
                        color="inherit"
                        underline="none"
                        href="https://redux-toolkit.js.org/"
                        target="_blank"
                        sx={{
                            transition: 'all 0.2s linear',
                            '&:hover': {
                                color: '#9c88ff',
                            },
                        }}
                    >
                        Redux-toolkits
                    </Link>
                </Typography>
                <Typography variant="h6" component="div">
                    <Link
                        color="inherit"
                        underline="none"
                        sx={{
                            transition: 'all 0.2s linear',
                            '&:hover': {
                                color: '#9c88ff',
                            },
                            '& .nav-link-header': {
                                textDecoration: 'none',
                                color: 'inherit',
                            },
                        }}
                    >
                        {isHasUser ? (
                            <Button onClick={handleSignOut}>Sign Out</Button>
                        ) : (
                            <NavLink className="nav-link-header" to="/login">
                                Sign in
                            </NavLink>
                        )}
                    </Link>
                </Typography>
            </Container>
        </div>
    );
}

export default Header;
