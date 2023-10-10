import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../components/SectionTitle'
import MenuItemCard from '../../Shared/MenuItemCard/MenuItemCard'
import useMenu from '../../../hooks/useMenu'

const PapularMenu = () => {
  const [menu] = useMenu()
  const popularItem = menu.filter(pItem => pItem.category == 'popular')

  return (
    <div>
      <section>
        <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"}></SectionTitle>
        <div className='grid gap-4 grid-cols-2'>
          {popularItem.map(item => <MenuItemCard item={item} key={item._id}></MenuItemCard>)}
        </div>

      </section>
    </div >
  )
}

export default PapularMenu