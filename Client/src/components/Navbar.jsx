import Logo from '../assets/images/herballogo.jpg'
import { Link } from 'react-router-dom'
import DropDownMenu from './DropDownMenu'

export default function Navbar() {

    let menudata = [
        { Name: 'Vedic materials', href: "/Vedicmaterials" },
        { Name: 'Vedic practitioners', href: "/Vedicpractitioner" },
        { Name: 'Patient Feedback', href: "/PatientFeedback" },
        { Name: 'About', href: "/About" }
    ]

    return (
        <div >
            <nav className='bg-white flex drop-shadow-md text-2xl justify-between items-center py-3 px-32'>
                <Link to='/'>   <img className='h-[40px] w-[150px]' src={Logo} alt="logo" /></Link>
                <div>

                    <ul className='flex gap-5 uppercase menuNav text-[#333333] text-[20px] font-semibold'>

                        {
                            menudata.map((value, key) =>
                            (
                                <li className='hover:text-[#26dd1c]' key={key}><Link to={value.href}>{value.Name}</Link></li>
                            ))
                        }
                    </ul>

                </div>

                <DropDownMenu />

            </nav>
        </div>
    )
}

