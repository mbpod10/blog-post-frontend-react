import PostList from "./components/PostList"
import MainHeader from "./components/Header";
import PostProvider from "./store/PostProvider";

const App = () => {
  return (
    <PostProvider>
      <MainHeader />
      <PostList />
    </PostProvider>
  );
}

export default App;
