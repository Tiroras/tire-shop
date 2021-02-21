import React from "react";
import classes from "./SeasonStorage.module.css";


const SeasonStorage = () => {
  return(
    <div className={classes.layout}>
      <div>
        <h2>Сезонное хранение</h2>
      </div>
      <div>
        Вы можете воспользоваться услугами сезонного хранения шин в нашем салоне.
        <br />
        <br />
        За подробностями обратитесь в салон
      </div>
    </div>
  )
}

export default SeasonStorage;