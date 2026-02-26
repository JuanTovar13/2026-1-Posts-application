import { useEffect, useState } from 'react'
import type { Post } from '../types/PostTypes'
import './PostList.css'

export const PostList = () => {
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        const onFetchPosts = async () => {
            const response = await fetch('https://user-router-w3.vercel.app/api/posts')

            if (response.ok) {
                const data = await response.json()
                console.log('API data:', data)
                setPosts(data)
            } else {
                alert('Error fetching posts')
            }
        }

        onFetchPosts()
    }, [])

    const onDeletePost = async (id: string) => {
    const response = await fetch(`https://user-router-w3.vercel.app/api/posts/${id}`, {
      method: 'DELETE',
    })
    if (response.ok) {
    const data = await response.json()
    console.log(data)
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id))
    window.location.reload()
    } else {
      alert('Error deleting post')
    }
    

  }

    const postArray: Post[] = posts

    return (
        <div className='post-list-container'>
            <h1 className='list-title'>{posts.length === 0 ? 'No posts yet' : `Post List`}</h1>
        <div className="post-list">
            
                {postArray.map((post, index) => (
                    <li key={post.id ?? index} className="post-item">
                        {post.title && <h2 className='title'>{post.title}</h2>}
                        {post.imageUrl && <img className='image' src={post.imageUrl} alt={post.title} />}
                        {post.description && <p className='description'>{post.description}</p>}
                        <button onClick={() => onDeletePost(String(post.id))}>Delete</button>
                        </li>

                ))}
            
        </div>
        </div>
    )
}