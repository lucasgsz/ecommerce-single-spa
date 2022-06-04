import * as S from "./styles";

export default function Nav() {
  return (
    <S.Navbar>
      <S.MenuContent>
        <h3>Ecommerce</h3>
        <S.Menu>
          <a href="/">Home</a>
          <a href="/checkout">Checkout</a>
        </S.Menu>
      </S.MenuContent>
      <S.CartContent>
        &#9658;
        <span>0</span>
      </S.CartContent>
    </S.Navbar>
  );
}
