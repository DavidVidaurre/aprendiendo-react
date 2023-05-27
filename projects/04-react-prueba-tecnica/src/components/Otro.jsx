import { useCatImageUrl } from '../hooks/useCatImage'

export function Otro () {
  const { imageUrl } = useCatImageUrl({ fact: 'Random fact' })

  return (
    <>
      {imageUrl && <img src={imageUrl} />}
    </>
  )
}
