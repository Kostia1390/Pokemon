import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logoSvg from '../assets/img/pockebol-logo.svg';
import picachuu from '../assets/img/picachuu.svg';
import Search from './Search';

function Header() {
  const { items, totalPrice } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={logoSvg} alt="Pokemon logo" />
            <div>
              <h1>Pokedex</h1>
              <p>Перший Pokedex українською</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} ₾</span>
            <div className="button__delimiter"></div>
            <img
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              src={picachuu}
              alt="picachuu"
            />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
