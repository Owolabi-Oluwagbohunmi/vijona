import Image from 'next/image'
import Link from 'next/link'
import { render } from 'react-dom'


const Navbar = () => {
    return (
        <nav className='flex w-100 justify-between'>
            <a>Vijona</a>

            <div>
                <a>Home</a>
                <a>What we do</a>
                <a>Events&amp;Stories</a>
                <a>Alumni Community</a>
            </div>

            <div>
                <a>Donate</a>
                <a>Join Us</a>
            </div>
        </nav>
    )

}
 
export default Navbar;