/**
 * This file provides a unified way to import React hooks to avoid TypeScript errors.
 * Import this file instead of directly importing from 'react'.
 */
import React from 'react';

// Re-export the hooks
export const {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useContext,
  useReducer,
  createContext,
  forwardRef,
  Fragment,
  lazy,
  Suspense,
} = React;

// Re-export React itself as default
export default React; 