//react modules
import React from "react";
//react components
import ViewThreads from "./ViewThreads";

//render TopThreads function
function TopThreads() {
    return (
        <div className="center-text">
            
            <table class="table mx-auto my-5 table-bordered" style={{"width": "25%"}}>

                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Top Threads</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th scope="row">1</th>
                            <td>Thread Page #1</td>
                    </tr>

                    <tr>
                        <th scope="row">2</th>
                            <td>Thread Page #2</td>
                    </tr>

                    <tr>
                        <th scope="row">2</th>
                            <td>Thread Page #3</td>
                    </tr>
                </tbody>

            </table>

            <ViewThreads />

        </div>
    );
}

//export
export default TopThreads;