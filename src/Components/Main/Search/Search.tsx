import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import styles from '../../../CssModules/Search.module.css';

const Search = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const variants = {
        open: { width: 150, paddingRight: 40, backgroundColor: 'hsl(240,240,240)', transition: {
            duration: 0.5
        }},
        closed: { width: 10, paddingRight: 15, backgroundColor: 'transparent'}
    }

    return (
        <div style={{display: 'flex'}}>
            <motion.input 
                className={styles.search_input}
                type="text"
                initial="closed"
                variants={variants}
                animate={isOpen? "open" : "closed"}
            />
            <IconButton className={styles.search_toggle} onClick={() => setIsOpen(isOpen => !isOpen)}>
                {isOpen? 
                <SearchIcon/> 
                :
                <img src="http://localhost:5000/search.png" className={styles.search_icon} />
                }
            </IconButton>
        </div>
    )
}

export default Search;