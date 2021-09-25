import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from 'react'
import * as S from './styles'

export type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'medium'
  fullWidth?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
> = ({ children, size = 'medium', fullWidth = false, ...props }, ref) => {
  return (
    <S.Wrapper size={size} fullWidth={fullWidth} ref={ref} {...props}>
      <span>{children}</span>
    </S.Wrapper>
  )
}

export default forwardRef(Button)
