import React, { useState, useEffect } from "react";
 

 
function Citationlist()
{ 
    const[product, setProduct]= useState([]);
     
    useEffect( ()=>{
            fetch("http://127.0.0.1:8000/api/citation")
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error));
        },[]);

    return(
        <React.Fragment>
            <div className="container container_overflow">
                <div className="row">
                    <div className="col-12">
                        <h5 className="mb-4">Citation List</h5> 
                        <p className="text-danger"> </p>                 
                                <table className="table table-bordered">
                                <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Citation</th>
                                <th scope="col">Author</th>
                                <th scope="col">Explication</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        product.map((pdata, index)=>(
                                            <tr key={index}>
                                            <td>{index+1 } </td>
                                            <td>{pdata.citation } </td>
                                            <td>{pdata.author.name } </td>
                                            <td>{pdata.explication } </td>
                                            </tr>
                                        ))
                                    }
                               
                                                                
                                </tbody>
                                </table>  
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Citationlist;