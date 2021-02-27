import React from "react"
import HeaderComponent from "./header"
import FooterComponent from "./footer"

function Layout({children}) {
    return (
        <>
        <HeaderComponent />
        {children}
        <FooterComponent />
        </>
     
    )
}

export default Layout
