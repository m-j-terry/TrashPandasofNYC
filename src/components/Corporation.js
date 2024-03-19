import { useEffect } from 'react'
import Item from './Item'

export default function Corporation(props){
    let corporation

    useEffect(() => {
        corporation = Client.execute(`SELECT items FROM TABLE ${props.name}`)
        console.log(corporation)
    }, [])
    // return(
    //     <>
    //         {
    //             corporation.items.map( (item) => {
    //                 <Item item/>
    //             })
    //         } 
    //     </>
    // )
}