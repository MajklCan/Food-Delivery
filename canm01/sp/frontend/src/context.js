import React, { createContext, useReducer, useEffect } from "react";
import axios from 'axios'



//import {getTotal} from "./cart"


/* --- */
const VERSION = "2.0" // VERSION, CHANGE FOR LOCALSTORAGE OVERRIDE
const EXPIRATION_TIME = 120 //[minutes]LOCALSTORAGE EXPIRY 
/* --- */

let AppContext = createContext();

const initialState = {
  user: false,
  cart: [],
  activeRestaurant: null,
  total:false,
}

let reducer = (state, action) => {
  console.log(action.type)

  switch(action.type) {
    // case "LOGIN": {
    //   return { ...state, user: action.payload }
    // }
    // case "LOADUSER": {
    //   console.log("Loading user:",action.payload)
    //   checkForPromotionReward()
    //   return { ...state, user: action.payload }
    // }
    // case "LOGOUT": {
    //   return { ...state, user:false}
    // }

    // case "LOADCART": {
    //   return { ...state, cart: action.payload }
    // }
    // case "ADD_TO_CART": {
    //   const found = state.cart.find(x => x.polozka_id === action.payload.polozka_id)
    //   if(found && JSON.stringify(found.extraItems) == JSON.stringify(action.payload.extraItems)){ //Pokud už obsahuje zvýšit quantity
    //     found.quantity +=action.payload.quantity
    //     //Add active restaurant
    //     return {...state,cart: [...state.cart]}
    //   }else{
    //     return { ...state, cart: [...state.cart, action.payload]} 
    //   }
    // }
    // case "UPDATE_ITEM": {
    //   //state.cart.find(x => x.polozka_id === action.payload.polozka_id) 
    //   return {...state,cart: [...state.cart]}
    // }
    // case "DELETE_ITEM": {
    //   if(state.cart.length==1){
    //     localStorage.setItem('cart', "[]");
    //     localStorage.setItem('activeRestaurant', "null");
    //     return {...state,activeRestaurant:null,cart: state.cart.filter((item) => item!==action.payload)}
    //   }else{
    //     return {...state,cart: state.cart.filter((item) => item!==action.payload)}
    //   }
    // }
    // case "EMPTY_CART": {
    //     localStorage.setItem('cart', "[]");
    //     return {...state,cart: []}
    // }
    // case "SET_ACTIVERESTAURANT": {
    //   let activeRestaurant = action.payload

    //   console.log(state.location?.polygonRestaurants,activeRestaurant)
    //   let rest_found = false//state.location?.polygonRestaurants.find(r => r.restaurace_id == activeRestaurant.id)
    //   console.log("Context/set_activerestaurant - Rest_found:",rest_found)

    //   if(false){ //Includes restaurant
    //     console.log("Overriding set active rest, rest polygons")
    //     activeRestaurant.delivery_price+= Number(rest_found.doprava)
    //     activeRestaurant.delivery_tmax += Number(rest_found.cas)
    //     activeRestaurant.delivery_tmin += Number(rest_found.cas)
    //     activeRestaurant.isFreeDelivery = rest_found.nofreedelivery ? 0 : activeRestaurant.isFreeDelivery
    //   }

    //   localStorage.setItem('activeRestaurant', JSON.stringify(action.payload));
    //   return {...state,activeRestaurant}
    // }
    // case "LOADACTIVERESTAURANT": {
    //   return { ...state, activeRestaurant: action.payload }
    // }
    // case "LOADLOCATION": {
    //   localStorage.setItem('location', JSON.stringify(action.payload));
    //   if(state.activeRestaurant && state.cart.length>0 && state.activeRestaurant.mesto_url !== action.payload.mesto_url){ //Mesto změněno
    //     localStorage.removeItem('activeRestaurant')
    //     localStorage.removeItem('cart')
    //     return { ...state,cart:[],activeRestaurant:null, location: action.payload }
    //   }else{ //Default
    //     return { ...state, location: action.payload }
    //   }
      
    // }
    // case "REMOVELOCATION": {
    //   console.log("remove location")
    //   localStorage.removeItem('location')
    //   return { ...state, location: null }
    // }
    // case "ORDERFINISHED": {
    //   localStorage.removeItem('cart')
    //   localStorage.removeItem('activeRestaurant')

    //   return { ...state, cart: [], activeRestaurant: null,totalAddition:{creditsUsed:0,tipCourier:0},}
    // }
    // case "CONVERSION": {
    //   console.log(action.payload)
    //   let {order_number,data} = action.payload
    //   if(order_number && data && state.user_tracking == true && state.cookies_permission?.analytic  && state.cookies_permission?.marketing){
    //     checkForConversions(order_number,data)
    //   }
    //   return {...state}
    // }
    // case "COMPUTETOTAL": {
    //   return { ...state, total: getTotal(state.cart,state.activeRestaurant,state.totalAddition,state.location)}
    // }
    // case "SET_TOTALADDITION": {
    //   return { ...state, totalAddition: action.payload}
    // }
    // case "SET_RESTAURANT_FILTER":{
    //   return {...state,restaurantFilter:action.payload}
    // }
    // case "REMOVE_RESTAURANT_FILTER":{
    //   return {...state,restaurantFilter:false}
    // }
    // case "SET_CHECKBOX_RESTAURANT_FILTER":{
    //   return {...state,checkbox_restaurantFilter:action.payload}
    // }
    // case "SET_NAME_RESTAURANT_FILTER":{
    //   return {...state,name_restaurantFilter:action.payload}
    // }
    // case "SET_PLATFORM":{
    //   return {...state,platform:action.payload}
    // }

    // case "COMPARE_LOCALSTORAGE":{
    //   let {cart,activeRestaurant,location} = action.payload
    //   let overrideRest = false
    //   let overrideLocation = false
    //   if(activeRestaurant=="rest_is_inactive")
    //     overrideRest=true
    //   if(location=="non_existing_kod_adm")
    //     overrideLocation=true
      
    //   return {...state, cart: (cart || state.cart), activeRestaurant: (overrideRest? null : (activeRestaurant||state.activeRestaurant)), location: (overrideLocation?null: location|| state.location)}
    // }
    // case "SET_ORDER_PROPERTIES":{
    //   return {...state,...action.payload}
    // }
    // case "LOAD_NOTIFICATIONTOKEN":{
    //   return {...state,notification_token:action.payload}
    // }
    // case "ENABLE_TRACKING":{
    //   console.log("ENABLED USER TRACKING")
    //   return {...state,user_tracking:true}
    // }
    // case "SET_COOKIES_PERMISSION":{
    //   console.log("SET COOKIES PERMISSION")
    //   localStorage.setItem('cookies_permission', JSON.stringify(action.payload));
    //   return {...state,cookies_permission:action.payload}
    // }

  }
  return state;
}


