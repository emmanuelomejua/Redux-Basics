import './leftbar.css'
import Menulink from '../menulink/Menulink'
import { ExitToAppOutlined, FileCopyOutlined, GroupOutlined, HearingOutlined, HomeMaxOutlined, MovieCreationOutlined, PhotoSizeSelectActualOutlined, ScheduleOutlined, Settings, ShoppingBasketOutlined } from '@mui/icons-material'
import { List } from '@mui/material'


const Leftbar = () => {
  return (
    <div className='leftbar'>
      <div className='leftbarWrapper'>
        <Menulink icon={<HomeMaxOutlined/>} text='Homepage'/>
        <Menulink icon={<List/>} text='Lists' />
        <Menulink icon={<ShoppingBasketOutlined/>} text='Products'/>
        <Menulink icon={<GroupOutlined/>} text='Groups'/>
        <Menulink icon={<FileCopyOutlined/>} text='Pages'/>
        <Menulink icon={<PhotoSizeSelectActualOutlined/>} text='Photos'/>
        <Menulink icon={<MovieCreationOutlined/>} text='Videos'/>
        <Menulink icon={<ScheduleOutlined/>} text='Schedule'/>
        <Menulink icon={<HearingOutlined/>} text='Wishlist'/>
        <Menulink icon={<Settings/>} text='Settings'/>
        <Menulink icon={<ExitToAppOutlined/>} text='Logout'/>
        
      </div>
    </div>
  )
}

export default Leftbar
