import { styled } from "@stitches/react";


export const Navigation = styled('div',{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    width: '4.5rem',
    height: '35rem',

    gap: '5rem',
    position: 'fixed',

    background: 'linear-gradient(180deg, #0C0A14 32.81%, #0C0D0E 96.35%)',

    borderRadius:'5rem',
    transition: 'all 0.2s',

    '@media (min-width: 320px)': {
        width: '90%',
        height:'2.5em',
        gap: '2.5em',

        margin: '5em 0'
    },

    '@media (min-width: 768px)': {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',

        margin: '0 0 0 1rem',
        width: '4.5rem',
        height: '35rem',
    },


    '&:hover': {
        marginLeft: '0.5rem',

        boxShadow: '-0.5rem 0.3rem 1rem 0.3rem'
    },

    img: {

        transition: 'all 0.2s',
        '&:hover': {
            cursor:'pointer',

            margin: '0 0 0 0.5rem'
        },

        '@media (min-width: 320px)': {
            width: '1.5em',
            height:'auto',
        },

        '@media (min-width: 768px)': {
            width: '2.5em'
        },
    }
}) 


export const Container = styled('nav', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    position: 'fixed',

    height: '100vh',
    width: '4.5rem',

    margin: '0 0 0 1rem',

    '@media (min-width: 320px)': {
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: '-3.2em 0',
        width: '100%',
        height: '5em'
    },

    '@media (min-width: 768px)': {
        justifyContent: 'center',
        margin: '0 0 0 1rem',
        width: '4.5rem',
        height: '100vh',
    },

    
})