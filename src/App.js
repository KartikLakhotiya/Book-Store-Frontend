import logo from './logo.svg';
import './App.css';
import './index.js'

function Navbar(){
  return(
    <div class="navbar">
            <div class="navdiv"><marquee>Get 70% Off</marquee>
              
            </div>

            
        
    </div>
  )
}


function Sidebar(){

  const items = [
    {text: "Home"},
    {text: "About"},
    {text: "Sign In"},
    {text: "Sign Out"},
    {text: "Show Cart"}
  ]

  return (
    <div className='sidebar'>
      <p className='title'>Book Store</p>
      <div>
        {
          items.map((i, idx) => {
            return (
              <div>
              <button className='link'>{i.text}</button>
              </div>
            )
          })
        }
        <button className="link">Contact Us</button>
      </div>
    </div>
  )
}

const books = [
  {
    id : 1,
    title:"Fourth Wing",
    author:"Rebecca Yaros",
    image:"book.jpg",
    price: "$499"
  },
  {
    id : 2,
    title:"A Tale of 2 Cities",
    author:"Charles Dickens",
    image:"book1.jpg",
    price:"$599"
  },
  {
    id : 3,
    title:"Harry Potter",
    author:"JK Rowling",
    image:"book2.jpeg",
    price:"$699"
  },
  {
    id : 4,
    title:"Lord of the Rings",
    author:"J.R.R Toklien",
    image:"book3.jpg",
    price:"$399"
  },
  {
    id : 5,
    title:"Obssesed",
    author:"James Patternson",
    image:"book4.jpg",
    price:"$649"
  },
  {
    id : 6,
    title:"It starts with us",
    author:"Collen Hoover",
    image:"book5.jpg",
    price:"$749"
  }
];
const Bookp = (book) =>{
  return(
    <article className='content'>
      {<img src = {book.image}></img>}
      <h2>{book.title}</h2>
      <p className='authnm'>{book.author}</p>
      <p>{book.price}</p>
      <label>Quantity : </label><input type="number" placeholder="Enter Qty"/><br/>
      <button className='btn'>Add to Cart</button>
    </article>
  )
}
const BookListp=()=>{
  return(
    <section className='booklist'>
      {
        books.map((book,id) => {
          return(
            <Bookp title={book.title} author={book.author} image = {book.image} price={book.price} key={id}/> 
          )
        })
      }
      
    </section>
  )
}

function Footer(){
  return(
    <footer>
      <div id="css">
        <p>Author : Kartik Lakhotiya</p>
        <a href="mailto:hege@example.com">kartiklakhotiya19@gmail.com</a>
      </div>
    </footer>
  )
}


function App() {
  return(
    <div>
      
      <Sidebar/>
      <Navbar/>
      <BookListp/>
      <Footer/>
      
    </div>
  )
}

export default App;
