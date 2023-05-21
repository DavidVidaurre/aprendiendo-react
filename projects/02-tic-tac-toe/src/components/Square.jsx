export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = isSelected ? 'square is-selected' : 'square'

  const handleCkick = () => {
    updateBoard(index)
  }

  return (
    <div
      className={className}
      onClick={handleCkick}
    >
      {children}
    </div>
  )
}
