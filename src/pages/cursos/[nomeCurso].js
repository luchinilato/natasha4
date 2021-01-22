import { useRouter } from 'next/router'

const Curso = () => {
  const router = useRouter()
  const { nomeCurso } = router.query

  return <p>Post: {nomeCurso}</p>
}

export default Curso