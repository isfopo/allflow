import type { ReactElement } from "react";
import { Fragment } from "react";
import { If } from "./if";

export interface ElementContext {
  isFirst: boolean;
  isLast: boolean;
}

export interface ForEachProps<T> {
  /** array of items to be transformed */
  items: T[];
  /** transformation function for each item */
  element: (item: T, context?: ElementContext) => ReactElement;
  /** optional filter function for items */
  filter?: (item: T) => boolean;
  /** optional separator between items */
  separator?: ReactElement | string;
}

/**
 * Maps over an array of items, transforming them in to JSX. Use instead of .map()
 */
export function ForEach<T>({
  items,
  element,
  separator,
  filter = () => true,
}: ForEachProps<T>): ReactElement {
  return (
    <>
      {items.filter(filter).map((item, key) => {
        const isFirst = key === 0;
        const isLast = key === items.length - 1;

        return (
          <Fragment key={key}>
            <If is={Boolean(separator) && !isFirst}>
              <>{separator}</>
            </If>
            <>{element(item, { isFirst, isLast })}</>
          </Fragment>
        );
      })}
    </>
  );
}
