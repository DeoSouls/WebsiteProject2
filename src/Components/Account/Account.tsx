import React, { useMemo } from 'react';
import styles from '../../CssModules/Account.module.css';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
import Login from './Login';
import PhoneNumbers from './PhoneNumbers';
import Notifications from './Notifications';

const Account = (props) => {

    const navigation = useNavigate();

    const changePage = (event: React.ChangeEvent<HTMLInputElement>) => {
        changePageFunc(event.target);
    }

    const changePageFunc = (element: HTMLInputElement) => {
        const images = ['arrow1','arrow2','arrow3','arrow4'];
        const elements = images.map((image) => document.getElementById(image));
        const firstparent = element.parentNode;
        elements.forEach((elem) => {
            if(firstparent.lastChild === elem) {
                elem.style.opacity = '1';
            } else {
                elem.style.opacity = '0';
            }
        });
    }

    const container_refs = {show: {}}

    const var_refs = {
        hidden: {
            width: 0,
        },
        show: {
            width: 25,
        }
    }

    const onChildMount = (component) => {
        console.log(component);
        const inp_profile = document.getElementById("nav_profile") as HTMLInputElement;
        const inp_login = document.getElementById("nav_login") as HTMLInputElement;
        const inp_phone = document.getElementById("nav_phone") as HTMLInputElement;
        const inp_notifications = document.getElementById("nav_notifications") as HTMLInputElement;
        if(component === 'profile') {changePageFunc(inp_profile);} else if (component === 'login') {
            changePageFunc(inp_login);} else if (component === 'phone') {changePageFunc(inp_phone);}
            else if (component === 'notifications') {changePageFunc(inp_notifications);}
    } 

    return (
        <div>
            <div className={styles.nav_background}></div>
            <div className={styles.profile_title_container}>
                <p className={styles.profile_title_content}>Account settings</p>
            </div>
            <div className={styles.general_container}>
                <div className={styles.middlenav_container}>
                    <ul className={styles.middlenav_block}>
                        <li className={styles.middlenav_ref}>
                            <motion.div variants={container_refs} whileHover='show' style={{display: 'flex', alignItems: 'center'}} onClick={() => navigation('profile')}>
                                <motion.div variants={var_refs} className={styles.animate_transition}></motion.div>
                                <input id='nav_profile' type="radio" name='nav_account' onChange={changePage}/>
                                <label htmlFor='nav_profile' style={{width: 64}}>Profile</label>
                                <img src="http://localhost:5000/arrow.png" className={styles.checked_img} id='arrow1'/>
                            </motion.div>
                        </li>
                        <li className={styles.middlenav_ref}>
                            <motion.div variants={container_refs} whileHover='show' style={{display: 'flex', alignItems: 'center'}} onClick={() => navigation('login')}>
                                <motion.div variants={var_refs} className={styles.animate_transition}></motion.div>
                                <input id='nav_login' type="radio" name='nav_account' onChange={changePage}/>
                                <label htmlFor='nav_login' style={{width: 53}}>Login</label>
                                <img src="http://localhost:5000/arrow.png" className={styles.checked_img} id='arrow2'/>
                            </motion.div>
                        </li>
                        <li className={styles.middlenav_ref}>
                            <motion.div variants={container_refs} whileHover='show' style={{display: 'flex', alignItems: 'center'}} onClick={() => navigation('phone')}>
                                <motion.div variants={var_refs} className={styles.animate_transition}></motion.div>
                                <input id='nav_phone' type="radio" name='nav_account' onChange={changePage}/>
                                <label htmlFor='nav_phone' style={{width: 160}}>Phone number(s)</label>
                                <img src="http://localhost:5000/arrow.png" className={styles.checked_img} id='arrow3'/>
                            </motion.div>
                        </li>
                        <li className={styles.middlenav_ref}>
                            <motion.div variants={container_refs} whileHover='show' style={{display: 'flex', alignItems: 'center'}} onClick={() => navigation('notifications')}>
                                <motion.div variants={var_refs} className={styles.animate_transition}></motion.div>
                                <input id='nav_notifications' type="radio" name='nav_account' onChange={changePage}/>
                                <label htmlFor='nav_notifications' style={{width: 122}}>Notifications</label>
                                <img src="http://localhost:5000/arrow.png" className={styles.checked_img} id='arrow4'/>
                            </motion.div>
                        </li>
                    </ul>
                </div>
                <div className={styles.content_container}>
                    <Routes>
                        <Route path='profile' element={useMemo(() => <Profile user={props.user} onMount={onChildMount}/>, [props.user])}/>
                        <Route path='login' element={<Login onChange={props.onChange} user={props.user} onMount={onChildMount}/>}/>
                        <Route path='phone' element={<PhoneNumbers onChange={props.onChange} onMount={onChildMount} user={props.user}/>}/>
                        <Route path='notifications' element={<Notifications onMount={onChildMount}/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Account;