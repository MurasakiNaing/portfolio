import { useState } from 'react'
import { translations } from '../lang'

function Nav({language, setLanguage}) {
  const text = translations[language].nav
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <span className="font-bold text-lg text-white">Phone</span>

      <div className="flex items-center gap-6 text-sm text-gray-300">
        <a href="#about">{text.about}</a>
        <a href="#career">{text.career}</a>
        <a href="#projects">{text.projects}</a>

        <div className="flex items-center gap-1 bg-gray-900 rounded-full p-1">
          <button
            onClick={() => setLanguage('EN')}
            className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
              language === 'EN'
                ? 'bg-white text-gray-950'
                : 'text-gray-500'
            }`}
          >
            {text.languageEn}
          </button>
          <button
            onClick={() => setLanguage('JP')}
            className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
              language === 'JP'
                ? 'bg-white text-gray-950'
                : 'text-gray-500'
            }`}
          >
            {text.languageJp}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav