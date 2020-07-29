import React  from "react";
import CounterDisplay from "../component/counter/CounterDisplay";
import CounterControlPanel from "../component/counter/CounterControlPanel";
import {connect} from 'react-redux'
import { actionTypes } from "../store/actionTypes";

function Counter(props) {



  return (
    <div>
      <CounterDisplay counter={props.ctr} />
      <CounterControlPanel
        text="Increase"
        change={props.increase}
      />
      <CounterControlPanel 
        text="Decrease"
        change= {props.decrease}
      />
      <CounterControlPanel
        text="Plus"
        change={props.plus}
      />
      <CounterControlPanel
        text="Minus"
        change={props.minus}
      />
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
   ctr: state.counter 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increase: ()=> dispatch({type: actionTypes.INCREASE}),
    decrease: ()=> dispatch({type: actionTypes.DECREASE}),
    plus: ()=> dispatch({type: actionTypes.PLUS}),
    minus: ()=> dispatch({type: actionTypes.MINUS})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
