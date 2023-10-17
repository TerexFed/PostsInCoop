import { useEffect, useState } from "react";
import AddPostButton from "./components/AddPost";
import './App.scss'
import PostList from "./components/PostList";
import { Context } from "./Context/Context";

function App() {



  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.org/posts')
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Ошибка при выполнении запроса');
        }
      })
      .then(function (data) {
        setPosts(data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  function changePost(id){
    let newTitle = prompt('Введите новый title')
    let newSlug = prompt('Введите новый slug')
    const ind = posts.findIndex(el => el.id === id)    
    const newPosts = [...posts]
    newPosts.splice(ind, 1, { ...posts[ind], title: newTitle, slug: newSlug })
    setPosts(newPosts)
  }
  function removePost(id) {
    let removedPost = posts.filter((el) => el.id !== id)
    setPosts(removedPost)
  }
  function AddPost() {
    let Ptitle = prompt('Введите title')
    let Pslug = prompt('Введите slug')

    if (isNaN(Ptitle) === false && isNaN(Pslug) === false) {
      alert('Вы ввели неправильно Title или Slug')
    }
    else {
      let NewPost = {
        id: Math.ceil(Math.random()*100000),
        title: Ptitle,
        slug: Pslug,
      }
      setPosts([NewPost, ...posts])
    }

  }

  return (
    <Context.Provider value={{ AddPost, posts, removePost, changePost }}>
      <div className="App">
        <AddPostButton/>
        <PostList posts={posts} removePost={removePost} />
      </div>
    </Context.Provider>
  );
}

export default App;
