import React from 'react'

function Intro() {
    return (
        <div className="pt-36 flex flex-wrap">
            <div className='w-full self-center px-4 text-center'>
                <h1 className='text-base font-semibold text-teal-500 text-4xl uppercase'>Sistem Pakar</h1>
                <h2 className='mb-5'>Diagnosa penyakit Kulit</h2>
                <p className='font-medium text-slate-400 leading-relaxed pb-10'>website sistem pakar ini adalah sistem <span className='text-dark font-semibold'>diagnosa penyakit </span>untuk kulit yang anda derita</p>

                <button className='text-base font-semibold text-white bg-teal-500 py-3 px-8 rounded-full hover:shadow-lg hover:bg-teal-400 transition duration-300 ease-in-out mb-10'>Konsultasi</button>
            </div>
        </div>
    )
}

export default Intro