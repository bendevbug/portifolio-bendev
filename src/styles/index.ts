import {styled} from '@stitches/react';


export const Container = styled('main', {
    
    width: '100%',
    height: '100vh',

    paddign: '2rem',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    gap: '2rem',
    padding: '2rem',

    '@media (min-width: 992px)': {
        flexDirection: 'row',
    },


    h1: {
        fontSize: '5.5rem',
        margin: '0 0 2.5rem 0',

        '@media (min-width: 320px)': {
            fontSize: '1.8em'
        },

        '@media (min-width: 768px)': {
            fontSize: '4em'
        },
        '@media (min-width: 992px)': {
            margin: '0 0 2rem 0',
        },
        
    },

    
})

export const Dados = styled('section', {
    '@media (min-width: 768px)': {
        width: '65vw',
        margin: '0 10em 0 13em'
    },
    '@media (min-width: 992px)': {
        width: '66vw',
        margin: '0 0 0 8em'
    },
    
    p: {
        fontFamily: 'Overpass, sans-serif',
        fontSize: '1.5rem',

        span: {
            color: '#32a852',
            fontWeight: 'bold'
        },

        '@media (min-width: 320px)': {
            fontSize: '1em',
        },

        '@media (min-width: 768px)': {
            width: '60vw',
            margin: '0'
        },
        '@media (min-width: 1200px)': {
            width: 'auto',
            margin: '0',
            fontSize: '1.2em'
        },

        
    }
})

export const Foto = styled('section', {

    '@media (min-width: 320px)': {
        margin: '3em 0 -5em 0'
    },
    '@media (min-width: 992px)': {
        margin: '0',
    },
    img: {
        borderRadius: '13rem',

        '@media (min-width: 320px)': {
            width: '18em',
            height: 'auto',
        },
        '@media (min-width: 992px)': {
            width: '15em',
            height: 'auto',
        },
        '@media (min-width: 1200px)': {
            width: '20em',
            height: 'auto',
        },

    }
})