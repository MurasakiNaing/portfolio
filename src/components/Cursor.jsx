import { useEffect, useState } from 'react'

function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      id="gradient-circle"
      className="fixed w-125 h-125 rounded-full pointer-events-none mix-blend-screen"
      style={{
        left: mousePos.x,
        top: mousePos.y,
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.2s ease-out, top 0.2s ease-out',
        background: 'radial-gradient(circle, rgba(16,114,170,0.6), transparent 70%)',
      }}
    >
    </div>
  )
}

export default Cursor