import React from 'react'

function Header() {
    return (
        <div classNamea='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className='px-4'>
                        <a href="#home" className='font-bold text-lg text-teal-500 block py-6'>Sistem Pakar</a>
                    </div>
                    <div className='px-2'>
                        <button className='text-base font-semibold text-white bg-teal-500 px-5 rounded-full hover:shadow-lg hover:bg-teal-400 transition duration-300 ease-in-out'>Login
                        </button>
                        <button className='text-base font-semibold text-white bg-teal-500 px-5 rounded-full hover:shadow-lg hover:bg-teal-400 transition duration-300 ease-in-out'>Daftar
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Header