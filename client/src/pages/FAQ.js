import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

const body = {
    // minHeight: '50vh',
    background: '#F9F4F1',
    color: '#444c54',
    padding: '100px'
}

const title = {
    fontFamily: 'monaco',
    fontWeight: 'bold',
    fontSize: '26px'

}
const list = {
    listStyle: 'none'
}
const question = {
    fontWeight: 'bold'
}

function FAQ() {
    return (
        <>
            <Header />
            <div style={body}>
                <div style={title}>Frequently Asked Question</div>
                <ul style={list}>
                    <li style={question}>Q: How does this work?</li>
                    <li>A: We rehome cats </li>
                    <br></br>
                    <li style={question}>Q: Are all cats up for adoption? /Do you sell cats?</li>
                    <li>A: We rehome cats where they aren't happy with their current homes or their current owners are able to care for them no longer. </li>
                    <br></br>
                    <li style={question}>Q: Can I surrender my cat?</li>
                    <li>A:Yes, we accept surrenders.</li>
                    <br></br>
                    <li style={question}>Q: Can you take in the stray cat/s in my neighbourhood?</li>
                    <li>A:We do not have the facilities to provide sufficient quarantine and socialisation for strays.If they are very young kittens, most shelters would be able to take them in and have them adopted very quickly.</li>

                </ul>
            </div>
            <Footer />

        </>
    )
}

export default FAQ
