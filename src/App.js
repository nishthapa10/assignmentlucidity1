import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import { Stats } from './Stats'
import { Header } from './Header'
import { PricingTable } from './PricingTable'
import { useEffect } from 'react'
import { fetchData } from './Store/action'

function App() {
    const [slide, setSlide] = useState(false)

    const stats = useSelector((state) => state?.stats?.stats)
    const dispatch = useDispatch()

    useEffect(() => {
        getStats()
    }, [dispatch])

    const getStats = () => {
        dispatch(fetchData())
    }
    const onToggleSliderClick = (e) => {
        setSlide(!slide)
    }
    return (
        <div className='App'>
            <Header onToggleSliderClick={onToggleSliderClick} slide={slide} />
            <Stats />
            <PricingTable stats={stats} slide={slide} />
        </div>
    )
}

export default App
