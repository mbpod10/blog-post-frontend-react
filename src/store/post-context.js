import React from "react";

const PostContext = React.createContext({
  makePostAPICall: () => { },
  successfulPostAPICall: () => { },
  postLoading: null,
  posts: null,
})

export default PostContext