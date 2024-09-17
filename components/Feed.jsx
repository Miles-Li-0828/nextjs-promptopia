'use client'

import { useState, useEffect } from "react"

import PromptCard from "./PromptCard"
import { set } from "mongoose"

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className="mt-16 prompt_layout">
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )
}

const Feed = () => {
    const [posts, setPosts] = useState([])

    // Search text content
    const [searchText, setSearchText] = useState("")
    const [searchTimeout, setSearchTimeout] = useState(null)
    const [searchResults, setSearchResults] = useState([])

    const fetchPosts = async () => {
        const response = await fetch("/api/prompt")
        const data = await response.json()

        setPosts(data)
    }

    useEffect(() => {
        fetchPosts()
    })

    const filterPrompts = (searchtext) => {
        const regex = new RegExp(searchtext, "i")
        return posts.filter(
            (item) =>
                regex.test(item.creator.username) ||
                regex.test(item.tag) ||
                regex.test(item.prompt)
        )
    }

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout)
        setSearchText(e.target.value)

        setSearchTimeout(
            setTimeout(() => {
                setSearchResults(filterPrompts(e.target.value))
            }, 500)
        )
    }

    const handleTagClick = (tag) => {
        setSearchText(tag)

        const searchResults = filterPrompts(tag)
        setSearchResults(searchResults)
    }

    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input
                    type="text"
                    placeholder="Search for a tag or a username"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="search_input peer"
                />
            </form>

            {/* All prompts */}
            {searchText ? (
                <PromptCardList
                    data={searchResults}
                    handleTagClick={handleTagClick}
                />
            ) : (
                <PromptCardList data={posts} handleTagClick={handleTagClick} />
            )}
        </section>
    )
}

export default Feed