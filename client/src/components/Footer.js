import { Link } from 'react-router-dom';

const NavBar = {
    background: '#C89B7B',
    margin: 'auto',
    minHeight: '10vh',
    fontFamily: "Arial",
}
const Nav = {
    margin: 'auto',
    fontWeight: 'bold',
}

const navStyle = {
    margin: '40px',
    color: '#444b54',
    fontWeight: 'Bold'
}

const Footer = () => {

    return (
        <div className="Nav" style={NavBar}>
            <div className="Nav" style={Nav}>
                <Link to={"/faq"} style={navStyle}> FAQ </Link>
                <Link to={"/contact"} style={navStyle}>Contact Us</Link>
            </div>
        </div >
    )

}

export default Footer