import React from 'react';
import Link from '@mui/material/Link'
import Typography  from '@mui/material/Typography'

const Copyright = () => {
    return (
        <div>
            <Typography variant='body2' color='GrayText' align='center'>
                { 'Copyright (C)' }
                <Link color='inherit' href='https://github.com/Marcoco759212/OpenBootcamp---ReactJS/tree/OpenBootcamp/ReactJS/EjerciciosDeLosVideos'>
                    Imagina Formacion
                </Link>
                {''}
                { new Date().getFullYear() }
            </Typography>
        </div>
    );
}

export default Copyright;
