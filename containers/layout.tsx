import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='px-2.5 sm:px-3 md:px-4 lg:px-6'>
        {children}
    </div>
  )
}