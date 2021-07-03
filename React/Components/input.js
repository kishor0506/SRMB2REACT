//import Wthr from '../db.json'
// {/* {weatherdata.weatherdata.map((d)=>{
//                     return(
//                         <tr>
//                         <th scope="row">1</th>
//                         <td>{d.description}</td>
//                         <td></td>
//                         <td>@mdo</td>
//                     </tr>
//                     )
//                 }
//                 )} */}
//                 {W.weather.map((d)=>{
//                     return(
//                         <tr>
//                         <th scope="row">1</th>
//                         <td>{d.description}</td>
//                         <td></td>
//                         <td></td>
//                     </tr>
//                     )
//                 }
//               
import React from 'react';
import Data from '../db.json';

function input() {
    return (
        <div>
            {Data.weather.map((d) => {
                return (
                    <h2>description:  {d.description}</h2>
                             
               )
            })}

        </div>
    )
}
export default input;