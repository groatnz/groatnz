import React, { useContext } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { AppContext } from '../lib/context'
import { useLanguage } from '../lib/hooks'
import { Link, Img } from '../lib/components'
import { getPathForLang } from '../lib/utils'
import config from '../lib/config'
import constants from './constants'
import { Contact } from './Contact'
const Nav = styled.nav`
    width: 100%;
    height: 100%;
    padding: 10px 30px 100px;
    background: rgba(128, 144, 128, 1);
    border-right: 1px solid gray;

    overflow: auto;
    -webkit-overflow-scrolling: touch;

    * {
        color: ${constants.fg};
        text-shadow: 0 2px 5px black !important;
    }
    ul {
        padding-left: 0;
        margin: 0;
    }
    li,
    li > * {
        line-height: 2.5em;
        &.active {
            position: relative;
            text-decoration: none;
            font-weight: bold;
            font-style: italic;
            color: white;
        }
    }
    li a {
        display: block;
        text-decoration: none;
        &:hover {
            color: ${constants.link};
            text-decoration: underline;
        }
        &:visited {
            color: ${constants.fg};
        }
    }
`

const Header = styled.div`
    margin-bottom: 30px;
    text-align: center;

    .logo {
        width: 70%;
        padding: 0px 0;
    }

    .twitter {
        display: block;
        margin: 10px auto;
        img {
            height: 24px;
        }
    }
`

const isActive = (path, to) => {
  const match = (to || '').match(/^([^#?]*)\??([^#]*)#?(.*)$/)
  return !!match && match.length > 0 && path === match[1]
}

const Li = ({ to, children, route }) => {
  if (isActive(route, to)) {
    return <li className='active'>{children}</li>
  }

  const { dispatch } = useContext(AppContext)
  const hideMenu = () => dispatch({ type: 'hideMenu' })

  return (
    <li onClick={hideMenu}>
      <Link href={to} prefetch>
        {children}
      </Link>
    </li>
  )
}

const renderSidebarItems = (
  items,
  route,
  indent
) => {
  return (
    <ul style={{ textIndent: indent * 30 }}>
      {items.map(([label, content, list]) => {
        if (typeof list === 'undefined') {
          // Simple item
          const path = content
          return (
            <Li key={path} route={route} to={path}>
              {label}
            </Li>
          )
        } else if (typeof content === 'string') {
          // Nested item with link
          return (
            <li key={label}>
              <Link href={content}>{label}</Link>
              {renderSidebarItems(list, route, indent + 1)}
            </li>
          )
        } else {
          // Nested item without link
          return (
            <li key={label}>
              <span>{label}</span>
              {renderSidebarItems(list, route, indent + 1)}
            </li>
          )
        }
      })}
    </ul>
  )
}

const Sidebar = () => {
  const { dispatch } = useContext(AppContext)
  const router = useRouter()
  const lang = useLanguage()
  const sidebarItems = config.sidebar[lang]

  return (
    <Nav>
      <Header>
        <h1>Groat.nz</h1>
        <div onClick={() => dispatch({ type: 'hideMenu' })}>
          <Link href={getPathForLang(lang, '/')}>
            <Img
              className='logo'
              src='/static/images/groat-small.svg'
              alt='groat logo'
            />
          </Link>
        </div>
      </Header>
      {renderSidebarItems(sidebarItems, router.pathname, 0)}
      <hr />
      <Contact />
    </Nav>
  )
}

export default Sidebar
