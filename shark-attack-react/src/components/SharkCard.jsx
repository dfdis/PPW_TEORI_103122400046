function SharkCard({ name, scientificName, description, image }) {
  return (
    <article className="shark-card">
      <img src={image} alt={name} />

      <div className="shark-card-info">
        <h3>{name}</h3>
        <p className="scientific-name">{scientificName}</p>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default SharkCard