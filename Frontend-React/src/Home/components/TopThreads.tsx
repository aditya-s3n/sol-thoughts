//react modules
import React from "react";
//react components
import ViewThreads from "./ViewThreads";

//render TopThreads function
//props: array of the threads
function TopThreads(props) {

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
                            <td><a href={`/threads/${props.threadArray[0].route}`}>{props.threadArray[0].name}</a></td>
                    </tr>

                    <tr>
                        <th scope="row">2</th>
                            <td><a href={`/threads/${props.threadArray[1].route}`}>{props.threadArray[1].name}</a></td>
                    </tr>

                    <tr>
                        <th scope="row">3</th>
                            <td><a href={`/threads/${props.threadArray[2].route}`}>{props.threadArray[2].name}</a></td>
                    </tr>
                </tbody>

            </table>

            <ViewThreads />

        </div>
    );
}

//export
export default TopThreads;