import React, { useContext, useState } from 'react';
import { gameContext } from '../contexts/gameContext';



const Footer = props => {

    const game = useContext(gameContext)
    const [size, setSize] = props.dimension

    const handleChange = e => {
        const n = Number(e.target.value)
        setSize(Math.max(n, 5))
        game.setMineCount(count => Math.min(count, (n*n)-1))
    }

    const handleMineChange = e => {
        const n = Number(e.target.value)
        game.setMineCount(Math.max(5, Math.min(n, (size*size)-1)))
    }

    return (
        <div className="footer">
            <span className="footer__section">
                <label htmlFor="mines">Number of Mines</label>
                <input type="number" min="5" max={`${(size*size)-1}`} id="mines" value={game.mineCount} onChange={handleMineChange}/>
            </span>
            <span className="footer__section">
                <label htmlFor="mines">size of tile grid</label>
                <input type="number" min="5" max={`${(size * size) - 1}`} id="mines" value={size} onChange={handleChange} />
            </span>
        </div>
    );
}

export default Footer;
