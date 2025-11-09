import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(response.data)
  }

  useEffect(function () {
    getData()
  }, [index])


  let printUserData = (
    <div className="flex flex-col items-center justify-center w-full h-64">
      <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
      <h3 className='text-gray-300 text-sm mt-4 font-medium'>Loading amazing photos...</h3>
    </div>
  )

  if (userData.length > 0) {
    printUserData = (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full'>
        {userData.map((elem, idx) => (
          <div key={idx} className="transform transition-all duration-300 hover:scale-105">
            <Card elem={elem} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className='bg-gradient-to-b from-gray-900 to-black min-h-screen overflow-auto p-6 text-white'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-3xl font-bold text-center mb-8 text-amber-400'>Photo Gallery</h1>
        
        <div className='min-h-[80vh]'>
          {printUserData}
        </div>

        <div className='flex justify-center items-center gap-8 p-6 mt-4'>
          <button
            disabled={index === 1}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 
              ${index === 1 
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                : 'bg-amber-500 hover:bg-amber-600 active:scale-95 text-black'
              }`}
            onClick={() => {
              if (index > 1) {
                setIndex(index - 1)
                setUserData([])
              }
            }}
          >
            ← Previous
          </button>

          <div className='flex items-center gap-2'>
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full transition-all duration-300
                  ${Math.abs(index - (i + index - 1)) <= 1 
                    ? 'bg-amber-400' 
                    : 'bg-gray-600'
                  }`}
              />
            ))}
            <span className='ml-3 font-medium text-gray-300'>Page {index}</span>
          </div>

          <button
            className='px-6 py-2.5 bg-amber-500 rounded-lg font-medium 
              hover:bg-amber-600 active:scale-95 transition-all duration-300 text-black'
            onClick={() => {
              setUserData([])
              setIndex(index + 1)
            }}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}

export default App