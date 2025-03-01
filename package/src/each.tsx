import type { ReactElement } from "react";
import { Fragment } from "react";
import { If } from "./if";

export interface ElementContext {
  /** true if the element is the first in the array */
  first: boolean;
  /** true if the element is the middle in the array */
  middle: boolean;
  /** true if the element is the last in the array */
  last: boolean;
}

export interface ForEachProps<T> {
  /** array of items to be transformed */
  of: T[];
  /** transformation function for each item */
  children: (item: T, context?: ElementContext) => ReactElement;
  /** optional filter function for items */
  filter?: (item: T) => boolean;
  /** optional divider between items */
  divider?: ReactElement | string;
  /** optional slice of items to be transformed */
  slice?: { start?: number; end?: number };
}

/**
 * Maps over an array of items, transforming them in to JSX. Use instead of .map()
 */
export function Each<T>({
  of,
  children,
  divider,
  filter = () => true,
  slice = { start: 0, end: of.length },
}: ForEachProps<T>): ReactElement {
  return (
    <>
      {of
        .filter(filter)
        .slice(slice.start, slice.end)
        .map((item, key) => {
          const first = key === 0;
          const last = key === of.length - 1;
          const middle = !first && !last;

          return (
            <Fragment key={key}>
              <If is={Boolean(divider) && !first}>
                <>{divider}</>
              </If>
              <>{children(item, { first, middle, last })}</>
            </Fragment>
          );
        })}
    </>
  );
}
