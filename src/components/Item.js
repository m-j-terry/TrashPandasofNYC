

export default function Item(props) {
    let item = props.values()
    return(
        <>
            {
                item.map( (value) => {
                    <p>{value}</p>
                })
            }
        </>
    )
}