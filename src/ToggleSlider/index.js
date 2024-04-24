import './toggleSlider.css'

export const ToggleSlider = ({ slide, onclick }) => {
    console.log(slide, 'slide')
    const sliderStyle = {
        marginLeft: slide ? '60%' : '1px', // Adjust the value as needed
    }
    return (
        <div className='container'>
            <div className='slider' style={sliderStyle} onClick={onclick}></div>
        </div>
    )
}
