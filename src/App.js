import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import './App.css';
import { useState } from 'react';

function App() {
  
  const data =[
    {
      productImage:"https://e1.pxfuel.com/desktop-wallpaper/666/333/desktop-wallpaper-rainbow-glitter-sparkle-backgrounds-graphic-by-rizu-designs-%C2%B7-creative-fabrica-rainbow-sparkle.jpg",
      productName :"Fancy Product",
      price2:"$40.00-$80.00"
    },
    {
      productImage:"https://thumbs.dreamstime.com/b/special-stamp-round-grunge-sign-label-181776057.jpg",
      productName:"Special Item",
      Rating:"⭐⭐⭐⭐⭐",
      price:"$20.00",
      price2:"$18.00"
    },
    {
      productImage:"https://www.digdevdirect.com/wp-content/uploads/2017/06/SALE.jpg",
      productName:"Sale Item",
      price:"$50.00",
      price2:"$25.00"
    },
    {
      productImage:"https://icon-library.com/images/most-popular-icon/most-popular-icon-10.jpg",
      productName:"Popular Item",
      Rating:"⭐⭐⭐⭐⭐",
      price2:"$40.00"
    },
    {
      productImage:"https://www.digdevdirect.com/wp-content/uploads/2017/06/SALE.jpg",
      productName:"Sale Item",
      price:"$50.00",
      price2:"$25.00"
    },
    {
      productImage:"https://e1.pxfuel.com/desktop-wallpaper/666/333/desktop-wallpaper-rainbow-glitter-sparkle-backgrounds-graphic-by-rizu-designs-%C2%B7-creative-fabrica-rainbow-sparkle.jpg",
      productName :"Fancy Product",
      price2:"$120.00-$280.00"
    },
    {
      productImage:"https://thumbs.dreamstime.com/b/special-stamp-round-grunge-sign-label-181776057.jpg",
      productName:"Special Item",
      Rating:"⭐⭐⭐⭐⭐",
      price:"$20.00",
      price2:"$18.00"
    },
    {
      productImage:"https://icon-library.com/images/most-popular-icon/most-popular-icon-10.jpg",
      productName:"Popular Item",
      Rating:"⭐⭐⭐⭐⭐",
      price2:"$40.00"
    }
  ]
  const [count,setCount] = useState(0);
  return (

    <div className="App">
   <div className='hedding'>
      <h2>SHOPPING IN STYLE</h2>
      </div>

      <div className='cart'>
      <Badge bg="dark">
        CART {count}
      </Badge>
      </div>

       <div className='Layer'>
    {data.map((prod,idx)=> <Cards
      idx = {idx}
      prod = {prod}
      setCount={setCount}
      count={count}
    
    />)}
    </div>
    </div>
  );
}

function Cards({prod ,idx,setCount,count}){
  const [show , setShow] = useState(false);
  function addcart(){
    setShow(!show)
    setCount(count+1)
  }
  function removecart(){
    setShow(!show)
    setCount(count-1)
  }
  return(
   
          <Card key={idx} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={prod.productImage} />
          <Card.Body className='Body'>
            <Card.Title>{prod.productName}</Card.Title>
            <Card.Text>{prod.Rating}</Card.Text>
            <Card.Text><s>{prod.price}</s> {prod.price2}</Card.Text>

          {!show ? <Button variant="primary"
          onClick={addcart}>Add to Cart</Button>:" "}

          {show?<Button variant="danger"
           onClick={removecart}>remove</Button>:" "}

          </Card.Body>
        </Card>

  )
}


export default App;



