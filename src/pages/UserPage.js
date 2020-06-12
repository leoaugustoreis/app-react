import React, { useEffect, useCallback, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Creators } from '../store/ducks/users';
import { getUsers } from '../services/UserService';
import { Loading } from '../components';
import { makeStyles, Typography, Divider, IconButton, Grid } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SaveIcon from '@material-ui/icons/Save';
import BackspaceIcon from '@material-ui/icons/Backspace';

const useStyles = makeStyles((theme) => ({
    gridHeader: {
        backgroundColor: theme.palette.secondary.main,
        height: 60,
        textAlign: 'center',
    },
    gridItem: {
        height: 40,
        textAlign: 'center',
    },
    inputField: {
        width: '100%'
    },
}));

function UserPage(
    {
        history
    }
) {
    const classes = useStyles();
    const [usuario, setUsuario] = useState({});
    const inputName = useRef(null);
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const getData = useCallback(() => {
        dispatch(Creators.setLoading(true));
        getUsers()
            .then((response) => {
                dispatch(Creators.setLoading(false));
                dispatch(Creators.userList(response.data));
            })
    }, [dispatch]);

    useEffect(() => {
        getData()
    }, [getData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
        inputName.current.focus();
        dispatch(Creators.addUser(usuario));
    }

    const handleDelete = (id) => {
        dispatch(Creators.delUser(id));
    }

    const handleDetail = (user) => {
        dispatch(Creators.selectUser(user));
        history.push(`users/${user.id}`);
    }

    const handleClean = (e) => {
        e.target.reset();
        inputName.current.focus();
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUsuario({
            ...usuario,
            [name]: value
        });
    }

    return (
        <>
            {
                (() => {
                    if (users.loading)
                        return <Loading open={users.loading} />

                    return (
                        <>
                            <Typography variant='h5'>Usuários</Typography>
                            <br />
                            <br />
                            <form onSubmit={handleSubmit}
                                onReset={handleClean}>
                                <Grid container
                                    display='flex'
                                    direction={'column'}
                                    alignItems='center'
                                    spacing={1}>
                                    <Grid container direction={'row'}>
                                        <Grid item sm={1} xs={3}>
                                            <label>Nome: </label>
                                        </Grid>
                                        <Grid item sm={3} xs={9}>
                                            <input className={classes.inputField} type='text' name='name' ref={inputName} onChange={handleChange} />
                                        </Grid>
                                    </Grid>
                                    <Grid container direction={'row'}>
                                        <Grid item sm={1} xs={3}>
                                            <label>E-mail: </label>
                                        </Grid>
                                        <Grid item sm={3} xs={9}>
                                            <input className={classes.inputField} type='text' name='email' onChange={handleChange} />
                                        </Grid>
                                    </Grid>
                                    <Grid container direction={'row'}>
                                        <Grid item sm={1} xs={3}>
                                            <label>Telefone: </label>
                                        </Grid>
                                        <Grid item sm={3} xs={9}>
                                            <input className={classes.inputField} type='text' name='phone' onChange={handleChange} />
                                        </Grid>
                                    </Grid>
                                    <Grid container direction={'row'} justify='flex-end'>
                                        <Grid item sm={9} >
                                            <IconButton type='reset'>
                                                <BackspaceIcon color='primary' />
                                            </IconButton>
                                            <IconButton type='submit'>
                                                <SaveIcon color='primary' />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </form>
                            <Grid container
                                display='flex'
                                alignItems='center'
                                className={classes.gridHeader}>
                                <Grid item sm={2} xs={1}>
                                    <Typography variant='h5'>ID</Typography>
                                </Grid>
                                <Grid item sm={8} xs={6}>
                                    <Typography variant='h5'>NOME</Typography>
                                </Grid>
                                <Grid item sm={2} xs={5}>
                                    <Typography variant='h5'>AÇÕES</Typography>
                                </Grid>
                            </Grid>

                            <Divider />
                            {
                                users.data.map((user) => (
                                    <div key={user.id}>
                                        <Grid container
                                            display='flex'
                                            alignItems='center'
                                            className={classes.gridItem}>
                                            <Grid item sm={2} xs={1}>
                                                <Typography>{user.id}</Typography>
                                            </Grid>
                                            <Grid item sm={8} xs={6}>
                                                <Typography>{user.name}</Typography>
                                            </Grid>
                                            <Grid item sm={2} xs={5}>
                                                <IconButton onClick={() => { handleDetail(user) }}>
                                                    <AccountBoxIcon color='primary' />
                                                </IconButton>
                                                <IconButton onClick={() => handleDelete(user.id)}>
                                                    <DeleteForeverIcon color='error' />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                        <Divider />
                                    </ div>
                                ))
                            }
                        </>
                    )
                })()
            }

        </>
    )
}

export default UserPage;