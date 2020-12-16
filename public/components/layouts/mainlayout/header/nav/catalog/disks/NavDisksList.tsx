import React from 'react'
import Link from "next/link";


const NavDisksList = () => {
  return(
    <span>
      <ul>
        <li>
          <Link href={"/catalog/disks"}><a><h3>Диски</h3></a></Link>
        </li>
        <li>
          <Link href={"/catalog/disks/alloy-disks"}><a>Диски литые</a></Link>
        </li>
        <li>
          <Link href={"/catalog/disks/stamped-disks"}><a>Диски штампованные</a></Link>
        </li>
      </ul>
    </span>
  )
}

export default NavDisksList;