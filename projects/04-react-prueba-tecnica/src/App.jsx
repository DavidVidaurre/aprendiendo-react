import './App.css'
import { Otro } from './components/Otro'
import { useCatFact } from './hooks/useCatFact'
import { useCatImageUrl } from './hooks/useCatImage'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImageUrl({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} />}
      <Otro />
    </main>
  )
}
