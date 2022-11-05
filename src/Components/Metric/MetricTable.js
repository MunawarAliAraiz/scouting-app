import { DataGrid } from '@mui/x-data-grid';
import { useState} from 'react';
import { MDBBtn} from "mdb-react-ui-kit";

const columns = [
  { field: 'name', headerName: 'Player', width: 200},
  { field: 'team_short_name', headerName: 'Team', width: 180 },
  { field: 'age', headerName: 'Age', type: 'number',width: 70,align: 'center' },
  { field: 'position', headerName: 'Position', width: 100,align: 'center' },
  { field: 'minutes', headerName: 'Minutes', type: 'number', width: 100,align: 'center' },
  { field: 'league_start_year', headerName: 'Season', width: 100,align: 'center' },
  { field: 'league_code', headerName: 'League', width: 100,align: 'center' },
  { field: 'x_gfar', headerName: 'Off', type: 'number', width: 70,align: 'center' },
  { field: 'x_gaar', headerName: 'Def', type: 'number', width: 70,align: 'center' },
  { field: 'x_gdar', headerName: 'Total', type: 'number', width: 80,align: 'center' },
  { field: 'attack_op_bp', headerName: 'Ball Progression', width: 150,align: 'center' },
  { field: 'attack_op_sc',headerName: 'Shot Creation',width: 150,align: 'center'},
  { field: 'attack_db_bp',headerName: 'Ball Retention',type: 'number',width: 150,align: 'center'},
  { field: 'def_qual',headerName: 'Defending Impact',type: 'number',width: 150,align: 'center'},
  { field: 'def_quant',headerName: 'Defending Frequency',type: 'number',width: 150,align: 'center'},
  { field: 'breakout',headerName: 'Rating',type: 'number',width: 75}
];


const rows = [
    {
      id:1,
      name: "Lionel Andres Messi",
      team: "Paris Saint Germain",
      league: "League 1",
      catenaccio_name: "Lionel Messi",
      catenaccio_points: "45/15",
      age: 35,
      height: 170,
      weight: 72,
      birthdate: "06/24/1987",
      name_dob: "Lionel Andres Messi (24.06.1987)",
      field_name: "L.A Messi",
      team_short_name: "Paris Saint Germain",
      team_country: "Paris Saint Germain (France)",
      league_code: "FRA1",
      league_start_year: 2021,
      season: "2021-22",
      position: "RW",
      minutes: 737,
      goal: 1,
      x_gdar: 0.08,
      x_gfar: 0.09,
      x_gaar: -0.01,
      link: 90,
      forward: 51,
      dribble: 87,
      open: 69,
      set: 77,
      tackle: 55,
      def_qual: 61,
      def_quant: 2,
      attack_bp: 84,
      attack_sc: 94,
      carry: 38,
      shoot: 36,
      receive: 16,
      pass1: 87,
      pass2: 85,
      pass3: 46,
      aerial: 9,
      cross: 24,
      disrupt: 1,
      recover: 15,
      ball_ret: 63,
      attack: 89,
      attack_op_bp: 90,
      attack_op_sc: 93,
      attack_db_sc: 96,
      attack_db_bp: 92,
      hot: 1,
      cold: 0,
      breakout: 0,
      underused: 0,
      prospect: 0,
      x_gdar_perc: 87.61100452,
      open_foot: 42,
      open_head: 0,
      dead_foot: 0,
      dead_head: 0,
      x_g_receive_bp_perc: 61,
      x_g_shots_perc: 83,
      x_g_pass_bp_perc: 77,
      x_g_cross_sc_perc: 63,
      x_g_indv_takeon_bp_perc: 75,
      x_g_indv_carry_bp_perc: 79,
      claimpct: 0,
      claimpercross_perc: 0,
      passpct1: 0,
      passpct2: 0,
      passpct3: 0
    },
    {
      id:2,
      name: "Lionel Andres Messi",
      team: "Paris Saint Germain",
      league: "UEFA Champions League",
      catenaccio_name: "Lionel Messi",
      catenaccio_points: "45/15",
      age: 35,
      height: 170,
      weight: 72,
      birthdate: "06/24/1987",
      name_dob: "Lionel Andres Messi (24.06.1987)",
      field_name: "L.A Messi",
      team_short_name: "Paris Saint Germain",
      team_country: "Paris Saint Germain (Europe)",
      league_code: "UCL",
      league_start_year: 2021,
      season: "2021-22",
      position: "RW",
      minutes: 346,
      goal: 1,
      x_gdar: -0.1,
      x_gfar: -0.06,
      x_gaar: -0.04,
      link: 89,
      forward: 38,
      dribble: 87,
      open: 69,
      set: 77,
      tackle: 55,
      def_qual: 6,
      def_quant: 14,
      attack_bp: 18,
      attack_sc: 21,
      carry: 55,
      shoot: 9,
      receive: 4,
      pass1: 93,
      pass2: 78,
      pass3: 27,
      aerial: 8,
      cross: 33,
      disrupt: 17,
      recover: 0,
      ball_ret: 92,
      attack: 19,
      attack_op_bp: 14,
      attack_op_sc: 25,
      attack_db_sc: 36,
      attack_db_bp: 37,
      hot: 0,
      cold: 0,
      breakout: 0,
      underused: 0,
      prospect: 0,
      x_gdar_perc: 28.94120649,
      open_foot: 42,
      open_head: 0,
      dead_foot: 0,
      dead_head: 0,
      x_g_receive_bp_perc: 57,
      x_g_shots_perc: 71,
      x_g_pass_bp_perc: 72,
      x_g_cross_sc_perc: 77,
      x_g_indv_takeon_bp_perc: 0,
      x_g_indv_carry_bp_perc: 66,
      claimpct: 0,
      claimpercross_perc: 0,
      passpct1: 0,
      passpct2: 0,
      passpct3: 0
    }
];

export default function MetricTable() {

    const [ld, setLd] = useState(false);

   const btnClick = (() => {
      setLd(true);
      setTimeout(() => {
        setLd(false);
      }, 500);
    })


  return (
    <>
    <div className="my-5 mx-0" style={{ height: 400, width: '100%'}}>
        <div className="mt-3 text-center">
            <MDBBtn outline color='dark' className='fw-bolder fs-5 text-capitalize' type='submit' size='lg' onClick={btnClick}>Show Results</MDBBtn>
        </div>
      <DataGrid
        className='fs-5 fw-bolder my-3 h-100'
        rows={rows}
        columns={columns}
        getCellClassName={(params) => {
            if (params.field === 'x_gdar') {
                return params.value >= 0 ? 'bg-success text-white' : 'bg-danger text-white';
            }
        }}
        getRowClassName={() => 'fs-6 fw-bold'}
        pageSize={5}
        rowsPerPageOptions={[5,10]}
        disableColumnMenu
        loading={ld}
        
      />
    </div>
    <br/>
    </>
  );
}
