// React
declare module 'react' {
  import * as React from 'react';
  export = React;
  export as namespace React;
}

// Next.js
declare module 'next/link' {
  import { LinkProps as NextLinkProps } from 'next/dist/client/link';
  import { FC, ReactNode } from 'react';
  
  export interface LinkProps extends NextLinkProps {
    children?: ReactNode;
    href: string;
    className?: string;
    key?: string;
  }
  
  const Link: FC<LinkProps>;
  export default Link;
}

declare module 'next/image' {
  import { FC, ComponentProps } from 'react';
  
  export interface ImageProps extends ComponentProps<'img'> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    loader?: any;
    quality?: number;
    priority?: boolean;
    loading?: 'lazy' | 'eager';
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
    objectPosition?: string;
    lazyBoundary?: string;
    unoptimized?: boolean;
  }
  
  const Image: FC<ImageProps>;
  export default Image;
}

declare module 'next/font/google' {
  export interface FontOptions {
    weight?: string | string[];
    style?: string | string[];
    subsets?: string[];
    display?: 'auto' | 'block' | 'swap' | 'fallback' | 'optional';
    variable?: string;
    preload?: boolean;
  }

  export function Exo_2(options?: FontOptions): {
    className: string;
    style: Record<string, string>;
    variable: string;
  };

  export function Space_Mono(options?: FontOptions): {
    className: string;
    style: Record<string, string>;
    variable: string;
  };
}

declare module 'next/navigation' {
  export function useRouter(): {
    push: (url: string) => void;
    replace: (url: string) => void;
    back: () => void;
    forward: () => void;
    prefetch: (url: string) => void;
  };

  export function useParams(): Record<string, string>;
}

// Third-party libraries
declare module 'framer-motion' {
  import { FC, ReactNode, ComponentProps } from 'react';
  
  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    variants?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    viewport?: any;
    children?: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    custom?: any;
  }
  
  export const motion: {
    div: FC<MotionProps & ComponentProps<'div'>>;
    span: FC<MotionProps & ComponentProps<'span'>>;
    button: FC<MotionProps & ComponentProps<'button'>>;
    a: FC<MotionProps & ComponentProps<'a'>>;
    ul: FC<MotionProps & ComponentProps<'ul'>>;
    li: FC<MotionProps & ComponentProps<'li'>>;
    p: FC<MotionProps & ComponentProps<'p'>>;
    h1: FC<MotionProps & ComponentProps<'h1'>>;
    h2: FC<MotionProps & ComponentProps<'h2'>>;
    h3: FC<MotionProps & ComponentProps<'h3'>>;
    h4: FC<MotionProps & ComponentProps<'h4'>>;
    h5: FC<MotionProps & ComponentProps<'h5'>>;
    h6: FC<MotionProps & ComponentProps<'h6'>>;
    img: FC<MotionProps & ComponentProps<'img'>>;
    form: FC<MotionProps & ComponentProps<'form'>>;
    input: FC<MotionProps & ComponentProps<'input'>>;
    textarea: FC<MotionProps & ComponentProps<'textarea'>>;
    select: FC<MotionProps & ComponentProps<'select'>>;
    option: FC<MotionProps & ComponentProps<'option'>>;
    label: FC<MotionProps & ComponentProps<'label'>>;
    nav: FC<MotionProps & ComponentProps<'nav'>>;
    header: FC<MotionProps & ComponentProps<'header'>>;
    footer: FC<MotionProps & ComponentProps<'footer'>>;
    main: FC<MotionProps & ComponentProps<'main'>>;
    section: FC<MotionProps & ComponentProps<'section'>>;
    article: FC<MotionProps & ComponentProps<'article'>>;
  };

  export interface AnimatePresenceProps {
    children?: ReactNode;
    initial?: boolean;
    onExitComplete?: () => void;
    exitBeforeEnter?: boolean;
    mode?: 'sync' | 'wait' | 'popLayout';
    custom?: any;
  }

  export function AnimatePresence(props: AnimatePresenceProps): JSX.Element;
}

declare module 'react-icons/fa' {
  import { ComponentType, SVGAttributes } from 'react';
  
  export interface IconProps extends SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }
  
  export const FaRocket: ComponentType<IconProps>;
  export const FaCalendarAlt: ComponentType<IconProps>;
  export const FaMapMarkerAlt: ComponentType<IconProps>;
  export const FaUserAstronaut: ComponentType<IconProps>;
  export const FaUser: ComponentType<IconProps>;
  export const FaBars: ComponentType<IconProps>;
  export const FaTimes: ComponentType<IconProps>;
  export const FaUsers: ComponentType<IconProps>;
  export const FaBed: ComponentType<IconProps>;
  export const FaStar: ComponentType<IconProps>;
  export const FaCheck: ComponentType<IconProps>;
  export const FaGlobeAsia: ComponentType<IconProps>;
  export const FaSearch: ComponentType<IconProps>;
  export const FaQuoteLeft: ComponentType<IconProps>;
  export const FaChevronLeft: ComponentType<IconProps>;
  export const FaChevronRight: ComponentType<IconProps>;
  export const FaTwitter: ComponentType<IconProps>;
  export const FaFacebookF: ComponentType<IconProps>;
  export const FaInstagram: ComponentType<IconProps>;
  export const FaLinkedinIn: ComponentType<IconProps>;
  export const FaPhoneAlt: ComponentType<IconProps>;
  export const FaEnvelope: ComponentType<IconProps>;
  export const FaClock: ComponentType<IconProps>;
  export const FaPaperPlane: ComponentType<IconProps>;
  export const FaPhone: ComponentType<IconProps>;
  export const FaArrowLeft: ComponentType<IconProps>;
  export const FaArrowRight: ComponentType<IconProps>;
  export const FaShieldAlt: ComponentType<IconProps>;
  export const FaGlobe: ComponentType<IconProps>;
} 