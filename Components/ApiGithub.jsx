"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'

const ApiGithub = () => {
  return (
    <div className="rounded-full overflow-hidden w-72 h-72">
      <img
        src="https://avatars.githubusercontent.com/u/119349066?v=4"
        alt="foto github"
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default ApiGithub
