import React, { useState } from 'react'
import './footer.css';
import { ProductCategories,EmallInfo ,customerPolicies} from '../../constant';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const Footer = (props) => {
  const navigate = useNavigate();
  const [newslettermail,setnewslettermail] = useState("");
  const sendCategory = (val) => {
    props.checkByCategory(val)
  }
  const moveToPolicyDetails = (val) => {
    navigate(`/${val}`)
  }
  const subscribeToNewsLetter = (e) => {
    e.preventdefault();
    setnewslettermail("");
    return;
  }
  return (
    <div className='footer-main'>
  <div className="container footer">
    <div className="row">
      <div className="col-md-3">
        <h3>Categories</h3>
        <ul>
        {ProductCategories.map(product => <li className='category-footer-text' key={product.value} onClick={() => sendCategory(product.value)}>{product.text}</li>)}
        </ul>
      </div>
      <div className="col-md-3">
        <h3>Information</h3>
        <ul>
          {EmallInfo.map(element => <li key={element.value} className='about-info' onClick={(e) => moveToPolicyDetails(element.value)}>{element.name}</li>)}
        </ul>
      </div>
      <div className="col-md-3">
        <h3>Customer Policies</h3>
        <ul>
          {customerPolicies.map(policy => <li key={policy.value} className='customer-policy' onClick={(e) => moveToPolicyDetails(policy.value)}>{policy.name}</li>)}
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
        <form onSubmit={subscribeToNewsLetter}>
          <input type="email" value={newslettermail} onChange={(e) => setnewslettermail(e.target.value)} placeholder="Enter your email" required />
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