import './navbar.css'
import img from '../../assets/images.jpg'
import img1 from '../../assets/arrow2.png'
import { useSelector } from 'react-redux'

const Navbar = () => {
   const name = useSelector((state=>state.user.name))
  return (
    <div className='navbar'>
      
       <div className='navbarWrapper'>
         <div className='navbarLeft'>
            <span className='logo'>Redux</span>
            <span className='navbarLink'>Home</span>
            <span className='navbarLink'>Contact</span>
            <span className='navbarLink'>About</span>
         </div>

         <div className='navbarCenter'>
            <div className='search'>
                <input 
                type='text' 
                placeholder='Search...' 
                className='searchInput'

                />
            </div>
         </div>

         <div className='navbarRight'>
            <img 
            src={img} 
            alt='User' 
            className='avatar'
            />

            <span className='navbarName'>{name}</span>
    
            <img 
            src={img1} 
            alt='User' 
            className='avatar1'
            />
         </div>
   
       </div>

    </div>
  )
}

export default Navbar
