import React, { Fragment } from 'react';
import styles from '../../CssModules/Main.module.css';
import { Menu,  MenuItem, IconButton } from '@mui/material';
import { DehazeSharp } from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useNavigate } from 'react-router-dom';
import Media from 'react-media';

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
        var refs = [document.getElementById('l1'), document.getElementById('l2'), document.getElementById('l3'),
        document.getElementById('l4'), document.getElementById('l5'), document.getElementById('l6'), 
        document.getElementById('l7'), document.getElementById('l8')]; 

        let j = 0;
        if(menu.style.opacity === '1') {
            let inTurnUnstyled = setInterval(() => {
                refs[j]!.style.opacity = '0';
                refs[j]!.style.display = 'none';
    
                ++j;
                if(j === refs.length) {
                    clearInterval(inTurnUnstyled);
                }
            }, 40)
            menu.style.opacity = '0';
            menu.style.height = '0px';
        } else {
            menu.style.opacity = '1';
            menu.style.height = '300px';
            let inTurnStyled = setInterval(() => {
                refs[j]!.style.display = 'block';
                refs[j]!.style.opacity = '1';

                j++;
                if(j === refs.length) {
                    clearInterval(inTurnStyled);
                }
            }, 110)
        }
    }

    function switchSlide(event: React.ChangeEvent<HTMLInputElement>) {
        const btnId = event.currentTarget.getAttribute('id');
        const slideLine = document.getElementById('slide_line');
        
        if(btnId === 'first_btn') {
            slideLine.style.translate = '0px';
        } else if (btnId === 'second_btn'){
            slideLine.style.translate = '-700px';
        } else if (btnId === 'third_btn'){
            slideLine.style.translate = '-1400px';
        } else if (btnId === 'fourth_btn'){
            slideLine.style.translate = '-2100px';
        }
    }

    function moveSlide(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const btnL = document.getElementById('prev_btn');
        const btnR = document.getElementById('next_btn');
        const slideLine = document.getElementById('slide_line');
        var shift = slideLine.style.translate;
        if (shift === '0px' || shift === '') {
            if (btnR === event.target) {
                slideLine.style.translate  = '-700px'
                btnL.style.opacity = '1';
            }
        } else if (shift === '-700px') {
            if (btnR === event.target) {
                slideLine.style.translate  = '-1400px'
            } else {
                slideLine.style.translate  = '0px'
                btnL.style.opacity = '0.5';
            }
        } else if (shift === '-1400px') {
            if (btnR === event.target) {
                slideLine.style.translate  = '-2100px'
                btnR.style.opacity = '0.5';
            } else {
                slideLine.style.translate  = '-700px'
            }
        } else if (shift === '-2100px') {
            if (btnL === event.target) {
                slideLine.style.translate  = '-1400px'
                btnR.style.opacity = '1';
            }
        }
    }

    return (
        <div className={styles.main_style}>
            <div className={styles.main_nav}>
                <div id='nav_block' className={styles.nav_block}>
                    <ul>
                        <li id='logo' ><a href="/"><div className={styles.elem_list_logo}></div></a></li>
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
                        <li id='l1' className={styles.ref_on_page}>
                            <a href="/" className={styles.style_ref}>Reference1
                            <p className={styles.description_link}>Description for the link</p>
                            </a>
                        </li>
                        <li id='l2' className={styles.ref_on_page}>
                            <a href="/" className={styles.style_ref}>Reference2
                            <p className={styles.description_link}>Description for the link</p>
                            </a>
                        </li>
                    </ul>
                    <ul id='left_menu' className={styles.left_menu}>
                        <li id='l3' className={styles.ref_on_page}>
                            <a href="/" className={styles.style_ref}>Reference3
                            <p className={styles.description_link}>Description for the link</p>
                            </a>
                        </li>
                        <li id='l4' className={styles.ref_on_page}>
                            <a href="/" className={styles.style_ref}>Reference4
                            <p className={styles.description_link}>Description for the link</p>
                            </a>
                        </li>
                    </ul>
                    <ul id='right_menu' className={styles.right_menu}>
                        <li id='l5' className={styles.ref_on_page}>
                            <a href="/" className={styles.style_ref}>Reference5
                            <p className={styles.description_link}>Description for the link</p>
                            </a>
                        </li>
                        <li id='l6' className={styles.ref_on_page}>
                            <a href="/" className={styles.style_ref}>Reference6
                            <p className={styles.description_link}>Description for the link</p>
                            </a>
                        </li>
                    </ul>
                    <ul id='right_menu' className={styles.right_menu}>
                        <li id='l7' className={styles.ref_on_page}>
                            <a href="/" className={styles.style_ref}>Reference7
                            <p className={styles.description_link}>Description for the link</p>
                            </a>
                        </li>
                        <li id='l8' className={styles.ref_on_page}>
                            <a href="/" className={styles.style_ref}>Reference8
                            <p className={styles.description_link}>Description for the link</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.container_sldr}>
                <button id='prev_btn' className={styles.slide_left_btn} onClick={e => moveSlide(e)}>
                    <img id='first_img' className={styles.photo_slider_btn_left} src="http://localhost:5000/arrow.png" alt="" />
                </button>
                <div className={styles.window_sldr}>
                    <div id='slide_line' className={styles.line_sldr}>
                        <img id='first_img' className={styles.photo_slider1} src="http://localhost:5000/slider1.jpg" alt="" />
                        <img id='second_img' className={styles.photo_slider1} src="http://localhost:5000/slider2.jpg" alt="" />
                    </div>
                    <div className={styles.switches_sldr}>
                        <div className={styles.form_radio}>
                            <input id='first_btn' type="radio" name='slide' onChange={e => switchSlide(e)} />
                            <label htmlFor="first_btn"></label>
                        </div>
                        <div className={styles.form_radio}>
                            <input id='second_btn' type="radio" name='slide' onChange={e => switchSlide(e)} />
                            <label htmlFor="second_btn"></label>
                        </div>
                        <div className={styles.form_radio}>
                            <input id='third_btn' type="radio" name='slide' onChange={e => switchSlide(e)} />
                            <label htmlFor="third_btn"></label>
                        </div>
                        <div className={styles.form_radio}>
                            <input id='fourth_btn' type="radio" name='slide' onChange={e => switchSlide(e)} />
                            <label htmlFor="fourth_btn"></label>
                        </div>
                    </div>
                </div>
                <button id='next_btn' className={styles.slide_right_btn} onClick={e => moveSlide(e)}>
                    <img id='first_img' className={styles.photo_slider_btn_right} src="http://localhost:5000/arrow.png" alt="" />
                </button>
            </div>
            
        </div>
    )
}

export default Main