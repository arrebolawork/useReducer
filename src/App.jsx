import { useReducer } from "react";
const initalState = {
  email: "",
  password: "",
  address: "",
  address2: "",
  city: "",
  zip: "",
  checkOut: false,
};
function useProbandoReducer(state, action) {
  switch (action.type) {
    case "CH_Email": {
      return {
        ...state,
        email: action.value,
      };
    }
    case "CH_Password": {
      return {
        ...state,
        password: action.value,
      };
    }
    case "CH_Address": {
      return {
        ...state,
        address: action.value,
      };
    }
    case "CH_Address2": {
      return {
        ...state,
        address2: action.value,
      };
    }
    case "CH_City": {
      return {
        ...state,
        city: action.value,
      };
    }
    case "CH_Zip": {
      return {
        ...state,
        zip: action.value,
      };
    }
    case "CH_checkOut": {
      return {
        ...state,
        checkOut: action.value,
      };
    }
  }

  return state;
}
export default function App() {
  const [state, dispatch] = useReducer(useProbandoReducer, initalState);
  function FormHandler(event) {
    event.preventDefault();
    console.log(state);
  }
  return (
    <form className='row g-3' onSubmit={FormHandler}>
      <div className='col-md-6'>
        <label htmlFor='inputEmail4' className='form-label'>
          Email
        </label>
        <input type='email' className='form-control' id='inputEmail4' value={state.email} onChange={(e) => dispatch({ type: "CH_Email", value: e.target.value })} />
      </div>
      <div className='col-md-6'>
        <label htmlFor='inputPassword4' className='form-label'>
          Password
        </label>
        <input type='password' className='form-control' id='inputPassword4' value={state.password} onChange={(e) => dispatch({ type: "CH_Password", value: e.target.value })} />
      </div>
      <div className='col-12'>
        <label htmlFor='inputAddress' className='form-label'>
          Address
        </label>
        <input type='text' className='form-control' id='inputAddress' placeholder='1234 Main St' value={state.address} onChange={(e) => dispatch({ type: "CH_Address", value: e.target.value })} />
      </div>
      <div className='col-12'>
        <label htmlFor='inputAddress2' className='form-label'>
          Address 2
        </label>
        <input type='text' className='form-control' id='inputAddress2' placeholder='Apartment, studio, or floor' value={state.address2} onChange={(e) => dispatch({ type: "CH_Address2", value: e.target.value })} />
      </div>
      <div className='col-md-6'>
        <label htmlFor='inputCity' className='form-label'>
          City
        </label>
        <input type='text' className='form-control' id='inputCity' value={state.city} onChange={(e) => dispatch({ type: "CH_City", value: e.target.value })} />
      </div>

      <div className='col-md-2'>
        <label htmlFor='inputZip' className='form-label'>
          Zip
        </label>
        <input type='text' className='form-control' id='inputZip' value={state.zip} onChange={(e) => dispatch({ type: "CH_Zip", value: e.target.value })} />
      </div>
      <div className='col-12'>
        <div className='form-check'>
          <input className='form-check-input' type='checkbox' id='gridCheck' value={state.checkOut} onChange={(e) => dispatch({ type: "CH_checkOut", value: e.target.checked })} />
          <label className='form-check-label' htmlFor='gridCheck'>
            Check me out
          </label>
        </div>
      </div>
      <div className='col-12'>
        <button type='submit' className='btn btn-primary'>
          Sign in
        </button>
      </div>
    </form>
  );
}
