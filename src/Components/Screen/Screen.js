import React from 'react'
import Header from "../Header/Header"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import AboutMap from '../About/AboutMap'
import EventsMap from '../Events/EventsMap'
import ContactMap from '../Contact/ContactMap'
import HeaderMap from '../Header/HeaderMap'

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
                <HeaderMap />
                <AboutMap />
                <EventsMap />
                <ContactMap />
                <Footer />
            </div>
        </>
    )
}

export default Screen;