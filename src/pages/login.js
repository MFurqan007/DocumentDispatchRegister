import { comment } from 'postcss'
import React, { useState, useSyncExternalStore } from 'react'
import Image from 'next/image'
import DIcon from '../../public/doc.png'

export default function login() {
  const [status, setStatus] = useState('pending')
  const [comment, setComment] = useState()
  const [d, setd] = useState()
  const fetchapplication = async () =>{
    const response = await fetch('/api/form')
    const data = await response.json()
    const data2 = data.reverse()
    setd(data2)
    console.log(d)
  }
  return (
    <>
      <div className='w-[100%] flex justify-center items-center'>
        <button onClick={fetchapplication} className='w-[50px] h-[50px] bg-blue-700 flex justify-center items-center border-2 rounded-full cursor-pointer'>
          <span className='text-white'>Load</span>
        </button>
      </div>

      {d?.map((element, id)=> {
        return (
          <div class="bg-gray-100" key={id}>
              <section>
                  <section class="text-gray-600 body-font">
                      <div class="container mt-2 mx-auto">
                          <div class="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                          <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                              <Image
                                src={DIcon} 
                              />
                          </div>
                          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                              <h1 class="text-black text-2xl title-font font-bold mb-2">{element.title}</h1>
                              <p class="leading-relaxed text-base">{element.name}</p>
                              <div class="md:flex font-bold text-gray-800">
                                  <div class="w-full md:w-1/2 flex space-x-3">
                                      <div class="w-1/2">
                                          <h2 class="text-gray-500">{element.id}</h2>
                                      </div>
                                      <div class="w-1/2">
                                          <h2 class="text-gray-500">{element.date}</h2>
                                      </div>
                                  </div>
                                  <div class="w-full md:w-1/2 flex space-x-3">
                                      <div class="w-1/2">
                                          <h2 class="text-gray-500">{element.DocID}</h2>
                                      </div>
                                      <div class="w-1/2">
                                          {element.DocUpload}
                                      </div>
                                  </div>
                              </div>
                              <div className='flex justify-center items-center mt-3 w-[500px]'>
                                <div className= 'w-[150px]'>
                                  <button className='w-[100px] h-[30px] bg-green-700 flex justify-center items-center border-2 rounded-full cursor-pointer'>
                                    <span className='text-white'>Approve</span>
                                  </button>
                                  <button className='w-[100px] h-[30px] bg-red-700 flex justify-center items-center border-2 rounded-full cursor-pointer'>
                                    <span className='text-white'>Reject</span>
                                  </button>
                                </div>
                                <div className='flex flex-row justify-evenly items-center w-[350px]'>
                                  <input
                                    type="text"
                                    name="Comment"
                                    id="Comment"
                                    placeholder="Enter Comment"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    class="w-[250px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                  />
                                </div>
                                  <button className='w-[100px] h-[30px] bg-blue-700 flex justify-center items-center border-2 rounded-full cursor-pointer'>
                                    <span className='text-white'>Comment</span>
                                  </button>


                              </div>

                          </div>
                          <input
                                    disabled
                                    type='text'
                                    name='status'
                                    value={status}
                                    class="w-[250px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                  />
                          </div>
                      </div>
                  </section>
              </section>
          </div>
          // <div key={id}>
          //   {element.name}
          // </div>
        )
      })}
    </>
  )
}
