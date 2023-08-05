import { globalCss } from '@stitches/react';
import { inherits } from 'util';

export const GlobalStyle = globalCss({
    body: {
        background: 'linear-gradient(162deg, #373737 0%, #121312 100%)',
    },
    '*': {
        padding: '0',
        margin: '0',
        boxSizing: 'border-box',
    },
    a: {
        textDecoration: 'none',
        color: 'inherit'
    }

})