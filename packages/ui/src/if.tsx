import type { ReactElement } from "react";

export interface IfProps<T, P> {
  /** The condition to evaluate */
  is: T;
  /** The element to render if the condition is true */
  children: P;
  /** The element to render if the condition is false */
  el?: P;
}

/**
 * A React-friendly implementation of if/else logic.
 */
export function If<T, P>({ is, children, el }: IfProps<T, P>): ReactElement {
  return <>{is ? children : el}</>;
}
