import React from 'react';
import Link from "next/link";


const CatNavList = (props: any) => {
  return(
    <span>
      <ul>
        <li>
          <Link href={props.data.sectionLink}>
            <a><h3>{props.data.sectionName}</h3></a>
          </Link>
        </li>
        {props.data.list.map((prop) => (
          <li key={prop.productType}>
            <Link href={prop.productTypeLink}>
              <a>{prop.productType}</a>
            </Link>
          </li>
        ))}
      </ul>
    </span>
  );
}


export default CatNavList;