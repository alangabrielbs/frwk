import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  initialValue?: string
  disabled?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  name,
  initialValue = '',
  disabled = false,
  onInputChange,
  icon,
  iconPosition = 'left',
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.InputWrapper iconPosition={iconPosition}>
      {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
      <S.Input
        type="text"
        onChange={onChange}
        value={value}
        disabled={disabled}
        name={name}
        {...props}
      />
    </S.InputWrapper>
  )
}

export default TextField
