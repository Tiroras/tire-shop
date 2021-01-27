import React from 'react';
import Link from "next/link";


const PopularTires = () => {
  return(
    <div>
      <h3>Популярные модели шин</h3>
      <div>
        <Link href={"/catalog/tires"}><a>Все шины</a></Link>
      </div>
      <div>
        <span>
          Зимние шины
        </span>
        <span>
          Летние шины
        </span>
        <span>
          Грузовые шины
        </span>
      </div>
    </div>
  )
}

export default PopularTires;