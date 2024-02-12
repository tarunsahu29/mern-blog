import { Button } from 'flowbite-react'
export default function Projects() {
  return (
    <div className="flex justify-center bg-gray-200 p-8 dark:bg-slate-900">
      <div className="max-w-5xl mx-auto p-8 text-center bg-white rounded-lg shadow-lg dark:bg-slate-100">
        <h1 className="text-3xl font-semibold text-center my-7 text-slate-700">
          Projects
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Build fun and engaging projects while learning HTML, CSS, and
          JavaScript!
        </p>
        <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
          <div className="flex-1 justify-center flex flex-col">
            <h2 className="text-2xl dark:text-slate-600">
              Excited about Artificial Intelligence? Dive into the fascinating
              world of AI!
            </h2>
            <p className="text-gray-500 my-2">
              Explore the possibilities with our comprehensive AI guide.
            </p>
            <Button
              gradientDuoTone="purpleToPink"
              className="rounded-tl-xl rounded-bl-none"
            >
              <a
                href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/an-executives-guide-to-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discover AI Guide
              </a>
            </Button>
          </div>
          <div className="p-7 flex-1">
            <img
              src="https://incubator.ucf.edu/wp-content/uploads/2023/07/artificial-intelligence-new-technology-science-futuristic-abstract-human-brain-ai-technology-cpu-central-processor-unit-chipset-big-data-machine-learning-cyber-mind-domination-generative-ai-scaled-1.jpg"
              alt="Topic Image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
