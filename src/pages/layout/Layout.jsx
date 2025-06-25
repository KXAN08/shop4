import Footer from '@/layout/footer/Footer'
import Header from '@/layout/header/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = ({children }) => {
  return (
    <>
      <Header/>
    <main className="mt-[100px]">
      {children}
    </main>
      <main className='min-h-[80vh]'>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default React.memo(Layout)