import React from 'react'
import Nav2 from './Nav2'
import Image from './Image'
import { profileDetails } from '../../../utils/demo'
const Profile = () => {
    const profile = profileDetails
    return (
        <div className='bg-gradient-to-br  from-[#0F3D3E] via-[#1E5C57] to-[#E6FFF6] h-screen text-[#363634]'>
            <Nav2 />
            <div className=' flex flex-col items-center'>

                <Image />
                <div className='flex flex-col justify-start'>
                    {profileDetails.map((item) => {
                        const Icon = item.icon
                        return (
                            <div key={item.id} className='flex justify-start items-start gap-6 py-4'>
                                <button className='flex justify-start items-center gap-3 cursor-pointer text-lg sm:text-2xl '><Icon size={28} /> {item.title}</button>
                            </div>
                            
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Profile