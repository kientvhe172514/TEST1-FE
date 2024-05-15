import React from 'react'

function ProductDetail() {
  return (
    <>
      <main className="main-content">
        <div className="breadcrumb-area breadcrumb-height" data-bg-image="assets/images/breadcrumb/bg/1-1-1919x388.jpg">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-12">
                <div className="breadcrumb-item">
                  <h2 className="breadcrumb-heading">Single Product</h2>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Single Product variable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="single-product-area section-space-top-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="single-product-img">

                  <div className="thumbs-arrow-holder">
                    <div className="swiper-container single-product-thumbs">
                      <div className="swiper-wrapper">
                        <a href="#" className="swiper-slide">
                          <img className="img-full" src="assets/images/product/large-size/1-1-570x633.jpg" alt="Product Thumnail" />
                        </a>
                        <a href="#" className="swiper-slide">
                          <img className="img-full" src="assets/images/product/large-size/1-2-570x633.jpg" alt="Product Thumnail" />
                        </a>
                        <a href="#" className="swiper-slide">
                          <img className="img-full" src="assets/images/product/large-size/1-3-570x633.jpg" alt="Product Thumnail" />
                        </a>
                        <a href="#" className="swiper-slide">
                          <img className="img-full" src="assets/images/product/large-size/1-4-570x633.jpg" alt="Product Thumnail" />
                        </a>
                      </div>

                      <div className=" thumbs-button-wrap d-none d-md-block">
                        <div className="thumbs-button-prev">
                          <i className="pe-7s-angle-left"></i>
                        </div>
                        <div className="thumbs-button-next">
                          <i className="pe-7s-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 pt-5 pt-lg-0">
                <div className="single-product-content">
                  <h2 className="title">American Marigold</h2>
                  <div className="price-box">
                    <span className="new-price">$23.45</span>
                  </div>
                  <div className="rating-box-wrap">
                    <div className="rating-box">
                      <ul>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                    </div>
                    <div className="review-status">
                      <a href="#">( 1 Review )</a>
                    </div>
                  </div>
                 
                  <div className="selector-wrap size-option">
                    <span className="selector-title">Size</span>
                    <select className="nice-select wide rounded-0">
                      <option value="medium">Size M-20000</option>
                      <option value="large">Size L-30000</option>
                      <option value="small">Size XL-45000</option>
                    </select>
                  </div>
                  
                  <div className="note-input">
                    <span className="note-label">Thêm ghi chú của bạn:</span>
                    <input type="text" className="note-text" placeholder='VD: 50% đường 50% đá' />
                  </div>


                  <div className="product-category">
                    <span className="title">Categories :</span>
                        Trà sữa
                  </div>
                  <p className="short-desc">Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod
                    tempo incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate</p>
                  <ul className="quantity-with-btn">
                    <li className="quantity">
                      <div className="cart-plus-minus">
                        <input className="cart-plus-minus-box" value="1" type="text" />
                      </div>
                    </li>
                    <li className="add-to-cart">
                      <a className="btn btn-custom-size lg-size btn-pronia-primary" href="cart.html">Add to
                        cart</a>
                    </li>
                    <li className="wishlist-btn-wrap">
                      <a className="custom-circle-btn" href="wishlist.html">
                        <i className="pe-7s-like"></i>
                      </a>
                    </li>
                    <li className="compare-btn-wrap">
                      <a className="custom-circle-btn" href="compare.html">
                        <i className="pe-7s-refresh-2"></i>
                      </a>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="product-tab-area section-space-top-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ul className="nav product-tab-nav tab-style-2 pt-0" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="tab-btn" id="information-tab" data-bs-toggle="tab" href="#information" role="tab" aria-controls="information" aria-selected="false">
                      Information
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="active tab-btn" id="description-tab" data-bs-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">
                      Description
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="tab-btn" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">
                      Reviews(3)
                    </a>
                  </li>
                </ul>
                <div className="tab-content product-tab-content">
                  <div className="tab-pane fade" id="information" role="tabpanel" aria-labelledby="information-tab">
                    <div className="product-information-body">
                      <h4 className="title">Shipping</h4>
                      <p className="short-desc mb-4">The item will be shipped from China. So it need 15-20 days to
                        deliver. Our product is good with reasonable price and we believe you will worth it.
                        So please wait for it patiently! Thanks.Any question please kindly to contact us and
                        we promise to work hard to help you to solve the problem</p>
                      <h4 className="title">About return request</h4>
                      <p className="short-desc mb-4">If you don't need the item with worry, you can contact us
                        then we will help you to solve the problem, so please close the return request!
                        Thanks</p>
                      <h4 className="title">Guarantee</h4>
                      <p className="short-desc mb-0">If it is the quality question, we will resend or refund to
                        you; If you receive damaged or wrong items, please contact us and attach some
                        pictures about product, we will exchange a new correct item to you after the
                        confirmation.</p>
                    </div>
                  </div>
                  <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                    <div className="product-description-body">
                      <p className="short-desc mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                        qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                        sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                        nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                    <div className="product-review-body">
                      <div className="blog-comment mt-0">
                        <h4 className="heading">Comments (03)</h4>
                        <div className="blog-comment-item">
                          <div className="blog-comment-img">
                            <img src="assets/images/blog/avatar/1-1-120x120.png" alt="User Image" />
                          </div>
                          <div className="blog-comment-content">
                            <div className="user-meta">
                              <h2 className="user-name">Donald Chavez</h2>
                              <span className="date">21 July 2021</span>
                            </div>
                            <p className="user-comment">Lorem ipsum dolor sit amet, consectetur adipisi
                              elit, sed
                              do eiusmod tempor incidid ut labore etl dolore magna aliqua. Ut enim ad
                              minim
                              veniam, quis nostrud exercitati ullamco laboris nisi ut aliquiex ea
                              commodo
                              consequat.
                            </p>
                            <a className="btn btn-custom-size comment-btn" href="#">Reply</a>
                          </div>
                        </div>
                        <div className="blog-comment-item relpy-item">
                          <div className="blog-comment-img">
                            <img src="assets/images/blog/avatar/1-2-120x120.png" alt="User Image" />
                          </div>
                          <div className="blog-comment-content">
                            <div className="user-meta">
                              <h2 className="user-name">Marissa Swan</h2>
                              <span className="date">21 July 2021</span>
                            </div>
                            <p className="user-comment">Lorem ipsum dolor sit amet, consectetur adipisi
                              elit, sed do
                              eiusmod tempr incidid ut labore etl dolore magna aliqua. Ut enim ad
                              minim veniam,
                              quisnos exercitati ullamco laboris nisi ut aliquiex.
                            </p>
                            <a className="btn btn-custom-size comment-btn style-2" href="#">Reply</a>
                          </div>
                        </div>
                        <div className="blog-comment-item">
                          <div className="blog-comment-img">
                            <img src="assets/images/blog/avatar/1-3-120x120.png" alt="User Image" />
                          </div>
                          <div className="blog-comment-content">
                            <div className="user-meta">
                              <h2 className="user-name">Donald Chavez</h2>
                              <span className="date">21 July 2021</span>
                            </div>
                            <p className="user-comment">Lorem ipsum dolor sit amet, consectetur adipisi
                              elit, sed
                              do eiusmod tempor incidid ut labore etl dolore magna aliqua. Ut enim ad
                              minim
                              veniam, quis nostrud exercitati ullamco laboris nisi ut aliquiex ea
                              commodo
                              consequat.
                            </p>
                            <a className="btn btn-custom-size comment-btn" href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      <div className="feedback-area">
                        <h2 className="heading">Leave a comment</h2>
                        <form className="feedback-form" action="#">
                          <div className="group-input">
                            <div className="form-field me-md-30 mb-30 mb-md-0">
                              <input type="text" name="name" placeholder="Your Name*" className="input-field" />
                            </div>
                            <div className="form-field">
                              <input type="text" name="email" placeholder="Your Email*" className="input-field" />
                            </div>
                          </div>
                          <div className="form-field mt-30">
                            <input type="text" name="subject" placeholder="Subject (Optinal)" className="input-field" />
                          </div>
                          <div className="form-field mt-30">
                            <textarea name="message" placeholder="Message" className="textarea-field"></textarea>
                          </div>
                          <div className="button-wrap pt-5">
                            <button type="submit" value="submit" className="btn btn-custom-size xl-size btn-pronia-primary" name="submit">Post
                              Comment</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <!-- Begin Product Area --> */}
        {/* <div className="product-area section-space-y-axis-90">
          <div className="container">
            <div className="row">
              <div className="section-title-wrap without-tab">
                <h2 className="section-title">Related Products</h2>
                <p className="section-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                  roots in a piece of classNameical Latin literature
                </p>
              </div>
              <div className="col-lg-12">
                <div className="swiper-container product-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide product-item">
                      <div className="product-img">
                        <a href="single-product-variable.html">
                          <img className="primary-img" src="assets/images/product/medium-size/1-9-270x300.jpg" alt="Product Images" />
                          <img className="secondary-img" src="assets/images/product/medium-size/1-10-270x300.jpg" alt="Product Images" />
                        </a>
                        <div className="product-add-action">
                          <ul>
                            <li>
                              <a href="wishlist.html" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i className="pe-7s-like"></i>
                              </a>
                            </li>
                            <li className="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
                              <a href="#" data-tippy="Quickview" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i className="pe-7s-look"></i>
                              </a>
                            </li>
                            <li>
                              <a href="cart.html" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i className="pe-7s-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <a className="product-name" href="single-product-variable.html">American Marigold</a>
                        <div className="price-box pb-1">
                          <span className="new-price">$23.45</span>
                        </div>
                        <div className="rating-box">
                          <ul>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product-item">
                      <div className="product-img">
                        <a href="single-product-variable.html">
                          <img className="primary-img" src="assets/images/product/medium-size/1-10-270x300.jpg" alt="Product Images" />
                          <img className="secondary-img" src="assets/images/product/medium-size/1-11-270x300.jpg" alt="Product Images" />
                        </a>
                        <div className="product-add-action">
                          <ul>
                            <li>
                              <a href="wishlist.html" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i className="pe-7s-like"></i>
                              </a>
                            </li>
                            <li className="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
                              <a href="#" data-tippy="Quickview" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i className="pe-7s-look"></i>
                              </a>
                            </li>
                            <li>
                              <a href="cart.html" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i className="pe-7s-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <a className="product-name" href="single-product-variable.html">Black Eyed Susan</a>
                        <div className="price-box pb-1">
                          <span className="new-price">$25.45</span>
                        </div>
                        <div className="rating-box">
                          <ul>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product-item">
                      <div className="product-img">
                        <a href="single-product-variable.html">
                          <img className="primary-img" src="assets/images/product/medium-size/1-11-270x300.jpg" alt="Product Images" />
                          <img className="secondary-img" src="assets/images/product/medium-size/1-4-270x300.jpg" alt="Product Images" />
                        </a>
                        <div className="product-add-action">
                          <ul>
                            <li>
                              <a href="wishlist.html" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i className="pe-7s-like"></i>
                              </a>
                            </li>
                            <li className="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
                              <a href="#" data-tippy="Quickview" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i className="pe-7s-look"></i>
                              </a>
                            </li>
                            <li>
                              <a href="cart.html" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i className="pe-7s-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <a className="product-name" href="single-product-variable.html">Bleeding Heart</a>
                        <div className="price-box pb-1">
                          <span className="new-price">$30.45</span>
                        </div>
                        <div className="rating-box">
                          <ul>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product-item">
                      <div className="product-img">
                        <a href="single-product-variable.html">
                          <img className="primary-img" src="assets/images/product/medium-size/1-7-270x300.jpg" alt="Product Images" />
                          <img className="secondary-img" src="assets/images/product/medium-size/1-8-270x300.jpg" alt="Product Images" />
                        </a>
                        <div className="product-add-action">
                          <ul>
                            <li>
                              <a href="wishlist.html" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i className="pe-7s-like"></i>
                              </a>
                            </li>
                            <li className="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
                              <a href="#" data-tippy="Quickview" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i className="pe-7s-look"></i>
                              </a>
                            </li>
                            <li>
                              <a href="cart.html" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i className="pe-7s-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <a className="product-name" href="single-product-variable.html">Bloody Cranesbill</a>
                        <div className="price-box pb-1">
                          <span className="new-price">$45.00</span>
                        </div>
                        <div className="rating-box">
                          <ul>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                            <li><i className="fa fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- Product Area End Here --> */}

      </main>
    </>
  )
}

export default ProductDetail