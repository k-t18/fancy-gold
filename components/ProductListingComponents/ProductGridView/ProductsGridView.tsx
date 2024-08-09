import ReactPaginate from 'react-paginate';
import ProductCard from '../../../cards/ProductCard';
import paginationStyle from '../../../styles/components/pagination.module.scss';

const ProductsGridView = ({ productListingData, handlePageClick, productListTotalCount, pageOffset, handleShow, wishlistData }: any) => {
  const isNextButtonDisabled: any = productListTotalCount > productListingData || productListTotalCount === productListingData;
  return (
    <>
      {productListingData.map((item: any, index: any) => (
        <div key={index} className="col-sm-6 col-lg-3 col-xl-3 col-xxl-3 text-center mb-4">
          <ProductCard data={item} handleShow={handleShow} wishlistData={wishlistData} />
        </div>
      ))}
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        pageCount={productListTotalCount / 12}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={`${paginationStyle.paginationBttns}`}
        previousLinkClassName={`${paginationStyle.previousBttn}`}
        disabledClassName={'paginationDisabled'}
        nextLinkClassName={isNextButtonDisabled ? 'paginationDisabled' : `${paginationStyle.nextBttn}`}
        activeClassName={`${paginationStyle.paginationActive}`}
        forcePage={pageOffset}
      />
    </>
  );
};

export default ProductsGridView;
