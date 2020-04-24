export interface Extras {
  coreProp?: boolean;
}

export function foo(options: Extras) {
  console.log(options)
}