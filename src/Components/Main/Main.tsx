import React, { Fragment } from 'react';
import styles from '../../CssModules/Main.module.css';
import { Menu,  MenuItem, IconButton } from '@mui/material';
import { DehazeSharp } from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useNavigate } from 'react-router-dom';
import Media from 'react-media';
import { ref } from 'yup';

const Main = (props) => {

    const navigation = useNavigate();

    window.addEventListener('scroll', onScroll);
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

    function onScroll() {
        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
        var element = document.getElementById('nav_block');
        if(windowRelativeBottom < 1145) {
            element?.setAttribute('style', 'height: 35px');
        } else {
            element?.setAttribute('style', 'height: 55px');
        }
    }

    function expandRefs() {
        const menu = document.getElementById('menu_refs') as HTMLElement;
        const ref = document.getElementById('l1') as HTMLElement;
        const ref2 = document.getElementById('l2') as HTMLElement;
        var refs = [ref, ref2]; 
        for (let i = 0; i < refs.length; i++) {
            setTimeout(() => {
                refs[i]!.style.opacity = '1';
                refs[i]!.style.display = 'block';
            }, 400)
        }

        if(menu.style.opacity === '1') {
            menu.style.opacity = '0';
            menu.style.height = '0px';
        } else {
            menu.style.opacity = '1';
            menu.style.height = '300px';
        }
    }

    return (
        <div className={styles.main_style}>
            <div className={styles.main_nav}>
                <div id='nav_block' className={styles.nav_block}>
                    <ul>
                        <li id='logo' ><a href="/" ><div className={styles.elem_list_logo}></div></a></li>
                        <Media queries={{ small: "(max-width: 970px)", medium: "(min-width: 971px)"}}>
                            {matches => (
                                    <Fragment>
                                        {matches.medium && <li id='home' onClick={e => expandRefs()}><p className={styles.elem_list_home}>Home</p></li>}
                                        {matches.medium && <li id='catalog'><p className={styles.elem_list_catalog}>Catalog</p></li>}
                                        {matches.medium && <li id='about'><p className={styles.elem_list_about}>About</p></li>}
                                        {matches.medium && <li id='help'><p className={styles.elem_list_help}>Help</p></li>}
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
                                                <MenuItem onClick={e => navigation('/auth')}>Home</MenuItem>
                                                <MenuItem onClick={e => navigation('/register')}>Catalog</MenuItem>
                                                <MenuItem onClick={e => navigation('/')}>About</MenuItem>
                                                <MenuItem onClick={e => navigation('/')}>Help</MenuItem>
                                            </Menu>
                                        </Fragment>
                                        )}/>
                                    )}
                            </PopupState>
                        </li>
                    </ul>
                    
                </div>
                <div id='menu_refs' className={styles.menu_refs}>
                    <ul id='left_menu' className={styles.left_menu}>
                        <li id='l1' className={styles.ref_on_page}><a href="/">Relaood</a></li>
                        <li id='l2' className={styles.ref_on_page}><a href="/">Relaood</a></li>
                        <li className={styles.ref_on_page}><a href="/">Relaood</a></li>
                        <li className={styles.ref_on_page}><a href="/">Relaood</a></li>
                        <li className={styles.ref_on_page}><a href="/">Relaood</a></li>
                        <li className={styles.ref_on_page}><a href="/">Relaood</a></li>
                    </ul>
                    <ul id='right_menu' className={styles.right_menu}>
                        <li className={styles.ref_on_page}><a href="/">Relaood</a></li>
                        <li className={styles.ref_on_page}><a href="/">Relaood</a></li>
                        <li className={styles.ref_on_page}><a href="/">Relaood</a></li>
                        <li className={styles.ref_on_page}><a href="/">Relaood</a></li>
                        <li className={styles.ref_on_page}><a href="/">Relaood</a></li>
                        <li className={styles.ref_on_page}><a href="/">Relaood</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Main