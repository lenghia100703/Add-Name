
import { useState, useRef } from 'react';
import './App.css';

function App() {
  
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [products, setProducts] = useState([])
  
  const nameRef = useRef()

  const handleClick = () => {
    setProducts([...products, {
      name,
      code: parseInt(code)
    }])
    setName('')
    setCode('')
    nameRef.current.focus()
  }

  const handleDelete = (index) => {
    setProducts((prev) => {
      const deleteProducts = [...prev];
      deleteProducts.splice(index, 1);
      return deleteProducts;
    });
  };
  
  
  
  
  return (
    <div className="App">
      <input 
        type="text" 
        value={name}
        placeholder="Enter name" 
        ref={nameRef}
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input 
        type="text" 
        value={code}
        placeholder="Enter student code"
        onChange={e => setCode(e.target.value)}
      />
      <br />
      <button onClick={handleClick}>Add</button>
      <br />
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.code}
            <button 
              style={{margin: 8}}
              onClick={() => handleDelete(index)}
            >
              {"x" || ""}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
