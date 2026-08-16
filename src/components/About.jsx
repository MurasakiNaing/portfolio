import {
  SiTypescript,
  SiJavascript,
  SiDart,
  SiOpenjdk,
  SiPython,
  SiHtml5,
  SiCss,
  SiMysql,
  SiAngular,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiFastapi,
  SiFlutter,
  SiJetpackcompose,
  SiSpringboot,
  SiPhp,
  SiKotlin,
} from "react-icons/si"
import { translations } from "../lang"

const languages = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "PHP", icon: SiPhp },
  { name: "Kotlin", icon: SiKotlin },
  { name: "Dart", icon: SiDart },
  { name: "Java", icon: SiOpenjdk },
  { name: "Python", icon: SiPython },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "SQL", icon: SiMysql },
]

const frameworks = [
  { name: "Angular", icon: SiAngular },
  { name: "React", icon: SiReact },
  { name: "FastApi", icon: SiFastapi },
  { name: "Flutter", icon: SiFlutter },
  { name: "Jetpack Compose", icon: SiJetpackcompose },
  { name: "Springboot", icon: SiSpringboot },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Tailwind", icon: SiTailwindcss },
]

function About({language}) {
  const text = translations[language].about
  return (
    <section id="about" className="px-8 py-24 border-t border-gray-800">
      <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-8">
        {text.heading}
      </h2>

      <p className="text-gray-300 max-w-xl mb-10 leading-relaxed">
        {text.bio}
      </p>

      <h3 className="text-sm text-gray-500 mb-4">{text.skillsHeading}</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,120px))] gap-3">
            {languages.map(({ name, icon: Icon }) => (
                <div
                key={name}
                className="aspect-square flex flex-col items-center justify-center gap-2 border border-gray-700 rounded-lg text-gray-300"
                >
                <Icon className="text-2xl" />
                <span className="text-sm">{name}</span>
                </div>
            ))}
        </div>

        <br />

        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,120px))] gap-3">
            {frameworks.map(({ name, icon: Icon }) => (
                <div
                key={name}
                className="aspect-square flex flex-col items-center justify-center gap-2 border border-gray-700 rounded-lg text-gray-300"
                >
                <Icon className="text-2xl" />
                <span className="text-sm">{name}</span>
                </div>
            ))}
        </div>
    </section>
  )
}

export default About