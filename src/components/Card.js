function Card(props) {
  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">{props.children}</div>
  );
}

export default Card;
