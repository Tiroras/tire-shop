import React from 'react';
import TiresFormContainer from "../catalog/tires/form/TiresForm.container";
import DisksFormContainer from "../catalog/disks/form/DiskForm.container";


const MainPage = () => {
  return(
    <div>
      Подберите для себя шины и диски
      <div>
        <TiresFormContainer />
      </div>
      <div>
        <DisksFormContainer />
      </div>
    </div>
  )
}

export default MainPage;