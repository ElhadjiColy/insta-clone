import { Card } from './Card'

const Gallery = ({ galleries }: { galleries: any[] }) => {
  return (
    <div className="grid gap-x-8 gap-y-4 grid-cols-4 ">
      {galleries.map((url) => (
        <div key={url}>
          {' '}
          <Card imgSrc={url} height={500} width={250} />
        </div>
      ))}
    </div>
  )
}

export default Gallery
