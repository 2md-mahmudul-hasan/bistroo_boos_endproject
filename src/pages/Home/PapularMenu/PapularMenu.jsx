import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle'
import MenuItemCard from '../../Shared/MenuItemCard/MenuItemCard'

const PapularMenu = () => {
  const [menu, setMenu] = useState([])
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularItem = data.filter(pItem => pItem.category == 'popular')
        setMenu(popularItem)
      })
  }, [])
  return (
    <div>
      <section>
        <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"}></SectionTitle>
        <div className='grid gap-4 grid-cols-2'>
          {menu.map(item => <MenuItemCard item={item} key={item._id}></MenuItemCard>)}
        </div>

      </section>
    </div >
  )
}

export default PapularMenu