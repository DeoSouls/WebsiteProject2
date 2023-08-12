import React from 'react';
import styles from '../../CssModules/Catalog.module.css';

const Catalog = (props) => {

    return (
        <div>
            <div className={styles.base_container}>
                <div className={styles.catalog_background}></div>
                <div className={styles.catalog_Onbackground}></div>
                <div className={styles.sort_container}>
                    <div className={styles.catalog_sort}>Sort of</div>
                </div>
                <div className={styles.content_container}>
                    <div className={styles.catalog_content}>
                        <div className={styles.content_subcategory}>
                            <div className={styles.subcategory_style}>SUBCATEGORY</div>
                            <div className={styles.subcategory_element}>All categories (**)</div>
                            <div className={styles.subcategory_element}>AI (**)</div>
                            <div className={styles.subcategory_element}>Data transfer/Migration Services (**)</div>
                            <div className={styles.subcategory_element}>Payments & Security (**)</div>
                            <div className={styles.subcategory_element}>CRM & Customer Service (**)</div>
                            <div className={styles.subcategory_element}>Product Sourcing (**)</div>
                            <div className={styles.subcategory_element}>Mobile (**)</div>
                            <div className={styles.subcategory_element}>CMS & Hosting (**)</div>
                            <div className={styles.subcategory_line}></div>
                            <div className={styles.subcategory_style}>PRICE</div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <input className={styles.radio_all_input} type="radio" id='all' name='price'/>
                                <label className={styles.radio_all_label} htmlFor="all">All</label>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <input className={styles.radio_all_input} type="radio" id='free' name='price'/>
                                <label className={styles.radio_all_label} htmlFor="free">Free</label>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <input className={styles.radio_all_input} type="radio" id='paid' name='price'/>
                                <label className={styles.radio_all_label} htmlFor="paid">Paid</label>
                            </div>
                            <div className={styles.subcategory_line}></div>
                            <div className={styles.subcategory_style}>RATING</div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <input className={styles.radio_all_input} type="radio" id='allrate' name='rating'/>
                                <label className={styles.radio_all_label} htmlFor="allrate">All</label>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <input className={styles.radio_all_input} type="radio" id='rate4' name='rating'/>
                                <label className={styles.radio_rate4_label} htmlFor="rate4">
                                    <div style={{ marginLeft: '-8px'}} className={styles.card_rate}></div>
                                    <p style={{margin: 0, marginLeft: '8px'}}>and up</p>
                                </label>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <input className={styles.radio_all_input} type="radio" id='rate3' name='rating'/>
                                <label className={styles.radio_rate3_label} htmlFor="rate3">
                                    <div style={{ marginLeft: '-8px'}} className={styles.card_rate}></div>
                                    <p style={{margin: 0, marginLeft: '8px'}}>and up</p>
                                </label>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <input className={styles.radio_all_input} type="radio" id='rate2' name='rating'/>
                                <label className={styles.radio_rate2_label} htmlFor="rate2">
                                    <div style={{ marginLeft: '-8px'}} className={styles.card_rate}></div>
                                    <p style={{margin: 0, marginLeft: '8px'}}>and up</p>
                                </label>
                            </div>
                        </div>
                        <div className={styles.content_cards}>
                            <div className={styles.card_background}>
                                <div className={styles.background_image}>
                                    <div className={styles.card_image}></div>
                                </div>
                                <p className={styles.title_card}>BOPIS / Click and Collect by RANDEMRETAIL</p>
                                <a href="/" className={styles.ref_card}>POS & In-Store</a>
                                <p className={styles.description_card}>Buy Online Pickup In Store by RANDEMRETAIL is the only enterpise-grade Appli...</p>
                                <div className={styles.card_review_container}>
                                    <div className={styles.card_rate}></div>
                                    <p className={styles.card_reviews}>1 reviews</p>
                                </div>
                            </div>
                            <div className={styles.card_background}>
                                <div className={styles.background_image}>
                                    <div className={styles.card_image}></div>
                                </div>
                                <p className={styles.title_card}>BOPIS / Click and Collect by RANDEMRETAIL</p>
                                <a href="/" className={styles.ref_card}>POS & In-Store</a>
                                <p className={styles.description_card}>Buy Online Pickup In Store by RANDEMRETAIL is the only enterpise-grade Appli...</p>
                                <div className={styles.card_review_container}>
                                    <div className={styles.card_rate}></div>
                                    <p className={styles.card_reviews}>1 reviews</p>
                                </div>
                            </div>
                            <div className={styles.card_background}>
                                <div className={styles.background_image}>
                                    <div className={styles.card_image}></div>
                                </div>
                                <p className={styles.title_card}>BOPIS / Click and Collect by RANDEMRETAIL</p>
                                <a href="/" className={styles.ref_card}>POS & In-Store</a>
                                <p className={styles.description_card}>Buy Online Pickup In Store by RANDEMRETAIL is the only enterpise-grade Appli...</p>
                                <div className={styles.card_review_container}>
                                    <div className={styles.card_rate}></div>
                                    <p className={styles.card_reviews}>1 reviews</p>
                                </div>
                            </div>
                            <div className={styles.card_background}>
                                <div className={styles.background_image}>
                                    <div className={styles.card_image}></div>
                                </div>
                                <p className={styles.title_card}>BOPIS / Click and Collect by RANDEMRETAIL</p>
                                <a href="/" className={styles.ref_card}>POS & In-Store</a>
                                <p className={styles.description_card}>Buy Online Pickup In Store by RANDEMRETAIL is the only enterpise-grade Appli...</p>
                                <div className={styles.card_review_container}>
                                    <div className={styles.card_rate}></div>
                                    <p className={styles.card_reviews}>1 reviews</p>
                                </div>
                            </div>
                            <div className={styles.card_background}>
                                <div className={styles.background_image}>
                                    <div className={styles.card_image}></div>
                                </div>
                                <p className={styles.title_card}>BOPIS / Click and Collect by RANDEMRETAIL</p>
                                <a href="/" className={styles.ref_card}>POS & In-Store</a>
                                <p className={styles.description_card}>Buy Online Pickup In Store by RANDEMRETAIL is the only enterpise-grade Appli...</p>
                                <div className={styles.card_review_container}>
                                    <div className={styles.card_rate}></div>
                                    <p className={styles.card_reviews}>1 reviews</p>
                                </div>
                            </div>
                            <div className={styles.card_background}>
                                <div className={styles.background_image}>
                                    <div className={styles.card_image}></div>
                                </div>
                                <p className={styles.title_card}>BOPIS / Click and Collect by RANDEMRETAIL</p>
                                <a href="/" className={styles.ref_card}>POS & In-Store</a>
                                <p className={styles.description_card}>Buy Online Pickup In Store by RANDEMRETAIL is the only enterpise-grade Appli...</p>
                                <div className={styles.card_review_container}>
                                    <div className={styles.card_rate}></div>
                                    <p className={styles.card_reviews}>1 reviews</p>
                                </div>
                            </div>
                            <div className={styles.card_background}>
                                <div className={styles.background_image}>
                                    <div className={styles.card_image}></div>
                                </div>
                                <p className={styles.title_card}>BOPIS / Click and Collect by RANDEMRETAIL</p>
                                <a href="/" className={styles.ref_card}>POS & In-Store</a>
                                <p className={styles.description_card}>Buy Online Pickup In Store by RANDEMRETAIL is the only enterpise-grade Appli...</p>
                                <div className={styles.card_review_container}>
                                    <div className={styles.card_rate}></div>
                                    <p className={styles.card_reviews}>1 reviews</p>
                                </div>
                            </div>
                            <div className={styles.card_background}>
                                <div className={styles.background_image}>
                                    <div className={styles.card_image}></div>
                                </div>
                                <p className={styles.title_card}>BOPIS / Click and Collect by RANDEMRETAIL</p>
                                <a href="/" className={styles.ref_card}>POS & In-Store</a>
                                <p className={styles.description_card}>Buy Online Pickup In Store by RANDEMRETAIL is the only enterpise-grade Appli...</p>
                                <div className={styles.card_review_container}>
                                    <div className={styles.card_rate}></div>
                                    <p className={styles.card_reviews}>1 reviews</p>
                                </div>
                            </div>
                            <div className={styles.card_background}>
                                <div className={styles.background_image}>
                                    <div className={styles.card_image}></div>
                                </div>
                                <p className={styles.title_card}>BOPIS / Click and Collect by RANDEMRETAIL</p>
                                <a href="/" className={styles.ref_card}>POS & In-Store</a>
                                <p className={styles.description_card}>Buy Online Pickup In Store by RANDEMRETAIL is the only enterpise-grade Appli...</p>
                                <div className={styles.card_review_container}>
                                    <div className={styles.card_rate}></div>
                                    <p className={styles.card_reviews}>1 reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog;