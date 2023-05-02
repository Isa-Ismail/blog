'use client'

import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

interface Props {}

const Navbar = () => {

    const [show, setShow] = React.useState(false)

    //hide scrollbar when menu is open
    React.useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [show])

    React.useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 768){
                setShow(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    return (
        <div className={show?'fixed h-screen w-full z-10 bg-blue-300 border-b-1 shadow-md border-black':'fixed w-full z-10 bg-blue-300 border-b-1 shadow-md border-black'}>
            <Container>
                <div className='p-4 flex justify-between'>
                    <div>
                        <h1 className='text-2xl font-bold'><Link href='/'>Next.js Blog</Link></h1>
                    </div>
                    <div className='hidden md:flex space-x-8'>
                        <Link href='/' className='text-lg font-bold'>Home</Link>
                        <Link href='/blogs' className='text-lg font-bold'>Blog</Link>
                        <Link href='/about' className='text-lg font-bold'>About</Link>
                        <Link href='/contact' className='text-lg font-bold'>Contact</Link>
                        <Link href='/login' className='text-lg font-bold'>Login</Link>
                    </div>
                    {show?<button onClick={()=>setShow(!show)} className='md:hidden'><AiOutlineClose /></button>:<button onClick={()=>setShow(!show)} className='md:hidden'><AiOutlineMenu /></button>}
                </div>
                    
                {show ?
                        <div className='md:hidden flex flex-col space-y-8 items-center pt-[10rem]'>
                            <Link onClick={()=>setShow(false)} href='/' className='text-lg font-bold'>Home</Link>
                            <Link onClick={()=>setShow(false)} href='/blogs' className='text-lg font-bold'>Blog</Link>
                            <Link onClick={()=>setShow(false)} href='/about' className='text-lg font-bold'>About</Link>
                            <Link onClick={()=>setShow(false)} href='/contact' className='text-lg font-bold'>Contact</Link>
                            <Link onClick={()=>setShow(false)} href='/login' className='text-lg font-bold'>Login</Link>
                        </div> : null
                }
                
            </Container>
        </div>
    )
}

export default Navbar