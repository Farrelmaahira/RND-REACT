const Card = (props) => {
  return (
    <div className="max-w-md border rounded-md m-3 p-2">
        <img src={props.data.image} alt="" className="w-1/4 m-auto" />
        <p>
            {props.data.title}
        </p>
    </div>
  );
};

export default Card;
