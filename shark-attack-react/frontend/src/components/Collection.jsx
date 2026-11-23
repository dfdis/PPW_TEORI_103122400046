
import { useState } from 'react'

function Collection({ sharks, onAdd, onEdit, onDelete }) {
  const [name, setName] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editName, setEditName] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (name.trim() === '') return

    onAdd(name.trim())
    setName('')
  }

  function startEdit(shark) {
    setEditingId(shark.id)
    setEditName(shark.name)
  }

  function handleEditSubmit(event, id) {
    event.preventDefault()

    if (!editName.trim()) return

    onEdit(id, editName.trim())
    setEditingId(null)
    setEditName('')
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
              {editingId === shark.id ? (
                <form onSubmit={(event) => handleEditSubmit(event, shark.id)}>
                  <input
                    type="text"
                    value={editName}
                    onChange={(event) => setEditName(event.target.value)}
                  />

                  <button type="submit">Simpan</button>

                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                  >
                    Batal
                  </button>
                </form>
              ) : (
                <>
                  <h3>{shark.name}</h3>
                  <p>Added to your collection</p>

                  <div className="collection-actions">
                    <button
                      type="button"
                      onClick={() => startEdit(shark)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete(shark.id)}
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Collection