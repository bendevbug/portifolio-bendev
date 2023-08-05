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
            margin: '0 5rem 0 0'
        }
    }

})