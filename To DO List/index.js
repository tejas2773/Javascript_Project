// const input = document.querySelector('.input');
// const btn = document.querySelector('.btn');
// const records = document.querySelector('.records');
// const search=document.querySelector('#search')

// let arr = [];
// let edit_id = null;




// // Event listener for the button click
// btn.addEventListener('click', (e) => {
//   e.preventDefault();
//   addOrEditTask();
// });


// // Add or edit a task
// function addOrEditTask() {
//     const task = input.value;
//     if (edit_id !== null) {
//         arr.splice(edit_id, 1, { 'task': task });  //splice syntax-(operation ele,delete(1),edit_ele.)
//         edit_id = null;                             
//     } else {
//         arr.push({ 'task': task });            //it add data as object in array
//     }
//     saveTasks();
//     displayTasks();
//     input.value=''                // it erase all data of input field after executing operation
// }


// // Save tasks to local storage
// function saveTasks() {
//   const str = JSON.stringify(arr);        //JSON.stringify()-converts data to string 
//   localStorage.setItem('task', str);        //setItem-store data to local storage
// }


// function loadTasks() {
//   const objstr = localStorage.getItem('task');   //getItem-retrives data from local storage     
//   if (objstr !== null) {
//       arr = JSON.parse(objstr);                  //parse- it converts data to oringinal format(obj)
//       console.log(arr);
//       displayTasks();
//   }
// }

// // Display tasks on the page
// function displayTasks() {
//     let statement = '';
//     arr.forEach((element, n) => {                   //forEach(element,n)-: element=iterative ele.
//                                                                         //n= gives index no. 
//         statement = statement + `
//             <tr>
//                 <th scope="row">${n + 1}</th>
//                 <td>${element.task}</td>
//                 <td class="td">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16" onclick='deleteTask(${n})'>
//                 <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
//               </svg> 
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16" onclick='editTask(${n})'>
//   <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z"/>
// </svg>
//                 </td>
//             </tr>`;
//     });
//     records.innerHTML = statement;         // add it to body
    
// }

// // Edit a task
// function editTask(n) {
//     edit_id = n;
//     input.value = arr[n].task;              // it puts data on input field 
//     btn.innerText = 'edit info';
// }

// // Delete a task
// function deleteTask(n) {
//     arr.splice(n, 1);
//     saveTasks();
//     displayTasks();
// }



// // Call the loadTasks function on page load to display all data
// loadTasks();

// search.addEventListener('input',(e)=>{
//     const searchstr= e.target.value.toLowerCase()
//     searchBar(searchstr);
// })

// function searchBar(searchstr){
//     const alltr=records.querySelectorAll('tr')
//     records.innerHTML=''
//     alltr.forEach(tr => {
//         const td_tr=tr.querySelectorAll('td')
//         if(td_tr[0].innerText.toLowerCase().indexOf(searchstr)>-1){
//             records.appendChild(tr)
//         }
//     });
// }
