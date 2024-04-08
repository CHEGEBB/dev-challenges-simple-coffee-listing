import bgCafeImage from './images/bg-cafe.jpg';

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={bgCafeImage} alt="header" />
    </header>
   <div className="product-list">

   <h1 clasName="heading">Our Collection</h1>
<p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
<button>All Products</button>
<button>Available Now</button>
   </div>


</div>
  );
}

export default App;
