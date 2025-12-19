import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children, className = '', delay = 0 }) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}
        >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </motion.section>
    );
};

export default Section;
