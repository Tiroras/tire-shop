import React, {useEffect} from 'react'
import CatalogSelect from "../../general/form/CatalogSelect";


const DisksForm = (props: any) => {
  useEffect(() => {
    console.log(props)
  })
  return(
    <form>
      {props.data.map((prop) => (
        <CatalogSelect data={prop} />
      ))}
      {/*<CatalogSelect data={props.diameter} />*/}
      {/*<CatalogSelect data={props.seasonality} />*/}
      {/*<CatalogSelect data={props.width} />*/}
      {/*<CatalogSelect data={props.brand} />*/}
      <button type={"submit"}>
        Найти
      </button>
    </form>
  )
}

export default DisksForm;