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
        fetch('http://localhost:8000/posts', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log('POST');


  }, [])

  useEffect(() => {
    console.log('PUT');
    console.log(posts);

    fetch('http://localhost:8000/posts', {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(posts),
    })
    .then(data => {
      console.log(data);
      return data;
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => {
      console.error('Ошибка при выполнении запроса PUT:', error);
    });
  }, [posts])

  // useEffect(() => {
  //   console.log('DELETE');

  // fetch('http://localhost:8000/posts/1', {
  //   method: "DELETE",
  //   headers: { "Content-Type": "application/json" },
  // })
  // .then(data => {
  //   console.log(data);
  //   return data;
  // })
  // .then(() => {
  //   console.log('All posts deleted');
  //   console.log('POST');
  //   fetch('http://localhost:8000/posts', {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(posts),
  //   })
  //   .then(data => {
  //     console.log(data);
  //     return data;
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data));
  // });
  // }, [posts])

  function changePost(id) {
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

    // if (isNaN(Ptitle) === false && isNaN(Pslug) === false) {
    //   alert('Вы ввели неправильно Title или Slug')
    // }
    // else {
    let NewPost = {
      id: Math.ceil(Math.random() * 100000),
      title: Ptitle,
      slug: Pslug,
    }
    setPosts([NewPost, ...posts])
    // }

  }

  return (
    <Context.Provider value={{ AddPost, posts, removePost, changePost }}>
      <div className="App">
        <AddPostButton />
        <PostList posts={posts} removePost={removePost} />
      </div>
    </Context.Provider>
  );
}

export default App;
