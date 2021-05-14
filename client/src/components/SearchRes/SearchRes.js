/* eslint-disable react/jsx-no-target-blank */
import React from "react";

function SearchRes(props) {   
    return (
        <tbody>
            {props.results.filter(search => {
                let name = search.name.toLowerCase();
                let searchName = props.value.toLowerCase()
                let result = name.includes(searchName)
               return result
            }).map(result => (
                <tr>                    
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

export default SearchRes;