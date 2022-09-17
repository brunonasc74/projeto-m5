import Button from "../Button/style";
import { StyledCard } from "./style";


const Card = ({ image, name, price, desc }) => {
  return (
    <StyledCard>
      <div className="card">
        <div className="card-image">
          <img src={image} alt={name} />
        </div>
        <div className="card-content">
          <div className="card-np">
            <p className="card-name">{name}</p>
            <p className="card-price">{price}</p>
          </div>
          <p className="card-desc">{desc}</p>
          <Button>Adicionar</Button>
        </div>
      </div>
    </StyledCard>
  );
};

Card.defaultProps = {
  image: "https://via.placeholder.com/150",
  name: "Nome do produto",
  price: "R$ 00,00",
  desc: "Descrição do produto uihsdugfhusid lorem ipsum",
};

export default Card;