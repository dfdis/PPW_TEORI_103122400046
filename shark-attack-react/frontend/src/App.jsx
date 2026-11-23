
import { useEffect, useState } from 'react'
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

  // READ: mengambil data dari backend
  useEffect(() => {
    fetch('http://localhost:3000/sharks')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Gagal mengambil data hiu')
        }
        return response.json()
      })
      .then((data) => setMySharks(data))
      .catch((error) => console.error('Error:', error))
  }, [])

  // CREATE: menambahkan hiu
  async function addShark(name) {
    const newShark = {
      name,
      image: 'https://example.com/shark.jpg',
      size: 500,
      habitat: 'Ocean',
      food: 'Fish',
      uniqueFact: 'A fascinating ocean predator',
      isFavorite: false,
    }

    try {
      const response = await fetch('http://localhost:3000/sharks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newShark),
      })

      if (!response.ok) {
        throw new Error('Gagal menambahkan hiu')
      }

      const savedShark = await response.json()
      setMySharks((current) => [...current, savedShark])
    } catch (error) {
      console.error('Error:', error)
      alert('Gagal menambahkan hiu!')
    }
  }

  // UPDATE: mengubah nama hiu
  async function editShark(id, newName) {
    try {
      const response = await fetch(`http://localhost:3000/sharks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newName }),
      })

      if (!response.ok) {
        throw new Error('Gagal mengubah data hiu')
      }

      const updatedShark = await response.json()

      setMySharks((current) =>
        current.map((shark) =>
          shark.id === id ? updatedShark : shark
        )
      )
    } catch (error) {
      console.error('Error:', error)
      alert('Gagal mengubah data hiu!')
    }
  }

  // DELETE: menghapus hiu
  async function deleteShark(id) {
    const confirmed = window.confirm(
      'Yakin ingin menghapus hiu ini?'
    )

    if (!confirmed) return

    try {
      const response = await fetch(`http://localhost:3000/sharks/${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Gagal menghapus data hiu')
      }

      setMySharks((current) =>
        current.filter((shark) => shark.id !== id)
      )
    } catch (error) {
      console.error('Error:', error)
      alert('Gagal menghapus hiu!')
    }
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
          onEdit={editShark}
          onDelete={deleteShark}
        />
      </main>

      <Footer />
    </div>
  )
}

export default App