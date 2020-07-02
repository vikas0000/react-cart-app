import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products: [],
        loading: true
    }
    this.db = firebase.firestore();
}

componentDidMount () {

  this.db
  .collection('products')
  .onSnapshot((snapshot) => {

    console.log(snapshot);
    snapshot.docs.map((doc) => {
      console.log(doc.data())

    });
    const products = snapshot.docs.map((doc) => {
      const data = doc.data();
      data['id'] = doc.id;
      return data;
    })
    this.setState({
        products,
        loading: false
    })

  })

}

handleIncreaseQuantity = (product) => {
  const {products} = this.state;
  const index = products.indexOf(product);
  products[index].qty += 1;
  this.setState ({
      products: products
  });

}

handleDecreaseQuantity = (product) => {
  const {products} = this.state;
  const index = products.indexOf(product);
  if(products[index].qty === 0){
      return;
  }
  products[index].qty -= 1;
  this.setState ({
      products: products
  });

}
handleDelete = (id) => {
  const {products} = this.state;
  const items = products.filter((item) => item.id !== id);

  this.setState({
      products: items
  })

}

getCartCount = () =>{

  const {products} = this.state;

  let count=0;
  products.forEach((products) =>{

    count += products.qty;

  }); 
  return count;
}


getCartTotal = () =>{

  const {products} = this.state;
  let CartTotal = 0;
  products.map((product) =>{

    CartTotal = CartTotal + product.qty * product.price;

  });
  return CartTotal;
}

addProduct = () =>{

  this.db
    .collection('products')
    .add({
      img: 'https://static.toiimg.com/photo/55886731/LG-P1515R3Sa-95-Kg-Semi-Automatic-Top-Load-Washing-Machine.jpg',
      title: 'Washing machine',
      qty: 4,
      price: 7999

    })
    .then((docRef) =>{
      console.log('Product has been added');
    })
    .catch((error) =>{
      console.log('Error in adding');
    })
}
  render(){
    const {products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <button onClick = {this.addProduct}>Add a product</button>
        <Cart 
        products = {products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDelete = {this.handleDelete}

        />
        {loading && <h1>Loading products ...</h1>}
        <div>TOTAL: {this.getCartTotal()}</div>
      </div>
      
    );
  }
}

export default App;
