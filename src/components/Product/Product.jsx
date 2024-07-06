export const Product = ({zbozi, id, cena}) => (
    <>
    <div className="list__item" key={id}>
        <h2>{zbozi}</h2>
        <p>{cena},- Kč </p>
    </div>
    <button><a href={`detail.html?id=${id}`}> Detail produktu</a></button>
    </>
)

//<p class="item__hlaska">{hlaska} </p>
//<p>Barva: {barva}</p>