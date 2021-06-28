import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons';
import Link from 'next/link';


// CUSTOM BUTTON COMPONENT
export const CustomButton = ({ type, size, className, rounded, squared, text, link, name }) => {
    return (
        <Link href={link} passHref>
            <button
                //button type, is it primary, secondary, accent1, accent2, accent3. If nothing selected, default it button-default.
                //button size, is it large or small, default would be empty string and system would know it is default/medium size
                //is it rounded?
                //is it squared?
                //additional button class for custom classes
                className={`button${type ? ' button-' + type : ' button-default'}${
                    size ? ' button-' + size : ''
                }${rounded ? ' button-rounded' : ''}${squared ? ' button-squared': ''}${className ? ` ${className}`: ''}`}
            >
        
                {
                    //Button Label
                    text ? <span className="label">{text}</span> : ''}
               
                {
                    //Button icon
                    name ? 
                    <Icon name={name} /> : ''}

                
            </button>
        </Link>
    );
};

CustomButton.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    className: PropTypes.string,
    rounded: PropTypes.bool,
    squared: PropTypes.bool,
    link: PropTypes.string,
    name: PropTypes.string.isRequired,
};

CustomButton.defaultProps = {
    text: '',
    type: 'primary',
    size: 'large',
    className: '',
    rounded: true,
    squared: true,
    link: '/',
    name:'',
};
