
import React from 'react';
import './App.css';
// import Header from './Components/Header/Header';
// import Carousel from './Components/Carousel/Carousel';
// import Catagory from './Components/Catagory/Catagory';
// import Products from './Components/Product/Products';
import Routering from './Router';
import { useContext } from 'react';
import { DataContext } from './Components/DataProvider/DataProvider';
import { useEffect } from 'react';
import { Type } from './Utility/action.type';
import { auth } from './Utility/firebase';

function App() {
  const [{user},dispatch] = useContext(DataContext)
useEffect(()=>{
auth.onAuthStateChanged((authUser)=>{
  if(authUser){
    console.log(authUser);
    dispatch({
      type:Type.SET_USER,
      user:authUser
    });
  }else{
    dispatch({
      type:Type.SET_USER,
      user:null});
  }
});
},[])

  return (
    // <div className="App">
    //   <Header />
    //   <Carousel />
    //   <Catagory />
    //   <Products />
    
    //   </div>
    <Routering />
  );
}

export default App;
