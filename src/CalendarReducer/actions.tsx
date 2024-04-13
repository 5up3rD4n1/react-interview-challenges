export function setDate(date: string | null) {
  return {type: 'SET_DATE', payload: date};
}

export function setSelected(id: string | null) {
  return {type: 'ONCLICK_SELECTED', payload: id};
}

export function setVisible(isVisible: boolean) {
  return {type: 'SET_VISIBLE', payload: isVisible};
}
