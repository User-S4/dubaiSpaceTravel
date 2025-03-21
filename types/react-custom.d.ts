/**
 * Custom React declarations to fix import issues
 */

// React declaration
declare module 'react' {
  // This enables default import for React
  const React: any;
  export default React;
  
  // Common React hooks
  export const useState: <T>(initialState: T | (() => T)) => [T, (newState: T | ((prevState: T) => T)) => void];
  export const useEffect: (effect: () => void | (() => void), deps?: ReadonlyArray<any>) => void;
  export const useRef: <T>(initialValue: T) => { current: T };
  export const useCallback: <T extends (...args: any[]) => any>(callback: T, deps: ReadonlyArray<any>) => T;
  export const useMemo: <T>(factory: () => T, deps: ReadonlyArray<any>) => T;
  export const useContext: <T>(context: React.Context<T>) => T;
  export const useReducer: <S, A>(reducer: (state: S, action: A) => S, initialArg: S, init?: (arg: S) => S) => [S, (action: A) => void];
  
  // React types
  export interface FC<P = {}> {
    (props: P): JSX.Element | null;
    displayName?: string;
  }
  
  export interface ReactNode {}
  export interface ReactElement {}
  export interface Context<T> {}
  export interface CSSProperties {}
}

// Ensuring JSX namespace
declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    [elemName: string]: any;
  }
} 