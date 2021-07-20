import * as React from 'react'
import Header from './header.js'
import Footer from './footer.js'

const Layout = ({ title, children }) => {
  return (
    <main className="p-4 mx-auto md:p-10 md:w-2/3 lg:w-1/2">
      <title>{title}</title>
      <Header />
      {children}
      <Footer /> 
    </main>
  )
}

export default Layout
