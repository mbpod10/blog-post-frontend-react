import React from 'react'
import { Comment, Header } from 'semantic-ui-react'
import classes from "../styles/Comment.module.css"

const PostComment = ({ comments }) => {

  const commentArray = comments.map((comment, index) => {
    return (
      <Comment key={comment.id}>
        <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
        <Comment.Content>
          <Comment.Author as='a' className={classes.username}>@{comment.username}</Comment.Author>
          <Comment.Metadata>
            <div>{comment.created_at}</div>
          </Comment.Metadata>
          <Comment.Text>{comment.body}</Comment.Text>
        </Comment.Content>
      </Comment>
    )
  })

  return (
    <>
      <Comment.Group>
        <Header as='h3' dividing>
          Comments
        </Header>
        {commentArray}
      </Comment.Group>
    </>
  )
}

export default PostComment