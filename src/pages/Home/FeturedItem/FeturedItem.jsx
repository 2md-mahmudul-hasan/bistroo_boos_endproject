import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import fetaturedImg from '../../../assets/home/featured.jpg'

const FeturedItem = () => {
  return (
    <div className=' bg-slate-800 opacity-75'>
      <div className='py-5  my-20' style={{ backgroundAttachment: 'fixed', backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
        <SectionTitle subHeading={"---Check it out---"} heading={"FROM OUR MENU"}></SectionTitle>
        <section className='md:flex items-center   gap-4'>
          <div className='p-16'>
            <img src={fetaturedImg} alt="image" />
          </div>
          <div className='text-white'>
            <b className="py-4"> March 20, 2023</b>
            <h4 className='my-4' >WHERE CAN I GET SOME?</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <button className="btn mt-4 btn-outline border-0 border-b-4 btn-primary"> see more </button>
          </div>
        </section>
      </div >
    </div>
  );
};

export default FeturedItem;