import { useState } from "react"
import './CreatePost.css'
export const CreatePost = () => {
   const [postData, setPostData] = useState({
    title: '',
    imageUrl: '',
    description: ''
  });

    const onCreatePost = async () => {
        const response = await fetch('https://user-router-w3.vercel.app/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: postData.title,
                imageUrl: postData.imageUrl,
                description: postData.description
            })

        })
        if (response.ok) {
        const data = await response.json()
        console.log(data)
        } else {
        alert('Error creating post')
        }

        window.location.reload()
    }
    return (
        <div className="create">
            <h1 className="create-title">Create a New Post</h1>
            <div className="input-container"> 
                <input
                className="input"
                type="text"
                placeholder="Título del post"
                onChange={(event) => setPostData({ ...postData, title: event.target.value })}
                />
                <input
                className="input"
                type="text"
                placeholder="URL de la imagen"
                onChange={(event) => setPostData({ ...postData, imageUrl: event.target.value })}
                />
                <input
                className="input"
                type="text"
                placeholder="Descripción del post"
                onChange={(event) => setPostData({ ...postData, description: event.target.value })}
                />
            </div> 
        <button onClick={() => {
            if (postData.title && postData.imageUrl && postData.description) {
                onCreatePost()
            } else {
                alert('Por favor, completa todos los campos.')
            }
        }}>Create Post</button>
        </div>
    )
}