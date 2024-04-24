import React, { useState } from 'react'
import './overlayModal.css'
const OverlayModal = ({ onClose, item }) => {
    const handleClose = () => {
        onClose()
    }
    return (
        <div className='overlay'>
            <div className='modal'>
                <button className='cancel' onClick={handleClose}>
                    &#x2716;
                </button>
                <div className='modal-header'>
                    <h3 className='title'>Edit Product</h3>
                    <div className='item-name'>{item.name}</div>
                    <div className='modal-content'>
                        <div className='row'>
                            <div className='input'>
                                <label className='label' for='category'>
                                    category
                                </label>
                                <input
                                    className='inputField'
                                    name={'category'}
                                    placeholder='category'
                                />
                            </div>

                            <div className='input'>
                                <label className='label' for='price'>
                                    price
                                </label>
                                <input
                                    className='inputField'
                                    name={'price'}
                                    placeholder='price'
                                />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='input'>
                                <label className='label' for='quantity'>
                                    quantity
                                </label>
                                <input
                                    className='inputField'
                                    name={'quantity'}
                                    placeholder='quantity'
                                />
                            </div>
                            <div className='input'>
                                <label className='label' for='value'>
                                    value
                                </label>
                                <input
                                    className='inputField'
                                    name={'value'}
                                    placeholder='value'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='footer'>
                        <div className='footerContainer'>
                            <button className='buttonClass'>Cancel</button>
                            <button className='buttonClass'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverlayModal
