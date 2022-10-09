import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import '../Navbar.css';
import Api from '../Api';

export default function ReactableTable() {
    let arr = ['Team','League', 'Season', 'Minutes', 'Ball Progression', 'Short Creation', 'Set-Plays', 'Ball Retention', 'Defending Impact', 'Defending Frequency', 'Off', 'Def', 'Total']
  return (
    <MDBTable responsive>
      <MDBTableHead light>
        <tr>
          {arr.map((item,index)=>(
            index === 0 ? <th scope='col' className='fw-bold fs-6 rt-widthTeam text-start'>{item}</th>:
            index > 0 ? <th scope='col' className='fw-bold fs-6 rt-widthTeamMinutes text-center'>{item}</th>:null
          ))}
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {Api.map((item)=>{
          let {team_short_name, league_code, league_start_year, minutes,attack_op_bp,attack_op_sc,attack_db_sc,attack_db_bp,def_qual,def_quant,x_gfar,x_gaar,x_gdar} = item
          return(<tr>
            <th scope='col' className='fw-bold fs-6 rt-widthTeam text-start'>{team_short_name}</th>
            <th scope='col' className='fw-bold fs-6 rt-widthTeamMinutes text-center'>{league_code}</th>
            <th scope='col' className='fw-bold fs-6 rt-widthTeamMinutes text-center'>{league_start_year}</th>
            <th scope='col' className='fw-bold fs-6 rt-widthTeamMinutes text-center'>{minutes}</th>
            <th scope='col' className='fw-bold fs-6 rt-widthTeamBorder text-center'>{attack_op_bp}</th>
            <th scope='col' className='fw-bold fs-6 rt-widthTeamMinutes text-center'>{attack_op_sc}</th>
            <th scope='col' className='fw-bold fs-6 rt-widthTeamMinutes text-center'>{attack_db_sc}</th>
            <th scope='col' className='fw-bold fs-6 rt-widthTeamMinutes text-center'>{attack_db_bp}</th>
            <th scope='col' className='fw-bold fs-6 rt-widthTeamBorder text-center'>{def_qual}</th>
            <th scope='col' className='fw-bold fs-6 rt-widthTeamMinutes text-center'>{def_quant}</th>
            <th scope='col' className='fw-bold fs-6 rt-widthTeamBorder text-center'>{x_gfar}</th>
            <th scope='col' className='fw-bold fs-6 rt-widthTeamMinutes text-center'>{x_gaar}</th>
            {x_gdar >= 0 ? <th scope='col' className='fw-bold fs-6 rt-widthTeamBorder text-center text-white bg-success'>{x_gdar}</th>:
            <th scope='col' className='fw-bold fs-6 rt-widthTeamBorder text-center text-white bg-danger'>{x_gdar}</th>}
          </tr>)
      } )}
      </MDBTableBody>
    </MDBTable>
  );
}