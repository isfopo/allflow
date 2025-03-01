import {
  type ReactNode,
  type PropsWithChildren,
  type ReactElement,
  Fragment,
} from "react";

/**
 * Interface for the props of the If component.
 *
 * @template T - The type of the condition to evaluate.
 * @template P - The type of props for the React element(s) to render.
 *
 * @property {T} is - The condition to evaluate. If true, renders the children.
 * @property {ReactElement<P> | ReactElement<P[]>} children - The element(s) to render if the condition is true.
 * @property {boolean} [override=false] - If true, the element will be rendered even if the condition is false.
 * @property {boolean} [useOverride=override] - Toggles using the override over the is condition.
 */
export interface IfProps<T, P> {
  /** The condition to evaluate */
  is: T;
  /** The element to render if the condition is true */
  children: ReactElement<P> | ReactElement<P>[];
  /** If true, the element will be rendered even if the condition is false */
  override?: boolean;
  /** Toggles using the override over the is condition */
  useOverride?: boolean;
}

/**
 * A React-friendly implementation of if/else logic.
 */
export function If<T, P>({
  is,
  override = false,
  useOverride = override,
  children,
}: IfProps<T, P>): ReactElement {
  const condition = useOverride ? override : is;

  if (Array.isArray(children)) {
    return (
      <>
        {condition
          ? children.filter((child) => child.type !== Not)
          : children.find((child) => child.type === Not)}
      </>
    );
  }

  return <>{condition ? children : null}</>;
}

export function Not({ children }: PropsWithChildren): ReactNode {
  return <Fragment key="not">{children}</Fragment>;
}
