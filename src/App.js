import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type1: "beddings",

      bed1: "Bed sheet",
      bedsheetImgPrice: 600,
     
      bed2: "Bed cover",
      bedcoverImgPrice: 500,


      bed3: "Duvet",
      frenchbeansImgPrice: 1500,
    
      bed4: "Pillow",
      pillowImgPrice: 300,

      type2: "Fruits",

      fruit1: " banana2",
      banana2Quantity:40,
      banana2ImgPrice:80,

      fruit2: "strawberry",
      strawberryImgQuantity:50,
      strawberryImgPrice:150,

      fruit3: "Mangoes",
      mangoImgQuantity:60,
      mangoImgPrice:120,

      fruit4: "avocado",
      avocadoImgQuantity:50,
      avocadoImgPrice:100,

      fruit5: "Oranges",
      orangesImgQuantity: 70,
      orangesImgPrice: 140,      
      
      fruit6: "cherry",
      carrotsImgQuantity:50,
      carrotsImgPrice:200,

      fruit7: "Apple",
      peasImgQuantity:30,
      peasImgPrice:90,

      Veg8:"Capsicum",
      capsicumImgQuantity: 50,
      capsicumImgPrice: 100,

      fruit6:"Watermellon",
      watermellonImgQuantity: 40,
      watermellonImgPrice:80,

      fruit7: "Passion",
      passionImgQuantity: 50,
      passionImgPrice: 100,

      fruit8: "Grape",
      grapeImgQuantity:60,
      grapeImgPrice:120,

      fruit9: "Guava",
      guavaImgQuantity: 40,
      guavaImgPrice: 80,

    };
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1><img src="Images/decor7.jpg" height="550px;" width="100%"/></h1>
        <h3>New arrivals</h3>
        <h3>Make your home look better</h3>
         <section className="products">
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src="Images/bed sheet.png" alt="" />
            </div>
            <div className="product-info">
              <h5> Bed sheet</h5>
              <p> Kes {this.state.bedsheetImgPrice}</p>
            <p>Quality:Cotton</p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/bed cover.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Bed Cover</h5>
              <p>kes{this.state.bedcoverImgPrice}</p>
              <p> Quality:Cotton</p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/duvet1.jpg"}alt="" />
            </div>
            <div className="product-info">
              <h5> Duvet</h5>
              <p> kes 1500</p>
              <p> Quality:Cotton</p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/h pillow.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5>Pillow</h5>
              <p> Kes {this.state.pillowImgPrice}</p>
              <p> Quantity:Cotton </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>
          
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/capsicum.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Capsicum</h5>
              <p> Kes {this.state.capsicumImgPrice}</p>
              <p> Quantity {this.state.capsicumImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>  
          
                
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/strawberry.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Strawberry</h5>
              <p> Kes {this.state.strawberryImgPrice}</p>
              <p> Quantity {this.state.strawberryImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/Mangoes.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Mangoes</h5>
              <p> Kes {this.state.MangoesImgPrice}</p>
              <p> Quantity {this.state.MangoesImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/avocado.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Avocado</h5>
              <p> Kes {this.state.avocadoImgPrice}</p>
              <p> Quantity {this.state.avocadoImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/Oranges.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Oranges</h5>
              <p> Kes {this.state.orangesImgPrice}</p>
              <p> Quantity {this.state.orangesImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/cherry.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Cherry</h5>
              <p> Kes {this.state.carrotsImgPrice}</p>
              <p> Quantity {this.state.carrotsImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/Apple.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Apple</h5>
              <p> Kes {this.state.AppleImgPrice}</p>
              <p> Quantity {this.state.AppleImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>  
        
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/banana2.png"} alt="" />
            </div>
            <div className="product-info">
              <h5> Banana</h5>
              <p> Kes {this.state.banana2ImgPrice}</p>
              <p> Quantity {this.state.banana2ImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>


          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/passion fruit.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Passion</h5>
              <p> Kes {this.state.passionImgPrice}</p>
              <p> Quantity {this.state.passionImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div> 

           <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/Grape.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Grape</h5>
              <p> Kes {this.state.grapeImgPrice}</p>
              <p> Quantity {this.state.grapeImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div> 

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={"Images/Guava.jpg"} alt="" />
            </div>
            <div className="product-info">
              <h5> Guava</h5>
              <p> Kes {this.state.guavaImgPrice}</p>
              <p> Quantity {this.state.guavaImgQuantity} </p>
              <button className="add-to-cart-btn" onClick="saveItem()">
                Add To cart
              </button>
            </div>
          </div>    
 </section>
 <section className="style1">
  <div className="decorr"></div>
  <h2> Welcome to my home decor website</h2>   
      </section>
      </div>
      
    );
  }
}

export default App;