import React from 'react';
import { MDBTable, MDBTableBody } from 'mdb-react-ui-kit';

let arr = ['Team','Position','Minutes','Rating','Model Reliability','GBE Points','Non-Penality Goals (Position)','Non-Penality Goals (All Positions)']

export default function ProfileFieldPlotTable() {
  return (
    <MDBTable hover>
      <MDBTableBody>
        {arr.map((item)=>(
            <tr>
                <td className='text-start fw-bold fs-6'>{item}</td>
                <td className='text-end fw-bold fs-6'>-</td>
            </tr>
    ))}
      </MDBTableBody>
    </MDBTable>
  );
}