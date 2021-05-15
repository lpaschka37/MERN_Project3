// import React, { Component } from "react";
// import API from "../../utils/API";
// import SearchRes from "../SearchRes/SearchRes";
// import Employee from "../Employee/Employee";
// import Navbar from "../Navbar/Navbar";
// import "./style.css";


// class EmpTable extends Component {
//   state = {
//     result: [],
//     search: "",
//     order: ""
//   };

//   // When this component mounts
//   componentDidMount() {
//     this.searchUsers();
//   }

//   //API call to get employees
//   searchUsers = () => {
//     API.getUsers()
//       .then(res => {
//           console.log(res.data)
//           this.setState({ result: res.data})
//       })
//     //   .then(res => console.log(res))
//       .catch(err => console.log(err));
//   };

//   //search for the value of what is types in the search box as it is typed
//   handleInputChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   //change from ascending to descending order and vice versa
//   handleSubmit = event => {
//     event.preventDefault()

//     if (`${this.state.order}` === "" || `${this.state.order}` === "descending") {

//         this.setState({
//             order: "ascending"
//         })

//         const azEmployee = this.state.result.sort((a, b) => {
//             let nameA = a.name.last;
//             let nameB = b.name.last;

//             if (nameA < nameB) {
//                 return -1
//             }

//             return 0;
//         });

//         this.setState({
//             result: azEmployee
//         })
//     }

//     else if (`${this.state.order}` === "ascending") {

//         this.setState({
//             order: "descending"
//         })

//         const azEmployee = this.state.result.sort((a, b) => {
//             let nameA = a.name.last;
//             let nameB = b.name.last;

//             if (nameA > nameB) {
//                 return -1
//             }
//             return 0;
//         });

//         this.setState({
//             result: azEmployee
//         })
//     }
// }

// render() {
//   return (
//       <div className="tableWrap">
//           <Navbar
//               value={this.state.search}
//               handleInputChange={this.handleInputChange}
//           />
//           <table id="table" className="table table-striped table-hover table-condensed">
//             <thead>
//                 <tr>
//                     <th className="pointerName" data-order={this.state.order} onClick={this.handleSubmit}>
//                         Name ↕
//                     </th>
//                     <th>
//                         Email ↕
//                     </th>
//                     <th>
//                         Age
//                     </th>
//                     <th>
//                         Role
//                     </th>
//                 </tr>
//             </thead>
//             {!this.state.search ? (
//             <Employee results={this.state.result} />
//               ) : (
//             <SearchRes results={this.state.result} value={this.state.search} />
//             )}
//           </table>
//       </div>
//   );
// }}

// export default EmpTable;


