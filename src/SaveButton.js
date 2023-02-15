import React, { useState } from 'react';

function SaveButton() {
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        console.log('Saved!');
    };

    return (
        <button className="button-style" onClick={handleSave}>
            {saved ? 'Saved' : 'Save'}
        </button>
    );
}

export default SaveButton;