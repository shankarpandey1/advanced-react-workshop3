import "./style.css";

function BusinessCardDetail(props) {
  const { name, position, email, tel, photo, onBack } = props;
  return (
    <div className="card-detail">
      <button onClick={onBack}>Back</button>
      <img src={photo} alt="Avatar" />
      <div className="container">
        <h4>
          <b>{name}</b>
        </h4>
        <p>{position}</p>
        <p>{email}</p>
        <p>{tel}</p>
      </div>
    </div>
  );
}

export default BusinessCardDetail;
