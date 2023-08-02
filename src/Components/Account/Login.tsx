import React, { useEffect, useState } from 'react';
import styles from '../../CssModules/Login.module.css';
import { DialogActions, DialogContent } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import BootstrapDialog from './AccountComponents/BootstrapDialog';
import { container_btn, container_background, container_background_bigger, container_btn_white } from './AccountComponents/AnimationContainers';
import { motion } from 'framer-motion'; 
import axios from 'axios';

const Login = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenPass, setIsOpenPass] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isSuccessPass, setIsSuccessPass] = useState(false);
    const { control, register, handleSubmit } = useForm({ 
        defaultValues: {
            curpassword: '',
            newpassword: ''
        },
        values: { 
            email: props.user.userData.email 
        }
    });

    useEffect(() => {
        props.onMount("login");
    }, [])

    const onSubmit = (data) => {
        axios.post('http://localhost:5000/profile/update_email', {
            curmail: props.user.userData.email,
            firstname: props.user.userData.firstname,
            lastname: props.user.userData.lastname,
            number: props.user.userData.number !== undefined? props.user.userData.number : null,
            isActivate: props.user.userData.isActivate,
            email: data.email,
        },{ headers: {"Content-Type": "application/x-www-form-urlencoded"}, 
        withCredentials: true})
        .then(response => {
            localStorage.setItem('access_token', response.data.token.access_token);
            props.onChange(data.email);
            setIsSuccess(true);
        })
        .catch(error => {
            console.log(error)
        });
    }

    const onSubmitPass = (data) => {
        axios.post('http://localhost:5000/profile/update_pass', {
            email: props.user.userData.email,
            curpass: data.curpassword,
            newpass: data.newpassword
        },{ headers: {"Content-Type": "application/x-www-form-urlencoded"}, 
        withCredentials: true})
        .then(response => {
            setIsSuccessPass(true);
        })
        .catch(error => {
            console.log(error)
        });
    }

    const virtualSubmitHandle = () => {
        const inp_submit = document.getElementById('submit');
        inp_submit.click();
    }

    const virtualSubmitHandlePass = () => {
        const inp_submit2 = document.getElementById('submit2');
        inp_submit2.click();
    }

    const onClose = () => {
        setIsOpen(false);
        setIsSuccess(false);
    }

    const onClosePass = () => {
        setIsOpenPass(false);
        setIsSuccessPass(false);
    }

    return (
        <div className={styles.login_container}>
            <p className={styles.title_login}>You log in with an email address and password.</p>
            <div className={styles.change_email}>
                <div>
                    <p className={styles.email_title}>Email Address</p>
                    <p className={styles.email_content}>{props.user.userData.email}</p>
                </div>
                <button className={styles.change_email_btn} onClick={() => setIsOpen(true)}>Update email</button>
                <BootstrapDialog open={isOpen} onClose={onClose} title='Enter a new email address'>
                    <DialogContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Controller 
                                name='email'
                                control={control}
                                render={({ field }) => 
                                    <TextField sx={{ width: '350px'}} label="Email" variant="standard" {...field}/>
                                }
                            />
                            <input type="submit" id='submit' className={styles.submit_btn}/>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        {isSuccess? <p className={styles.success_msg}>Email was updated successfully!</p> : null}
                        <motion.button className={styles.virtual_submit_btn} whileHover="show" variants={container_btn} onClick={virtualSubmitHandle}>
                            <motion.p className={styles.virtual_submit_btn_content} variants={container_btn}>Update</motion.p>
                            <motion.div className={styles.virtual_submit_btn_backgr} variants={container_background}></motion.div>
                        </motion.button>
                    </DialogActions>
                </BootstrapDialog>
            </div>
            <div className={styles.change_password}>
                <div>
                    <p className={styles.password_title}>Password</p>
                    <p className={styles.password_content}>****************</p>
                </div>
                <button className={styles.change_password_btn} onClick={() => setIsOpenPass(true)}>Update password</button>
                <BootstrapDialog open={isOpenPass} onClose={onClosePass} title='Enter a new password'>
                    <DialogContent>
                        <form onSubmit={handleSubmit(onSubmitPass)} style={{width: '370px'}}>
                            <TextField sx={{ width: '370px'}} type='password' label="Current password" variant="standard" {...register('curpassword')}/>
                            <TextField sx={{ width: '370px', marginTop: '10px'}} type='password' label="New password" variant="standard" {...register('newpassword')}/>
                            <input type="submit" id='submit2' className={styles.submit_btn}/>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        {isSuccessPass? <p className={styles.success_msg}>Password was updated successfully!</p> : null}
                        <motion.button className={styles.virtual_submit_btn} whileHover="show" variants={container_btn} onClick={virtualSubmitHandlePass}>
                            <motion.p className={styles.virtual_submit_btn_content} variants={container_btn}>Update</motion.p>
                            <motion.div className={styles.virtual_submit_btn_backgr} variants={container_background}></motion.div>
                        </motion.button>
                    </DialogActions>
                </BootstrapDialog>
            </div>
            <div className={styles.login_underline}></div>
        </div>
    )
}

export default Login;