function AppContextProvider(props) {

  let [state, dispatch] = useReducer(reducer, initialState);
  let value = { state, dispatch };

  useEffect(() => {
    dispatch({ type: 'COMPUTETOTAL' })
  }, [state.cart,state.activeRestaurant,state.totalAddition,state.location])

//   useEffect(() => {
//     axios({
//       method: 'get',
//       url: '/api/auth'
//     }).then(response => {
//       console.log("Response: /api/auth/ ",response)
//       if (response.data)
//         dispatch({ type: 'LOADUSER', payload: response.data })
//     })
//   }, [])

//   useEffect(() => {
//     if(state.cart.length>0){
//       localStorage.setItem('cart', JSON.stringify(state.cart));
//     }
    
//     let isLunch = !!state.cart.find(item=>item.isLunchItem)

//     let deliveryLaterFrom = state.cart.find(item=>item.naDruhyDenOd)?.naDruhyDenOd || false

//     let isMultiRest =  !!state.cart.find(item=>item.user_id!= state.cart[0]?.user_id)

//     console.log("deliveryLaterFrom: ",deliveryLaterFrom)
    
//     dispatch({ type: 'SET_ORDER_PROPERTIES', payload:  {isLunch,isMultiRest,deliveryLaterFrom}})
    
//   },[state.cart]) 



  useEffect(() => {

    // checkVersion()
    // checkExpiry() 
    // checkTrackingPermision(dispatch)

    // let cookies_permission = JSON.parse(localStorage.getItem('cookies_permission'))

    // if(cookies_permission){
    //   dispatch({ type: 'SET_COOKIES_PERMISSION', payload: cookies_permission })
    // }

    // let localCart = JSON.parse(localStorage.getItem('cart'))
    // let localActiveRestaurant = JSON.parse(localStorage.getItem('activeRestaurant'))
    // let localLocation = JSON.parse(localStorage.getItem('location'))

    // if(localLocation)
    //   dispatch({ type: 'LOADLOCATION', payload: localLocation })

    // if(localCart && localActiveRestaurant){
    //   dispatch({ type: 'LOADCART', payload: localCart })
    //   dispatch({ type: 'LOADACTIVERESTAURANT', payload: localActiveRestaurant })
    // }
    
    // if(false && (localCart || localActiveRestaurant || localLocation)){

    //   (async function(){
    //     let checkResult = await checkLsValidity({
    //       cart:localCart || [],
    //       activeRestaurant: localActiveRestaurant,
    //       location: localLocation
    //     })
  
    //     dispatch({ type: 'COMPARE_LOCALSTORAGE', payload: checkResult })
    //   })()
      

    // }
    
    
  }, []) 



  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };

