import React from "react";
import Product from "../../../components/Product/Product";

function ListProduct() {
  return (
    <>
      <div class="shop-area section-space-y-axis-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">

                {/* ========== UL =============== */}
              <div class="product-topbar">
                <ul>
                  <li class="page-count">
                    <span>12</span> Product Found of <span>30</span>
                  </li>
                  <li class="product-view-wrap">
                    <ul class="nav" role="tablist">
                      <li class="grid-view" role="presentation">
                        <a
                          class="active"
                          id="grid-view-tab"
                          data-bs-toggle="tab"
                          href="#grid-view"
                          role="tab"
                          aria-selected="true"
                        >
                          <i class="fa fa-th"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="short">
                    <select class="nice-select">
                      <option value="1">Sort by Default</option>
                      <option value="2">Sort by Popularity</option>
                      <option value="3">Sort by Rated</option>
                      <option value="4">Sort by Latest</option>
                      <option value="5">Sort by High Price</option>
                      <option value="6">Sort by Low Price</option>
                    </select>
                  </li>
                </ul>
              </div>
                {/* ========== UL =============== */}

              {/* ================ TAB - CONTENT =================== */}
              <div class="tab-content">
                <div
                  class="tab-pane fade show active"
                  id="grid-view"
                  role="tabpanel"
                  aria-labelledby="grid-view-tab"
                >
                  <div class="product-grid-view row g-y-1">
                    {/* ================ product =================== */}
                      {/* PRODUCT CONTENT */}
                      <div class="product-item">
                        <div class="product-img">
                          <a href="productDetail">
                            <img
                              class="primary-img"
                              src="assets/images/product/medium-size/1-1-270x300.jpg"
                              alt="Product Images"
                            />
                            <img
                              class="secondary-img"
                              src="assets/images/product/medium-size/1-2-270x300.jpg"
                              alt="Product Images"
                            />
                          </a>
                          <div class="product-add-action">
                            <ul>
                              <li>
                                <a
                                  href="wishlist.html"
                                  data-tippy="Add to wishlist"
                                  data-tippy-inertia="true"
                                  data-tippy-animation="shift-away"
                                  data-tippy-delay="50"
                                  data-tippy-arrow="true"
                                  data-tippy-theme="sharpborder"
                                >
                                  <i class="pe-7s-like"></i>
                                </a>
                              </li>
                              <li
                                class="quuickview-btn"
                                data-bs-toggle="modal"
                                data-bs-target="#quickModal"
                              >
                                <a
                                  href="#"
                                  data-tippy="Quickview"
                                  data-tippy-inertia="true"
                                  data-tippy-animation="shift-away"
                                  data-tippy-delay="50"
                                  data-tippy-arrow="true"
                                  data-tippy-theme="sharpborder"
                                >
                                  <i class="pe-7s-look"></i>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="cart.html"
                                  data-tippy="Add to cart"
                                  data-tippy-inertia="true"
                                  data-tippy-animation="shift-away"
                                  data-tippy-delay="50"
                                  data-tippy-arrow="true"
                                  data-tippy-theme="sharpborder"
                                >
                                  <i class="pe-7s-cart"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="product-content">
                          <a
                            class="product-name"
                            href="single-product-variable.html"
                          >
                            American Marigold
                          </a>
                          <div class="price-box pb-1">
                            <span class="new-price">$23.45</span>
                          </div>
                          <div class="rating-box">
                            <ul>
                              <li>
                                <i class="fa fa-star"></i>
                              </li>
                              <li>
                                <i class="fa fa-star"></i>
                              </li>
                              <li>
                                <i class="fa fa-star"></i>
                              </li>
                              <li>
                                <i class="fa fa-star"></i>
                              </li>
                              <li>
                                <i class="fa fa-star"></i>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <Product/>
                      <Product/>
                    {/* ================ product-content =================== */}
                  </div>
                </div>
              </div>
              {/* ================ TAB - CONTENT =================== */}
                                  
              {/* ================ PAGINATION =================== */}
              <div class="pagination-area">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li class="page-item active">
                      <a class="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        &raquo;
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* ================ PAGINATION =================== */}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListProduct;
