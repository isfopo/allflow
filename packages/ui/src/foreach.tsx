import type { ReactElement } from "react";
import { Fragment } from "react";
import { If } from "./if";

export interface ElementContext {
  first: boolean;
  middle: boolean;
  last: boolean;
}

export interface ForEachProps<T> {
  /** array of items to be transformed */
  of: T[];
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
  of,
  element,
  separator,
  filter = () => true,
}: ForEachProps<T>): ReactElement {
  return (
    <>
      {of.filter(filter).map((item, key) => {
        const first = key === 0;
        const last = key === of.length - 1;
        const middle = !first && !last;

        return (
          <Fragment key={key}>
            <If is={Boolean(separator) && !first}>
              <>{separator}</>
            </If>
            <>{element(item, { first, middle, last })}</>
          </Fragment>
        );
      })}
    </>
  );
}
