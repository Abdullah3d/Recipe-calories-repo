import React, { useState } from 'react'

const Sidebar = ({ cock }) => {

    const [cooking, setCocking] = useState([])
    function deleteRecipeById(id) {
        const index = cock.findIndex(recipe => recipe.id === id);
        if (index !== -1) {
            cock.splice(index, 1);
        }
    }

    const handleAddToCooking = (e) => {
        const info = {
            name: e.name,
            time: e.time,
            clo: e.clo,
            id: e.id
        }
        setCocking([...cooking, info])
        deleteRecipeById(e.id)
    }

    return (
        <div className='sticky top-24'>

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
                                        <th>{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.time}</td>
                                        <td>{item.clo}</td>
                                        <td><button onClick={() => handleAddToCooking(item)} className="btn btn-accent btn-sm">preparing</button></td>

                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>

            </div>
            <div>
                <h1 className='text-3xl font-bold text-center'>Currently cooking: {cooking.length}</h1>
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
                            {
                                cooking.map((item, index) => (
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.time}</td>
                                        <td>{item.clo}</td>
                                    </tr>
                                ))
                            }
                            
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Sidebar