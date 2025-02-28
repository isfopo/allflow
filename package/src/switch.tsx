import type { ReactElement, PropsWithChildren } from "react";

export interface CaseProps<T> extends PropsWithChildren {
  /** The value to match. Not used directly in this component. */
  value: T;
}

/**
 * A React-friendly implementation of switch/case logic. This component is tightly coupled with the Switch component, which should be a parent of this component.
 * If you want to render a default case, use the `Default` component.
 */
export function Case<T>({ children }: CaseProps<T>): ReactElement {
  return <>{children}</>;
}

export type DefaultProps = PropsWithChildren;

export interface SwitchProps<T> {
  /** The value to test */
  test: T;
  /** The element to render if `test` is not matched */
  fallback?: ReactElement;
  children: ReactElement<CaseProps<T>>[];
}

/**
 * A React-friendly implementation of switch/case logic. This component is tightly coupled with the Case component, which is to be used as a child that contains the elements needed to render.
 */
export const Switch = <T,>({
  test,
  children,
  fallback,
}: SwitchProps<T>): ReactElement | undefined =>
  children.find((child) => child.props.value === test) ?? fallback;
