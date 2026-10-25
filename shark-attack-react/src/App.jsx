import { useState } from 'react'
import Navbar from './components/Navbar'
import SharkCard from './components/SharkCard'
import QuizCard from './components/QuizCard'
import Collection from './components/Collection'
import Footer from './components/Footer'
import './App.css'

const sharks = [
  {
    id: 1,
    name: 'Great White Shark',
    scientificName: 'Carcharodon carcharias',
    description:
      'A powerful ocean predator known for its size and incredible senses.',
    image:
      'https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=600',
  },
  {
    id: 2,
    name: 'Whale Shark',
    scientificName: 'Rhincodon typus',
    description:
      'The largest fish in the ocean, known for its gentle nature.',
    image:
      'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600',
  },
  {
    id: 3,
    name: 'Hammerhead Shark',
    scientificName: 'Sphyrna mokarran',
    description:
      'Recognizable by its unique hammer-shaped head.',
    image:
      'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=600',
  },
]

function App() {
  const [mySharks, setMySharks] = useState([])

  function addShark(name) {
    const newShark = {
      id: Date.now(),
      name: name,
    }

    setMySharks((currentSharks) => [
      ...currentSharks,
      newShark,
    ])
  }

  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <section id="home" className="page-content">
          <p>WELCOME TO THE OCEAN</p>
          <h1>SHARK ATTACK!</h1>
          <p>
            Discover the ocean's most fascinating predators.
          </p>
        </section>

        <section id="explore" className="page-content">
          <p>MEET THE PREDATORS</p>
          <h2>Explore Shark Species</h2>

          <div className="shark-grid">
            {sharks.map((shark) => (
              <SharkCard
                key={shark.id}
                name={shark.name}
                scientificName={shark.scientificName}
                description={shark.description}
                image={shark.image}
              />
            ))}
          </div>
        </section>

        <section id="myth" className="page-content">
          <p>TEST YOUR KNOWLEDGE</p>
          <h2>Myth or Fact?</h2>

          <QuizCard
            category="SHARK MYTHS"
            question="Sharks can detect tiny amounts of blood in the water."
          />
        </section>

        <Collection
          sharks={mySharks}
          onAdd={addShark}
        />
      </main>

      <Footer />
    </div>
  )
}

export default App