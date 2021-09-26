import { useState, useEffect } from 'react'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import Link from 'next/link'
import * as S from './styles'
import items from './items'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <S.Wrapper>
      <S.MenuDesktop>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <MediaMatch lessThan="medium">
          <S.IconWrapper
            onClick={() => setIsOpen((prevState) => !prevState)}
            aria-label={isOpen ? 'Close menu' : 'Open Menu'}
            tabIndex={0}
          >
            {isOpen ? <S.CloseIcon size={24} /> : <S.MenuIcon size={24} />}
          </S.IconWrapper>
        </MediaMatch>
      </S.MenuDesktop>

      <S.MenuMobile
        isOpen={isOpen}
        aria-hidden={!isOpen}
        aria-label="mobile-navigation"
      >
        <S.MenuMobileContent>
          <S.Label>Know other tools:</S.Label>
          <S.MenuGroup>
            {items.map(({ href, id, label }) => (
              <Link href={href} passHref key={id}>
                <S.MenuLink>{label}</S.MenuLink>
              </Link>
            ))}
          </S.MenuGroup>
        </S.MenuMobileContent>
      </S.MenuMobile>
    </S.Wrapper>
  )
}

export default NavBar
