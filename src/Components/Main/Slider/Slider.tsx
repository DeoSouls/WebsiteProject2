import React, {useRef, useEffect} from 'react';
import styles from '../../../CssModules/Slider.module.css';

const Slider = (props) => {

    const first_radio = useRef(null);
    const second_radio = useRef(null);
    const third_radio = useRef(null);
    const fourth_radio = useRef(null);

    useEffect(() => {
        first_radio.current.checked = true;
    }, [])

    var timerId;

    function moveSlide(event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.MouseEvent<HTMLInputElement, MouseEvent>) {
        const btnL = document.getElementById('prev_btn');
        const btnR = document.getElementById('next_btn');
        const btnId = event.currentTarget.getAttribute('id');
        const slideLine = document.getElementById('slide_line');
        var shift = slideLine.style.translate;

        if(timerId) return;

        if (shift === '0px' || shift === '') {
            if (btnR === event.target) {
                slideLine.style.translate  = '-700px'
                btnL.style.opacity = '1';
                second_radio.current.checked = true;
            }
        } else if (shift === '-700px') {
            if (btnR === event.target) {
                slideLine.style.translate  = '-1400px'
                third_radio.current.checked = true;
            } else {
                slideLine.style.translate  = '0px'
                btnL.style.opacity = '0.5';
                first_radio.current.checked = true;
            }
        } else if (shift === '-1400px') {
            if (btnR === event.target) {
                slideLine.style.translate  = '-2100px'
                btnR.style.opacity = '0.5';
                fourth_radio.current.checked = true;
            } else {
                slideLine.style.translate  = '-700px'
                second_radio.current.checked = true;
            }
        } else if (shift === '-2100px') {
            if (btnL === event.target) {
                slideLine.style.translate  = '-1400px'
                btnR.style.opacity = '1';
                third_radio.current.checked = true;
            }
        }

        if(btnId === 'first_btn') {
            slideLine.style.translate = '0px';
            first_radio.current.checked = true;
        } else if (btnId === 'second_btn'){
            slideLine.style.translate = '-700px';
            second_radio.current.checked = true;
        } else if (btnId === 'third_btn'){
            slideLine.style.translate = '-1400px';
            third_radio.current.checked = true;
        } else if (btnId === 'fourth_btn'){
            slideLine.style.translate = '-2100px';
            fourth_radio.current.checked = true;
        }

        timerId = setTimeout(() => { timerId = undefined }, 700);
    }

    return (
        <div className={styles.container_sldr}>
            <button id='prev_btn' className={styles.slide_left_btn} onClick={e => moveSlide(e)}>
                <img id='first_img' className={styles.photo_slider_btn_left} src="http://localhost:5000/arrow.png" alt="" />
            </button>
            <div className={styles.window_sldr}>
                <div id='slide_line' className={styles.subline_sldr}>
                    <div className={styles.line_sldr}>
                        <img id='first_img' className={styles.photo_slider1} src="http://localhost:5000/slider1.jpg" alt="" />
                        <img id='second_img' className={styles.photo_slider1} src="http://localhost:5000/slider2.jpg" alt="" />
                    </div>
                </div>
                <div className={styles.switches_sldr}>
                    <div className={styles.form_radio}>
                        <input id='first_btn' type="radio" name='slide' ref={first_radio} onClick={e => moveSlide(e)}/>
                        <label htmlFor="first_btn"></label>
                    </div>
                    <div className={styles.form_radio}>
                        <input id='second_btn' type="radio" name='slide' ref={second_radio} onClick={e => moveSlide(e)} />
                        <label htmlFor="second_btn"></label>
                    </div>
                    <div className={styles.form_radio}>
                        <input id='third_btn' type="radio" name='slide' ref={third_radio} onClick={e => moveSlide(e)} />
                        <label htmlFor="third_btn"></label>
                    </div>
                    <div className={styles.form_radio}>
                        <input id='fourth_btn' type="radio" name='slide' ref={fourth_radio} onClick={e => moveSlide(e)} />
                        <label htmlFor="fourth_btn"></label>
                    </div>
                </div>
            </div>
            <button id='next_btn' className={styles.slide_right_btn} onClick={e => moveSlide(e)}>
                <img id='first_img' className={styles.photo_slider_btn_right} src="http://localhost:5000/arrow.png" alt="" />
            </button>
        </div>
    )
}

export default Slider;