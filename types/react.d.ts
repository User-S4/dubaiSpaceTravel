// This file provides TypeScript declarations for React
declare namespace React {
  type ReactNode = 
    | React.Element 
    | string 
    | number 
    | boolean 
    | null 
    | undefined 
    | Iterable<ReactNode>;

  interface Element {}
  
  interface FC<P = {}> {
    (props: P): ReactNode;
  }
  
  type CSSProperties = {
    [key: string]: string | number;
  };
  
  interface HTMLAttributes<T> {
    className?: string;
    style?: CSSProperties;
    onClick?: (event: any) => void;
    onMouseEnter?: (event: any) => void;
    onMouseLeave?: (event: any) => void;
    onSubmit?: (event: any) => void;
    [key: string]: any;
  }
  
  interface DetailedHTMLProps<T, U> extends HTMLAttributes<U> {}
  
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    type?: string;
    value?: string | number | readonly string[];
    onChange?: (event: ChangeEvent<T>) => void;
    placeholder?: string;
    name?: string;
    required?: boolean;
    disabled?: boolean;
  }
  
  interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
    value?: string | number | readonly string[];
    onChange?: (event: ChangeEvent<T>) => void;
    placeholder?: string;
    name?: string;
    required?: boolean;
    rows?: number;
    cols?: number;
  }
  
  interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
    value?: string | number | readonly string[];
    onChange?: (event: ChangeEvent<T>) => void;
    name?: string;
    required?: boolean;
    disabled?: boolean;
  }
  
  interface OptionHTMLAttributes<T> extends HTMLAttributes<T> {
    value?: string | number | readonly string[];
    disabled?: boolean;
    selected?: boolean;
  }
  
  interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
    href?: string;
    target?: string;
    rel?: string;
  }
  
  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
  }
  
  interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    action?: string;
    method?: string;
    encType?: string;
  }
  
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    src?: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
  }
  
  interface LabelHTMLAttributes<T> extends HTMLAttributes<T> {
    htmlFor?: string;
  }
  
  interface LiHTMLAttributes<T> extends HTMLAttributes<T> {
    value?: string | number;
  }
  
  interface OlHTMLAttributes<T> extends HTMLAttributes<T> {
    start?: number;
    type?: '1' | 'a' | 'A' | 'i' | 'I';
  }
  
  interface HtmlHTMLAttributes<T> extends HTMLAttributes<T> {
    lang?: string;
  }
  
  interface SVGAttributes<T> extends HTMLAttributes<T> {
    viewBox?: string;
    xmlns?: string;
    fill?: string;
    stroke?: string;
    strokeWidth?: number | string;
  }
  
  interface FormEvent<T = Element> {
    preventDefault(): void;
    target: T;
  }
  
  interface ChangeEvent<T = Element> {
    target: T & {
      value: string;
      name: string;
    };
    preventDefault(): void;
  }
} 