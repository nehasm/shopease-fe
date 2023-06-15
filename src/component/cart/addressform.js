import React, { useState } from 'react';
import useInput from '../../hooks/useinput';
import fromstyle from '../account/login.module.css'
import style from '../cart/order.module.css'

const Addressform = (props) => {
const [disable,setDisable] = useState(false);
  const {value:address,valueIsValid:addressIsValid ,hasError:addressHasError,valueChangeHandler:addressChangeHandler,inputBlurHandler:addressBlurHandler,reset:addressReset} = useInput('is_not_empty');
  const {value:city,valueIsValid:cityIsValid ,hasError:cityHasError,valueChangeHandler:cityChangeHandler,inputBlurHandler:cityBlurHandler,reset:cityReset} = useInput('is_not_empty');
  const {value:state,valueIsValid:stateIsValid ,hasError:stateHasError,valueChangeHandler:stateChangeHandler,inputBlurHandler:stateBlurHandler,reset:stateReset} = useInput('is_not_empty');
  const {value:pincode,valueIsValid:pincodeIsValid ,hasError:pincodeHasError,valueChangeHandler:pincodeChangeHandler,inputBlurHandler:pincodeBlurHandler,reset:pincodeReset} = useInput('is_not_empty');
  const {value:phone,valueIsValid:phoneIsValid ,hasError:phoneHasError,valueChangeHandler:phoneChangeHandler,inputBlurHandler:phoneBlurHandler,reset:phoneReset} = useInput('is_not_empty');
  let formIsValid = false;
  let addressbtnClass = fromstyle.addbtndisable;
  if(addressIsValid && cityIsValid && stateIsValid & pincodeIsValid & phoneIsValid) {
      formIsValid = true;
      addressbtnClass = fromstyle.addressbtnenable;
  }
  const addAddressHandler = (e) => {
      e.preventDefault();
      if(!disable) {
        setDisable(true);
        props.isAddressValidAdded({
            address,
            city,
            state,
            country:"India",
            pincode,
            phone
        })
        return;
      }
      setDisable(false)
  }
  return <div className={style.addressformmain}>
  <div className={style.addressform}>
  <form onSubmit={addAddressHandler}>
      <div className={fromstyle["form-group"]}>
          <input disabled={disable} type='text' value={address} placeholder='Enter Address *' onChange={addressChangeHandler} onBlur={addressBlurHandler}/>
          {addressHasError && <p>Please enter your address.</p>}
      </div>
      <div className={fromstyle["form-group"]}>
          <input disabled={disable} type='text' value={city} placeholder='Enter your city name *' onChange={cityChangeHandler} onBlur={cityBlurHandler}/>
          {cityHasError && <p>Please enter a valid city name.</p>}
      </div>
      <div className={fromstyle["form-group"]}>
          <input disabled={disable} type='text' value={state} placeholder='Enter your state name *' onChange={stateChangeHandler} onBlur={stateBlurHandler}/>
          {stateHasError && <p>Please enter a valid state name.</p>}
      </div >
      <div className={fromstyle["form-group"]}>
          <input type='text' disabled value={`India`} onChange={stateChangeHandler} onBlur={stateBlurHandler}/>
      </div >
      <div className={fromstyle["form-group"]}>
          <input disabled={disable} type='text' value={pincode}  placeholder='Enter your pincode *' onChange={pincodeChangeHandler} onBlur={pincodeBlurHandler}/>
          {pincodeHasError && <p>Please enter a valid pincode number.</p>}
      </div >
      <div className={fromstyle["form-group"]}>
          <input disabled={disable} type='text' value={phone} placeholder='Enter your phone number *' onChange={phoneChangeHandler} onBlur={phoneBlurHandler}/>
          {phoneHasError && <p>Please enter a valid phone number.</p>}
      </div >
      <div className={`${fromstyle["form-group"]} ${addressbtnClass}`}>
      <button disabled={!formIsValid} type='submit'>{disable ? "Edit Address" : "Save Address" }</button> 
      </div>
      
  </form>
</div>
  </div>

}

export default Addressform;