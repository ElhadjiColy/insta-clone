import React from 'react'
import { Card } from '../components/Card'
import profile from '../fakeData/profile.json'

export const Profile: React.FC = () => {
    return <div className='h-screen'>
        <div className='flex justify-between h-44 bg-gray-300'>
            <div className='h-full pt-4'>
                <img src={profile.logo} alt="" className='rounded-full' width={'30%'} />
            </div>
            <div className='gap-y-8 grid-cols-1 pt-4'>
                <div>{profile.username}</div>
                <div>{profile.bio}</div>
            </div>
            <div className='pt-4'>Photos: { profile.num_photos}</div>
        </div>
        <div className='pt-24 grids gap-3 grids-row-3 grid-flow-row'>
            {
                profile.photos.map(photo => <Card imgSrc={photo.image} width={'15%'} />)
            }
        </div>
    </div>
}
