import React from 'react';

const products = [
  {
    id: 1,
    name: 'Cake',
    priceRange: '$11 - $99',
    description: 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos',
    imageUrl: './assets/img/product-1.jpg'
  },
  {
    id: 2,
    name: 'Bread',
    priceRange: '$11 - $99',
    description: 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos',
    imageUrl: './assets/img/product-2.jpg'
  },
  {
    id: 3,
    name: 'Cookies',
    priceRange: '$11 - $99',
    description: 'Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos',
    imageUrl: './assets/img/product-3.jpg'
  }
  // Add more products as needed
];

const Product = () => {
  return (
    <div>
      <div className="container-fluid page-header py-6 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center pt-5 pb-3">
          <h1 className="display-4 text-white animated slideInDown mb-3">Products</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
              <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
              <li className="breadcrumb-item text-primary active" aria-current="page">Products</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Product Start --> */}
      <div className="container-xxl bg-light my-6 py-6 pt-0" >
        <div className="container">
          <div className="bg-primary text-light rounded-bottom p-5 my-6 mt-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 text-light mb-0">The Best Bakery In Your City</h1>
              </div>
              <div className="col-lg-6 text-lg-end">
                <div className="d-inline-flex align-items-center text-start">
                  <i className="fa fa-phone-alt fa-4x flex-shrink-0"></i>
                  <div className="ms-4">
                    <p className="fs-5 fw-bold mb-0">Call Us</p>
                    <p className="fs-1 fw-bold mb-0">+012 345 6789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
            <p className="text-primary text-uppercase mb-2">// Bakery Products</p>
            <h1 className="display-6 mb-4">Explore The Categories Of Our Bakery Products</h1>
          </div>
          <div className="row g-4">
            {products.map(product => (
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={product.id}>
                <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                  <div className="text-center p-4">
                    <div className="d-inline-block border border-primary rounded-pill px-3 mb-3">{product.priceRange}</div>
                    <h3 className="mb-3">{product.name}</h3>
                    <span>{product.description}</span>
                  </div>
                  <div className="position-relative mt-auto">
                    <img className="img-fluid" src={product.imageUrl} alt={product.name} />
                    <div className="product-overlay">
                      <a className="btn btn-lg-square btn-outline-light rounded-circle" href=""><i className="fa fa-eye text-primary"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- Product End --> */}
    </div>
  );
}

export default Product;
