//react modules
import React from "react";
//react components
import ViewThreads from "./ViewThreads";

//render TopThreads function
//props: array of the threads
function TopThreads({ threadArray }) {

    return (
        <div className="text-center">
            
            <table className="table mx-auto mt-5 table-bordered" style={{"width": "25%"}}>

                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Top Threads</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th scope="row">1</th>
                            <td>
                                {
                                //render top threads if avaliable 
                                threadArray 
                                ? <a href={`/threads/${threadArray[0].route}`}>{threadArray[0].name}</a>
                                : <p className="placeholder-glow"><span className="placeholder col-11"></span></p>
                                }
                            </td>
                    </tr>

                    <tr>
                        <th scope="row">2</th>
                            <td>
                                {
                                //render top threads if avaliable 
                                threadArray 
                                ? <a href={`/threads/${threadArray[1].route}`}>{threadArray[1].name}</a>
                                : <p className="placeholder-glow"><span className="placeholder col-11"></span></p>
                                }
                            </td>
                    </tr>

                    <tr>
                        <th scope="row">3</th>
                            <td>
                                {
                                //render top threads if avaliable 
                                threadArray 
                                ? <a href={`/threads/${threadArray[2].route}`}>{threadArray[2].name}</a>
                                : <p className="placeholder-glow"><span className="placeholder col-11"></span></p>
                                }
                            </td>
                    </tr>
                </tbody>

            </table>

            <ViewThreads />

        </div>
    );
}

//export
export default TopThreads;