import React, { useEffect, useState } from 'react';
import styles from '../../CssModules/PhoneNumbers.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const PhoneNumbers = (props) => {

    const [isExistNumber, setIsExistNumber] = useState(props.user.userData.number !== undefined && props.user.userData.number !== null? true : false);

    useEffect(() => {
        props.onMount("phone");
        if(props.user.userData.number !== undefined && props.user.userData.number !== null) {
            setIsExistNumber(true)
        }
    },[props.user])

    const { register, handleSubmit } = useForm({
        defaultValues: {
            phone_number: '+7'
        }
    });

    const onSubmit = (data) => {
        axios.post('http://localhost:5000/profile/add_number', {
            email: props.user.userData.email,
            firstname: props.user.userData.firstname,
            lastname: props.user.userData.lastname,
            isActivate: props.user.userData.isActivate,
            number: data.phone_number
        },{ headers: {"Content-Type": "application/x-www-form-urlencoded"}, 
        withCredentials: true})
        .then(response => {
            localStorage.setItem('access_token', response.data.access_token);
            props.onChange(data.number);
            setIsExistNumber(true);
        })
        .catch(error => {
            console.log(error)
        });
    }

    return (
        <div className={styles.phonesettings_container}>
            <p className={styles.phonesettings_description}>A current mobile number helps reset your password easly and receive SMS notifications.</p>
            <p className={styles.phonesettings_description}>It also helps us suggest friends and provide and improve ads for you and others. Only you will see your number.</p>
            
            {isExistNumber? <div className={styles.flex_container}>
                <div>
                    <p className={styles.current_phone_title}>Current phone number:</p>
                    <p className={styles.current_phone_content}>{props.user.userData.number}</p>
                </div>
                <p className={styles.phone_status}>Verified</p>
                <button className={styles.change_number_btn}>Change number</button>
            </div>
            :
            <form className={styles.flex_container} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className={styles.input_number} {...register('phone_number')} />
                <img src="http://localhost:5000/flag.png" className={styles.image_flag}/>
                <button className={styles.add_number_btn} type='submit'>+ Add number</button>
            </form>}
            <p className={styles.under_message}>We will send a text message (SMS) with your verification code to the number entered. Once received, please enter it to verify and save the phone number.</p>
        </div>
    )
}

export default PhoneNumbers;