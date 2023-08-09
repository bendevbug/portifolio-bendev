import {styled} from '@stitches/react';


export const Container = styled('main', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    gap: '4rem',

    width: '100vw',
    height: '100vh',

    fontFamily: 'Overpass, sans-serif',

    '@media (min-width: 320px)': {
        flexDirection: 'column',
        flexWrap: 'nowrap',
            h1: {
                fontSize: '1.5em',
                margin: '0 0 0 0.5em'
            }

    },

    div: {
        textAlign: 'center',

        
        
        button: {
            background: '#32a852',
            borderRadius: '0.5rem',
            border: '0',
            outline: '0',

            margin: '0 1rem 0 0',

            width: '8rem',
            height: '2.5rem',

            '@media (min-width: 320px)': {
                width: '6rem',
                height: '2rem',
                margin: '0 0 0 0.5em'
            },
            a: {
                color: 'white',
                textDecoration: 'none',
            },

            '&:hover': {
                filter: 'brightness(0.8)',

                transition: 'all 0.5s',

                cursor: 'pointer'
            }
        },
        img: {
            margin: '0 5rem 0 0',

            '@media (min-width: 320px)': {
                width: '4.5em',
                margin: '0.9em'
            },
        }
    }

})