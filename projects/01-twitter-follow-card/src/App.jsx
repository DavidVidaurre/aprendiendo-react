import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  return (
    <section className='App'>
      <TwitterFollowCard
        userName='midudev'
        name='Miguel Ángel Durán'
        initialIsFollowing={false}
      />
      <TwitterFollowCard
        userName='pheralb'
        name='Pablo Hernadez'
        initialIsFollowing
      />
      <TwitterFollowCard
        userName='elonmusk'
        name='Elon Musk'
        initialIsFollowing
      />
    </section>
  )
}
