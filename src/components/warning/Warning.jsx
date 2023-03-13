import { useSelector } from 'react-redux'
import './warning.css'

const Warning = () => {
  const name = useSelector((state=>state.user.name))
  return (
    <div className='warning'>
      Deleting account cannot be undone <b>{name}</b>! You should confirm your
      password to delete your account.
    </div>
  )
}

export default Warning
