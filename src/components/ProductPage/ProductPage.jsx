import './productpage.css';

export const ProductPage = ({zbozi, hlaska, barva, cena}) => (
    <div className="detail">
        <h1>Detail produktu</h1>
        <h2>{zbozi}</h2>
        <p className="hlaska">{hlaska}</p>
        <p>Barva: {barva}</p>
        <h3>Cena: {cena},- Kč</h3>
    </div>
    )