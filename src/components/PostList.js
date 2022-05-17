import { useEffect, useState } from 'react';
import Post from "./Post"

import axios from 'axios'

const PostList = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const makeAPICall = async () => {
      await axios.get(`http://localhost:4001/posts`)
        .then((response) => {
          setPosts(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
    makeAPICall()
  }, [])

  const postListArray = posts.map((post, index) => {
    return (
      <Post post={post} key={post.id} />
    )
  })

  return (
    <>
      {postListArray}
    </>
  )
}

export default PostList