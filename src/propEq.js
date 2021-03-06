import { curry } from './curry'

function propEqFn(key, val, obj){
  if (obj == null) return false

  return obj[ key ] === val
}

export const propEq = curry(propEqFn)
