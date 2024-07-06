import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { ProductPage } from '../components/ProductPage/ProductPage';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const response = await fetch(`http://localhost:4000/api/shop/${id}`);
const json = await response.json();
const product = json.data;
console.log(product)

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <ProductPage key={product.id} zbozi={product.zbozi} hlaska={product.hlaska} barva={product.barva} cena={product.cena} />
  </div>
);
