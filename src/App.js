function App() {
  return (
    <div className="App">
      <div className="product-list">
        <h1 className="heading">Our Collection</h1>
        <p>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <button>All Products</button>
        <button>Available Now</button>
        <div className="all-products">
          <div className="products-row-one">
            <div className="product">
              <img src="images/product-1.jpg" alt="Product 1" />
              <h2>Popular</h2>
              <p>Product 1 Description</p>
            </div>
            <div className="product">
              <img src="images/product-2.jpg" alt="Product 2" />
              <h2>Popular</h2>
              <p>Product 2 Description</p>
            </div>
            <div className="product">
              <img src="images/product-3.jpg" alt="Product 3" />
              <h2>Popular</h2>
              <p>Product 3 Description</p>
            </div>
          </div>
          <div className="products-row-two">
            <div className="product">
              <img src="images/product-4.jpg" alt="Product 4" />
              <h2>Popular</h2>
              <p>Product 4 Description</p>
            </div>
            <div className="product">
              <img src="images/product-5.jpg" alt="Product 5" />
              <h2>Popular</h2>
              <p>Product 5 Description</p>
            </div>
            <div className="product">
              <img src="images/product-6.jpg" alt="Product 6" />
              <h2>Popular</h2>
              <p>Product 6 Description</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
