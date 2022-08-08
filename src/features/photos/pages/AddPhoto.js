import React from 'react';
import Grid from '@mui/material/Grid';
import Header from '../../../component/Header/Header';
import Banner from '../../../component/Banner/Banner';

import Form from '../../../component/Form/Form';

import { useParams } from 'react-router-dom';

function AddPhoto(props) {

    let { id } = useParams();

    return (
        <>
            <Header />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Banner text={'Welcome to Add Photo'} />
                </Grid>
                <Grid item xs={12}>
                    <Form idPhoto={id} />
                </Grid>
            </Grid>
        </>
    );
}

export default AddPhoto;
