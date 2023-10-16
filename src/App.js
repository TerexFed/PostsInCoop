import { useEffect, useState } from "react";
import AddPostButton from "./components/AddPost";
import './App.css'
import PostList from "./components/PostList";

function App() {
  
 

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.org/posts')
    .then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка при выполнении запроса');
      }
    })
    .then(function(data) {
      setPosts(data)
    })
    .catch(function(error) {
      console.log(error);
    });
  }, [])
  
  function removePost(id) {
    let removedPost = posts.filter((el) => el.id !== id)
    setPosts(removedPost)
  }
  function AddPost() {
    let Ptitle = prompt('Введите title')
    let Pslug = prompt('Введите slug')

    if(isNaN(Ptitle) === false && isNaN(Pslug) === false){
      alert('Вы ввели неправильно Title или Slug')
    }
    else{
      let NewPost = {
        id: posts.length+1,
        title: Ptitle,
        slug: Pslug,
      }
      setPosts([...posts, NewPost])
    }

  }

  return (
    <div className="App">
      <AddPostButton AddPost={AddPost} />
      <PostList posts={posts} removePost={removePost} />
    </div>
  );
}

export default App;
