import {styled} from '@stitches/react';

export const Container = styled('main', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'column',

    width: '100vw',
    height: '100vh',

    h2: {
        fontFamily: 'Overpass, sans-serif',

        color: '#32a852',

        fontSize: '2.5rem',

        textAlign: 'center',

    },

    img: {
        margin: '5rem 3rem 0 0',

        '&:hover': {
            margin: '5rem 3.5rem 0 0',


            transition: 'all 0.2s',
        }
    }
})