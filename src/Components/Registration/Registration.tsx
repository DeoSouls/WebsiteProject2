import React from 'react';
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, ThemeProvider, createTheme } from '@mui/material';
import styles from '../../CssModules/Registration.module.css';

class Registration extends React.Component {

    render(): React.ReactNode {

        const theme = createTheme({
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

        return (
            <div>
                <div className={styles.main_form}>
                    <p className={styles.register_title} id='register_symbol'>Registration</p>
                    <ThemeProvider theme={theme}>
                        <TextField className={styles.reg_input_username} id="standart-basic" label="Username:" variant="standard" 
                        sx={{ marginTop: '19px'}} InputLabelProps={{sx: {fontFamily: 'Amethysta', fontSize: '17px'}}}/>
                        <TextField className={styles.reg_input_username} id="standart-basic" label="Lastname:" variant="standard" 
                        sx={{ marginTop: '19px'}} InputLabelProps={{sx: {fontFamily: 'Amethysta', fontSize: '17px'}}}/>
                        <FormControl sx={{ marginTop: '35px'}}>
                            <FormLabel id='radio-label' sx={{fontSize: '17px', fontFamily: 'Amethysta', color: 'black'}}>Gender</FormLabel>
                            <RadioGroup aria-labelledby='radio-label' defaultValue='male' row name='radio-buttons-group' >
                                <FormControlLabel value='male' control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize: 21}}}/>} label='Male'/>
                                <FormControlLabel value='female' control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize: 21}}}/>} label='Female' />
                            </RadioGroup>
                        </FormControl>
                        <TextField className={styles.reg_input_username} id="standart-basic" label="Email:" variant="standard" 
                        sx={{ marginTop: '13px'}} InputLabelProps={{sx: {fontFamily: 'Amethysta', fontSize: '17px'}}}/>
                        <TextField className={styles.reg_input_username} id="standart-basic" label="Password:" variant="standard" 
                        sx={{ marginTop: '19px'}} InputLabelProps={{sx: {fontFamily: 'Amethysta', fontSize: '17px'}}}/>
                        <TextField className={styles.reg_input_username} id="standart-basic" label="Confirm password:" variant="standard" 
                        sx={{ marginTop: '19px'}} InputLabelProps={{sx: {fontFamily: 'Amethysta', fontSize: '17px'}}}/>
                    </ThemeProvider>
                    <form className={styles.recaptcha_form} action="?" method="POST">
                        <div id="html_element" className={styles.recaptcha_widget}></div>
                        <Button id='submit' variant='contained' className={styles.reg_but_submit} color='primary' sx={{ marginTop: '25px', backgroundColor: 'black', transition: 'all 0.4s ease-in-out'}} type='submit'>Create Account</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Registration