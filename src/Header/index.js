import './Header.css'
import { ToggleSlider } from '../ToggleSlider'
import { useState } from 'react'
export const Header = ({ onToggleSliderClick, slide }) => {
    return (
        <div className='headerContainer'>
            <div className='header'>Inventory stats</div>

            <div className='toggle'>
                <div className='text'>Admin</div>
                <div className='toggleContainer'>
                    <ToggleSlider
                        slide={slide}
                        onclick={(e) => onToggleSliderClick(e)}
                    />
                </div>
                <div className='text'>User</div>
            </div>
        </div>
    )
}
