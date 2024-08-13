import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import stylesListing from '../../styles/components/_listingTable.module.scss';

const ListingTable = ({ headers, tableData }: any) => {
  const router = useRouter();
  const pathParts = router.asPath.split('/');
  const heading = pathParts[pathParts.length - 1];

  return (
    <>
      <div className="container">
        <h4 className="text-center my-4 fw-bold">
          {heading
            ?.split('-')
            ?.join(' ')
            ?.replace(/\b\w/g, (char) => char.toUpperCase())}
        </h4>
        <table className="table table-sm table-bordered table-hover">
          <thead>
            <tr className="text-center">{headers?.length > 0 && headers.map((header: any) => <th scope="col">{header}</th>)}</tr>
          </thead>
          <tbody>
            {tableData?.length > 0 &&
              tableData.map((data: any, index: any) => {
                return (
                  <>
                    <tr className={`text-center ${stylesListing.table_row}`} key={index}>
                      <td>
                        <Link href={`/order-detail/${data.name}`} className={stylesListing.redirect_name}>
                          {data.name}
                        </Link>
                      </td>
                      <td>{data.transaction_date}</td>
                      <td>{data.status}</td>
                      <td>{data.total_weight}</td>
                      <td>{data.delivery_date}</td>
                      <td>{data.dispatch_weight}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListingTable;