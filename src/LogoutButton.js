import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function LogoutButton() {
    const [isLoggedOut, setIsLoggedOut] = useState(false);
    const history = useHistory();

    const handleLogout = () => {
        setIsLoggedOut(true);
    };

    useEffect(() => {
        if (isLoggedOut) {
            history.push('/');
        }
    }, [isLoggedOut, history]);

    return (
        <div>
            {isLoggedOut ? (
                <p>You have logged out</p>
            ) : (
                <button className="button-stylelog" onClick={handleLogout}>Logout</button>
            )}
        </div>
    );
}

export default LogoutButton;