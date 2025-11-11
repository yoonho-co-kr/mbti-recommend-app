import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // Add any additional HTML attributes you're using
    [key: string]: any;
  }
}
