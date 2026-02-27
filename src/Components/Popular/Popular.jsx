import React from 'react'
import './Popular.css'
import Item from '../Item/Item'
import data_product1 from '../Assets/data_mens'
import data_product2 from '../Assets/data_kids'
import data_product from '../Assets/data_women'

const Popular = () => {
  return (
    <>
    <div className='popular'>
      <h1>POPULAR IN WOMENS</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
    <div className='popular'>
      <h1>POPULAR IN MENS</h1>
      <hr />
      <div className="popular-item">
        {data_product1.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
    <div className='popular'>
      <h1>POPULAR IN KIDS</h1>
      <hr />
      <div className="popular-item">
        {data_product2.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
    </>
  )
}

export default Popular
