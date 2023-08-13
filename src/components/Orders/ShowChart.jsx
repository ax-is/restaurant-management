import React, { useState } from 'react';
import './showchart.css';

function ShowChart({ handlePriceClick, handleQuantityClick, handleToggle }) {
    const [active, setActive] = useState(false);
    const [showGrid, setShowGrid] = useState(true);

    const handleClick = () => {
        handleToggle();
        setShowGrid(!showGrid);
    };

    const handleToggleClick = () => {
        setActive(!active);
    };

    return (
        <div className={`menu ${active ? 'open' : ''}`} onClick={handleToggleClick}>
            <div className={`button${showGrid ? 'hide' : ''}`} onClick={handlePriceClick}></div>
            <div className={`button${showGrid ? 'hide' : ''}`} onClick={handleQuantityClick}></div>
            {
                showGrid ?
                    < div className="button" onClick={handleClick} style={{ backgroundImage: `url(https://www.svgrepo.com/show/513117/chart-pie.svg)` }}></div>
                    :
                    < div className="button" onClick={handleClick} style={{ backgroundImage: `url(https://www.svgrepo.com/show/506211/grid-4.svg)` }}></div>
            }
        </div >
    );
}

export default ShowChart;
