// import React from 'react'
// import './PreLoader.scss'

// // var loader = document.getElementById('preLoader');
// // window.addEventListener('load', () => { loader.style.display = "none"; })

// const PreLoader = () => {
//     return (
//         <div id='preLoader' className='loaderText'>
//             Loading...
//             <div className="cssload-wrap">
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//                 <div className="cssload-circle"></div>
//             </div>
//         </div>
//     )
// }

// export default PreLoader 

import './PreLoader.scss' 
// import { VStack } from '@chakra-ui/react'

const PreLoader = ({ color = 'pink.500' }) => {
    return ( 
            <div className="wrapper">
                <div className="box-wrap">
                    <div className="box one"></div>
                    <div className="box two"></div>
                    <div className="box three"></div>
                    <div className="box four"></div>
                    <div className="box five"></div>
                    <div className="box six"></div>
                </div>
            </div> 
    )
}
export default PreLoader 