import type { ReactElement, PropsWithChildren } from "react";

export interface SwitchProps<T> {
  /** The value to test */
  test: T;
  children: ReactElement<OptionProps<T>>[];
}

/**
 * A React-friendly implementation of switch/case logic. This component is tightly coupled with the Case component, which is to be used as a child that contains the elements needed to render.
 */
export const Switch = <T,>({
  test,
  children,
}: SwitchProps<T>): ReactElement<CaseProps<T> | DefaultProps> | null => {
  const defaultResult = children.find((child) => child.props.default) || null;
  const result = children.find((child) => child.props.value === test);

  return result || defaultResult;
};

export interface OptionProps<T> extends PropsWithChildren {
  /** The value to match. Not used directly in this component. */
  value?: T;
  /** The default value to match. Not used directly in this component. */
  default?: boolean;
}

export interface CaseProps<T> extends PropsWithChildren {
  /** The value to match. Not used directly in this component. */
  value: T;
}

export type DefaultProps = PropsWithChildren;

/**
 * A React-friendly implementation of switch/case logic. This component is tightly coupled with the Switch component, which should be a parent of this component.
 * If you want to render a default case, use the `Default` component.
 */
function Option<T>({ children }: OptionProps<T>): ReactElement {
  return <>{children}</>;
}

/**
 * A React-friendly implementation of switch/case logic. This component is tightly coupled with the Switch component, which should be a parent of this component.
 * If you want to render a default case, use the `Default` component.
 */
export function Case<T>({ children, value }: CaseProps<T>): ReactElement {
  return <Option value={value}>{children}</Option>;
}

/**
 * A React-friendly implementation of switch/case logic. This component is tightly coupled with the Switch component, which should be a parent of this component.
 * This is the default case.
 */
export function Default({ children }: PropsWithChildren): ReactElement {
  return <Option default>{children}</Option>;
}
