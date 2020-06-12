import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loading, CardPhoto } from '../components';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Creators } from '../store/ducks/photos';
import { getPhotos } from '../services/PhotoService';

const useStyles = makeStyles(theme => ({
    cards: {
        padding: 10
    }
}));

function PhotoPage() {
    const classes = useStyles();

    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();

    const getData = useCallback(() => {
        dispatch(Creators.setLoading(true));
        getPhotos()
            .then((response) => {
                dispatch(Creators.setLoading(false));
                dispatch(Creators.photoList(response.data));
            })
    }, [dispatch]);

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <>
            {
                (() => {
                    if (photos.loading)
                        return <Loading open={photos.loading} />

                    return (
                        <>
                            <Typography variant='h5'>Fotos</Typography>
                            <br />
                            <Grid container
                                justify="space-between">
                                {
                                    photos.data.map((photo) => (
                                        <Grid key={photo.id}
                                            item
                                            sm={3}
                                            className={classes.cards}>
                                            <CardPhoto photo={photo} />
                                        </Grid>))
                                }
                            </Grid>
                        </>
                    )
                })()
            }
        </>
    );
}

export default PhotoPage;