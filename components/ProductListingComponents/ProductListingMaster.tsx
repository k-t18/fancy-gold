import WebFilters from './FilterView/WebFilters';
import ProductGridViewMaster from './ProductGridView/ProductGridViewMaster';

const ProductListingMaster = () => {
  const handleDisplayOfProductsList = () => {
    return <ProductGridViewMaster />;
  };

  return (
    <div className="mt-5">
      <section className="listing-page ">
        <div className="container">
          <div className="row mt-2 product-listing-row">
            <span className="col-lg-2 col-md-4 handle_display_web_filter">
              <WebFilters />
            </span>
            <div className="col-lg-9 col-md-8 ms-5">{handleDisplayOfProductsList()}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductListingMaster;
