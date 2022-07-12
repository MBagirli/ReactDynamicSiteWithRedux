import { createSlice, configureStore } from "@reduxjs/toolkit";

let initialForCart = { Products: [], Quantity: 0, show: false };

let CartSlice = createSlice({
  name: "Cart",
  initialState: initialForCart,
  reducers: {
    AddToCart(state, action) {
      state.show = true;
      let bool = true;
      for (let i in state.Products) {
        if (state.Products[i].name === action.payload.name) {
          if (
            action.payload.quantity === 0 ||
            action.payload.quantity === "" ||
            action.payload.quantity === "0"
          ) {
            state.Quantity =
              Number(state.Quantity) - Number(state.Products[i].quantity);
            state.Products[i].quantity = 0;
            state.Products.splice(i, 1);
          } else {
            state.Quantity =
              Number(state.Quantity) -
              Number(state.Products[i].quantity) +
              Number(action.payload.quantity);
            state.Products[i].quantity = action.payload.quantity;
          }
          bool = false;
          break;
        }
      }
      if (bool) {
        if (
          action.payload.quantity === 0 ||
          action.payload.quantity === "0" ||
          action.payload.quantity === ""
        ) {
          state.Products.push({
            name: action.payload.name,
            price: action.payload.price,
            quantity: 1,
          });
          state.Quantity += 1;
        } else {
          state.Products.push({
            name: action.payload.name,
            price: action.payload.price,
            quantity: action.payload.quantity,
          });
          state.Quantity += Number(action.payload.quantity);
        }
      }
    },
    Add(state, action) {
      state.show = true;
      for (let i of state.Products) {
        if (i.name === action.payload.name) {
          i.quantity = Number(i.quantity) + 1;
          state.Quantity = Number(state.Quantity) + 1;
        }
      }
    },
    Delete(state, action) {
      state.show = true;
      for (let i in state.Products) {
        if (state.Products[i].name === action.payload.name) {
          state.Products[i].quantity = Number(state.Products[i].quantity) - 1;
          state.Quantity = Number(state.Quantity) - 1;
          if (state.Products[i].quantity === 0) {
            state.Products.splice(i, 1);
          }
        }
      }
    },
    Initialize(state, action) {
      state.show = false;
      action.payload.Products.map((item) => {
        return state.Products.push(item);
      });
      console.log(action.payload.Quantity);
      state.Quantity = Number(action.payload.Quantity);
    },
  },
});

let initialMiniPopup = { state: "", message: "" };

let MiniPopupSlice = createSlice({
  name: "MiniPopupSlice",
  initialState: initialMiniPopup,
  reducers: {
    Show(state, action) {
      state.message = action.payload.message;
      state.state = action.payload.state;
    },
  },
});

let initialPopup = { Opened: false };

let PopupSlice = createSlice({
  name: "Popup",
  initialState: initialPopup,
  reducers: {
    Open(state, action) {
      state.Opened = action.payload;
    },
  },
});

export let actionFunctionForCart = (SelectedProducts) => {
  return (MiniPopupDispatch) => {
    MiniPopupDispatch(
      MiniPopupActions.Show({ message: "Loading...", state: "loading" })
    );

    let HttpRequest = async () => {
      try {
        let response = await fetch(
          "https://dynamicreactsitewithredux-default-rtdb.firebaseio.com/Cart.json",
          {
            method: "PUT",
            body: JSON.stringify(SelectedProducts),
          }
        );
        MiniPopupDispatch(
          MiniPopupActions.Show({
            message: "Successfully added to cart!",
            state: "success",
          })
        );
      } catch {
        MiniPopupDispatch(
          MiniPopupActions.Show({ message: "Error!", state: "error" })
        );
      }
    };

    HttpRequest();
  };
};

export let forFetchFromFireBase = () => {
  return (dispatch) => {
    let HttpRequest = async () => {
      try {
        let response = await fetch(
          "https://dynamicreactsitewithredux-default-rtdb.firebaseio.com/Cart.json"
        );
        let data = await response.json();
        if (data.Products === undefined) {
          data.Products = [];
        }
        dispatch(CartActions.Initialize(data));
      } catch {
        dispatch(MiniPopupActions.Show({ message: "Error!", state: "error" }));
      }
    };

    HttpRequest();
  };
};

export let PopupActions = PopupSlice.actions;
export let CartActions = CartSlice.actions;
export let MiniPopupActions = MiniPopupSlice.actions;
export let store = configureStore({
  reducer: {
    Cart: CartSlice.reducer,
    MiniPopup: MiniPopupSlice.reducer,
    Popup: PopupSlice.reducer,
  },
});
