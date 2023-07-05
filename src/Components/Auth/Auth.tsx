import React from "react";
import styles from '../../CssModules/Auth.module.css';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, Button, ThemeProvider } from '@mui/material';
import { themeTextField } from '../../theme/themeComponents'; 
import { yupResolver } from "@hookform/resolvers/yup"
import axios from "axios";
import * as yup from "yup";

type Inputs = {
    email: string
    password: string
}

export const Auth = (props) => {

    const schema = yup
    .object({
        email: yup.string().email("Not correct email").required("Email is required"),
        password: yup.string().required("Pass is required").min(6, "The pass must be at least 6 characters long")
        .max(60, "The name must be no more than 60 characters")
    })
    .required();

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });

    const onSubmit:SubmitHandler<Inputs> = (data) => {
        axios.post('http://localhost:5000/auth/login', {
            email: data.email,
            password: data.password
        }, { headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },withCredentials: true})
        .then(response => 
            console.log(response)
        )
        .catch(error => 
            console.log(error)
        );
    }

    return (
        <div>
            <div className={styles.main_form}>
                <p className={styles.header_auth}>Authorization</p>
                <ThemeProvider theme={themeTextField}>
                    <form onSubmit={handleSubmit(onSubmit)} method="POST">
                        {
                            errors.email? 
                            <TextField className={styles.auth_input} id="standart-basic" label="Email:" variant="standard" 
                            sx={{ marginTop: '-20px', width: '430px', height: '25px'}} error InputLabelProps={{sx: {fontFamily: 'Segoe UI', fontSize: '17px'}}} 
                            {...register("email")}/>
                            :
                            <TextField className={styles.auth_input} id="standart-basic" label="Email:" variant="standard" 
                            sx={{ marginTop: '-20px', width: '430px', height: '25px'}} InputLabelProps={{sx: {fontFamily: 'Segoe UI', fontSize: '17px'}}} 
                            {...register("email")}/>
                        }
                        {errors.email? <p className={styles.input_validate} role='alert'>{errors.email?.message}</p> : null}
                        {
                            errors.password? 
                            <TextField className={styles.auth_input} id="standart-basic" label="Password:" variant="standard" 
                            sx={{ marginTop: '29px', width: '430px', height: '25px'}} error InputLabelProps={{sx: {fontFamily: 'Segoe UI', fontSize: '17px'}}} 
                            {...register("password")}/>
                            :
                            <TextField className={styles.auth_input} id="standart-basic" label="Password:" variant="standard" 
                            sx={{ marginTop: '29px', width: '430px', height: '25px'}} InputLabelProps={{sx: {fontFamily: 'Segoe UI', fontSize: '17px'}}} 
                            {...register("password")}/>
                        }
                        {errors.password? <p className={styles.input_validate} style={{marginTop: '23px'}} role='alert'>{errors.password?.message}</p> : null}
                        <div className={styles.submit_block}>
                            <Button id='submit' variant='contained' className={styles.auth_but_submit} color='primary' 
                            sx={{ marginTop: '45px', backgroundColor: 'black', transition: 'all 0.4s ease-in-out'}} type='submit'>Sign In</Button>
                            <a className={styles.ref_fgpass} href="/">Forgot your password?</a>
                        </div>
                    </form>
                </ThemeProvider>
            </div>
        </div>
    )
}