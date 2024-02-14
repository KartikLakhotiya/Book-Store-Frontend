import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';


// function Greeting(){
//   return <h2>Hello this is the first react app</h2>
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Greeting/>);

// function Greeting1(){
//   return <div>
//       <h1>This is the Multiple tags in same component.</h1>
//       <li>
//         <ul>Home</ul>
//         <ul>About</ul>
//         <ul>Sign in</ul>
//         <ul>Sign out</ul>
//       </li>
//   </div>
// }
// const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// root1.render(<Greeting1/>)

// function Greeting3(){
//     return <div>
//       <Person/>
//       <Message/>
//     </div>
// }
// const Person = () => <h2>This message component is nested</h2>
// const Message=()=>{
//   return <div> 
//     <p>this is second message component nested</p>
//     <h1>this is second message component nested</h1>
//   </div>
  
// }
// const root2 = ReactDOM.createRoot(document.getElementById('root2'));
// root2.render(<Greeting3/>)



// const BookList=()=>{
//     return(
//       <section>
//       <Book/>
//       <Book/>
//       <Book/>
//       <Book/>
//     </section>
//     )
// }
// const Book=()=>{
//   return(
//     <article>
//       <Image/>
//       <Author/>
//     </article>
//   )
// }
// const Image=()=> {
//   return <img src = "./book.jpg"/>
// }
// const Author=()=>{
//   return <h2 style = {{color:'red'}}>Author is Rebecca Yarros</h2>
// }
// const root3 = ReactDOM.createRoot(document.getElementById('root3'));
// root3.render(<BookList/>)

// const BookList1 = () => {
//   return(
//     <section className='hello'>
//       <Book1 t="title of book" number = {2*2}/>
//       <Book1 t1="title of book" number = {2*2}/>
//     </section>
//   )
// }
// const Book1=(props)=>{
//   const title = "Hello world"
//   return(
//     <article className='arc'>
//       <Image/>
//       <Author/>
//       <h4>{title}</h4>
//       <h4>{title.toUpperCase()}</h4>
//       <p>{props.t}</p>
//       <p>{props.t1}</p>
//       <p>{props.number}</p>
//     </article>
//   )
// }
// const hello = ReactDOM.createRoot(document.getElementById('root4'));
// hello.render(<BookList1/>);


              // Book store website 
              
// function Navbar(){
//   return(
//     <div class="navbar">
//             <div class="navdiv"><marquee>Get 70% Off</marquee>
              
//             </div>

            
        
//     </div>
//   )
// }
// const nav = ReactDOM.createRoot(document.getElementById('navbar'));
// nav.render(<Navbar/>)

// function Header(){
//   <div className="header">
//     <p>Get 70% Off</p>
//   </div>
// }
// const root8 = ReactDOM.createRoot(document.getElementById('header'))
// root8.render(<Header/>)

// function Sidebar(){

//   const items = [
//     {text: "Home"},
//     {text: "About"},
//     {text: "Sign In"},
//     {text: "Sign Out"},
//     {text: "Show Cart"}
//   ]

//   return (
//     <div className='sidebar'>
//       <p className='title'>Book Store</p>
//       <div>
//         {
//           items.map((i, idx) => {
//             return (
//               <div>
//               <button className='link'>{i.text}</button>
//               </div>
//             )
//           })
//         }
//         <button className="link">Contact Us</button>
//       </div>
//     </div>
//   )
// }
// // const root6 = ReactDOM.createRoot(document.getElementById('sidenav'))
// // root6.render(<Sidebar/>)


// const books = [
//   {
//     id : 1,
//     title:"Fourth Wing",
//     author:"Rebecca Yaros",
//     image:"book.jpg",
//     price: "$499"
//   },
//   {
//     id : 2,
//     title:"A Tale of 2 Cities",
//     author:"Charles Dickens",
//     image:"book1.jpg",
//     price:"$599"
//   },
//   {
//     id : 3,
//     title:"Harry Potter",
//     author:"JK Rowling",
//     image:"book2.jpeg",
//     price:"$699"
//   },
//   {
//     id : 4,
//     title:"Lord of the Rings",
//     author:"J.R.R Toklien",
//     image:"book3.jpg",
//     price:"$399"
//   },
//   {
//     id : 5,
//     title:"Obssesed",
//     author:"James Patternson",
//     image:"book4.jpg",
//     price:"$649"
//   },
//   {
//     id : 6,
//     title:"It starts with us",
//     author:"Collen Hoover",
//     image:"book5.jpg",
//     price:"$749"
//   }
// ];
// const Bookp = (book) =>{
//   return(
//     <article className='content'>
//       {<img src = {book.image}></img>}
//       <h2>{book.title}</h2>
//       <p className='authnm'>{book.author}</p>
//       <p>{book.price}</p>
//       <label>Quantity : </label><input type="number" placeholder="Enter Qty"/><br/>
//       <button className='btn'>Add to Cart</button>
//     </article>
//   )
// }
// const BookListp=()=>{
//   return(
//     <section className='booklist'>
//       {
//         books.map((book,id) => {
//           return(
//             <Bookp title={book.title} author={book.author} image = {book.image} price={book.price} key={id}/> 
//           )
//         })
//       }
      
//     </section>
//   )
// }



// // const root = ReactDOM.createRoot(document.getElementById('root'))
// // root.render(<BookListp/>)

// function Footer(){
//   return(
//     <footer>
//       <div id="css">
//         <p>Author : Kartik Lakhotiya</p>
//         <a href="mailto:hege@example.com">kartiklakhotiya19@gmail.com</a>
//       </div>
//     </footer>
//   )
// }

// const root5 = ReactDOM.createRoot(document.getElementById('footer'))
// root5.render(<Footer/>)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)





// // import React from "react"
// // import ReactDOM from "react-dom/script"

// // const addresses = [
// //     {
// //       street: 112,
// //      city: "jaipur",
// //      country: "indi",
// //     },
// //     {
// //       street: 112,
// //      city: "jaipur",
// //      country: "indi",
// //     }
// // ]

// // const Adds = (props) =>{
// //     return(
// //       <article className='content'>
// //         {/* <img src = {props.image}></img> */}
// //         <h2>{props.street}</h2>
// //         <p className='authnm'>{props.city}</p>
// //         <p>{props.country}</p>
       
// //       </article>
// //     )
// //   }
  
// // const AddressListp=()=>{
// //     return(
// //       <section className='addres'>
// //         {
// //           addresses.map((address,index) => {
// //             return(
// //               <Adds street={address.street} city={address.city} country = {address.country} key={index}/> 
// //             )
// //           })
// //         }
        
// //       </section>
// //     )
// //   }
  

// // const root=ReactDOM.creatroot(document.getElementById("root"))
// // root.render(<AddressListp/>)


reportWebVitals();