import React from 'react'
import '../index.css'

const NotificationSuccess = ({ successMessage }) => {
    return (
        successMessage
            ?
            <div className='success'>
                {successMessage}
            </div>
            : null
    )
}

export default NotificationSuccess