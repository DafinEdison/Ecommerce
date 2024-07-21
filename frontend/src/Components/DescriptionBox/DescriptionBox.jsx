import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce site is your one-stop shop online, offering the convenience of browsing and buying products from anywhere, anytime. Imagine a vast virtual store with a wide variety of items, detailed descriptions, clear pricing, and high-quality images. You can easily find what you need using search bars and filters, add items to your cart, and securely pay using various options. E-commerce sites often feature customer reviews and ratings to help you make informed decisions, and provide customer service through email, chat, or phone for any questions you might have.</p>
        <p>
        This translates to several benefits for you: the ability to shop 24/7, access a wider selection of products than physical stores, compare prices easily, avoid checkout lines, and choose a delivery method that suits your needs. E-commerce has revolutionized shopping, making it a more convenient and efficient experience.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
