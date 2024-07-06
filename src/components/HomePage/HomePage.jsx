import { Product } from "../Product/Product";


    const response = await fetch('http://localhost:4000/api/shop');
    const json = await response.json();
    const items = json.data;

    
export const HomePage = () => (
    <div className="list">
        <h1>Seznam produktů</h1>
        {items.map((item) => <Product key={item.id} zbozi={item.zbozi} cena={item.cena} id={item.id} /> )}   
    </div>
)
