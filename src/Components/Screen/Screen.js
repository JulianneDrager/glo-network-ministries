import React from 'react'
import Header from "../Header/Header"
import About from "../About/About"
import Events from "../Events/Events"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"

const Screen = () => {
    return (
        <>
            <div 
            style={{
                maxWidth: "1700px",
                margin: "0 auto",
                position: "relative",
                zIndex: "1",
                backgroundColor: "var(--purple)",
            }}>
                <Header />
                <About />
                <Events />
                <Contact />
                <Footer />
            </div>
        </>
    )
}

export default Screen;