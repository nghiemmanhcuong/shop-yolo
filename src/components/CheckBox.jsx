import { useRef } from 'react';
import PropTypes from 'prop-types';

const CheckBox = (props) => {
    const inputRef = useRef(null);

    const onChange = () => {
        if(props.onChange) {
            props.onChange(inputRef.current)
        }
    }

    return (
        <label htmlFor={props.id} className='customer-checkbox'>
            <input type='checkbox' ref={inputRef} onChange={onChange} checked={props.checked} id={props.id}/>
            <span className='customer-checkbox__checkmark'>
                <i className='bx bx-check'></i>
            </span>
            {props.label}
        </label>
    );
};

CheckBox.propTypes = {
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool,
};

export default CheckBox;