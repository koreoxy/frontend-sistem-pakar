import React from 'react'
import image1 from "../assets/img/cacar-air.jpg";

function Menu() {
    return (
        <div className='pt-36 pb-16 bg-slate-100'>
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className='font-semibold text-lg text-teal-500'>Menu</h4>
                        <h2 className='font-boild text-dark text-3xl'>Nama penyakit</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit dicta error repellat doloremque tempore mollitia provident libero ullam totam necessitatibus nisi, atque voluptatem, ex tempora iure eos! Deserunt, cumque eos.</p>
                    </div>
                </div>

                <div className='w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto'>

                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div class="md:flex">
                            <div class="md:shrink-0">
                                <img class="h-48 w-full object-cover md:h-full md:w-48" src={image1} />
                            </div>
                            <div class="p-8">
                                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                                <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                            </div>
                        </div>
                    </div>

                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div class="md:flex">
                            <div class="md:shrink-0">
                                <img class="h-48 w-full object-cover md:h-full md:w-48" src={image1} />
                            </div>
                            <div class="p-8">
                                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
                                <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Menu