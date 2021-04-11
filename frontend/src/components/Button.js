// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './Button.css';

// const Button = styled(Link)`
//     background: ${({ primary }) => (primary ? '#000d1a' : 'CD853F')}
// `

const STYLES = ['btn--primary', 'btn--outline', 'btn--purple']

const SIZES = ['btn--medium', 'btn--large', 'btn--purple--medium']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    link
  }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
      ? buttonStyle
      : STYLES[0];
  
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  
    return (
      <Link to={link} className='btn-mobile'>
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      </Link>
    );
  };

// export default Button;