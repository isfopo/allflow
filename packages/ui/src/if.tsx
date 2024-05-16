import {
  type ReactNode,
  type PropsWithChildren,
  type ReactElement,
  Fragment,
} from "react";

export interface IfProps<T, P> {
  /** The condition to evaluate */
  is: T;
  /** The element to render if the condition is true */
  children: ReactElement<P> | ReactElement<P>[];
}

/**
 * A React-friendly implementation of if/else logic.
 */
export function If<T, P>({ is, children }: IfProps<T, P>): ReactElement {
  if (Array.isArray(children)) {
    return (
      <>
        {is
          ? children.filter((child) => child.type !== Not)
          : children.find((child) => child.type === Not)}
      </>
    );
  }

  return <>{is ? children : null}</>;
}

export function Not({ children }: PropsWithChildren): ReactNode {
  return <Fragment key="not">{children}</Fragment>;
}
