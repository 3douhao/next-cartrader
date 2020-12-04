import styled from '@emotion/styled'
import { useRouter } from 'next/router'

const Nav = styled.nav`
  display: flex;
  font-size: 2rem;
  background: #f5f5f5;
  width: 100vw;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  & a.active {
    color: cyan;
  }
  & > a {
    text-decoration: none;
    color: hotpink;
    margin-left: 30px;
    }
    &: hover {
      color: ivory;
    }
  }
  & > ul {
    display: flex;
    margin-right: -30px;
    & > li {
      list-style: none;
      width: 180px;
      & > a {
        color: royalblue;
        text-decoration: none;
        &:hover {
          color: ivory;
        }
      }
    }
  }
`
const Navbar = () => {
  const router = useRouter()
  return (
    <Nav>
      <a href='/'>Car Trader</a>
      <ul>
        <li>
          <a
            href='/home'
            className={
              router.pathname === '/home' ? 'active' : ''
            }
          >
            Home
          </a>
        </li>
        <li>
          <a
            href='/faq'
            className={
              router.pathname === '/faq' ? 'active' : ''
            }
          >
            FAQ
          </a>
        </li>
        <li>
          <a
            href='/contact'
            className={
              router.pathname === '/contact' ? 'active' : ''
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </Nav>
  )
}

export default Navbar
