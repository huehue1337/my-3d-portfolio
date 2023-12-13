// import { BallCanvas } from './canvas'
// import { Sectionwrapper } from '../hoc'
// import { technologies } from '../constants'

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10 ' >
//       {technologies.map((technology) => (
//         <div className=' w-28 h-28' key={technology.name} >
//           <BallCanvas icon={technology.icon} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sectionwrapper(Tech,"") ;

import React from "react";

import { BallCanvas } from "./canvas";
import { Sectionwrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technologies) => (
        <div className='w-28 h-28' key={technologies.name}>
          <BallCanvas icon={technologies.icon}  />
        </div>
      ))}
    </div>
  );
};

export default Sectionwrapper(Tech, "");
