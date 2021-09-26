import Link from 'next/link'
import Logo from 'components/Logo'
import * as S from './styles'

const NavBar = () => {
  return (
    <S.Wrapper>
      <S.MenuDesktop>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </S.MenuDesktop>
    </S.Wrapper>
  )
}

export default NavBar
