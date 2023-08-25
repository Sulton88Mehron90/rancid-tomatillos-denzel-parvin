function Card({title, img, rating, id}) {
  return (
    <div id={id}>
      <img id={id} src={img} />
      <h3 id={id}>{title}</h3>
      <h3 id={id}>{rating}</h3>
    </div>
  )
}

export default Card;