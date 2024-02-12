/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom'
import CallToAction from '../components/CallToAction'
import { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts')
      const data = await res.json()
      setPosts(data.posts)
    }
    fetchPosts()
  }, [])
  return (
    <div>
      <div className="flex flex-col gap-6 p-24 px-3 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold lg:text-5xl">
          Embark on a Journey Through Ideas!
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm dark:text-slate-400">
          Welcome to a world of inspiration! Discover captivating blogs spanning
          lifestyle, finance, sports, technology, nature, and beyond. Immerse
          yourself in a diverse array of perspectives, where creativity knows no
          bounds. While you're here, feel free to explore and enjoy the wealth
          of knowledge our blogosphere has to offer. Remember, in this space,
          the adventure of discovery awaits you!
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-semi-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-2 dark:bg-slate-700 rounded-tl-3xl rounded-br-3xl bg-amber-50">
        <CallToAction />
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
