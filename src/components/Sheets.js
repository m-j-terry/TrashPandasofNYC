import { useState, useEffect } from 'react'

    
export default function(){
    const [corporations, setCorporations] = useState([]);
    const [corporation, setCorporation] = useState('')
    const [items, setItems] = useState([])

    useEffect(() => {
        async function fetchCorporations() {
            const response = await fetch('/api/corporations/')
            const corps = await response.json()
            console.log(corps.rows)
            setCorporations(corps.rows);
        }
        fetchCorporations()
    }, [])

    async function selectCorporation(name){
        console.log(name)
        setCorporation(name)
        const response = await fetch(`/api/corporations/${name}`)
        const corp = await response.json()
        console.log(corp)
        setItems(corp)
    }

    return(
        <div className="SheetsComponent">
            <iframe className="iframe" src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQGM2bcNxW9mAuIU95k3llQI_n396jS7gEC-2j7huUvP8ctfU_OlkSygpK2A3uA2kjIphcQX8L_oJ6p/pubhtml"></iframe>

            <div className="neondb">
            <h2 id="SQL">SQL Datebase</h2>
                <div className="corps">
                    {corporations.map( (corporation) => (
                        <div className="corp">
                            <button className="corpsButton" onClick={() => selectCorporation(corporation.name)}>{corporation.name}</button>
                            <button>${corporation.total}</button>
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