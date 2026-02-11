import React from 'react'

type ErrorMessageProps = {
    children: React.ReactNode
}

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
    return (
        <h2 className='text-red-600 text-center font-bold text-lg'>
            {children}
        </h2>
    )
}
