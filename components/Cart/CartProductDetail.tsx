import { useState } from 'react';
import Image from 'next/image';
import { CONSTANTS } from '../../services/config/app-config';
import styles from '../../styles/components/cartProductDetail.module.scss';

const CartProductDetail = ({ data }: any) => {
  console.log(data, 'cart');
  const [editWastage, setEsditWastage] = useState(false);
  const [wastage, setWastage] = useState('');
  const imageLoader = ({ src, width, quality }: any) => {
    return `${CONSTANTS.API_BASE_URL}${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className={`row ${styles?.cart_product_container}`}>
      <div className="col-lg-4 p-3 d-flex justify-content-center">
        <Image loader={imageLoader} src={data?.image !== null && data?.image} width={100} height={100} sizes="100vw" alt="Item Image" />
      </div>
      <div className="col-lg-5 d-flex justify-content-center">
        <p>
          Product Code : <br />
          {data?.item_code}
          <br />
          BOM Factory Code : {data?.bom_factory_code}
          <br />
          Weight :{data?.weight_per_unit} gm
        </p>
      </div>
      <div className="col-lg-3 d-flex justify-content-center">
        <div className="text-center">
          Wastage :{editWastage && <textarea className="w-75" value={wastage} />}
          {editWastage ? (
            <button className={`btn btn-link ${styles.edit_btn}`}>Submit</button>
          ) : (
            <button className={`btn btn-link ${styles.edit_btn}`} onClick={() => setEsditWastage(true)}>
              Edit Message
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartProductDetail;