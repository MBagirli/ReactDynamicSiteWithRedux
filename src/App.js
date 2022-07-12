import './App.css';
import Header from './Components/Header/Header';
import MainSection from './Components/Sections/MainSection/MainSection';
import Text from './Components/Additional/Text';
import ListSection from './Components/Sections/ListSection/ListSection';
import MiniPopup from './Components/Popup/MiniPopup';
import Popup from './Components/Popup/Popup';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {actionFunctionForCart} from './Components/ReduxToolKit/store';
import {forFetchFromFireBase} from './Components/ReduxToolKit/store'

let BM = true;

function App() {

  let SelectedProducts = useSelector(state=>state.Cart);
  let MiniPopupShow = useSelector(state=>state.Cart.show);
  let PopupShow = useSelector(state=>state.Popup.Opened);
  let dispatch = useDispatch();

  useEffect(()=>{

    if(BM){
      BM=false;
      dispatch(forFetchFromFireBase());
      return;
    }

    dispatch(actionFunctionForCart(SelectedProducts));
  },[SelectedProducts,dispatch]);

  return (
    <div className="App">
      {PopupShow && <Popup />}
      {MiniPopupShow && <MiniPopup />}
      <Header/>
      <MainSection/>
      <Text/>
      <ListSection/>
    </div>
  );
}

export default App;
