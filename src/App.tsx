

import './App.css'

function App() {

  const onFetchPosts = async () => {
  const response = await fetch('https://user-router-w3.vercel.app/api/posts')

  if (response.ok) {
  const data = await response.json()
  console.log(data)
  } else {
    alert('Error fetching posts')
  }

  }

  const onCreatePost = async () => {
    const response = await fetch('https://user-router-w3.vercel.app/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'Nuevo post',
        imageUrl: 'https://placeimg.com/200/200/animals',
        description: 'Descripción del nuevo post'
      })

      
    })
    if (response.ok) {
    const data = await response.json()
    console.log(data)
    } else {
      alert('Error creating post')
    }

  }

  const onDeletePost = async (id: number) => {
    const response = await fetch(`https://user-router-w3.vercel.app/api/posts/` + id, {
      method: 'DELETE',
    })
    if (response.ok) {
    const data = await response.json()
    console.log(data)
    } else {
      alert('Error deleting post')
    }

  }

  return (
    <>
      <button onClick={onFetchPosts}>Fetch Posts</button>
      <button onClick={onCreatePost}>Create user</button>
      <button onClick={() => onDeletePost(1771990751497)}>Delete user</button>
    </>
  )
}

export default App
