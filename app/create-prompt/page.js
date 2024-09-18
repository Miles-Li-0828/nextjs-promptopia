"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

// 在 Feed.jsx 中
useEffect(() => {
    const fetchPosts = async () => {
        const response = await fetch("/api/prompt");
        const data = await response.json();
        setPosts(data);
    };

    fetchPosts(); // 每次组件加载时调用
}, []);


const CreatePrompt = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const [submitting, setIsSubmitting] = useState(false);
    const [post, setPost] = useState({ prompt: "", tag: "" });

    const createPrompt = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/prompt/new", {
                method: "POST",
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag,
                }),
            });

            if (response.ok) {
                fetchPosts(); // 假设 fetchPosts 是用来获取主页 Feed 数据的函数
                router.push("/");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Form
            type='Create'
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={createPrompt}
        />
    );
};

export default CreatePrompt;