import React, { useState } from 'react';
import HeadshotUploader from './components/HeadshotUploader';

function App() {
    const [headshot, setHeadshot] = useState(null);

    const handleHeadshotGenerated = (generatedHeadshot) => {
        setHeadshot(generatedHeadshot);
    };

    return (
        <div className="App">
            <h1>AI Headshot Generator</h1>
            <HeadshotUploader onHeadshotGenerated={handleHeadshotGenerated} />
            {headshot && (
                <div>
                    <h2>Generated Headshot:</h2>
                    <img src={headshot} alt="Generated Headshot" />
                </div>
            )}
        </div>
    );
}

export default App;