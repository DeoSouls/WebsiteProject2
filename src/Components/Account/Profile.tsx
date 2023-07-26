import React from 'react';
import styles from '../../CssModules/Profile.module.css';

const Profile = (props) => {

    return (
        <div>
            <div className={styles.profile_title_container}>
                <p className={styles.profile_title_content}>Account settings</p>
            </div>
            <div className={styles.general_container}>
                <div className={styles.middlenav_container}>
                    <ul className={styles.middlenav_block}>
                        <li className={styles.middlenav_ref}>Profile</li>
                        <li className={styles.middlenav_ref}>Login</li>
                        <li className={styles.middlenav_ref}>Phone number(s)</li>
                        <li className={styles.middlenav_ref}>Notifications</li>
                    </ul>
                </div>
                <div className={styles.content_container}>
                    <div className={styles.upload_avatar}>
                        <div className={styles.default_avatar}></div>
                        <div>
                            <button className={styles.upload_image_btn}>Add picture</button>
                            <p className={styles.description_upload}>JPG, GIF or PNG. Max size of 5MB.</p>
                        </div>
                    </div>
                    <div className={styles.label_userinput}>
                        <p className={styles.general_label}>Firstname</p>
                        <img src="http://localhost:5000/require_input.png" className={styles.require_input} />
                    </div>
                    <input type="text" className={styles.input_name} />
                    <div className={styles.label_userinput} style={{marginTop: '15px'}}>
                        <p className={styles.general_label}>Lastname</p>
                        <img src="http://localhost:5000/require_input.png" className={styles.require_input} />
                    </div>
                    <input type="text" className={styles.input_name} />
                    <div className={styles.label_userinput} style={{marginTop: '15px'}}>
                        <p className={styles.general_label}>Welcome message</p>
                        <img src="http://localhost:5000/require_input.png" className={styles.require_input} />
                    </div>
                    <textarea className={styles.textarea_message} />
                </div>
            </div>
        </div>
    )
}

export default Profile;