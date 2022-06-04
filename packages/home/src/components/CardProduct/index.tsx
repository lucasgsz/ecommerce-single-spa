import { IProductDTO } from "../../interface/Product";
import * as S from "./styles";

interface IProps {
  product: IProductDTO;
}

export const CardProduct: React.FC<IProps> = ({ product }) => {
  const formatPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <S.Card>
      <S.ImageContent>
        <img src={product.image} />
      </S.ImageContent>
      <S.CardBody>
        <S.Title>{product.name}</S.Title>
        <S.Description>{product.description}</S.Description>
        <S.SpecsContent>
          <S.Price>{formatPrice.format(product.price)}</S.Price>
          <S.ActionContent>
            <S.ActionButton>-</S.ActionButton>
            <S.Quantity>1</S.Quantity>
            <S.ActionButton>+</S.ActionButton>
          </S.ActionContent>
        </S.SpecsContent>
      </S.CardBody>
    </S.Card>
  );
};
