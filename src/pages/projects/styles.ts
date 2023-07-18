import { styled } from "@stitches/react";


export const Container = styled('main', {

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100vh',
    width: '100vw',

    fontFamily: 'Overpass, sans-serif',

    div: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',


        flexDirection: 'row',

        width: '80vw',
        height: '75vh',

        gap: '2rem',
        div: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            width: '20vw',
            height: '25vh',

            lineHeight: '2rem',

            padding: '0.8rem',

            gap: '0.5rem',

            textAlign: 'end',

            background: 'linear-gradient(135deg, #2B6218 0.35%, rgba(31, 93, 128, 0.20) 100%)',

            borderRadius: '0.5rem',

            h3: {
                fontSize: '1em',
                margin: '0 0 0 0.2em',

                color: 'gray',
                '&:before': {
                    content: '|'
                }
            }
        }
    }
})