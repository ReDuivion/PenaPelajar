import React from 'react'
import Login from '../components/aban/Login'
import Signup from '../components/aban/Signup'
import Carousel from '../components/Navbar/Carousel'
export default function page() {
  return (
    <>
   <div>

      <main className="max-w-screen-xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8">Image Carousel</h1>
        <Carousel />
      </main>
    </div>
    </>
  )
}
