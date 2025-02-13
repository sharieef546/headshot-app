import React, { useState } from 'react';

const HeadshotUploader = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [headshotUrl, setHeadshotUrl] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setError('Please upload a photo.');
            return;
        }

        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append('photo', file);

        try {
            const response = await fetch('/api/headshot/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to upload photo');
            }

            const data = await response.json();
            setHeadshotUrl(data.headshotUrl);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Upload a Casual Photo</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={loading}>
                {loading ? 'Generating...' : 'Generate Headshot'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {headshotUrl && (
                <div>
                    <h3>Generated Headshot:</h3>
                    <img src={headshotUrl} alt="Generated Headshot" />
                </div>
            )}
        </div>
    );
};

export default HeadshotUploader;