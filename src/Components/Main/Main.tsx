import React, { Fragment, useEffect, useState, useMemo } from 'react';
import styles from '../../CssModules/Main.module.css';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { DehazeSharp } from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchActivated } from '../../app/activatedSlice';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Account from '../Account/Account';
import Media from 'react-media';
import Search from './Search/Search';
import Slider from './Slider/Slider';
import { motion } from 'framer-motion';
import { shallowEqual } from 'react-redux';

const Main = (props) => {

    const dispatch = useAppDispatch();
    
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenList, setIsOpenList] = useState(false);
    const [newMail, setNewMail] = useState('');
    const data = useAppSelector(state => state.activated, shallowEqual);

    const navigation = useNavigate();
    const access_token = localStorage.getItem('access_token');
    let user;

    const onChangeMail = (isChange) => {
        setNewMail(isChange)
    }

    useEffect(() => {
        dispatch(fetchActivated(access_token));
    }, [newMail])

    if(Object.entries(data.userData).length > 0) {
        user = data.userData;
        localStorage.setItem('firstname', user.firstname);
    }

    const menu_profile = {
        hidden: {
            width: 25,
            height: 25,
            opacity: 0,
            marginLeft: '-50%',
            transition: {
                when: "afterChildren",
                staggerChildren: 0.06,
                duration: 0.1
            },
            transitionEnd: {
                display: 'none'
            }
        },  
        open: {
            width: 170,
            height: 150,
            opacity: 1,
            marginLeft: '-400%',
            display: 'block',
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.1,
                duration: 0.4
            }
        }
    }

    const item_profile = {
        hidden: {
            opacity: 0,
            x: 20,
        }, 
        open: {
            opacity: 1,
            x: 10
        }
    }

    const container_btn = { show: {
        color: 'hsl(0,0,0)',
        transition: {
            duration: 0.4
        }
    }};

    const container_background = {
        show: {
            x: 70,
            y: -70,
            transition: {
                duration: 0.4
            }
        },
    };

    const container_menu = {
        hidden: {
            opacity: 0,
            height: 0,
            transition: {
                delay: 0.6,
                duration: 0.4
            }
        },
        show: {
            opacity: [1, 1],
            height: [0, 300],
            transition: {
                delayChildren: 0.4,
                duration: 0.4
            }
        }
    };

    const container_list = {
        hidden: {
            display: 'none',
            transition: {
                delay: 0.6,
                staggerChildren: 0.05,
                duration: 0.05
            }
        },
        show: {
            // opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.2
            }
        }
    };

    const item = {
        hidden: { opacity: 0, display: 'block'},
        show: { opacity: 1, display: 'block' }
    };
    
    window.addEventListener('resize', (event: UIEvent) => {
        var media = window.matchMedia("(max-width: 970px)");
        var navMenu = document.getElementById('nav_menu');

        const elements = [
            document.getElementById('home'), document.getElementById('catalog'), 
            document.getElementById('about') , document.getElementById('help')
        ];

        if(media.matches) {
            elements.forEach(element => element?.setAttribute('style', 'display: none'));
            navMenu?.setAttribute('style', 'display: block');
        } else {
            elements.forEach(element => element?.setAttribute('style', 'display: block'));
            navMenu?.setAttribute('style', 'display: none');
        }
    });

    window.addEventListener('scroll', onScroll);
    function onScroll() {
        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
        var element = document.getElementById('nav_block');
        if(windowRelativeBottom < 1145) {
            element?.setAttribute('style', 'height: 49px');
        } else {
            element?.setAttribute('style', 'height: 55px');
        }
    }

    const expandMenu = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const nav = document.getElementById('catalog');
        const arrow = document.getElementById('image_arrow');
        const arrow2 = document.getElementById('image_arrow2');
        if (event.currentTarget === nav) {
            if(arrow.style.rotate === '-180deg')
                arrow.style.rotate = '0deg';
            else 
                arrow.style.rotate = '-180deg';
        } else {
            if(arrow2.style.rotate === '-180deg')
                arrow2.style.rotate = '0deg';
            else 
                arrow2.style.rotate = '-180deg';
        }
        
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.main_style}>
            <div className={styles.main_nav}>
                <div id='nav_block' className={styles.nav_block}>
                    <ul style={{alignItems: 'center'}}>
                        <li id='logo' style={{marginRight: '192px'}}>
                            <a href="/">
                                <div className={styles.elem_list_logo}>
                                    <p className={styles.child_logo}>ebsite</p>
                                </div>
                            </a>
                        </li>
                        <Media queries={{ small: "(max-width: 970px)", medium: "(min-width: 971px)"}}>
                            {matches => (
                                    <Fragment>
                                        {matches.medium && <li id='home' onClick={() => navigation('/')}><p className={styles.elem_list_home}>Home</p></li>}
                                        {matches.medium && <li id='catalog' onClick={expandMenu}>
                                            <p className={styles.elem_list_catalog}>Catalog
                                                <img src="http://localhost:5000/white_arrow.png" className={styles.navimage_arrow} id='image_arrow' />
                                            </p>
                                        </li>}
                                        {matches.medium && <li id='about' onClick={expandMenu}>
                                            <p className={styles.elem_list_about}>About
                                                <img src="http://localhost:5000/white_arrow.png" className={styles.navimage_arrow2} id='image_arrow2' />
                                            </p>
                                        </li>}
                                        {matches.medium && <li id='help' onClick={() => navigation('/')}><p className={styles.elem_list_help}>Help</p></li>}
                                    </Fragment>
                                )
                            }
                        </Media>
                        <li id='nav_menu' style={{display: 'none'}}>
                            <PopupState variant="popper" popupId="demo-popup-menu">
                                    {(popupState) => (
                                        <Media query="(max-width: 970px)" render={() =>
                                            (
                                        <Fragment>
                                            <IconButton {...bindTrigger(popupState)}>
                                                <DehazeSharp/>
                                            </IconButton>
                                            <Menu {...bindMenu(popupState)}>
                                                <MenuItem onClick={() => setIsOpen(!isOpen)}>Home</MenuItem>
                                                <MenuItem onClick={() => setIsOpen(!isOpen)}>Catalog</MenuItem>
                                                <MenuItem onClick={() => setIsOpen(!isOpen)}>About</MenuItem>
                                                <MenuItem onClick={() => setIsOpen(!isOpen)}>Help</MenuItem>
                                            </Menu>
                                        </Fragment>
                                        )}/>
                                    )}
                            </PopupState>
                        </li>
                        <li id='search' style={{marginRight: 0}}>
                            <Search/>
                        </li>
                        <li style={{marginRight: 0, marginLeft: '3px'}}>
                            {user?
                            <div style={{position: 'relative'}}>
                                <div className={styles.profile_container} onClick={() => setIsOpenList(!isOpenList)}></div>
                                <motion.div className={styles.container_profile_menu} variants={menu_profile} animate={isOpenList? "open" : "hidden"}>
                                    <a className={styles.profile_refs}><motion.p whileHover={{ translateX: 10 }} onClick={() => navigation('/account/profile')} variants={item_profile}>Profile</motion.p></a>
                                    <a className={styles.profile_refs}><motion.p whileHover={{ translateX: 10 }} onClick={() => navigation('/account/login')} variants={item_profile}>Login</motion.p></a>
                                    <a className={styles.profile_refs}><motion.p whileHover={{ translateX: 10 }} onClick={() => navigation('/account/phone')} variants={item_profile}>Phone number(s)</motion.p></a>
                                    <a className={styles.profile_refs}><motion.p whileHover={{ translateX: 10 }} onClick={() => navigation('/account/notifications')} variants={item_profile}>Notifications</motion.p></a>
                                </motion.div>
                            </div>
                            :
                            <motion.button className={styles.sign_ref} whileHover="show" variants={container_btn}>
                                <motion.p className={styles.content_btn} variants={container_btn}>Sign In</motion.p>
                                <motion.div className={styles.backgr_btn} 
                                variants={container_background}
                                ></motion.div>
                            </motion.button>
                            }
                        </li>
                    </ul>
                </div>
                <motion.div id='menu_refs' className={styles.menu_refs} 
                variants={container_menu}
                animate={isOpen? "show" : "hidden"}
                >
                    <motion.ul id='left_menu' className={styles.left_menu} 
                    variants={container_list} 
                    >
                        <motion.li id='l1' className={styles.ref_on_page} variants={item}>
                            <a href="/register" className={styles.style_ref}>Reference1
                            <p className={styles.description_link}>Description for the link</p>
                            </a>
                        </motion.li>
                        <motion.li id='l2' className={styles.ref_on_page} variants={item}>
                            <a href="/auth" className={styles.style_ref}>Reference2
                            <p className={styles.description_link}>Description for the link</p>
                            </a>
                        </motion.li>
                        <motion.li id='l3' className={styles.ref_on_page} variants={item}>
                            <a href="/" className={styles.style_ref}>Reference3
                            <p className={styles.description_link}>Description for the link</p>
                            </a>
                        </motion.li>
                        <motion.li id='l4' className={styles.ref_on_page} variants={item}>
                            <a href="/" className={styles.style_ref}>Reference4
                            <p className={styles.description_link}>Description for the link</p>
                           </a>
                        </motion.li>
                        <motion.li id='l5' className={styles.ref_on_page} variants={item}>
                            <a href="/" className={styles.style_ref}>Reference5
                            <p className={styles.description_link}>Description for the link</p>
                            </a>
                        </motion.li>
                        <motion.li id='l6' className={styles.ref_on_page} variants={item}>
                            <a href="/" className={styles.style_ref}>Reference6
                            <p className={styles.description_link}>Description for the link</p>
                            </a>
                        </motion.li>
                        <motion.li id='l7' className={styles.ref_on_page} variants={item}>
                            <a href="/" className={styles.style_ref}>Reference7
                            <p className={styles.description_link}>Description for the link</p>
                            </a>
                        </motion.li>
                        <motion.li id='l8' className={styles.ref_on_page} variants={item}>
                            <a href="/" className={styles.style_ref}>Reference8
                            <p className={styles.description_link}>Description for the link</p>
                            </a>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </div>
            <Routes>
                <Route path='' element={<Slider/>}></Route>
                <Route path='account/*' element={<Account onChange={onChangeMail} user={data}/>}></Route>
            </Routes>
        </div>
    )
}

export default Main