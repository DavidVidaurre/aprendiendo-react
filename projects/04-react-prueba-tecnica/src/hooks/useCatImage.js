import { useState, useEffect } from 'react'

const CAT_PEFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImageUrl ({ fact }) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ')[0]

    fetch(`https://cataas.com/cat/says/${firstWord}`)
      .then(res => res.json)
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return { imageUrl: `${CAT_PEFIX_IMAGE_URL}${imageUrl}` }
}
