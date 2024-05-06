import React from "react";
import { DetailedHTMLProps, Fragment, HTMLAttributes } from "react";

export interface ElementContext {
  isFirst: boolean;
  isLast: boolean;
}

export interface MapProps<T>
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  /** array of items to be transformed */
  items: T[];
  /** transformation function for each item */
  element: (item: T, context?: ElementContext) => JSX.Element;
  /** optional filter function for items */
  filter?: (item: T) => boolean;
  /** optional separator between items */
  separator?: JSX.Element | string;
}

/**
 * Maps over an array of items, transforming them in to JSX. Use instead of .map()
 */
export const ComponentMap = <T,>({
  items,
  element,
  separator,
  filter = () => true,
  ...props
}: MapProps<T>): JSX.Element => {
  return (
    <div {...props}>
      {items.filter(filter).map((item, key) => {
        const isFirst = key === 0;
        const isLast = key === items.length - 1;

        return (
          <Fragment key={key}>
            {!!separator && !isFirst && <>{separator}</>}
            <>{element(item, { isFirst, isLast })}</>
          </Fragment>
        );
      })}
    </div>
  );
};
