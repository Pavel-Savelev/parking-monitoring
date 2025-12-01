import {
  ButtonHTMLAttributes,
  CSSProperties,
  ForwardedRef,
  ReactNode,
  forwardRef
} from 'react';

import styles from './Button.module.css';

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'link'
  | 'social'
  | 'like'
  | 'utility'
  | 'menu';
type ButtonSize = 'sm' | 'md' | 'lg' | 'none';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  width?: number | string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  iconOnly?: boolean;
  badgeContent?: number | string | boolean;
  loading?: boolean;
}

const getVariantClass = (variant: ButtonVariant) =>
  styles[`variant${variant.charAt(0).toUpperCase() + variant.slice(1)}`] || '';

const getSizeClass = (size: ButtonSize) =>
  styles[`size${size.toUpperCase()}` as keyof typeof styles] || '';

const ButtonComponent = (
  {
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    width,
    startIcon,
    endIcon,
    iconOnly,
    badgeContent,
    loading = false,
    className = '',
    children,
    disabled,
    style,
    ...rest
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const hasLabel =
    children !== undefined && children !== null && children !== false;
  const derivedIconOnly = iconOnly ?? (!hasLabel && !!(startIcon || endIcon));

  const classNames = [
    styles.button,
    getVariantClass(variant),
    getSizeClass(size),
    fullWidth ? styles.fullWidth : '',
    derivedIconOnly ? styles.iconOnly : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const inlineStyle: CSSProperties | undefined = width
    ? {
        ...style,
        width: typeof width === 'number' ? `${width}px` : width
      }
    : style;

  return (
    <button
      ref={ref}
      className={classNames}
      disabled={disabled || loading}
      style={inlineStyle}
      {...rest}
    >
      {loading ? (
        <span className={styles.icon}>
          <svg
            width='16'
            height='16'
            viewBox='0 0 50 50'
            aria-hidden
            focusable='false'
          >
            <circle
              cx='25'
              cy='25'
              r='20'
              fill='none'
              stroke='currentColor'
              strokeWidth='5'
              strokeLinecap='round'
              strokeDasharray='90 150'
              strokeDashoffset='0'
            >
              <animateTransform
                attributeName='transform'
                type='rotate'
                from='0 25 25'
                to='360 25 25'
                dur='0.9s'
                repeatCount='indefinite'
              />
            </circle>
          </svg>
        </span>
      ) : (
        <>
          {startIcon && <span className={styles.icon}>{startIcon}</span>}
          {hasLabel && <span className={styles.label}>{children}</span>}
          {endIcon && <span className={styles.icon}>{endIcon}</span>}
        </>
      )}
      {badgeContent && (
        <span className={styles.badge}>
          {typeof badgeContent === 'boolean' ? '' : badgeContent}
        </span>
      )}
    </button>
  );
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ButtonComponent
);
Button.displayName = 'Button';
