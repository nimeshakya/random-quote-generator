import React from 'react';

const QuoteContainer = ({ color, setColor }) => {
    return (
        <div className='quote-container'>
            <div className='quote-div'>
                <h1 style={{ color: `#${color}` }}>
                    <span>
                        <i class='fas fa-quote-left'></i>
                    </span>
                    Positive anything is better than negative nothing.
                </h1>
                <h3 style={{ color: `#${color}` }}>-Elbert Hubbard</h3>
            </div>
            <div className='controls-div'>
                <ul className='social-container'>
                    <li style={{ 'background-color': `#${color}` }}>
                        <a href='#' className='social-link'>
                            <i class='fab fa-twitter'></i>
                        </a>
                    </li>
                    <li style={{ 'background-color': `#${color}` }}>
                        <a href='#' className='social-link'>
                            <i class='fab fa-facebook'></i>
                        </a>
                    </li>
                </ul>
                <button style={{ 'background-color': `#${color}` }}>
                    Next Quote
                </button>
            </div>
        </div>
    );
};

export default QuoteContainer;
