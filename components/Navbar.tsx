import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constant'
import AuthProviders from './AuthProviders'

const Navbar = () => {
    const session=null;
  return (
    <nav className='flexBetween navbar'>
            <div className='flex-1 flexStart gap-10'>
                <Link href='/'>
                    <Image src='/logo.svg' width= {115} height={115} alt='Flexibble'/>
                </Link>
                <ul className='xl:flex hidden text-sm gap-7'>
                    {NavLinks.map((NavLink)=><Link href={NavLink.href} key={NavLink.key}><ul >{NavLink.text}</ul></Link>)}
                </ul>
                </div>
                <div className='flexCenter gap-4'>
                    {session?(
                    <>
                    userPhoto
                    <Link href='/create-project'>
                        share your work    
                        </Link>
                        </>
                        ):(
                        <AuthProviders/>
                        )
                    }
                </div>

    </nav>
  )
}

export default Navbar