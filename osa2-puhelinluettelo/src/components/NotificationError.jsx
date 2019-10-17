import React from 'react'
import '../index.css'

const NotificationError = ({ errorMessage }) => {
    return (
        errorMessage
            ? 
            <div className='error'>
                {errorMessage}
            </div>
            : 
            null
    )
}

export default NotificationError