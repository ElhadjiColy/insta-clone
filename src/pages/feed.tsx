import React from 'react'
import Gallery from '../components/Gallery'
import { Header } from '../components/Header'
import { Search } from '../components/Search'
import feeds from '../fakeData/feeds.json'

export const Feed: React.FC = () => {
  
  return (
    <div>
      <nav className="bg-slate-200 ">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex justify-center items-center">
            <Header>
              <Search />
            </Header>
          </div>
        </div>
      </nav>
      <div className="flex justify-center pt-70">
        <Gallery galleries={feeds.map(feed => feed.image)} />
      </div>
    </div>
  )
}
