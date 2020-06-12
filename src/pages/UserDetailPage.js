import React from 'react';
import { useSelector } from 'react-redux';
import { Typography, Card, Box, CardContent, Avatar, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }) => ({
    card: {
        minWidth: 256,
        maxWidth: 500,
        margin: 'auto',
        textAlign: 'center',
    },
    avatar: {
        width: 60,
        height: 60,
        margin: 'auto',
    },
    cardTitle: {
        margin: 10,
    },
}));

function UserDetailPage(
    {
        match
    }
) {
    const classes = useStyles();
    const { id } = match.params;
    const users = useSelector(state => state.users);
    const { name, email, phone } = users.user;

    return (
        <>
            <Typography variant='h5'>Detalhes do Usuário</Typography>
            <br />
            <Card className={classes.card}
                direction="column"
                justify="center" >
                <CardContent>
                    <Avatar className={classes.avatar} src={'https://i.pravatar.cc/300'} />
                    <Typography variant='h5' className={classes.cardTitle}>{name}</Typography>
                </CardContent>
                <Divider light variant="middle" />
                <Box display={'flex'}><
                    Box p={2} flex={'auto'}>
                    <Typography variant='h5' className={classes.cardTitle}>ID</Typography>
                    <Typography variant='body1'>{id}</Typography>
                </Box>
                    <Divider light orientation="vertical" flexItem variant="middle" />
                    <Box p={2} flex={'auto'}>
                        <Typography variant='h5' className={classes.cardTitle}>E-mail</Typography>
                        <Typography variant='body1'>{email}</Typography>
                    </Box>
                    <Divider light orientation="vertical" flexItem variant="middle" />
                    <Box p={2} flex={'auto'}>
                        <Typography variant='h5' className={classes.cardTitle}>Telefone</Typography>
                        <Typography variant='body1'>{phone}</Typography>
                    </Box>
                </Box>
            </Card>
        </>
    )
}

export default UserDetailPage;