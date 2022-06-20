import React from 'react'

function Crypto({data}) {
  const marketcap = data.market_cap_change_percentage_24h
  return (
  <tbody >
    <tr>
      <td>{data.market_cap_rank}</td>
      <td>{data.name}{data.symbol}</td>
      <td>{data.current_price}</td>
      <td>{marketcap}%</td>
    </tr>
  </tbody>
    
  )
}

export default Crypto