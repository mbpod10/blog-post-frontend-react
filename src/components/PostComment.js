import React, { useState } from 'react'
import { Comment, Header } from 'semantic-ui-react'
import classes from "../styles/PostComment.module.css"

const PostComment = ({ comments }) => {

  const [showComments, setShowComments] = useState(false)

  const commentArray = comments.map((comment, index) => {
    return (
      <Comment key={comment.id}>
        <Comment.Avatar src={comment.avatar} />
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
      {showComments &&
        <Comment.Group>
          <Header as='h3' dividing>
            Comments
          </Header>
          {commentArray}
          <Header as='h3' dividing className={classes.showComments}
            onClick={() => setShowComments(false)}>
            Hide Comments
          </Header>
        </Comment.Group>
      }
      {!showComments &&
        <Comment.Group>
          <Header as='h3' dividing className={classes.showComments}
            onClick={() => setShowComments(true)}>
            Show Comments ({comments.length})</Header>
        </Comment.Group>
      }
    </>
  )
}

export default PostComment