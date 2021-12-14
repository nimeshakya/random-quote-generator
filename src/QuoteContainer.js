import React from 'react';

const QuoteContainer = ({
    color,
    setColor,
    colorList,
    loading,
    quote,
    setQuote,
    quotes,
}) => {
    const handleClick = () => {
        setColor(newColorFunc);
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    };

    //function to avoid repeated color when choosing random color
    const newColorFunc = () => {
        let newColor = colorList[Math.floor(Math.random() * colorList.length)];
        // if new color is same as previous then add its index by 1 and return that color
        if (
            newColor === color &&
            colorList.indexOf(newColor) !== colorList.length - 1
        ) {
            newColor = colorList[colorList.indexOf(newColor) + 1];
            return newColor;
        } else if (
            // if the color is last item in array then return first item
            newColor === color &&
            colorList.indexOf(newColor) === colorList.length - 1
        ) {
            newColor = colorList[0];
        } else {
            return newColor;
        }
    };

    return (
        <div className='quote-container'>
            {loading || quote === undefined ? (
                <div className='quote-div-loading'>
                    <h1 style={{ color: `#${color}` }}>
                        <span>
                            <i className='fas fa-quote-left'></i>
                        </span>
                    </h1>
                </div>
            ) : (
                <div className='quote-div'>
                    <h1 key={color} style={{ color: `#${color}` }}>
                        <span>
                            <i className='fas fa-quote-left'></i>
                        </span>
                        {quote.quote}
                    </h1>
                    <h3 key={color} style={{ color: `#${color}` }}>
                        -{quote.author}
                    </h3>
                </div>
            )}

            <div className='controls-div'>
                <ul className='social-container'>
                    <li
                        style={{ backgroundColor: `#${color}` }}
                        title='Tweet on Twitter'
                    >
                        <a
                            // link to post to twitter
                            href={
                                quote !== undefined &&
                                `https://www.twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
                                    `"${quote.quote}"\n- ${quote.author}`
                                )}`
                            }
                            target='_blank'
                            className='social-link'
                        >
                            <i className='fab fa-twitter'></i>
                        </a>
                    </li>
                    <li
                        style={{ backgroundColor: `#${color}` }}
                        title='Post on Tumblr'
                    >
                        <a
                            // link to post to twitter
                            href={
                                quote !== undefined &&
                                `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${encodeURIComponent(
                                    quote.author
                                )}&content=${encodeURIComponent(
                                    quote.quote
                                )}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`
                            }
                            target='_blank'
                            className='social-link'
                        >
                            <i className='fab fa-tumblr'></i>
                        </a>
                    </li>
                </ul>
                <button
                    style={{ backgroundColor: `#${color}` }}
                    onClick={handleClick}
                >
                    Next Quote
                </button>
            </div>
        </div>
    );
};

export default QuoteContainer;
