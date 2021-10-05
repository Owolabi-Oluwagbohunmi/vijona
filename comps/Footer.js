import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='bg-black grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-4 text-white pt-10 px-6 gap-6'>

            <div className=' h-28 w-28 object-cover lg:row-span-2'>
                <Image src='/logo-white.png' width={500} height={500} />
            </div>

            <div className='flex flex-col font-light w-72'>
                <div className='font-bold py-3'>Engagement Channels</div>
                <Link href=""><a className=' my-1'>Ignite Experience</a></Link>
                <Link href=""><a className=' my-1'>Incubator Hubs</a></Link>
                <Link href=""><a className=' my-1'>Pathway Programs</a></Link>
            </div>

            <div className='flex flex-col font-light w-72'>
                <div className='font-bold py-3'>Sitemap</div>
                <Link href='/'><a className=' my-1'>Home</a></Link>
                <Link href='/'><a className=' my-1'>What we do</a></Link>
                <Link href='/'><a className=' my-1'>Events&amp;Stories</a></Link>
                <Link href='/'><a className=' my-1'>Alumni Community</a></Link>
            </div>

            <div className='flex flex-col font-light w-72 h-auto'>
                <div className='font-bold py-3'>You can help shape the future</div>
                <div>
                    through your donations and or your partnerships we can bring the dreams of every child to life
                </div>
                <div className=' flex flex-row mt-5'>
                    <div className='h-10 w-24 bg-vijyellow px-4 py-2 font-medium'>
                        Ask How
                    </div>
                    <div className='h-10 w-24 bg-white px-5 py-2 ml-6 font-medium text-gray-900'>
                        Donate
                    </div>
                </div>
            </div>

            <div className='flex flex-col font-light w-72'>
                <div className='font-bold py-3'>Contacts</div>
                <div className=' my-1'>info@vijona.com</div>
            </div>

            <div className='hidden lg:block'></div>
            <div className='hidden lg:block'></div>

            <div className='w-72'>
                <div>follow me</div>
                <div><Image src="/" width={23} height={23} /></div>
                <div><Image src="/" width={23} height={23} /></div>
                <div><Image src="/" width={23} height={23} /></div>
            </div>
        </div>
    )
}

export default Footer
