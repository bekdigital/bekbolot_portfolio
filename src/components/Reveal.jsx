import { useInView } from '../hooks/useInView'

/** Wraps content in a gentle fade-and-rise animation when it scrolls into view. */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, isVisible] = useInView()
  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
