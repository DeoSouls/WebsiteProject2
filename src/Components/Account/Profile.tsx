import React, { useEffect, useMemo, useState } from 'react';
import countryList from 'react-select-country-list';
import styles from '../../CssModules/Profile.module.css';
import { useForm, Controller } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchUser } from '../../app/userSlice';
import { container_btn, container_background, container_background_bigger, container_btn_white } from './AccountComponents/AnimationContainers';
import { motion } from 'framer-motion';
import zones from 'timezones.json';
import axios from 'axios';

const Profile = (props) => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user);
    const [filesValue, setFilesValue] = useState('');

    useEffect(() => {
        props.onMount("profile");
        if(Object.entries(props.user.userData).length > 0) {
            dispatch(fetchUser(props.user.userData.email))
        }
        if (localStorage.getItem('image')) {
            setFilesValue(localStorage.getItem('image'));
        }
    }, [props])

    const options = useMemo(() => countryList().getData(), []);
    const { register, handleSubmit, control } = useForm({
        values: {
            firstname: user.userData.firstname,
            lastname: user.userData.lastname,
            wmessage: user.userData.wmessage,
            date: user.userData.dateofbirth,
            country: user.userData.country,
            timezone: user.userData.timezone
        }
    });

    const select_options = (options) => {
        return options.map((option) => 
            <option value={option.value}>{option.label}</option>
        )
    }

    const select_timezone = (options) => {
        return options.map((option) => 
            option.utc.map((value) => 
                <option value={value}>{value}</option>
            )
        )
    }

    const onSubmit = (data) => {
        axios.post("http://localhost:5000/profile/update", {
            firstname: data.firstname, 
            lastname: data.lastname,
            email: props.user.userData.email,
            wmessage: data.wmessage,
            date: data.date,
            avatar: filesValue? filesValue : 'null',
            country: data.country,
            timezone: data.timezone
        },{ headers: {"Content-Type": "application/x-www-form-urlencoded"}, 
        withCredentials: true})
        .then(response => {
            localStorage.setItem('image', response.data.user.avatar)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const addImageHandle = () => {
        const input = document.getElementById('upload') as HTMLInputElement;

        var reader = new FileReader();
        
        reader.onloadend = function () {
            setFilesValue(reader.result as string);
        }

        reader.readAsDataURL(input.files[0])
    }

    const clickUpload = () => {
        const input = document.getElementById('upload') as HTMLInputElement;
        input.click();
    }

    return (
        <>
            <div className={styles.upload_avatar}>
            <img src={filesValue !== ''? filesValue : 'http://localhost:5000/default_avatar.png'} className={styles.default_avatar} id='user_image'/>
                <div>
                    <input type="file" id='upload' className={styles.input_upload_image} onChange={addImageHandle} />
                    <motion.button className={styles.upload_image_btn} whileHover="show" variants={container_btn} onClick={clickUpload}>
                        <motion.p className={styles.content_btn} variants={container_btn}>Add picture</motion.p>
                        <motion.div className={styles.backgr_btn} 
                        variants={container_background}
                        ></motion.div>
                    </motion.button>
                    <p className={styles.description_upload}>JPG, GIF or PNG. Max size of 5MB.</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.label_userinput}>
                    <p className={styles.general_label}>Firstname</p>
                    <img src="http://localhost:5000/require_input.png" className={styles.require_input} />
                </div>
                <Controller 
                    name="firstname"
                    control={control}
                    render={({ field }) => 
                        <input type="text" className={styles.input_name} {...field}/>
                    }
                />
                <div className={styles.label_userinput} id={styles.containers}>
                    <p className={styles.general_label}>Lastname</p>
                    <img src="http://localhost:5000/require_input.png" className={styles.require_input} />
                </div>
                <input type="text" className={styles.input_name} {...register("lastname")}/>
                <div className={styles.label_userinput} id={styles.containers}>
                    <p className={styles.general_label}>Welcome message</p>
                    <img src="http://localhost:5000/require_input.png" className={styles.require_input} />
                </div>
                <textarea className={styles.textarea_message} {...register("wmessage")}/>
                <div className={styles.choose_container}>
                    <div>
                        <div className={styles.label_userinput} id={styles.containers} >
                            <p className={styles.general_label}>Date of Birth</p>
                            <img src="http://localhost:5000/require_input.png" className={styles.require_input} />
                        </div>
                        <input type="date" className={styles.birth_input} {...register("date")}/>
                    </div>
                    <div>
                        <div className={styles.label_userinput} id={styles.containers}>
                            <p className={styles.general_label} id={styles.select_containers}>Country</p>
                            <img src="http://localhost:5000/require_input.png" className={styles.require_input} />
                        </div>
                        <select className={styles.select_country} {...register("country")}>
                            {select_options(options)}
                        </select>
                    </div>
                </div>
                <div className={styles.label_userinput} id={styles.containers}>
                    <p className={styles.general_label}>TimeZone</p>
                    <img src="http://localhost:5000/require_input.png" className={styles.require_input} />
                </div>
                <select className={styles.select_timezone} id={styles.input_timezone} {...register("timezone")}>
                    {select_timezone(zones)}
                </select>
                <div className={styles.savecancel_container}>
                    <motion.button className={styles.cancel_btn} whileHover="show" variants={container_btn}>
                        <motion.p variants={container_btn} className={styles.cancel_btn_content}>Cancel</motion.p>
                        <motion.div variants={container_background} className={styles.cancel_btn_background}></motion.div>
                    </motion.button>
                    {/* <motion.input className={styles.save_btn} type="submit" value="Save Changes"/> */}
                    <motion.button className={styles.save_btn} type='submit' whileHover="show" variants={container_btn}>
                        <motion.p variants={container_btn_white} className={styles.save_btn_content}>Save Changes</motion.p>
                        <motion.div variants={container_background_bigger} className={styles.save_btn_background}></motion.div>
                    </motion.button>
                </div>
            </form>
        </>
    )
}

export default Profile;