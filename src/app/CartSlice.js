import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        toast.success(`item Quantity increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);

        toast.success(`${action.payload.title} added to cart`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setRemoveItemFromCart: (state, action) => {
        const removeItem = state.cartItems.filter((item) => item.id != action.payload.id);

        state.cartItems = removeItem;
        localStorage.setItem("cart", JSON.stringify(state.cartItems))

        toast.success(`${action.payload.title} Removed From Cart`)
    },
    setIncreaseItemQTY: (state, action) => {
        const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
    
          if (itemIndex >= 0) {
            state.cartItems[itemIndex].cartQuantity += 1;
    
            toast.success(`item Quantity increased`);
          }
          localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setDecreaseItemQTY: (state, action) => {
        const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
    
          if (state.cartItems[itemIndex].cartQuantity > 1) {
            state.cartItems[itemIndex].cartQuantity -= 1;
    
            toast.success(`item Quantity DEcreased`);
          }
          localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setClearCartItem: (state, action) => {
        state.cartItems = []
        toast.success(`Cart Cleared`)
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
    }
  },
});
export const { setOpenCart, setCloseCart, setAddItemToCart, setRemoveItemFromCart, setIncreaseItemQTY, setDecreaseItemQTY, setClearCartItem } =
  CartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems =(state) => state.cart.cartItems
export default CartSlice.reducer;
