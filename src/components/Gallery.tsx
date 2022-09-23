import { Card } from './Card'

const Gallery = ({ galleries }: { galleries: any[] }) => {
  return (
    <div className="grid grid-cols-4 grid-flow-col gap-2">
      {galleries.map((url) => (
        <div key={url}>
          {' '}
          <Card imgSrc={url} height={'80px'} width={'100px'} />
        </div>
      ))}
    </div>
  )
}

export default Gallery
