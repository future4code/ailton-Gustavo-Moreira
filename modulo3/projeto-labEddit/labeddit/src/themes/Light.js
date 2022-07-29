import { createTheme } from '@mui/material'
import { orange } from '@mui/material/colors'

export const LightTheme = createTheme({
    palette:{
        primary:{
            main: orange[500],
            dark: orange[900],
            light: orange[200],
            contrastText: '#ffffff',
        },
        background: {
            paper: '#ffffff',
            default: '#f7f6f3',
        }
    }
})