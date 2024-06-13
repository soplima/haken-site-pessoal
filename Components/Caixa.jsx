import React from 'react'
import Link from 'next/link'

const Caixa = () => {
  return (
    <div className="rounded-full overflow-hidden w-72 h-72">
        <Link href="../subPag/">
        <img
        src="Caixa.png"
        alt="foto caixa"
        className="w-full h-full object-cover"
        />
    </Link>
    </div>
  )
}

export default Caixa