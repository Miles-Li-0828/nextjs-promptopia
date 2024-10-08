'use client'

import { useState, useEffect } from "react"
import { Suspense } from 'react';
import { useSearchParams } from "next/navigation"

import Profile from "@components/Profile"

const UserProfile = ({ params }) => {
    return (
        <Suspense fallback={<div>Loading profile...</div>}>
            <UserProfileContent params={params} />
        </Suspense>
    );
};

const UserProfileContent = ({ params }) => {
    const searchParams = useSearchParams()
    const userName = searchParams.get("name")

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params?.id}/posts`)
            const data = await response.json()

            setPosts(data)
        }

        if (params?.id) fetchPosts()
    }, [params.id])

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Profile
                name={userName}
                desc={`Welcome to ${userName}'s profile page. Check out their latest prompts and get inspired by their creativity`}
                data={posts}
            />
        </Suspense>
    )
}

export default UserProfile 