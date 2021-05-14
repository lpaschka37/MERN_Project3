/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function Employee(props) {

  return (
        <tbody>
        {props.results.map(result => (
            <tr>
                {/* <td data-th="image">
                    <img src={result.picture.medium} alt={ `headshot of: ${result.name.first} ${result.name.last}` } ></img> 
                </td> */}
                <td data-th="name">
                    {result.name}
                </td>
                <td data-th="email">
                <a href={ `mailto:${result.email}` } target="_blank">{result.email}</a>
                </td>
                <td data-th="age">
                    {result.age}
                </td>
                <td data-th="role">
                    {result.role}
                </td>                
            </tr>
        ))}
        </tbody>    
  );
}

export default Employee;