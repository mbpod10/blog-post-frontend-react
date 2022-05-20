import { useEffect, useContext } from 'react';
import Post from "./Post"
import PostContext from '../store/post-context';
import axios from 'axios'
import LoaderSpinner from '../UI/LoaderSpinner';

const PostList = () => {

  const { postLoading, makePostAPICall, successfulPostAPICall, posts } = useContext(PostContext)

  useEffect(() => {
    makePostAPICall()
    const makeAPICall = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/posts`)
        successfulPostAPICall(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    makeAPICall()
  }, [makePostAPICall, successfulPostAPICall])

  const postListArray = posts.map((post, index) => {
    return (
      <Post post={post} key={post.id} />
    )
  })

  return (
    <>
      {postLoading ? <LoaderSpinner /> : postListArray}
    </>
  )
}

export default PostList