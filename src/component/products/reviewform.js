import React, { useState } from 'react';
import useInput from '../../hooks/useinput';
import style from './review.module.css';
import { AiFillStar,AiOutlineStar } from 'react-icons/ai';


const ReviewForm = (props) => {
    const {value:comment,valueIsValid:commentIsValid ,hasError:commentHasError,valueChangeHandler:commentChangeHandler,inputBlurHandler:commentBlurHandler,reset:commentReset} = useInput();
    const [ratings,setRatings] = useState(0);
    const diableBtn = ratings < 1 ? true : false;
    let submitBtnClass = diableBtn ? `${style["form-group"]} ${style.inactivebtn}` : `${style["form-group"]}`;
    const submitReview = (e) => {
        e.preventDefault();
        let data = {
            rating : ratings,
            comment : comment
        }
        props.submitReviewHandler(data);
    }
    const addRatingInput = (starVal) => {
        setRatings(starVal);
    }
  return <div className={style.reviewform}>
  <form onSubmit={submitReview}>
      <div className={style["form-group"]}>
          <label>Rating *</label>
          <div className={style.reviewstarinput}>
            <span onClick={(e) => addRatingInput(1)} id="1">{ratings >= 1 ? <AiFillStar/> : <AiOutlineStar/>}</span>
            <span onClick={(e) => addRatingInput(2)} id="2">{ratings >= 2 ? <AiFillStar/> : <AiOutlineStar/>}</span>
            <span onClick={(e) => addRatingInput(3)} id="3">{ratings >= 3 ? <AiFillStar/> : <AiOutlineStar/>}</span>
            <span  onClick={(e) => addRatingInput(4)} id="4">{ratings >= 4 ? <AiFillStar/> : <AiOutlineStar/>}</span>
            <span onClick={(e) => addRatingInput(5)} id="5">{ratings >= 5 ? <AiFillStar/> : <AiOutlineStar/>}</span>
          </div>
      </div>
      <div className={style["form-group"]}>
          <label>Comment</label>
          <input type='' value={comment} onChange={commentChangeHandler} onBlur={commentBlurHandler}/>
      </div>
      <div className={submitBtnClass}>
      <button disabled={diableBtn} type='submit'>Add Your Review</button>
      </div>
  </form>
</div>
}

export default ReviewForm