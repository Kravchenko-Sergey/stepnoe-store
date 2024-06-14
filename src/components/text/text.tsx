import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './text.module.scss'

export type TextProps<T extends ElementType = 'p'> = {
  as?: T
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link1'
    | 'link2'
    | 'error'
  children?: ReactNode
  className?: string
}

export const Text = <T extends ElementType = 'p'>(
  props: TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>
) => {
  const { variant = 'body1', className, as: Component = 'p', ...rest } = props

  return <Component className={`${s[variant]} ${className}`} {...rest} />
}
