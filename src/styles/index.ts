import {styled} from '@stitches/react';


export const Container = styled('main', {
    width: '100%',
    height: '100vh',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    gap: '10rem',


    background: 'linear-gradient(162deg, #373737 0%, #121312 100%)',


    h1: {
        fontSize: '5.5rem'
    }
})

export const Dados = styled('section', {
    p: {
        fontSize: '1.5rem'
    }
})

export const Foto = styled('section', {
    img: {
        borderRadius: '13rem'
    }
})