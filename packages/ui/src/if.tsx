import type { ReactElement } from "react";

export interface IfProps<T> {
  /** The condition to evaluate */
  is: T;
  /** The element to render if the condition is true */
  children: React.ReactNode;
  /** The element to render if the condition is false */
  el?: React.ReactNode;
}

/**
 * A React-friendly implementation of if/else logic.
 */
export function If<T>({ is, children, el }: IfProps<T>): ReactElement {
  return <>{is ? children : el}</>;
}
