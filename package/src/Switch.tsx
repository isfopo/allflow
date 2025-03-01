import type { ReactElement, PropsWithChildren } from "react";

/**
 * Props for the Case component, which represents a single case in the Switch component's logic.
 * This interface extends PropsWithChildren, allowing the Case component to accept child elements.
 * The `value` property is the value that will be matched against the corresponding test value
 * in the Switch component, although it is not utilized directly within the Case component itself.
 */
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

/**
 * Props for the Switch component, which provides a React-friendly implementation of switch/case logic.
 *
 * The `test` property is the value that the component will check against the `value` properties of its child
 * Case components. If a match is found, the corresponding Case's children will be rendered.
 * If no matches are found, the `fallback` element will be rendered instead.
 *
 * The `children` property must be an array of React elements of type CaseProps<T>, each representing a
 * distinct case in the switch/case logic.
 */
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
