import React from 'react';
import Link from "next/link";


const PopularDisks = () => {
  return(
    <div>
      <h3>Популярные модели дисков</h3>
      <div>
        <Link href={"/catalog/disks"}><a>Все диски</a></Link>
      </div>
      <div>

      </div>
    </div>
  )
}

export default PopularDisks;