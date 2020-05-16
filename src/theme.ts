import { darken, lighten } from 'polished';
import { createMuiTheme } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';

const primary = '#da1921';

export const theme = {
    color: {
        primary,
        foreground: '#707070',
        background: '#ffffff',
        primaryAccent: lighten(0.1, primary),
        primaryShade1: lighten(0.2, primary),
        primaryShade2: lighten(0.27, primary),
        primaryShade3: lighten(0.37, primary),
        primaryShade4: lighten(0.43, primary),
        primaryDark: darken(0.1, primary),
        secondary: darken(0.14, primary),
        white: '#ffffff',
        black: '#000000',
        grayLight1: '#f2f2f2',
        grayLight2: '#dfdfdf',
        grayLight3: '#707070',
        grayLight4: '#ccc',
        grayDark1: '#f4f2f2',
        grayDark2: '#f0eeee',
        grayDark3: '#ccc',
        grayDark4: '#bbb'
    }
};

export default theme;

const palette2: PaletteOptions = {
    primary: { main: '#da1921', contrastText: '#FAFAFA' },
    secondary: { main: '#FFCCBC', contrastText: '#757575' },
    text: { primary: '#707070' },
    background: {
        default: '#FFFFFF',
        paper: '#FFFFFF'
    }
};

const title = {
    fontFamily: 'Lato',
    fontWeight: 500
};

export const Theme = createMuiTheme({
    palette: palette2,
    shape: {
        borderRadius: 0
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 5
            },
            outlinedPrimary: {
                '&:hover': {
                    backgroundColor: primary,
                    color: palette2.background!!.paper
                }
            }
        }
    },
    typography: {
        fontFamily: [
            'Lato',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            'Oxygen',
            'Ubuntu',
            '"Fira Sans"',
            '"Droid Sans"',
            '"Helvetica Neue"',
            'sans-serif',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            'Noto Color Emoji'
        ].join(','),
        h1: {
            ...title,
            fontSize: '2.5rem',
            lineHeight: 1.2
        },
        h2: {
            ...title,
            fontSize: '2.5rem',
            lineHeight: 1.2
        },
        h3: {
            ...title,
            fontSize: '1.5rem',
            lineHeight: 1
        },
        h4: {
            ...title,
            fontSize: '1.25rem',
            lineHeight: 1
        },
        h5: {
            ...title,
            fontSize: '1rem',
            lineHeight: 1
        },
        button: {
            fontSize: '1rem',
            textTransform: 'unset'
        },
        body1: {
            fontFamily: 'Lato',
            fontWeight: 300
        },
        body2: {
            fontFamily: 'Lato',
            fontSize: '1rem',
            fontWeight: 400
        }
    }
});
