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
