import React from 'react'

const Sidebar = ({ cock }) => {

    return (
        <div className='sticky top-8'>

            <div>
                <h1 className='text-3xl font-bold text-center'> Want to cook: {cock.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th> {"  "}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cock.map((item, index) => (
                                    <tr>
                                        <th>{index}</th>
                                        <td>{item.name}</td>
                                        <td>{item.time}</td>
                                        <td>{item.clo}</td>
                                        <td><button className="btn btn-accent btn-sm">preparing</button></td>

                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

            </div>
            <div>
                <h1 className='text-3xl font-bold text-center'>Currently cooking: 02</h1>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Sidebar