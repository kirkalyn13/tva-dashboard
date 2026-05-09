import Text from "./Text"

const BulletinItem = ({title, content, imageSrc}) => {
  return (
    <div className="bulletin-item">
        <img src={imageSrc} className="img-members" width="300" height="300" position="sticky" alt=""/> 
        <Text title={title} content={content} />
    </div>
  )
}

export default BulletinItem