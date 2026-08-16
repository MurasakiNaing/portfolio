function Contact() {
  return (
    <section className="px-8 py-24 border-t border-gray-800">
      <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-6">
        Let's work together
      </h2>

      <p className="text-3xl text-white font-medium mb-10">
        Your next project starts here.
      </p>

      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
        <a href="mailto:email@example.com">email@example.com</a>
        <a href="https://github.com/yourusername">GitHub ↗</a>
        <a href="https://linkedin.com/in/yourusername">LinkedIn ↗</a>
      </div>
    </section>
  )
}

export default Contact