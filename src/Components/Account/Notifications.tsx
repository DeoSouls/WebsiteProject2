import React, { useEffect } from 'react';
import styles from '../../CssModules/Notifications.module.css';

const Notifications = (props) => {

    useEffect(() => {
        props.onMount("notifications");
    }, [])

    return (
        <div className={styles.notifications_container}>
            <div className={styles.notifications_title}>
                <p className={styles.notifications_title_content}>Notification settings</p>
                <p className={styles.notifications_title_description}>Select the kind of notifications you get about your activities and recomendations</p>
            </div>
            <div className={styles.email_container}>
                <div className={styles.email_title}>
                    <p className={styles.email_content}>Email notifications</p>
                    <p className={styles.email_description}>
                        Get emails  to find out what’s going on when you’re
                        not online. You can turn these off. 
                    </p>
                </div>
                <div className={styles.email_toggle_container}>
                    <div className={styles.news_toggle_container}>
                        <div className={styles.news_toggle}>
                            <div className={styles.news_onoff}></div>
                        </div>
                        <div className={styles.news_toggle_title}>
                            <p className={styles.news_toggle_content}>News and updates</p>
                            <p className={styles.news_toggle_description}>News about product and feature updates</p>
                        </div>
                    </div>
                    <div className={styles.tips_toggle_container}>
                        <div className={styles.tips_toggle}>
                            <div className={styles.tips_onoff}></div>
                        </div>
                        <div className={styles.tips_toggle_title}>
                            <p className={styles.tips_toggle_content}>Tips and tutorials</p>
                            <p className={styles.tips_toggle_description}>Tips on getting more out of Website.</p>
                        </div>
                    </div>
                    <div className={styles.research_toggle_container}>
                        <div className={styles.research_toggle}>
                            <div className={styles.research_onoff}></div>
                        </div>
                        <div className={styles.research_toggle_title}>
                            <p className={styles.research_toggle_content}>User research</p>
                            <p className={styles.research_toggle_description}>Get involved in our beta testing program or participate in 
                            paid product user research</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.push_container}>
                <div className={styles.push_title}>
                    <p className={styles.push_content}>Push notifications</p>
                    <p className={styles.push_description}>
                        Get push notifications in app to find out what’s 
                        going in when you’re online. 
                    </p>
                </div>
                <div className={styles.push_toggle_container}>
                    <div className={styles.remind_toggle_container}>
                        <div className={styles.remind_toggle}>
                            <div className={styles.remind_onoff}></div>
                        </div>
                        <div className={styles.remind_toggle_title}>
                            <p className={styles.remind_toggle_content}>Reminders</p>
                            <p className={styles.remind_toggle_description}>These are notifications to remind you of updates you 
                            might have missed</p>
                        </div>
                    </div>
                    <div className={styles.comments_toggle_container}>
                        <div className={styles.comments_toggle}>
                            <div className={styles.comments_onoff}></div>
                        </div>
                        <div className={styles.comments_toggle_title}>
                            <p className={styles.comments_toggle_content}>Comments</p>
                            <p className={styles.comments_toggle_description}>Comments on your posts and replies to comments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Notifications;