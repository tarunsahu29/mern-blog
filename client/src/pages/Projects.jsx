import CallToAction from '../components/CallToAction'

export default function Projects() {
  return (
    <div className="flex justify-center  bg-gradient-to-r from-gray-100 to-gray-200 p-8">
      <div className="max-w-5xl mx-auto p-8 text-center bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center my-7">Projects</h1>
        <p className="text-lg text-gray-700 mb-6">
          Build fun and engaging projects while learning HTML, CSS, and
          JavaScript!
        </p>
        <CallToAction />
      </div>
    </div>
  )
}
