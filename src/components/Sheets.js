import { useState, useEffect } from 'react'

    
export default function(props){
    const [corporations, setCorporations] = useState([]);
    const [corporation, setCorporation] = useState('')
    const [items, setItems] = useState([])
    const [id, setId] = useState('')

    useEffect(() => {
        async function fetchCorporation(){
            try {
                const response = await fetch('https://nodejs-serverless-function-express-test-ten.vercel.app/api/corporation/cvs')
                const corp = await response.json()
                console.log(corp)
                setItems(corp)
            } catch (error) {
                console.error('Error fetching data:', error);   
            }
        }
        async function fetchCorporations() {
            try {
                const response = await fetch('https://nodejs-serverless-function-express-test-ten.vercel.app/api/corporation');
                // if (!response.ok) {
                //     throw new Error('Failed to fetch data');
                // }
                const corps = await response.json();
                console.log(corps.rows);
                setCorporations(corps.rows);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle error, display error message, etc.
            }
        }
        fetchCorporation()
        fetchCorporations();
        setId('active')
    }, [])

    async function selectCorporation(name){
        console.log(name)
        setCorporation(name)
        const response = await fetch(`https://nodejs-serverless-function-express-test-ten.vercel.app/api/corporation/${name}`)
        const corp = await response.json()
        console.log(corp)
        setItems(corp)
    }

    return(
        <div className="SheetsComponent">
            <iframe id={id} className="iframe" src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQGM2bcNxW9mAuIU95k3llQI_n396jS7gEC-2j7huUvP8ctfU_OlkSygpK2A3uA2kjIphcQX8L_oJ6p/pubhtml"></iframe>
            <h2 id="SQL">SQL Datebase</h2>
            <div className="neondb">
                <div className="corps">
                    {corporations.map( (corporation) => (
                        <div className="corp">
                            <button className="corpsButton" onClick={() => selectCorporation(corporation.name)}>{corporation.name}</button>
                            <button className="corpsButton">${corporation.total}</button>
                        </div>
                    ))}
                </div>
                {items.length > 1 && (
                    <div className="items">
                        <div className='corporationHeader'>
                            <button id = "corporationName">{corporation}</button>
                            <div className='columnHeaders'>
                                <button>date</button>
                                <button>name</button>
                                <button>defects</button>
                                <button>units</button>
                                <button>unit price</button>
                                <button>total</button>
                            </div>
                        </div>
                        {items.map(item => (
                            <div className="item" key={item.id}>
                                <button>{item.date}</button>
                                <button>{item.name}</button>
                                <button>{item.defects === undefined || item.defects === '' ? "nothing" : item.defects}</button>
                                <button>{item.units}</button>
                                <button>{item.price}</button>
                                <button>{item.total}</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}