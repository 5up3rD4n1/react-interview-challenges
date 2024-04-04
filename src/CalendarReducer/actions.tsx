export function setLower(num: number | null) {
  return {type: 'SET_LOWER', payload: num};
}

export function setUpper(num: number | null) {
  return {type: 'SET_UPPER', payload: num};
}
