import React from "react";
import {CartPage, HomePage} from "../pages";
import {Switch, Route} from "react-router-dom";
import ShopHeader from "../shop-header";


const App = () => {
  return (
        <main role="main" className="container">
          <ShopHeader numItems={2} total={201}/>
          <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/cart" component={CartPage} exact />
          </Switch>
        </main>
 
  )
};



export default App;
