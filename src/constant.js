export const ProductCategories = [
    {
        text:'Clothes',
        value:'clothes'
    },
    {
        text:'Footwear',
        value:'footwear'
    },
    {
        text:'Bags',
        value:'bags'
    },
    {
        text:' Accessories',
        value:' accessories'
    },
    {
        text:'Home & living',
        value:'homeliving'
    },
    {
        text:'Groceries',
        value:'groceries'
    },
    {
        text:'Books',
        value:'books'
    },
    {
        text:'Electronics',
        value:'electronics'
    },
    {
        text:'Cosmetics & beauty',
        value:'cosmeticsbeauty'
    },
    {
        text:'Health care',
        value:'healthcare'
    }
]
export const ratingFilter = [ 
    {
        name : `4 `,
        subtext: ' & above',
        value : 4,

    },
    {
        name : `3 `,
        subtext: ' & above',
        value : 3

    },
    {
        name : `2 `,
        subtext: ' & above',
        value : 2

    },
    {
        name : `1 `,
        subtext: ' & above',
        value : 1

    }
]
export const sortingOptions = [
    {
        'name' : "What's new",
        'value': 'createdBy'
    },
    {
        'name' : 'Most Reviewed',
        'value': 'numOfReviews'
    },
    {
        'name': 'Customer Ratings',
        'value' : 'ratings'
    },
    {
        'name':'Price : Low to High',
        'value': 'price-lth'
    },
    {
        'name':'Price : High to Low',
        'value': 'price-htl'
    },
]
export const EmallInfo = [
    {
        'name' : 'About Us',
        'value' : 'about-us'
    },
    {
        'name' : 'Contact Us',
        'value' : 'contact-us'
    },
    {
        'name' : 'E-mall Story',
        'value' : 'emall-story'
    }
]
export const customerPolicies = [
    {
        'name' : 'Terms of Use',
        'value' : 'terms-of-use'
    },
    {
        'name' : 'FAQ',
        'value' : 'faq'
    },
    {
        'name' : 'Privacy',
        'value' : 'privacy'
    },
    {
        'name' : 'Cancellation & Return',
        'value' : 'cancellations'
    },
    {
        'name' : 'Shipping',
        'value' : 'shipping'
    },
    {
        'name' : 'Track Orders',
        'value' : 'track-orders'
    },
    {
        'name' : 'Payments',
        'value' : 'payments'
    },
    {
        'name' : 'Sitemap',
        'value' : 'sitemap'
    }
]
export const customerRatingUiInitialState = [
    {val:4,bool:false},{val:3,bool:false},{val:2,bool:false},{val:1,bool:false}
] 
export const offerList = [
    {
        text:'<span>Bank Offer:</span> 10% instant discount on SBI Credit Card EMI Transactions, up to ₹1,750 on orders of ₹5,000 and above <span>T&C</span>',
        id:1
    },
    {
        text:'<span>Bank Offer:</span> Extra ₹500 off on SBI Credit Card EMI Transactions, on a Net Cart Value of ₹25,000 and above <span>T&C</span>',
        id:2
    },
    {
        text:'<span>Bank Offer:</span> Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm account <span>T&C</span>',
        id:3
    },
    {
        text:'<span>Bank Offer:</span>5% Cashback on Flipkart Axis Bank Card <span>T&C</span>',
        id:4
    },
    {
        text:'Use Code: <span>EmallGIFT</span> and get Rs 200 off (Valid only on first order).<span>Know more.</span>',
        id:5
    },
    {
        text:'Get 5% discount on all the products. Valid for purchase of above Rs. 20,000.<span>Know more.</span>',
        id:6
    }
]
export const ratingsDisplayList = [
    {
        'reviewCount': 0,
        'reviewPercentage':0,
        'rating':1
    },
    {
        'reviewCount': 0,
        'reviewPercentage':0,
        'rating':2
    },
    {
        'reviewCount': 0,
        'reviewPercentage':0,
        'rating':3
    },
    {
        'reviewCount': 0,
        'reviewPercentage':0,
        'rating':4
    },
    {
        'reviewCount': 0,
        'reviewPercentage':0,
        'rating':5
    },
]
{/* <div><Link to={`/login`}>SignIn/SignUP</Link></div>
            <div><Link to={`/profile`}>My Profile</Link></div>
            <div><Link to={'/orders'}>My Orders</Link></div>
            <div><Link to={'/wishlist'}>My WishList</Link></div>
            <div>Offers/Rewards</div>
            <div onClick={logoutUserHandler}>Logout</div> */}
export const UserNav = [
    {
        text : 'My Account',
        options : [
            {
                text: 'SignIn/SignUp',
                path: '/login'
            },
            {
                text: 'My Profile',
                path: '/profile'
            },
            {
                text: 'My Orders',
                path: '/orders'
            },
            {
                text: 'My WishList',
                path: '/wishlist'
            },
            {
                text: 'Offers/Rewards',
                path: '/offers'
            },
            {
                text: 'Logout'
            },
        ]
    },
    {
        text : 'Wishlist',
        path: '/wishlist'
    },
    {
        text : 'Cart',
        path: '/cart'
    },
]
const categoryNav = [
    {
        text: 'Logout'
    },
]