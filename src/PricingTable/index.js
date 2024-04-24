import React, { useEffect, useState } from 'react'
import './pricingTable.css'
import { FaEye, FaPen, FaDumpster } from 'react-icons/fa'
import OverlayModal from '../OverlayModal'
export const PricingTable = ({ stats, slide }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    const [updatedStats, setUpdatedStats] = useState(stats)

    useEffect(() => {
        setUpdatedStats(stats)
    }, [stats])

    const handleEditClick = (item) => {
        setSelectedItem(item)
        setIsModalOpen(true)
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
        setSelectedItem(null)
    }

    const onView = () => {
        console.log('view')
    }

    const onDelete = (item) => {
        setUpdatedStats(updatedStats.filter((stat) => stat !== item))
    }
    return (
        <div className='price-table'>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Value</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {updatedStats?.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.value}</td>
                            <td>
                                <div>
                                    <FaPen
                                        onClick={
                                            slide === false
                                                ? () => handleEditClick(item)
                                                : () => {}
                                        }
                                    />
                                    <FaEye onClick={onView} />
                                    <FaDumpster
                                        onClick={
                                            slide === false
                                                ? () => onDelete(item)
                                                : () => {}
                                        }
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && (
                <OverlayModal
                    onClose={handleModalClose}
                    item={selectedItem}
                ></OverlayModal>
            )}
        </div>
    )
}
