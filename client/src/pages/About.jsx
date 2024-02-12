/* eslint-disable react/no-unescaped-entities */

export default function About() {
  return (
    <div className="min-h-screen flex justify-center bg-gray-200 p-8 dark:bg-slate-900">
      <div className="max-w-2xl mx-auto p-8 text-center bg-white rounded-lg shadow-lg dark:bg-slate-100">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7 text-slate-700">
            About Alexa's Blog
          </h1>
          <div className="text-lg flex flex-col gap-6 text-gray-700">
            <p>
              Welcome to Alexa's Blog! 🚀 This platform is curated by Alexa, a
              passionate developer and tech enthusiast, who created this space
              to share insights, knowledge, and experiences with the global
              community.
            </p>

            <p>
              At Alexa's Blog, you'll find a wealth of articles, tutorials, and
              musings covering a wide range of topics including{' '}
              <span className="font-bold">web development</span>,{' '}
              <span className="font-bold">software engineering</span>, and{' '}
              <span className="font-bold">emerging technologies</span>. Alexa's
              dedication to learning and exploration ensures that you'll
              discover fresh and informative content with each visit.
            </p>

            <p>
              We encourage active participation from our readers! Engage with
              the content by leaving comments, sharing your thoughts, and
              connecting with fellow readers. Together, we can foster a vibrant
              community of learners and enthusiasts, supporting each other's
              growth and fostering meaningful discussions.
            </p>

            <p>
              Additionally, stay tuned for exclusive updates, behind-the-scenes
              glimpses, and exciting announcements. Alexa's Blog is committed to
              providing valuable content and fostering a welcoming environment
              for all.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
