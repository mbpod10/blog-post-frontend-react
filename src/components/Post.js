import React from 'react'
import { Container, Header, Segment, Image } from 'semantic-ui-react'
import classes from "../styles/Post.module.css"
import PostTag from "./PostTag"
import PostComment from './PostComment'

const Post = (props) => (
  <Container text className={classes['post-feed']} >
    <Header as='h2' color="orange">{props.post.title}</Header>
    <Image src={props.post.avatar} avatar />
    <span className={classes.username}>@{props.post.username}</span> <hr />
    <p>{props.post.body}</p>
    <Segment.Group>
      <Segment.Group horizontal>
        <Segment>Top</Segment>
        <Segment>Middle</Segment>
        <Segment>Bottom</Segment>
      </Segment.Group>
      {props.post.tags.length > 0 && <PostTag tags={props.post.tags} key={props.post.id} postKey={props.post.id} />}
    </Segment.Group>
    {props.post.comments_count > 0 && <PostComment comments={props.post.comments} />}
  </Container>
)

export default Post