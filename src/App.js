import React, { useState, useEffect } from 'react';

import QuoteContainer from './QuoteContainer';

const colorList = [
    'fab24b',
    '49c6e5',
    '90e0ef',
    '14213d',
    '84a59d',
    '03071e',
    'ff686b',
    'ffa69e',
    'ffd60a',
    'fec5bb',
    'c81d25',
];

const url =
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [quotes, setQuotes] = useState([]);
    const [color, setColor] = useState(
        colorList[Math.floor(Math.random() * colorList.length)]
    );
    const [quote, setQuote] = useState({});

    const fetchQuotes = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const quotes = await response.json();
            setLoading(false);
            setQuotes(quotes.quotes);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchQuotes();
    }, []);

    console.log(quotes);

    useEffect(() => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, [quotes]);

    console.log(quote);
    return (
        <main style={{ backgroundColor: `#${color}` }}>
            <QuoteContainer
                color={color}
                setColor={setColor}
                colorList={colorList}
                loading={loading}
                quote={quote}
                setQuote={setQuote}
                quotes={quotes}
            />
        </main>
    );
};

export default App;
