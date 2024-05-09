import type { ReactElement, PropsWithChildren } from "react";

export interface SwitchProps<T> {
  /** The value to test */
  test: T;
  children: ReactElement<CaseProps<T>>[];
}

/**
 * A React-friendly implementation of switch/case logic. This component is tightly coupled with the Case component, which is to be used as a child that contains the elements needed to render.
 * An example of this in use can be found in `ViewsTab.tsx`.
 */
export const Switch = <T,>({
  test,
  children,
}: SwitchProps<T>): ReactElement<CaseProps<T>> | null => {
  const defaultResult = children.find((child) => child.props.default) || null;
  const result = children.find((child) => child.props.value === test);

  return result || defaultResult;
};

export interface CaseProps<T> extends PropsWithChildren {
  /** The value to match. Not used directly in this component. */
  value: T;
  /** Indicates if this case should be the default. Not used directly in this component. */
  default?: boolean;
}

/**
 * A React-friendly implementation of switch/case logic. This component is tightly coupled with the Switch component, which should be a parent of this component.
 * An example of this in use can be found in `ViewsTab.tsx`.
 */
export function Case<T>({ children }: CaseProps<T>): ReactElement {
  return <>{children}</>;
}
