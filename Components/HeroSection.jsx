"use client";
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
         {/* The div below was added to the original code so then the text and the image could be in the same row */}
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
         <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-900 via-blue-400 to-blue-900"> Oi, Eu Sou{" "}</span> 
           {/* The TypeAnimation component was imported from the react-type-animation library and it was used to create the typing 
            //effect on the text. It was not used as an extra component, as it was added directly to the code. */} 
            <br></br>
    <TypeAnimation
      sequence={[
        'A Sophia',
        1000, 
        'Presidente da Haken',
        1000,
        'Analista de Projetos',
        1000,
        'Backend Developer',
        1000
      ]}
      wrapper="span"
      speed={30}
      repeat={Infinity}
    />
            </h1>
         <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Bem vindo ao meu site! Aqui você pode encontrar informações sobre mim e sobre o meu trabalho.
         </p>
           {/* The buttons below were added to the original code and the color gradient was changed  */} 
         <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-900 via-blue-400 to-blue-900 hover:bg-slate-200 text-white">
                Contact Me            
            </button>
            <button className="px-3 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-900 via-blue-400 to-blue-900 hover:bg-slate-800 text-white mt-3">
                <span ClassName="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </button>
         </div>
        </div>
       {/* the div was added so then the image could have the color around it  */} 
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img 
            src="/hero-image.png" 
            alt="Hero"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
            />
        </div>
        </div>
       </div>
    </section>
  )
}

export default HeroSection