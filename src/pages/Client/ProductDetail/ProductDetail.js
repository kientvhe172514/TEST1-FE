import { Radio } from 'antd'
import React from 'react'
import { Button, Form, Input, InputNumber, Select, Space, Switch } from "antd";
import "./ProductDetail.css"
import { Option } from 'antd/es/mentions';
function ProductDetail() {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    console.log(values)
    // const response = await createRoom(values);
    // console.log(response);
    // if (response) {
    //     form.resetFields();
    // }
  };
  return (

    <>
      <main class="main-content">
        <div class="breadcrumb-area breadcrumb-height" data-bg-image="assets/images/breadcrumb/bg/1-1-1919x388.jpg">
          <div class="container h-100">
            <div class="row h-100">
              <div class="col-lg-12">
                <div class="breadcrumb-item">
                  <h2 class="breadcrumb-heading">Single Product</h2>
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

        <div class="single-product-area section-space-top-100">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="single-product-img">

                  <div class="thumbs-arrow-holder">
                    <div class="swiper-container single-product-thumbs">
                      <div class="swiper-wrapper">
                        <a href="#" class="swiper-slide">
                          <img class="img-full" src="assets/images/product/large-size/1-1-570x633.jpg" alt="Product Thumnail" />
                        </a>
                        <a href="#" class="swiper-slide">
                          <img class="img-full" src="assets/images/product/large-size/1-2-570x633.jpg" alt="Product Thumnail" />
                        </a>
                        <a href="#" class="swiper-slide">
                          <img class="img-full" src="assets/images/product/large-size/1-3-570x633.jpg" alt="Product Thumnail" />
                        </a>
                        <a href="#" class="swiper-slide">
                          <img class="img-full" src="assets/images/product/large-size/1-4-570x633.jpg" alt="Product Thumnail" />
                        </a>
                      </div>

                      <div class=" thumbs-button-wrap d-none d-md-block">
                        <div class="thumbs-button-prev">
                          <i class="pe-7s-angle-left"></i>
                        </div>
                        <div class="thumbs-button-next">
                          <i class="pe-7s-angle-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Form
                name="create-room"
                onFinish={handleSubmit}
                form={form}

              >


                <div class="col-lg-6 pt-5 pt-lg-0">
                  <div class="single-product-content">
                    <h2 class="title">American Marigold</h2>
                    <div class="price-box">
                      <span class="new-price">$23.45</span>
                    </div>
                    <div class="rating-box-wrap">
                      <div class="rating-box">
                        <ul>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                          <li><i class="fa fa-star"></i></li>
                        </ul>
                      </div>
                      <div class="review-status">
                        <a href="#">( 1 Review )</a>
                      </div>
                    </div>
                    <Form.Item
                      name="Size"
                      label="Size:"
                      rules={[{ required: true, message: 'Please select the utilities!' }]}
                    >
                      <Select mode="multiple" allowClear placeholder="Select your utilities">
                        <Option value={JSON.stringify({ name: 'Size M', price: 20000 })}>Size M-20000</Option>
                        <Option value={JSON.stringify({ name: 'Size L', price: 30000 })}>Size L-30000</Option>
                        <Option value={JSON.stringify({ name: 'Size XL', price: 45000 })}>Size XL-45000</Option>
                      </Select>

                      {/* <Select mode="multiple" allowClear placeholder="Select your utilities">
                        <Option value="Size M">Size M-20000</Option>
                        <Option value=" Size L"> Size L-30000</Option>
                        <Option value="Size XL">Size XL-45000</Option>
                      </Select> */}

                    </Form.Item>

                    <Form.Item
                      name="Topping"
                      label="Topping"
                      rules={[{ required: true, message: 'Please select the utilities!' }]}
                    >
                      <Select mode="multiple" allowClear placeholder="Select your utilities">
                        <Option value={JSON.stringify({ name: 'Thạch', price: 5000 })}>Thạch-5000</Option>
                        <Option value={JSON.stringify({ name: 'Chân trâu', price: 5000 })}> Chân trâu-5000</Option>
                        <Option value={JSON.stringify({ name: 'Pudding', price: 5000 })}>Pudding-5000</Option>
                        <Option value={JSON.stringify({ name: 'Phô mai', price: 5000 })}>Phô mai-5000</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                      label="Ghi chú"
                      name="description"
                    >
                      <Input.TextArea rows={2} showCount maxLength={100} placeholder='Ví dụ: 50% đường'/>
                    </Form.Item>


                    <div class="product-category">
                      <span class="title">Categories :</span>
                      Trà sữa
                    </div>
                    <Form.Item
                      label="Số Lượng"
                      name="quantityOrder"
                      rules={[
                        {
                          required: true,
                          message: 'Please input the number of order!',
                        },
                      ]}
                    >
                      <InputNumber min={1} max={1000} />
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Add to cart
                      </Button>
                    </Form.Item>


                    <p class="short-desc">Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod
                      tempo incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate</p>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div >

        {/* <div class="product-tab-area section-space-top-100">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <ul class="nav product-tab-nav tab-style-2 pt-0" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a class="tab-btn" id="information-tab" data-bs-toggle="tab" href="#information" role="tab" aria-controls="information" aria-selected="false">
                      Information
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="active tab-btn" id="description-tab" data-bs-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">
                      Description
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a class="tab-btn" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">
                      Reviews(3)
                    </a>
                  </li>
                </ul>
                <div class="tab-content product-tab-content">
                  <div class="tab-pane fade" id="information" role="tabpanel" aria-labelledby="information-tab">
                    <div class="product-information-body">
                      <h4 class="title">Shipping</h4>
                      <p class="short-desc mb-4">The item will be shipped from China. So it need 15-20 days to
                        deliver. Our product is good with reasonable price and we believe you will worth it.
                        So please wait for it patiently! Thanks.Any question please kindly to contact us and
                        we promise to work hard to help you to solve the problem</p>
                      <h4 class="title">About return request</h4>
                      <p class="short-desc mb-4">If you don't need the item with worry, you can contact us
                        then we will help you to solve the problem, so please close the return request!
                        Thanks</p>
                      <h4 class="title">Guarantee</h4>
                      <p class="short-desc mb-0">If it is the quality question, we will resend or refund to
                        you; If you receive damaged or wrong items, please contact us and attach some
                        pictures about product, we will exchange a new correct item to you after the
                        confirmation.</p>
                    </div>
                  </div>
                  <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                    <div class="product-description-body">
                      <p class="short-desc mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
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
                  <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                    <div class="product-review-body">
                      <div class="blog-comment mt-0">
                        <h4 class="heading">Comments (03)</h4>
                        <div class="blog-comment-item">
                          <div class="blog-comment-img">
                            <img src="assets/images/blog/avatar/1-1-120x120.png" alt="User Image" />
                          </div>
                          <div class="blog-comment-content">
                            <div class="user-meta">
                              <h2 class="user-name">Donald Chavez</h2>
                              <span class="date">21 July 2021</span>
                            </div>
                            <p class="user-comment">Lorem ipsum dolor sit amet, consectetur adipisi
                              elit, sed
                              do eiusmod tempor incidid ut labore etl dolore magna aliqua. Ut enim ad
                              minim
                              veniam, quis nostrud exercitati ullamco laboris nisi ut aliquiex ea
                              commodo
                              consequat.
                            </p>
                            <a class="btn btn-custom-size comment-btn" href="#">Reply</a>
                          </div>
                        </div>
                        <div class="blog-comment-item relpy-item">
                          <div class="blog-comment-img">
                            <img src="assets/images/blog/avatar/1-2-120x120.png" alt="User Image" />
                          </div>
                          <div class="blog-comment-content">
                            <div class="user-meta">
                              <h2 class="user-name">Marissa Swan</h2>
                              <span class="date">21 July 2021</span>
                            </div>
                            <p class="user-comment">Lorem ipsum dolor sit amet, consectetur adipisi
                              elit, sed do
                              eiusmod tempr incidid ut labore etl dolore magna aliqua. Ut enim ad
                              minim veniam,
                              quisnos exercitati ullamco laboris nisi ut aliquiex.
                            </p>
                            <a class="btn btn-custom-size comment-btn style-2" href="#">Reply</a>
                          </div>
                        </div>
                        <div class="blog-comment-item">
                          <div class="blog-comment-img">
                            <img src="assets/images/blog/avatar/1-3-120x120.png" alt="User Image" />
                          </div>
                          <div class="blog-comment-content">
                            <div class="user-meta">
                              <h2 class="user-name">Donald Chavez</h2>
                              <span class="date">21 July 2021</span>
                            </div>
                            <p class="user-comment">Lorem ipsum dolor sit amet, consectetur adipisi
                              elit, sed
                              do eiusmod tempor incidid ut labore etl dolore magna aliqua. Ut enim ad
                              minim
                              veniam, quis nostrud exercitati ullamco laboris nisi ut aliquiex ea
                              commodo
                              consequat.
                            </p>
                            <a class="btn btn-custom-size comment-btn" href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                      <div class="feedback-area">
                        <h2 class="heading">Leave a comment</h2>
                        <form class="feedback-form" action="#">
                          <div class="group-input">
                            <div class="form-field me-md-30 mb-30 mb-md-0">
                              <input type="text" name="name" placeholder="Your Name*" class="input-field" />
                            </div>
                            <div class="form-field">
                              <input type="text" name="email" placeholder="Your Email*" class="input-field" />
                            </div>
                          </div>
                          <div class="form-field mt-30">
                            <input type="text" name="subject" placeholder="Subject (Optinal)" class="input-field" />
                          </div>
                          <div class="form-field mt-30">
                            <textarea name="message" placeholder="Message" class="textarea-field"></textarea>
                          </div>
                          <div class="button-wrap pt-5">
                            <button type="submit" value="submit" class="btn btn-custom-size xl-size btn-pronia-primary" name="submit">Post
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
        {/* <div class="product-area section-space-y-axis-90">
          <div class="container">
            <div class="row">
              <div class="section-title-wrap without-tab">
                <h2 class="section-title">Related Products</h2>
                <p class="section-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                  roots in a piece of classical Latin literature
                </p>
              </div>
              <div class="col-lg-12">
                <div class="swiper-container product-slider">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide product-item">
                      <div class="product-img">
                        <a href="single-product-variable.html">
                          <img class="primary-img" src="assets/images/product/medium-size/1-9-270x300.jpg" alt="Product Images" />
                          <img class="secondary-img" src="assets/images/product/medium-size/1-10-270x300.jpg" alt="Product Images" />
                        </a>
                        <div class="product-add-action">
                          <ul>
                            <li>
                              <a href="wishlist.html" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i class="pe-7s-like"></i>
                              </a>
                            </li>
                            <li class="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
                              <a href="#" data-tippy="Quickview" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i class="pe-7s-look"></i>
                              </a>
                            </li>
                            <li>
                              <a href="cart.html" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i class="pe-7s-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="product-content">
                        <a class="product-name" href="single-product-variable.html">American Marigold</a>
                        <div class="price-box pb-1">
                          <span class="new-price">$23.45</span>
                        </div>
                        <div class="rating-box">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide product-item">
                      <div class="product-img">
                        <a href="single-product-variable.html">
                          <img class="primary-img" src="assets/images/product/medium-size/1-10-270x300.jpg" alt="Product Images" />
                          <img class="secondary-img" src="assets/images/product/medium-size/1-11-270x300.jpg" alt="Product Images" />
                        </a>
                        <div class="product-add-action">
                          <ul>
                            <li>
                              <a href="wishlist.html" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i class="pe-7s-like"></i>
                              </a>
                            </li>
                            <li class="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
                              <a href="#" data-tippy="Quickview" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i class="pe-7s-look"></i>
                              </a>
                            </li>
                            <li>
                              <a href="cart.html" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i class="pe-7s-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="product-content">
                        <a class="product-name" href="single-product-variable.html">Black Eyed Susan</a>
                        <div class="price-box pb-1">
                          <span class="new-price">$25.45</span>
                        </div>
                        <div class="rating-box">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide product-item">
                      <div class="product-img">
                        <a href="single-product-variable.html">
                          <img class="primary-img" src="assets/images/product/medium-size/1-11-270x300.jpg" alt="Product Images" />
                          <img class="secondary-img" src="assets/images/product/medium-size/1-4-270x300.jpg" alt="Product Images" />
                        </a>
                        <div class="product-add-action">
                          <ul>
                            <li>
                              <a href="wishlist.html" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i class="pe-7s-like"></i>
                              </a>
                            </li>
                            <li class="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
                              <a href="#" data-tippy="Quickview" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i class="pe-7s-look"></i>
                              </a>
                            </li>
                            <li>
                              <a href="cart.html" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i class="pe-7s-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="product-content">
                        <a class="product-name" href="single-product-variable.html">Bleeding Heart</a>
                        <div class="price-box pb-1">
                          <span class="new-price">$30.45</span>
                        </div>
                        <div class="rating-box">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide product-item">
                      <div class="product-img">
                        <a href="single-product-variable.html">
                          <img class="primary-img" src="assets/images/product/medium-size/1-7-270x300.jpg" alt="Product Images" />
                          <img class="secondary-img" src="assets/images/product/medium-size/1-8-270x300.jpg" alt="Product Images" />
                        </a>
                        <div class="product-add-action">
                          <ul>
                            <li>
                              <a href="wishlist.html" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i class="pe-7s-like"></i>
                              </a>
                            </li>
                            <li class="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
                              <a href="#" data-tippy="Quickview" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i class="pe-7s-look"></i>
                              </a>
                            </li>
                            <li>
                              <a href="cart.html" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                <i class="pe-7s-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="product-content">
                        <a class="product-name" href="single-product-variable.html">Bloody Cranesbill</a>
                        <div class="price-box pb-1">
                          <span class="new-price">$45.00</span>
                        </div>
                        <div class="rating-box">
                          <ul>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
                            <li><i class="fa fa-star"></i></li>
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

      </main >
    </>
  )
}

export default ProductDetail