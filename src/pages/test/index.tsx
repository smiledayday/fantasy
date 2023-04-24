// index.tsx
import { NextPage } from 'next'

type IndexProps = {
  data: number
}

const Index: NextPage<IndexProps> = ({ data }) => {
  return <div>{data}</div>
}

Index.getInitialProps = async () => {
  const data = 123
  return { data }
}

export default Index
