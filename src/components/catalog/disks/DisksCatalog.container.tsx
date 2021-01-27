import {connect} from "react-redux";
import React from "react";
import Disks from "./DisksCatalog";


interface IProps {

}

const DisksContainer = (props: IProps) => {
  return(
    <Disks />
  )
}

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(DisksContainer)