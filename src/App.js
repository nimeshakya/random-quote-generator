import React, { useState } from 'react';

import QuoteContainer from './QuoteContainer';

const colors = [
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

const App = () => {
    const [color, setColor] = useState(
        colors[Math.floor(Math.random() * colors.length)]
    );

    return (
        <main style={{ 'background-color': `#${color}` }}>
            <QuoteContainer color={color} setColor={setColor} />
        </main>
    );
};

export default App;
