
import { translations } from '../lang'
import TimelineComponent from './TimelineComponent'

function Career({ language }) {
  const text = translations[language].career

  return (
    <section id="career" className="px-8 py-24 border-t border-gray-800">
      <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-10">
        {text.heading}
      </h2>

      <h3 className="text-white font-medium mb-4">{text.experienceLabel}</h3>
      <div className="flex flex-col gap-8 mb-12">
        {text.experience.map((job) => (
          <TimelineComponent key={job.role + job.period} job={job} />
        ))}
      </div>

      <h3 className="text-white font-medium mb-4">{text.educationLabel}</h3>
      <div className="flex flex-col gap-8">
        {text.education.map((job) => (
          <TimelineComponent key={job.role + job.period} job={job} />
        ))}
      </div>
    </section>
  )
}

export default Career