import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../icons';
import Link from 'next/link';


//BOBY TEXT
export const BodyText = ({ size, text, color, link, weight, className, linkColored }) => {
    const _size = size === 'tiny' ? 'text-xs' : size === 'small' ? 'text-sm' : 'text-lg';
    const _color = `text-${color}`;
    const _linkColor = linkColored ? 'text-primary ' : 'text-text';
    const _weight = weight === 'thin' ? 'font-light' : weight === 'normal' ? 'font-medium' : 'font-bold'
    return (
        <p className={`${className} ${_size} ${_color} ${_weight}`}>
            {text}
            {link && (
                <span
                    className={`${_linkColor} cursor-pointer ml-1 ${_size}`}
                    onClick={link.action}
                >
                    {link.text}
                </span>
            )}
        </p>
    );
};

BodyText.propTypes = {
    size: (PropTypes.string = 'tiny' | 'small' | 'big'),
    weight: PropTypes.string = 'thin' | 'normal' | 'strong',
    text: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
    linkColored: PropTypes.bool,
    link: PropTypes.shape({
        text: PropTypes.string.isRequired,
        action: PropTypes.func.isRequired
    })
};

BodyText.defaultProps = {
    text: '',
    size: 'small',
    color: 'white',
    className: '',
    linkColored: true,
    weight: 'normal'
};

// HEADING TEXT
export const HeadText = ({ size, text, color, weight, className }) => {
    const _size =
        size === 'x-tiny'
            ? 'text-md'
            : size === 'tiny'
                ? 'text-lg'
                : size === 'small'
                    ? 'text-xl'
                    : 'text-4xl';
    const _color = `text-${color}`;
    const _weight = weight === 'thin' ? 'font-light' : weight === 'normal' ? 'font-medium' : 'font-bold'
    return <h3 className={`${_size} ${_color} ${_weight} ${className}`}>{text}</h3>;
};

HeadText.propTypes = {
    size: (PropTypes.string = 'x-tiny' | 'tiny' | 'small' | 'big'),
    weight: PropTypes.string = 'thin' | 'normal' | 'strong',
    text: PropTypes.string.isRequired,
    color: (PropTypes.string = 'danger' | 'success' | 'text' | 'primary'),
    className: PropTypes.string
};

HeadText.defaultProps = {
    size: 'small',
    color: 'white',
    className: '',
    weight: 'normal'
};

// HEADING TEXT
export const HeroText = ({ size, text, color, weight, className }) => {
    const _size =
        size === 'x-tiny'
            ? 'text-lg'
            : size === 'tiny'
                ? 'text-2xl'
                : size === 'small'
                    ? 'text-3xl'
                    : 'text-5xl';
    const _weight = weight === 'thin' ? 'font-light' : weight === 'normal' ? 'font-medium' : 'font-bold'
    const _color = `text-${color}`;
    return <h3 className={`${_size} ${_color} ${_weight} ${className}`}>{text}</h3>;
};

HeroText.propTypes = {
    size: (PropTypes.string = 'x-tiny' | 'tiny' | 'small' | 'big'),
    weight: PropTypes.string = 'thin' | 'normal' | 'strong',
    text: PropTypes.string.isRequired,
    color: (PropTypes.string = 'danger' | 'success' | 'text' | 'primary'),
    className: PropTypes.string
};

HeroText.defaultProps = {
    size: 'small',
    color: 'white',
    className: '',
    weight: 'normal'
};

//BACKGROUND
export const BackgroundText = ({ backgroundText, layerText, bgtextColor, color, line, className }) => {
    const bgTextColorAttr = `text-${bgtextColor}`
    const textColor = `text-${color}`
    const bgColor = `bg-${color}`
    const _className = className ? `background-text-container ${className}` :
        `background-text-container`
    return (
        <div className={_className}>
            <h3 className={`background-text ${bgTextColorAttr}`}>{backgroundText}</h3>
            <div className="layer-container">
                <h3 className={`layer-text ${textColor}`}>{layerText}</h3>
                {
                    line &&
                    <div className={`line ${bgColor}`}></div>
                }
            </div>
        </div>
    )
};

BackgroundText.propTypes = {
    backgroundText: PropTypes.string.isRequired,
    bgtextColor: PropTypes.string,
    layerText: PropTypes.string.isRequired,
    color: (PropTypes.string = 'danger' | 'success' | 'purple' | 'primary'),
    line: PropTypes.bool,
    className: PropTypes.string
}

BackgroundText.defaultProps = {
    color: 'primary',
    bgtextColor: '',
    line: true,
    className: ''
};


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
                {/* {
                    //Icon? 
                    iconName ? 
                //Icon Position?      
                    <i className={`icon custom-icons${iconPosition ?` icon-position-${iconPosition}`:''}`}>
                        {iconName}
                    </i> : ''} */}
                {
                    //Button icon
                    name ? 
                    <Icon name={name} /> : ''}
                {/* {
                    //Button icon
                    iconName ? 
                    <Icon name={iconName} className={`icon custom-icons${iconPosition ? ` icon-position-${iconPosition}`:''}`} /> : ''} */}
                
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


