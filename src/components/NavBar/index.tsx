import { useState } from 'react'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import Link from 'next/link'
import * as S from './styles'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

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
            <Link href="/" passHref>
              <S.MenuLink>
                <span>📝</span> TODO List
              </S.MenuLink>
            </Link>
            <Link href="/" passHref>
              <S.MenuLink>
                <span>🖼</span> Albuns
              </S.MenuLink>
            </Link>
          </S.MenuGroup>
        </S.MenuMobileContent>
      </S.MenuMobile>
    </S.Wrapper>
  )
}

export default NavBar
