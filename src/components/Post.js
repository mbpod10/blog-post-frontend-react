import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import classes from "../styles/Post.module.css"
import PostTag from "./PostTag"

const ContainerExampleText = (props) => (
  <Container text className={classes['post-feed']}>
    <Header as='h2'>{props.post.title}</Header>
    <Segment.Group>
      <Segment.Group horizontal>
        <Segment>Top</Segment>
        <Segment>Middle</Segment>
        <Segment>Bottom</Segment>
      </Segment.Group>
      <PostTag tags={props.post.tags} key={props.post.id} postKey={props.post.id} />
    </Segment.Group>
    <p>{props.post.body}</p>

  </Container>
)

export default ContainerExampleText