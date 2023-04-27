import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

const body = {
    minHeight: '85vh',
    background: '#6461A0',
    color: '#444c54'
}
function AboutUs() {
    return (
        <>
            <Header />
            <div style={body}>AboutUs</div>
            <Footer />

        </>
    )
}

export default AboutUs