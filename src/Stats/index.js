import './stats.css'
import { FaShoppingCart, FaBan } from 'react-icons/fa'
import { FaArrowsRotate } from 'react-icons/fa6'

export const Stats = () => {
    const stats1 = [
        { title: 'Total Products', value: 9, icon: FaShoppingCart },
        { title: 'Total Store value', value: 30500, icon: FaArrowsRotate },
        { title: 'Out of stock', value: 2, icon: FaBan },
        { title: 'Number of category', value: 2, icon: FaShoppingCart },
    ]
    return (
        <div className='statContainer'>
            {stats1.map((stat, index) => (
                <div key={index} className='stat'>
                    <div className='statBox'>
                        <div className='icon'>
                            <stat.icon />
                        </div>
                        <div className='titleBox'>
                            <div className='statTitle'>{stat.title}</div>
                            <div className='statVal'>{stat.value}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
