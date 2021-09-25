import * as S from './styles'

export type HeroProps = {
  title: string
  description: string
}

const Hero = ({ title, description }: HeroProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Hero
