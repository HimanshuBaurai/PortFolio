// import './PreLoader.scss' 

// const PreLoader = ({ color = 'pink.500' }) => {
//     return ( 
//             <div className="wrapper">
//                 <div className="box-wrap">
//                     <div className="box one"></div>
//                     <div className="box two"></div>
//                     <div className="box three"></div>
//                     <div className="box four"></div>
//                     <div className="box five"></div>
//                     <div className="box six"></div>
//                 </div>
//             </div> 
//     )
// }
// export default PreLoader 

import './PreLoader.scss' 

const PreLoader = ({ loadingProgress = 0 }) => {
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
            
            {/* Loading progress indicator */}
            <div className="loading-progress">
                <div className="progress-text">{loadingProgress}%</div>
                <div className="progress-bar-container">
                    <div 
                        className="progress-bar-fill" 
                        style={{ width: `${loadingProgress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default PreLoader
