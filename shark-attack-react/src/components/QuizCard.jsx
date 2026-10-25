function QuizCard({ question, category }) {
  return (
    <article className="quiz-card">
      <p className="quiz-category">{category}</p>
      <h3>{question}</h3>

      <div className="quiz-options">
        <button type="button">MYTH</button>
        <button type="button">FACT</button>
      </div>
    </article>
  )
}

export default QuizCard