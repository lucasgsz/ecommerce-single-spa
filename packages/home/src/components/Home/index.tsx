import * as S from "./styles";
import { products } from "../../mocks/products";
import { CardProduct } from "../CardProduct";

export const Home: React.FC = () => {
  return (
    <S.Home>
      <S.Title>
        <h3>Products</h3>
      </S.Title>
      <S.ProductsContent>
        {products.length &&
          products.map((product) => {
            return <CardProduct product={product} key={product.id} />;
          })}
      </S.ProductsContent>
    </S.Home>
  );
};
