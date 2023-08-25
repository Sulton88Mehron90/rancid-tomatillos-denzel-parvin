import './Card.css';

function Card({title, img, rating, id}) {
  return (
    <div id={id}>
      <img id={id} src={img} alt={`Poster of ${title}`} />
      <h3 id={id}>{title}</h3>
      <h3 id={id}>{rating}</h3>
    </div>
  )
}

export default Card;