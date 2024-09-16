"use client"

import { useState, useEffect } from 'react'
import { UseSession, useSession } from 'next-auth/react'
import { Router, useRouter } from 'next/navigation'

import Profile from '@components/Profile'

const MyProfile = () => {
    const { data: session } = useSession()
    const router = useRouter()

    const [posts, setPosts] = useState([])

    useEffect(() => {
        // 仅当 session 中有 user.id 时才进行请求
        if (session?.user?.id) {
            const fetchPosts = async () => {
                try {
                    const response = await fetch(`/api/users/${session.user.id}/posts`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch posts');
                    }
                    const data = await response.json();
                    setPosts(data);
                } catch (error) {
                    console.error(error);
                }
            };

            fetchPosts();
        }
    }, [session]);


    const handleEdit = (post) => {
        router.push('/update-prompt?id=${post._id}')
    }

    const handleDelete = async (post) => {

    }

    return (
        <Profile
            name="My"
            desc="Welcome to my profile"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile