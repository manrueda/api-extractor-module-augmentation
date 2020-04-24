/** @public */
export interface Extras {
  coreProp?: boolean;
}

/** @public */
export function foo(options: Extras) {
  console.log(options)
}