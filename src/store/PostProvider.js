import { useReducer, useCallback } from "react";

import PostContext from "./post-context";

const defaultPostState = {
  postLoading: false,
  posts: []
}

const dataReducer = (state, action) => {
  if (action.type === "MAKE_API_CALL") {
    console.log("make")
    return {
      ...state,
      postLoading: true
    }
  }
  if (action.type === "SUCCESSFUL_POST_CALL") {
    console.log("Success")
    let newPosts = action.data
    return {
      ...state,
      postLoading: false,
      posts: newPosts
    }
  }
}

const PostProvider = (props) => {
  const [postState, dispatch] = useReducer(dataReducer, defaultPostState)

  const makeCallHandler = useCallback(() => {
    dispatch({ type: "MAKE_API_CALL" })
  }, [])

  const postSuccessCallHandler = useCallback((data) => {
    dispatch({ type: "SUCCESSFUL_POST_CALL", data: data })
  }, [])



  const postContext = {
    postLoading: postState.postLoading,
    posts: postState.posts,
    makePostAPICall: makeCallHandler,
    successfulPostAPICall: postSuccessCallHandler,
  }

  return (
    <PostContext.Provider value={postContext}>
      {props.children}
    </PostContext.Provider>
  )

}

export default PostProvider