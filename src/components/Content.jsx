const Content = () => {
  return (
    <div className="content">
      <div className="detail">
        <p className="heading">YOUR FEET DESERVE THE BEST</p>

        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis mollitia error ipsum rem odit amet, aliquid possimus cupiditate nihil, facere obcaecati accusamus aliquam molestias facilis magnam aperiam omnis ad!</p>

        <div className="shop-btns">
          <button className="shop-btn1">Shop Now</button>
          <button className="shop-btn2">Category</button>
        </div>

        <div>
          <p>Also available at</p>
          <div className="shop-links">
          <a href="#">
          <img src="/images/flipkart.png" alt="flipkart" />
          </a>
          <a href="#">
          <img src="/images/amazon.png" alt="amazon" />
          </a>
          </div>
          
          
          
        </div>
      </div>
      <div className="shoe-img">
        <img src="/images/shoe_image.png" alt="shoe-img" />
      </div>
    </div>
  )
}

export default Content