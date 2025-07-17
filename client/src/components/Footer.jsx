import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <img width={150} src={assets.logo} alt="" />
        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright GAURAV NEGI | All right reserved.</p>
        <div className='flex gap-2.5'>
            <a href="https://www.facebook.com/profile.php?id=100054396558351" target='_blank' rel='noopenernoreferrer'><img width={35} src={assets.facebook_icon} alt="" /></a>
            <a href="#" target='_blank' rel='noopenernoreferrer'><img width={35} src={assets.twitter_icon} alt="" /></a>
            <a href="https://www.instagram.com/_gaurav_negi_/" target='_blank' rel='noopenernoreferrer'><img width={35} src={assets.instagram_icon} alt="" /></a>
        </div>
    </div>
  )
}

export default Footer