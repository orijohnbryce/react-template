import { useEffect, useState } from "react";
import AddProduct from "./components/AddProduct";
import Products from "./components/Products";
import Register from "./components/Register";
import DeleteProduct from "./components/DeleteProduct";
import Login from "./components/Login";
import Categories from "./components/Categories";
import { handleLogout } from "./utils/helpers";

function App() {
  const [whatToShow, setWhatToShow] = useState("products");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // check if user & token exists in storage
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user")).user;
      setUserData(user);
    }
  }, []);

  return (
    <div>
      {console.log(userData)}
      {userData?.firstName && (
        <div>
          <span> Hi {userData.firstName} </span>
          <button
            onClick={() => {
              handleLogout();
              setUserData({});
            }}
          >            
            Logout
          </button>
          <br />
        </div>
      )}
        {! userData?.firstName && <button
          onClick={() => {
            setWhatToShow("register");
          }}
        >
          register
        </button>}
        {!userData?.firstName && (
          <button
            onClick={() => {
              setWhatToShow("login");
            }}
          >
            login
          </button>
        )}
      <br />
      <br />
      <div>
        <button
          onClick={() => {
            setWhatToShow("products");
          }}
        >
          products
        </button>
        <button
          onClick={() => {
            setWhatToShow("addProduct");
          }}
        >
          add-product
        </button>
        <button
          onClick={() => {
            setWhatToShow("deleteProduct");
          }}
        >
          delete-product
        </button>
        <button
          onClick={() => {
            setWhatToShow("categories");
          }}
        >
          categories
        </button>


        {whatToShow === "register" && <Register />}
        {whatToShow === "products" && <Products />}
        {whatToShow === "addProduct" && <AddProduct />}
        {whatToShow === "deleteProduct" && <DeleteProduct />}
        {whatToShow === "login" && <Login setUserData={setUserData} />}
        {whatToShow === "categories" && <Categories />}
      </div>
    </div>
  );
}

export default App;
