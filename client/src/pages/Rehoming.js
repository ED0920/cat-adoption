import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

const body = {
    minHeight: '85vh',
    background: '#6461A0',
    color: '#444c54'
}

function Rehoming() {
    return (
        <>
            <Header />
            <div style={body}>Rehoming</div>
            <Footer />

        </>
    )
}

export default Rehoming
