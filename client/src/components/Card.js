import { useEffect, useState } from "react"

const body = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyContent: 'center',
    background: "#F9F4F1",
}
const cardContainer = {
    margin: '10%',
    padding: '10px',
    boxSizing: 'border-box',
    border: '15px solid #444c54',
    color: "#444c54",
    borderRadius: "5px",
    background: '#444c54'
}
const image = {
    width: '100%',
    borderRadius: '10px'
}
const details = {

    padding: '10px',
    justifyContent: "center",
    border: '3px solid #444c54',
    color: 'white'
}

const CatCard = ({ name, location, age, dob, breed, imgUrl }) => {
    return (

        <div style={cardContainer}>
            <img style={image} src={imgUrl} alt="cat img" />
            <div style={details}>
                <div>{name}</div>
                <div>{location}</div>
                <div>{age}</div>
                <div>{dob}</div>
                <div>{breed}</div>
            </div>
        </div>


    )
}

const Card = () => {
    const [dbData, setDbData] = useState([]);

    useEffect(() => {
        // API CALL HERE
        setDbData([{ url: 'https://www.adoptapet.com.au/img/animals/013Q4MQH3PWQ2RGYISN5F3ALZCGWJUHBD5.jpg', name: "Jason" }, { url: 'https://www.adoptapet.com.au/img/animals/013Q4MQH3PWQ2RGYISN5F3ALZCGWJUHBD5.jpg', name: "Jason" }, { url: 'https://www.adoptapet.com.au/img/animals/013Q4MQH3PWQ2RGYISN5F3ALZCGWJUHBD5.jpg', name: "Jackson" }])
    }, [])

    return (
        <div>
            <div style={body}>
                <div style={cardContainer}>
                    <img style={image} src={require("../assets/catcard.png")} />
                    <div style={details}>
                        <div>Name:</div>
                        <div>Location:</div>
                        <div>Age:</div>
                        <div>D.O.B:</div>
                        <div>Breed:</div>
                    </div>
                </div>
                {dbData.map((cat) => {
                    return <CatCard name={cat.name} imgUrl={cat.url} />
                })}





            </div>
        </div >

    )
}

export default Card