import { Segment } from 'semantic-ui-react'
import classes from "../styles/PostTag.module.css"

const PostTag = ({ tags, postKey }) => {

  const tagArray = tags.map((tag, index) => {
    return <span className={classes.tag} key={`${postKey}-${tag}`}>#{tag} </span>
  })

  return (
    <>
      <Segment>{tagArray}</Segment>
    </>
  )
}

export default PostTag