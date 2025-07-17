import './App.css';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import strawberryimg from "./assets/strawberry.jpg";
import matchaimg from "./assets/matcha.jpg";
import chocolateimg from "./assets/chocolate.jpg";
import ProductCardComponent from './components/ProductCardComponent';

type CartItem = {
  name: string;
  price: number;
  quantity: number;
  img: string;
};

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleAddToCart = (productName: string, priceStr: string, quantity: number, img: string) => {
    const price = parseFloat(priceStr.replace(/[^0-9.]/g, ''));

    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.name === productName);
      if (existingItem) {
        return prev.map((item) =>
          item.name === productName
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { name: productName, price, quantity, img }];
      }
    });
  };

  const handleRemoveItem = (productName: string) => {
    setCartItems((prev) => prev.filter((item) => item.name !== productName));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const grandTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* 🛒 Cart Icon */}
      <div style={{ position: 'fixed', top: 20, right: 30, zIndex: 1000 }}>
        <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setShowDropdown(!showDropdown)}>
          <FaShoppingCart size={30} />
          {totalItems > 0 && (
            <span
              style={{
                position: 'absolute',
                top: -8,
                right: -8,
                background: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '4px 7px',
                fontSize: '12px',
              }}
            >
              {totalItems}
            </span>
          )}
        </div>

        {/* 🧾 Cart Dropdown */}
        {showDropdown && (
          <div className="cart-dropdown"
          >
            <h4>Cart Items</h4>
            {cartItems.length === 0 ? (
              <p style={{ fontStyle: 'italic' }}>No items in cart</p>
            ) : (
              <ul style={{ listStyle: 'none', padding: 0, maxHeight: '300px', overflowY: 'auto' }}>
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '12px',
                    }}
                  >
                    <img src={item.img} alt={item.name} width="50" height="50" style={{ borderRadius: '8px' }} />
                    <div style={{ flexGrow: 1 }}>
                      <strong>{item.name}</strong>
                      <br />
                      Qty: {item.quantity} — ₱{(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.name)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'red',
                        fontSize: '18px',
                        cursor: 'pointer',
                      }}
                      title="Remove"
                    >
                      ✖
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <hr />
            <strong>Total: ₱{grandTotal.toFixed(2)}</strong>
          </div>
        )}
      </div>

      {/* 🧋 Product Cards */}
      <div
        style={{
          display: 'flex',
          gap: '16px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '80px 20px 20px',
        }}
      >
        <ProductCardComponent
          name="Strawberry Milktea"
          img={strawberryimg}
          productDesc="Fall in love with the creamy sweetness of strawberry! A sip of berrylicious joy in every cup."
          price="₱75"
          rating={5}
          onAddToCart={(qty) => handleAddToCart("Strawberry Milktea", "₱75", qty, strawberryimg)}
        />
        <ProductCardComponent
          name="Matcha Milktea"
          img={matchaimg}
          productDesc="Fall in love with the creamy sweetness of matcha! A sip of berrylicious joy in every cup."
          price="₱60"
          rating={5}
          onAddToCart={(qty) => handleAddToCart("Matcha Milktea", "₱60", qty, matchaimg)}
        />
        <ProductCardComponent
          name="Chocolate Milktea"
          img={chocolateimg}
          productDesc="Fall in love with the creamy sweetness of chocolate! A sip of berrylicious joy in every cup."
          price="₱55"
          rating={5}
          onAddToCart={(qty) => handleAddToCart("Chocolate Milktea", "₱55", qty, chocolateimg)}
        />
        <ProductCardComponent
          name="Strawberry Milktea"
          img={strawberryimg}
          productDesc="Fall in love with the creamy sweetness of strawberry! A sip of berrylicious joy in every cup."
          price="₱75"
          rating={5}
          onAddToCart={(qty) => handleAddToCart("Strawberry Milktea", "₱75", qty, strawberryimg)}
        />
        <ProductCardComponent
          name="Matcha Milktea"
          img={matchaimg}
          productDesc="Fall in love with the creamy sweetness of matcha! A sip of berrylicious joy in every cup."
          price="₱60"
          rating={5}
          onAddToCart={(qty) => handleAddToCart("Matcha Milktea", "₱60", qty, matchaimg)}
        />
        <ProductCardComponent
          name="Chocolate Milktea"
          img={chocolateimg}
          productDesc="Fall in love with the creamy sweetness of chocolate! A sip of berrylicious joy in every cup."
          price="₱55"
          rating={5}
          onAddToCart={(qty) => handleAddToCart("Chocolate Milktea", "₱55", qty, chocolateimg)}
        />
        <ProductCardComponent
          name="Strawberry Milktea"
          img={strawberryimg}
          productDesc="Fall in love with the creamy sweetness of strawberry! A sip of berrylicious joy in every cup."
          price="₱75"
          rating={5}
          onAddToCart={(qty) => handleAddToCart("Strawberry Milktea", "₱75", qty, strawberryimg)}
        />
        <ProductCardComponent
          name="Matcha Milktea"
          img={matchaimg}
          productDesc="Fall in love with the creamy sweetness of matcha! A sip of berrylicious joy in every cup."
          price="₱60"
          rating={5}
          onAddToCart={(qty) => handleAddToCart("Matcha Milktea", "₱60", qty, matchaimg)}
        />
        <ProductCardComponent
          name="Chocolate Milktea"
          img={chocolateimg}
          productDesc="Fall in love with the creamy sweetness of chocolate! A sip of berrylicious joy in every cup."
          price="₱55"
          rating={5}
          onAddToCart={(qty) => handleAddToCart("Chocolate Milktea", "₱55", qty, chocolateimg)}
        />
      </div>
    </>
  );
}

export default App;
