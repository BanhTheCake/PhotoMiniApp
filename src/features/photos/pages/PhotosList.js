import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, Navigate } from 'react-router-dom';
import productApi from '../../../api/productApi';
import { setIsHasUser } from '../../../app/userSlice';
import Banner from '../../../component/Banner/Banner';
import Header from '../../../component/Header/Header';
import { auth } from '../../../firebase/config';
import PhotoList from '../component/PhotoList';
import { deletePhoto } from '../photoSlice';

function PhotosList(props) {
    const photoList = useSelector((state) => state.photos);
    const { isHasUser, currentUser } = useSelector((state) => state.user)
    const dispatch = useDispatch();
    let navigate = useNavigate();

    console.log({ navigate });

    useEffect(() => {
        const getData = async () => {
            const params = {
                _limit: 10,
                _page: 1,
            };
            const data = await productApi.getAll(params);
            // console.log(data);
        };
        if (isHasUser) {
            getData();
        }
    }, [isHasUser]);

    console.log(currentUser);

    const handleDeletePhoto = (id) => {
        dispatch(deletePhoto(id));
    };

    const handleEditPhoto = (id) => {
        return navigate(`/EditPhoto/${id}`);
    };

    return (
        <>
            <Header/>
            <Banner img={'country'} text={'Welcome to PhotoList'} />
            <Container>
                <Grid container spacing={4} mb={4}>
                    <Grid item xs={12} mt={2}>
                        <Typography
                            sx={{
                                textAlign: 'center',
                                '& .photolist-link': {
                                    color: '#f5f6fa',
                                    textDecoration: 'none',
                                    backgroundColor: '#9c88ff',

                                    display: 'inline-block',
                                    padding: '0.4rem 1.2rem',
                                    borderRadius: '4px',

                                    transition: 'all 0.2s linear',

                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                    },
                                    '&:active': {
                                        transform: 'translateY(2px)',
                                    },
                                },
                            }}
                            variant="h6"
                            component="div"
                        >
                            <NavLink className="photolist-link" to="/AddPhoto">
                                Add New Photos
                            </NavLink>
                        </Typography>
                    </Grid>
                    <PhotoList
                        photoList={photoList}
                        handleEditPhoto={handleEditPhoto}
                        handleDeletePhoto={handleDeletePhoto}
                    />
                </Grid>
            </Container>
        </>
    );
}

export default PhotosList;
