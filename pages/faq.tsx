import { Summary, P } from 'components/Faq'
import Container from 'components/Container'
import axios from 'axios'

export async function getStaticProps() {
  const { data } = await axios.get(
    'http://localhost:800/faqs'
  )
  return {
    props: { data }
  }
}

const Faq = function ({ data }) {
  return (
    <Container>
      <h1>this is faq of this site!</h1>
      {data &&
        data.map(faq => (
          <details key={faq.id}>
            <Summary>{faq.question}</Summary>
            <P>{faq.answer}</P>
          </details>
        ))}
    </Container>
  )
}
export default Faq
