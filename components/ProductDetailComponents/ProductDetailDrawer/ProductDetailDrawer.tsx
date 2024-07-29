import { useEffect, useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { fetchProductVariant } from '../../../services/api/product-detail-page-api/product-variants-data-api';
import ProductDetailInfo from './ProductDetailInfo';
import { useSelector } from 'react-redux';
import { get_access_token } from '../../../store/slices/auth/token-login-slice';
import { fetchProductDetailData } from '../../../services/api/product-detail-page-api/product-detail-data-api';
import ProductCode from '../ProductDetails/ProductCode';
import ProductVariants from '../ProductDetails/ProductVariants';
import ProductImage from '../ProductDetails/ProductImage';
import roductDetailStyles from '../../../styles/components/productDetail.module.scss'

const ProductDetailDrawer = ({ show, handleClose, data }: any) => {
  const TokenFromStore: any = useSelector(get_access_token);
  const [productDetail, setProductDetail] = useState<any>();
  const [variantsData, setVariantsData] = useState<any>([]);
  const [attributesData, setAttributesData] = useState([]);
  const item_code = data?.name?.split('-')[0];
  const getVariantsData = async () => {
    if (item_code !== undefined) {
      const variantDataAPI = await fetchProductVariant(item_code, TokenFromStore?.token);
      if (variantDataAPI?.data?.message?.msg === 'success') {
        if (variantDataAPI?.data?.message?.data?.variants?.length > 0) {
          setVariantsData(variantDataAPI?.data?.message?.data?.variants);
        } else {
          setVariantsData([]);
        }
        if (variantDataAPI?.data?.message?.data?.attributes?.length > 0) {
          setAttributesData(variantDataAPI?.data?.message?.data?.attributes);
        } else {
          setAttributesData([]);
        }
      }
    }
  };
  const getProductDetailData = async (item_name: any) => {
    if (item_name !== null && item_name !== undefined) {
      const productDetailData = await fetchProductDetailData(item_name, 'INR', TokenFromStore?.token);
      if (productDetailData?.data?.message?.msg === 'Success') {
        setProductDetail(productDetailData?.data?.message?.data[0]);
      }
    }
  };
  useEffect(() => {
    getVariantsData();
    getProductDetailData(data?.name);
  }, [item_code]);
  return (
    <Offcanvas show={show} placement="end" onHide={handleClose}>
      <Offcanvas.Header closeButton />
      <Offcanvas.Body>
        <ProductCode data={productDetail} />
        <ProductVariants
          productDetail={productDetail}
          variantsData={variantsData}
          attributesData={attributesData}
          getProductDetailData={getProductDetailData}
        />
        <ProductDetailInfo data={productDetail} />
        <div className="mt-3">
          <ProductImage image={productDetail?.image} />
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ProductDetailDrawer;