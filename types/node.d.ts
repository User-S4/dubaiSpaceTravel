// This provides minimal Node.js type definitions needed for our project
declare namespace NodeJS {
  interface Timeout {
    ref(): this;
    unref(): this;
    hasRef(): boolean;
    refresh(): this;
    [Symbol.toPrimitive](): number;
  }

  interface ProcessEnv {
    [key: string]: string | undefined;
    NODE_ENV: 'development' | 'production' | 'test';
  }

  interface Process {
    env: ProcessEnv;
  }
} 