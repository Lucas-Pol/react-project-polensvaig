const ProdCard = ({ imageUrl, title, description }) => {
    return (
        <div className="card" style={{ width: '20rem', minHeight: '600px' }}>
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body flex-grow-1">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-success">
            Sumar producto al Carrito
          </a>
        </div>
      </div>
    );
  };

  export default ProdCard;