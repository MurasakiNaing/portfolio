import { useState } from 'react'
import { translations } from '../lang'
import { SiGithub } from 'react-icons/si'
import { TiSocialLinkedin } from 'react-icons/ti'

function Hero({ language }) {
  const text = translations[language].hero
  return (
    <section
      className="relative overflow-hidden flex flex-col items-start justify-center px-8 py-32"
    >
      <h1 className="text-5xl font-bold text-white mb-4">{text.greeting}</h1>
      <p className="text-xl text-gray-400 mb-8">{text.subtitle}</p>

      <div className="flex items-center gap-4">

        <a href="#projects"
          className="bg-white text-gray-950 px-6 py-3 rounded-md font-medium"
        >
          {text.cta}
        </a>

        <div className="flex">
          <a href="https://github.com/MurasakiNaing"
            className="text-gray-300 px-6 py-3 text-2xl"
          >
            <SiGithub />
          </a>
          <a href="https://www.linkedin.com/in/phone-pyae-naing-07a381237/"
            className="text-gray-300 px-6 py-3 text-2xl"
          >
            <TiSocialLinkedin />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero