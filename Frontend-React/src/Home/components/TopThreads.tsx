//react modules
import React from "react";
//react components
import ViewThreads from "./ViewThreads";

//render TopThreads function
//props: the name of the 3 top threads [array], the route of the 3 threads [array]
function TopThreads(props) {
    return (
        <div className="center-text">
            
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
                            <td><a href={props.route[0]}>{props.name[0]}</a></td>
                    </tr>

                    <tr>
                        <th scope="row">2</th>
                            <td><a href={props.route[1]}>{props.name[1]}</a></td>
                    </tr>

                    <tr>
                        <th scope="row">3</th>
                            <td><a href={props.route[2]}>{props.name[2]}</a></td>
                    </tr>
                </tbody>

            </table>

            <ViewThreads />

        </div>
    );
}

//export
export default TopThreads;