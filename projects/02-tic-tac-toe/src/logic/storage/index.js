export const saveGameStorage = ({ board, turn }) => {
  window.localStorage.setItem('board', board)
  window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
