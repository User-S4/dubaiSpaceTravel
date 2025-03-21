/**
 * Enhanced module declarations to fix import errors
 */

// Fix React ESM imports
declare module 'react' {
  import * as React from 'react';
  
  export = React;
  export as namespace React;
  
  // Common React exports
  export const useState: typeof React.useState;
  export const useEffect: typeof React.useEffect;
  export const useContext: typeof React.useContext;
  export const useReducer: typeof React.useReducer;
  export const useCallback: typeof React.useCallback;
  export const useMemo: typeof React.useMemo;
  export const useRef: typeof React.useRef;
  export const useImperativeHandle: typeof React.useImperativeHandle;
  export const useLayoutEffect: typeof React.useLayoutEffect;
  export const useDebugValue: typeof React.useDebugValue;
  export const createContext: typeof React.createContext;
  export const createElement: typeof React.createElement;
  export const cloneElement: typeof React.cloneElement;
  export const createRef: typeof React.createRef;
  export const forwardRef: typeof React.forwardRef;
  export const Fragment: typeof React.Fragment;
  export const Component: typeof React.Component;
  export const PureComponent: typeof React.PureComponent;
  export const memo: typeof React.memo;
  export const StrictMode: typeof React.StrictMode;
  export const Suspense: typeof React.Suspense;
  export const lazy: typeof React.lazy;
}

// Fix third-party lib imports
declare module 'framer-motion' {
  export interface AnimatePresenceProps {
    children?: React.ReactNode;
    initial?: boolean;
    custom?: any;
    onExitComplete?: () => void;
    exitBeforeEnter?: boolean;
    mode?: 'sync' | 'wait' | 'popLayout';
  }
  
  export function AnimatePresence(props: AnimatePresenceProps): JSX.Element;
  
  export const motion: any;

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
    custom?: any;
  }
}

// Expand react-icons definitions
declare module 'react-icons/fa' {
  import { ComponentType, SVGAttributes } from 'react';
  
  interface IconBaseProps extends SVGAttributes<SVGElement> {
    size?: string | number;
    color?: string;
    title?: string;
  }
  
  type IconType = ComponentType<IconBaseProps>;
  
  // Common icons used in the app
  export const FaRocket: IconType;
  export const FaCalendarAlt: IconType;
  export const FaMapMarkerAlt: IconType;
  export const FaUserAstronaut: IconType;
  export const FaUser: IconType;
  export const FaBars: IconType;
  export const FaTimes: IconType;
  export const FaUsers: IconType;
  export const FaBed: IconType;
  export const FaStar: IconType;
  export const FaCheck: IconType;
  export const FaGlobeAsia: IconType;
  export const FaSearch: IconType;
  export const FaQuoteLeft: IconType;
  export const FaChevronLeft: IconType;
  export const FaChevronRight: IconType;
  export const FaTwitter: IconType;
  export const FaFacebookF: IconType;
  export const FaInstagram: IconType;
  export const FaLinkedinIn: IconType;
  export const FaPhoneAlt: IconType;
  export const FaEnvelope: IconType;
  export const FaClock: IconType;
  export const FaPaperPlane: IconType;
  export const FaPhone: IconType;
  export const FaArrowLeft: IconType;
  export const FaArrowRight: IconType;
  export const FaShieldAlt: IconType;
  export const FaGlobe: IconType;
}

// Next.js modules
declare module 'next/link' {
  import { ReactNode } from 'react';

  interface LinkProps {
    href: string;
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
    legacyBehavior?: boolean;
    children?: ReactNode;
    className?: string;
  }

  export default function Link(props: LinkProps): JSX.Element;
}

declare module 'next/image' {
  interface ImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fill?: boolean;
    sizes?: string;
    quality?: number;
    priority?: boolean;
    placeholder?: 'blur' | 'empty';
    style?: React.CSSProperties;
    className?: string;
    blurDataURL?: string;
    unoptimized?: boolean;
    onLoad?: (event: any) => void;
    onError?: (error: any) => void;
  }

  export default function Image(props: ImageProps): JSX.Element;
}

declare module 'next/navigation' {
  export function useRouter(): {
    push(url: string): void;
    replace(url: string): void;
    back(): void;
    forward(): void;
    refresh(): void;
    prefetch(url: string): void;
  };

  export function useParams<T = Record<string, string>>(): T;
  export function usePathname(): string;
  export function useSearchParams(): URLSearchParams;
} 