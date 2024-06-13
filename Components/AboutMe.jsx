"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';
import ApiGithub from './ApiGithub';

{/* The data for the tabs, each tab has a title, id, and content */}

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>C</li>
                <li>MySQL</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul>
                <li>Mount Ellis Academy</li>
                <li>Ciência da Computação - UTFPR</li>
            </ul>
        )
    }
]

// The main component for the About Me section
const AboutMe = () => {
    // State to keep track of the currently selected tab
    const [tab, setTab] = useState('skills');
    // Hook to handle transitions, which allows for deferred state updates
    const [isPending, startTransition] = useTransition();

    // Function to handle tab changes
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
                <ApiGithub  width={400} height={400} />
                <div>
                    <h2 className="text-4xl font-bold mb-4">Sobre Mim</h2>
                    <p className="text-base lg:text-lg">
                        Olá! Meu nome é Sophia e sou engenheira de software. 
                        Atualmente, sou presidente da Haken, a empresa júnior de Ciências da Computação da UTFPR. 
                        Sou apaixonada por tecnologia e pelas inúmeras possibilidades práticas que a mesma 
                        proporciona em diversas áreas da vida.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange('skills')} 
                                   active={tab === 'skills'} className="mr-4">
                            Skills
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} 
                                   active={tab === 'education'}>
                            Education
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
