import React from 'react';
import TiresFormContainer from "../catalog/tires/form/TiresForm.container";
import DisksFormContainer from "../catalog/disks/form/DiskForm.container";
import SearchFeedBack from "./search-feedback/SearchFeedBack";
import PopularTires from "./popular-tires/PopularTires";
import PopularDisks from "./popular-disks/PopularDisks";
import Link from "next/link";


const MainPage = () => {
  return(
    <div>

      <div>
        Подберите для себя шины и диски

        <div>
          <TiresFormContainer />
        </div>
        <div>
          <DisksFormContainer />
        </div>

      </div>

      <div>
        <SearchFeedBack />
      </div>

      <div>
        <PopularTires />
      </div>

      <div>
        <PopularDisks />
      </div>

      <div>
        <div>
          Адреса наших магазинов
        </div>
        <div>
          <Link href={"/contacts"}><a>Подробнее</a></Link>
        </div>
      </div>

    </div>
  )
}

export default MainPage;