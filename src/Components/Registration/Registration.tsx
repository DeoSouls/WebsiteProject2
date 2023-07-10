import React, { useRef, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, ThemeProvider } from '@mui/material';
import { themeTextField } from '../../theme/themeComponents'; 
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import styles from '../../CssModules/Registration.module.css';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

enum GenderEnum {
    male = 'male',
    female = 'female'
}

interface Inputs {
    firstname: string;
    lastname: string;
    email: string;
    gender: GenderEnum;
    password: string;
    confpassword: string;
}

const Registration = (props) => {

    const [reqCaptcha, setReqCaptcha] = useState(false);
    const [validCaptcha, setValidCaptcha] = useState(false);

    const schema = yup
    .object().shape({
        firstname: yup.string().required("First name is required").min(4, "The name must be at least 4 characters long")
        .max(20,"The name must be no more than 20 characters"),
        lastname: yup.string().required("Last name is required").min(4, "The name must be at least 4 characters long")
        .max(20, "The name must be no more than 20 characters"),
        email: yup.string().email("Not correct email").required("Email is required"),
        gender: yup.string(),
        password: yup.string().required("Pass is required").min(6, "The pass must be at least 6 characters long")
        .max(60, "The name must be no more than 60 characters"),
        confpassword: yup.string().required("Pass is required").oneOf([yup.ref("password")], "Passwords must match")
        .min(6, "The pass must be at least 6 characters long").max(60, "The name must be no more than 60 characters"),
    }).required();


    const { register, handleSubmit, control, formState: { errors } } = useForm<Inputs>({
        defaultValues: {
            gender: GenderEnum[GenderEnum.male]
        },
        resolver: yupResolver(schema)
    });
    
    const recaptchaRef = useRef<typeof ReCAPTCHA>(null);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const recaptchaValue = recaptchaRef.current.getValue();

        if (recaptchaValue !== '') {
            axios.post('http://localhost:5000/reg/user', {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                gender: data.gender,
                password: data.password,
                captcha: recaptchaValue
            }, { headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },withCredentials: true})
            .then(response => 
                console.log(response)
            )
            .catch(error => 
                console.log(error)
            );

            if(reqCaptcha === true)
                setReqCaptcha(false);
        } else {
            setReqCaptcha(true);
        }
    };

    return (
        <div>
            <div className={styles.main_form}>
                <p className={styles.register_title} id='register_symbol'>Registration</p>
                    <ThemeProvider theme={themeTextField}>
                        <form onSubmit={handleSubmit(onSubmit)} method="POST">
                            {
                                errors.firstname? 
                                <TextField className={styles.reg_input_username} id="standart-basic" label="Username:" variant="standard" 
                                sx={{ marginTop: '13px'}} InputLabelProps={{sx: {fontFamily: 'Segoe UI', fontSize: '17px'}}} 
                                {...register("firstname")} error aria-invalid={errors.firstname ? "true" : "false"} />
                                :
                                <TextField className={styles.reg_input_username} id="standart-basic" label="Username:" variant="standard" 
                                sx={{ marginTop: '13px'}} InputLabelProps={{sx: {fontFamily: 'Segoe UI', fontSize: '17px'}}} 
                                {...register("firstname")} aria-invalid={errors.firstname ? "true" : "false"} />
                            }
                            {errors.firstname? <p className={styles.input_validate} role='alert'>{errors.firstname?.message}</p> : null}
                            {
                                errors.lastname? 
                                <TextField className={styles.reg_input_username} id="standart-basic" label="Lastname:" variant="standard" 
                                sx={{ marginTop: '29px'}} InputLabelProps={{sx: {fontFamily: 'Segoe UI', fontSize: '17px'}}} 
                                {...register("lastname")} error aria-invalid={errors.lastname ? "true" : "false"} />
                                :
                                <TextField className={styles.reg_input_username} id="standart-basic" label="Lastname:" variant="standard" 
                                sx={{ marginTop: '29px'}} InputLabelProps={{sx: {fontFamily: 'Segoe UI', fontSize: '17px'}}} 
                                {...register("lastname")} aria-invalid={errors.lastname ? "true" : "false"} />
                            }
                            {errors.lastname? <p className={styles.input_validate} role='alert'>{errors.lastname?.message}</p> : null}
                            <FormControl sx={{ marginTop: '40px'}}>
                                <FormLabel id='radio-label' sx={{fontSize: '17px', fontFamily: 'Segoe UI', color: 'black'}}>Gender</FormLabel>
                                <Controller 
                                    control={control}
                                    name='gender'
                                    render={({ field }) => (
                                        <RadioGroup aria-labelledby='radio-label' {...field} row name='radio-buttons-group'>
                                            <FormControlLabel value='male' control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize: 21}}}/>} label='Male'/>
                                            <FormControlLabel value='female' control={<Radio sx={{'& .MuiSvgIcon-root': {fontSize: 21}}}/>} label='Female' />
                                        </RadioGroup>
                                    )} 
                                />
                            </FormControl>
                            {
                                errors.email? 
                                <TextField className={styles.reg_input_username} id="standart-basic" label="Email:" variant="standard" 
                                sx={{ marginTop: '10px'}} error InputLabelProps={{sx: {fontFamily: 'Segoe UI', fontSize: '17px'}}} 
                                {...register("email")}/>
                                :
                                <TextField className={styles.reg_input_username} id="standart-basic" label="Email:" variant="standard" 
                                sx={{ marginTop: '10px'}} InputLabelProps={{sx: {fontFamily: 'Segoe UI', fontSize: '17px'}}} 
                                {...register("email")}/>
                            }
                            {errors.email? <p className={styles.input_validate} role='alert'>{errors.email?.message}</p> : null}
                            {
                                errors.password? 
                                <TextField className={styles.reg_input_username} id="standart-basic" label="Password:" variant="standard" 
                                sx={{ marginTop: '29px'}} error InputLabelProps={{sx: {fontFamily: 'Segoe UI', fontSize: '17px'}}} 
                                {...register("password")}/>
                                :
                                <TextField className={styles.reg_input_username} id="standart-basic" label="Password:" variant="standard" 
                                sx={{ marginTop: '29px'}} InputLabelProps={{sx: {fontFamily: 'Segoe UI', fontSize: '17px'}}} 
                                {...register("password")}/>
                            }
                            {errors.password? <p className={styles.input_validate} role='alert'>{errors.password?.message}</p> : null}
                            {
                                errors.confpassword? 
                                <TextField className={styles.reg_input_username} id="standart-basic" label="Confirm password:" variant="standard" 
                                sx={{ marginTop: '29px'}} error InputLabelProps={{sx: {fontFamily: 'Segoe UI', fontSize: '17px'}}} 
                                {...register("confpassword")}/>
                                :
                                <TextField className={styles.reg_input_username} id="standart-basic" label="Confirm password:" variant="standard" 
                                sx={{ marginTop: '29px'}} InputLabelProps={{sx: {fontFamily: 'Segoe UI', fontSize: '17px'}}} 
                                {...register("confpassword")}/>
                            }
                            {errors.confpassword? <p className={styles.input_validate} role='alert'>{errors.confpassword?.message}</p> : null}
                            <div className={styles.recaptcha_form}>
                                <ReCAPTCHA ref={recaptchaRef} sitekey='6Le0sdYmAAAAAO4mIkz_xx5yYnxkndqCEBWhvx1B'/>
                                {reqCaptcha? <p className={styles.input_validate} >Confirm that you are not a robot</p> : null}
                                <Button id='submit' variant='contained' className={styles.reg_but_submit}  color='primary' 
                                sx={{ marginTop: '18px', backgroundColor: 'black', transition: 'all 0.4s ease-in-out'}} type='submit'>Create Account</Button>
                            </div>
                        </form>
                    </ThemeProvider>
            </div>
        </div>
    )
}

export default Registration