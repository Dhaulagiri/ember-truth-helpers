import Ember from 'ember';

export function gte(params, hash) {
  let left = params[0];
  let right = params[1];
  if (hash.forceNumber) {
    if (typeof left !== 'number') { left = Number(left); }
    if (typeof right !== 'number') { right = Number(right); }
  }
  return left >= right;
}

export default Ember.Helper.helper(gte);
