
const container = {
    boxSizing: 'border-box',
}
const details = {
    margin: "5px",
    justifyContent: "center"
}

const Card = () => {
    return (
        <div>
            <div style={container}>
                <img src={require('../assets/catcard.png')} />
                <div style={details}>
                    <div>Name:</div>
                    <div>Location:</div>
                    <div>Age:</div>
                    <div>D.O.B:</div>
                    <div>Breed:</div>
                </div>
            </div>
        </div>

    )
}

export default Card