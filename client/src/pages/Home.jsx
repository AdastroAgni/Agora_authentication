import React from "react";
import { useSelector } from "react-redux";



function Home() {

    const { user } = useSelector(
        (state) => state.auth
    );

    return (
        <>
            <div className="personal">
                <div className="personal-container">
                    <div className="personal-image"></div>
                    <div className="parsonal-info">
                        <h1 className="personal-name">{user.name}</h1>
                        <p className="personal-description">There will be your self description</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
