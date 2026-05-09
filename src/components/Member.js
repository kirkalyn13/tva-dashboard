import Text from "./Text"

const Member = ({ title, content, imageSrc }) => {
  return (
    <div className="member">
        <img src={imageSrc} className="img-members" width="200" height="200" position="sticky" alt=""/> 
        <Text title={title} content={content} />
    </div>
  )
}

export default Member