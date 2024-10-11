/* eslint-disable no-unused-vars */
import React from 'react';
import Cards from './Cards';
import list from '../../public/list.json'
import {Link} from "react-router-dom"


const Course = () => {
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto mt-20 md:px-20 px-4'>
            <div className='mt-28 text-center justify-center'>
                <h1 className='text-2xl md:text-4xl '> We are delighted to have <span className='text-pink-500'>you Here ! : </span> </h1>
                <p className='mt-12'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              <Link to='/'>
              <button className='bg-pink-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
              </Link>
            </div>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item)=>(
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
    </>
  )
}

export default Course
