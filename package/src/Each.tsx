import type { ReactElement } from "react";
import { Fragment } from "react";
import { If } from "./If";

/**
 * Represents the context of an element within a collection.
 * This interface provides information about the position of an element
 * relative to others in an array. It can be used to apply custom rendering
 * logic based on the element's position, such as styling or additional
 * separators.
 *
 * @property {boolean} first - Indicates if the element is the first in the array.
 * @property {boolean} middle - Indicates if the element is in the middle of the array.
 * @property {boolean} last - Indicates if the element is the last in the array.
 */
export interface ElementContext {
  /** true if the element is the first in the array */
  first: boolean;
  /** true if the element is the middle in the array */
  middle: boolean;
  /** true if the element is the last in the array */
  last: boolean;
}

/**
 * Represents the properties that can be passed to the `Each` component.
 * This interface defines the structure of the props for mapping over an
 * array of items and transforming them into JSX elements.
 *
 * @template T - The type of items in the array.
 *
 * @property {T[]} of - An array of items to be transformed into JSX.
 * @property {(item: T, context?: ElementContext) => ReactElement} children -
 *   A function that defines how each item is transformed. It receives the item
 *   and an optional context that provides information about the item's position.
 * @property {(item: T) => boolean} [filter] - An optional function for filtering
 *   items in the array. It should return true for items that should be included
 *   in the transformation.
 * @property {ReactElement | string} [divider] - An optional React element or
 *   string that can be used as a divider between items in the transformed output.
 * @property {{ start?: number; end?: number }} [slice] - An optional object
 *   specifying the portion of the array to be transformed, allowing for slicing
 *   of the original array.
 */
export interface EachProps<T> {
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
}: EachProps<T>): ReactElement {
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
