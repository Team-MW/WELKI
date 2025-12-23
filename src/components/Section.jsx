import React from 'react';

const Section = ({ children, className = '', delay = 0, style, ...props }) => {
    return (
        <section
            className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}
            style={style}
            {...props}
        >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
};

export default Section;
