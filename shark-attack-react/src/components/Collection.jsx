import { useState } from 'react'

function Collection({ sharks, onAdd }) {
  const [name, setName] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (name.trim() === '') return

    onAdd(name.trim())
    setName('')
  }

  return (
    <section id="collection" className="page-content">
      <p>YOUR PERSONAL ARCHIVE</p>
      <h2>My Shark Collection</h2>

      <form className="collection-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a shark name..."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">Tambah</button>
      </form>

      {sharks.length === 0 ? (
        <p>Belum ada data hiu. Tambahkan hiu pertama kamu!</p>
      ) : (
        <div className="collection-list">
          {sharks.map((shark) => (
            <article className="collection-item" key={shark.id}>
              <h3>{shark.name}</h3>
              <p>Added to your collection</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Collection