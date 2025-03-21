// Global module declarations for commonly used packages
import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare global {
  const React: typeof React;
  const ReactDOM: typeof ReactDOM;
}

// Export as module
declare module 'react' {
  export = React;
  export as namespace React;
  
  export const useState: typeof React.useState;
  export const useEffect: typeof React.useEffect;
  export const useRef: typeof React.useRef;
  export const useCallback: typeof React.useCallback;
  export const useMemo: typeof React.useMemo;
  export const useContext: typeof React.useContext;
  export const useReducer: typeof React.useReducer;
  
  // Add other hooks as needed
}

declare module 'react-dom' {
  export = ReactDOM;
  export as namespace ReactDOM;
}

// Add date-fns
declare module 'date-fns' {
  export function format(date: Date | number, format: string, options?: any): string;
  export function addDays(date: Date | number, amount: number): Date;
  export function addMonths(date: Date | number, amount: number): Date;
  export function parseISO(dateString: string): Date;
  export function isValid(date: any): boolean;
}

// Add react-datepicker
declare module 'react-datepicker' {
  import { FC, ReactNode } from 'react';
  
  export interface DatePickerProps {
    selected?: Date | null;
    onChange: (date: Date | null, event: any) => void;
    minDate?: Date;
    maxDate?: Date;
    placeholderText?: string;
    className?: string;
    dateFormat?: string | string[];
    showTimeSelect?: boolean;
    timeFormat?: string;
    timeIntervals?: number;
    timeCaption?: string;
    excludeDates?: Date[];
    filterDate?: (date: Date) => boolean;
    inline?: boolean;
    autoComplete?: string;
    children?: ReactNode;
    [key: string]: any;
  }
  
  const DatePicker: FC<DatePickerProps>;
  export default DatePicker;
}

// Add zustand
declare module 'zustand' {
  export function create<T>(
    config: (set: (partial: Partial<T>, replace?: boolean) => void, 
            get: () => T, 
            api: any) => T
  ): (selector?: (state: T) => any, equals?: (a: any, b: any) => boolean) => any;
} 