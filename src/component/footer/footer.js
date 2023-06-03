import React from 'react'
import './footer.css';
import { ProductCategories,EmallInfo ,customerPolicies} from '../../constant';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

const Footer = () => {
  return (
    <div className='footer-main'>
  <div className="container footer">
    <div className="row">
      <div className="col-md-3">
        <h3>Categories</h3>
        <ul>
        {ProductCategories.map(product => <li key={product.valuegg}>{product.name}</li>)}
        </ul>
      </div>
      <div className="col-md-3">
        <h3>Information</h3>
        <ul>
          {EmallInfo.map(element => <li key={element.value} className='about-info'>{element.name}</li>)}
        </ul>
      </div>
      <div className="col-md-3">
        <h3>Customer Policies</h3>
        <ul>
          {customerPolicies.map(policy => <li key={policy.value} className='customer-policy'>{policy.name}</li>)}
        </ul>
      </div>
      <div className="col-md-3">
        <span className='social-media-main'>
        <h3>Follow US</h3>
        <span className='social-icons'>
        <FaFacebookSquare/>
        <GrInstagram/>
        <BsTwitter />
        </span>
        </span>
        <span className='news-letter'>
        <h3>Newsletter</h3>
        <p>Subscribe to our newsletter to receive news, updates, and special offers:</p>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
        </span>
      </div>
    </div>
    <div className='row footer-line'></div>
    <div className="row">
      <div className="col-md-12">
        <p className="text-center">&copy; 2023 Neha Malvia, All rights reserved.</p>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Footer