import React from 'react';
import Slider from '@mui/material/Slider';
import './products.css';
import Checkbox from '@mui/material/Checkbox';
import { ratingFilter , sortingOptions} from '../../constant';
import { AiFillStar } from 'react-icons/ai';
import { RiArrowDropDownLine } from 'react-icons/ri';

const ProductsFilter = (props) => {
  return (
    <div className='products-filter'>
        <div className='filter-main'>
            <span className='filter-text'>Price</span>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={props.price}
                onChange={props.priceHandler}
                valueLabelDisplay="auto"
                getAriaValueText={props.getPriceValue}
                disableSwap
                min = {0}
                max= {100000}
                sx={{
                    width: '80%',
                    color: '#0079bf',
                }}/>
        </div>
        <div className='filter-main'>
            <span className='filter-text'>Customer Ratings</span>
            {ratingFilter.map(rating => 
                <span className='rating-row' key={rating.value}>
                    <Checkbox  onChange={(e) => props.filterByRating(e,rating.value)}/>
                    <span>{rating.name}</span>
                    < AiFillStar />
                    <span>{rating.subtext}</span>
                </span>
            )}
        </div>
        <div className='filter-main '>
            <span className='filter-text'>Sort By </span>
            <div className='sort-main'>
                <span className='sort-button'>
                    <span>{props.sort.name}</span>
                    < RiArrowDropDownLine />
                </span>
                <ul>
                {sortingOptions.map(option => (<li key={option.value} className={option.value === props.sort.value ? 'active' : ''} onClick={()=>{props.sortHandler(option)}}>{option.name}</li>)
                )}
                </ul>  
            </div>

        </div>
    </div>
)
}

export default ProductsFilter