export const COLUMNS = [
    {
        Header: '#',
        accessor: 'market_cap_rank'
    },
    {
        Header: 'Name',
        accessor: 'name' 
        
    },
    {
        Header: 'Price',
         accessor: 'current_price',
        
        
    },
    {
        Header: '% 24hrs',
        accessor: 'market_cap_change_percentage_24h',
        
    },
    {
        Header: 'Favorites',
        Cell: 
        <button  style={{height: '80%', width: '98%'}}>Add to favourites</button>
    }
]
//e => {console.log(e.data)}
//onClick={e=>console.log(e.target.row)}
//Cell: e => {
    // console.log(e) // viewIndex here
    // return e.original.name