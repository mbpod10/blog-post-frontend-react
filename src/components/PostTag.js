import { Segment } from 'semantic-ui-react'

const PostTag = ({ tags, postKey }) => {

  const tagArray = tags.map((tag, index) => {
    return <span key={`${postKey}-${tag}`}>#{tag} </span>
  })

  return (
    <>
      {tags ? <Segment>{tagArray}</Segment> : null}
    </>
  )
}

export default PostTag