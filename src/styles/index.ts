import {styled} from '@stitches/react';


export const Container = styled('main', {
    width: '100%',
    height: '100vh',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    gap: '10rem',


    h1: {
        fontSize: '5.5rem'
    }
})

export const Dados = styled('section', {
    p: {
        fontFamily: 'Overpass, sans-serif',
        fontSize: '1.5rem',

        span: {
            color: '#32a852',
            fontWeight: 'bold'
        }
    }
})

export const Foto = styled('section', {
    img: {
        borderRadius: '13rem'
    }
})