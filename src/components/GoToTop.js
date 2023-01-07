import { useEffect, useRef, useState } from 'react'

export default function GoToTop() {
  const [isScrolled, setIsScrolled] = useState(false)
  const buttonRef = useRef()

  useEffect(() => {
    function handleScroll() {
      window.scrollY > 900 ? setIsScrolled(true) : setIsScrolled(false)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    buttonRef.current.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }, [])

  return (
    <button ref={buttonRef} className={`goTop ${isScrolled ? 'show' : 'hide'}`} >⬆</button>
  )
}
