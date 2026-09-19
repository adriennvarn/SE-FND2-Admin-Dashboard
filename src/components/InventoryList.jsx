export default function InventoryList({ inventory }) {
    return (
        <div className="uk-flex uk-flex-wrap">
            <div className="uk-grid uk-child-width-1-1 uk-child-width-1-3@l" uk-height-match="target: img">
                {inventory.map((item) => (
                    <div key={item.id} className="uk-card uk-card-default uk-padding-small uk-padding-remove-left">
                        <div className="uk-card-media-top uk-cover-container">
                            <img className="uk-border-rounded" src={item.image} alt="Coffee Beans" />
                        </div>
                        <div className="uk-card-body">
                            <h5 className="uk-card-title">{item.name}</h5>
                            <p>{item.description}</p>
                            <p>Origin: {item.origin}</p>
                            <p>${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}