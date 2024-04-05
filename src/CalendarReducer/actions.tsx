export function setDate(date: string | null) {
  return {type: 'SET_DATE', payload: date};
}
