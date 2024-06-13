import React from 'react';
import github from '../public/github.svg';
import linkedin from '../public/linkedin.svg';
import Link from 'next/link';
import Image from 'next/image';
import styles from './EmailSection.module.css'; 

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-32 gap-4">
      <div>
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          Para contatos profissionais, dúvidas ou sugestões, 
          sinta-se à vontade para me enviar um e-mail. Responderei o mais rápido possível.
        </p>
        <div className='socials flex flex-row gap-4'>
          <Link href='https://github.com/soplima'>
            <Image src={github} alt='github icon' className={styles.icon} />
          </Link>
          <Link href='https://www.linkedin.com/in/soplima/'>
            <Image src={linkedin} alt='linkedin icon' className={styles.icon} />
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col'>
          <div className='mb-6'>
          <label htmlFor='email' 
          className='text-white block mb-2 text-sm font-medium'>
            Seu Email
            </label>
          <input type="email" 
          id='email' 
          required 
          className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
          placeholder='email@google.com'/>
          </div>
          <div className='mb-6'>
         <label htmlFor='Assunto' 
         className='text-white block text-sm mb-2 font-medium'>
            Assunto
            </label>
          <input type="text" 
          id='assunto' 
          required 
          className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
          placeholder='Deixe sua mensagem...'/>
          </div>
          <div className='mb-6'>
          <label htmlFor='mensagem'
          className='text-white block text-sm mb-2 font-medium'>
            Mensagem
            </label>
          <textarea
          name="mensagem"
          id='mensagem'
          className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
          placeholder='Deixe sua mensagem...'
          />
          </div>
          <button type='enviar'
          className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}

export default EmailSection;
