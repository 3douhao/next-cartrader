import styled from '@emotion/styled'
import openDB from '../openDB'

const Faq = styled.div`
  width: 80vw;
  margin: auto;
  margin-top: 20px;
  padding-bottom: 20px;
  h1 {
    font-size: 3rem;
    text-align: center;
  }
  details {
    width: 60vw;
    margin: auto;
    margin-bottom: 20px;
    p {
      background: lightgray;
      font-size: 2rem;
      margin-top: 0;
      width: 60vw;
      padding-left: 20px;
    }
    summary {
      background: lightskyblue;
      border: none;
      cursor: pointer;
      font-size: 2rem;
      display: block;
      outline: none;
      width: 60vw;
      border-bottom: 2px solid;
      height: 80px;
      line-height: 80px;
      user-select: none;
      transition: background 0.3s;
      padding-left: 20px;
      overflow: hidden;
      :hover {
        background: royalblue;
      }
      ::-webkit-details-marker {
        display: none;
      }
    }
  }
`

export async function getStaticProps() {
  const db = await openDB()
  const faqs = await db.all('select * from faq')
  return {
    props: { faqs }
  }
}

const FaqPage = function ({ faqs }) {
  return (
    <Faq>
      <h1>this is faq of this site!</h1>
      {faqs &&
        faqs.map(faq => (
          <details key={faq.id}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
    </Faq>
  )
}
export default FaqPage
