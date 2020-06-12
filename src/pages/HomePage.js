import React from 'react';
import { Typography } from '@material-ui/core';

function HomePage() {
    return (
        <>
            <Typography variant='h5'>Conteúdo do Projeto</Typography>
            <br />
            <br />
            <Typography variant='body1'>
                Projeto desenvolvido com o objetivo de demonstrar a utilização de alguns recursos do React.js.
            </Typography>
            <br />
            <Typography variant='body1'>
                Conceitos utilizados:
            </Typography>
            <ul>
                <li> <Typography variant='body1'>Route</Typography></li>
                <li> <Typography variant='body1'>Lazy Loading</Typography></li>
                <li> <Typography variant='body1'>Material UI</Typography></li>
                <li> <Typography variant='body1'>Hooks</Typography></li>
                <li> <Typography variant='body1'>Http Request</Typography></li>
                <li> <Typography variant='body1'>Theme</Typography></li>
                <li> <Typography variant='body1'>Redux Sauce</Typography></li>
            </ul>
        </>
    )
}

export default HomePage;