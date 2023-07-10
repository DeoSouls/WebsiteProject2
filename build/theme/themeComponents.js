import { createTheme } from '@mui/material';
export const themeTextField = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    label: {
                        color: 'black',
                    }
                }
            }
        }
    }
});
