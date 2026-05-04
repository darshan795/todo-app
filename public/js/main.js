

// //testing the routes   here
// const testingData={
//     title:"Dominance  in my work field ",
//     description:"work so hard  that   there is no chance of luck coming in !!!",
//     status:false,
//     duetime:"2026-04-27",
//     priority:"High",
//     category:"personal",


// }
// const  testingSecondData={
//      title:"Be the best in my field  motherfucker!!!",
//     description:"work so hard  that no one  can think  about the efforts",
//     status:false,
//     duetime:"2026-04-27",
//     priority:"High",
//     category:"personal",


// }
// //let's call the first  api that is to insert or add to task using the fetch
// let add=async ()=>{
//     try{

//     const response=await fetch("/todo/add",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"

//         },
//         body:JSON.stringify(testingData)

//     });
//     const  data=await response.json();
//     if(data){
//         console.log("successfully  sent the data to the  db",data);
//     }
    
// }catch(err){
//     console.log("error while sending the  fetch  req to add the  data ",err);
// }
    
    

// }

// // add();   
// //done  posting the  how do i do that...
// // fetching the data
// let getData=async ()=>{
//     try{
//     const  response=await fetch("/todo/read");
//     const data=await response.json();
//     console.log("successsfullyy fetched the data");
//     console.log(data);

//     }catch(err){
//         console.log("failed to fetch the data",err);
//     }


    

// }
// // getData();
// let updateddata={
//     title:"making irrestible  will to dominate the    field motherfucker"
// }

// //after fetching the  data  the next  part is ot is  to update the dat//through  the od
// //id

// let id="69d5246752afdc4fd859b064";

// let updateData=async (id)=>{
//     console.log("update data is called here!!!");
//     try{
    
//     const  response=await fetch(`/todo/update/${id}`,{
//         method:"PUT",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(updateddata)
//     })

// const data=await response.json();

// console.log(data);
// }catch(err){
//     console.log("failed to look for the  update route...",err);

// }
    



     

// }
// // updateData(id);

// let deleteData=async (id)=>{
//     const  response=await fetch(`/todo/delete/${id}`,
//         {
//         method:"DELETE"
//         }
//     )
//     const data= await response.json();
    
//     console.log(data);

    
// }


// // deleteData(id);