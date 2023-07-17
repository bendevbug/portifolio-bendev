import { styled } from "@stitches/react";


export const Navigation = styled('div',{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    width: '4.5rem',
    height: '35rem',

    gap: '5rem',
    position: 'fixed',

    background: 'linear-gradient(180deg, #0C0A14 32.81%, #0C0D0E 96.35%)',

    borderRadius:'5rem',
    transition: 'all 0.2s',

    '&:hover': {
        marginLeft: '0.5rem',

        boxShadow: '-0.5rem 0.3rem 1rem 0.3rem'
    },

    img: {

        transition: 'all 0.2s',
        '&:hover': {
            cursor:'pointer',

            margin: '0 0 0 0.5rem'
        }
    }
}) 


export const Container = styled('nav', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

    position: 'fixed',

    height: '100vh',
    width: '4.5rem',

    margin: '0 0 0 1rem'
})