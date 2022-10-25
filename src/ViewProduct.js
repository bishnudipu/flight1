import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "./Context";
import moment from "moment/moment";
import "./ViewProduct.css";
const ViewProduct = () => {
  const { id } = useParams();
  console.log(id, "id");
  const { product } = useGlobalContext();
  const [findingProduct, setFindingProduct] = useState({});
  console.log(product, "product");

  const mainProduct = product.map((item) => item.flight_number);
  console.log(mainProduct, "mainProduct");

  console.log("mainProduct2");

  useEffect(() => {
    if (product.length > 0) {
      console.log(id, "id");
      console.log(product);
      console.log("bishnu");
      setFindingProduct(
        product.find((item) => item?.flight_number === Number(id))
      );
      console.log(id, "idafter");

      console.log(product);
      console.log("bishnu");
    }
  }, [id, product]);
  console.log(findingProduct, "findProduct");
  /**
   * name, launch_date_local, flight_number, details, launch_success, list
of payloads, webcast_liftoff, article, wikipedia link, rocket_name , company name
and country name 
   */

  return (
    <div className="container-fluid ms-auto w-100 ">
      <div className="row no-gutters">
        <div className="col-md-5 pr-2">
          <div className="card">
            <div className="demo"></div>
          </div>
          <div className="card mt-2">
            <h6> Launch Date :</h6>
            <p>
              {" "}
              {moment(findingProduct.launch_date_local).format(
                "MMM Do YY"
              )}{" "}
            </p>

            <hr />
            <h6> FlightNumber :</h6>
            <p> {findingProduct.flight_number} </p>
            <hr />
            <h6> Details :</h6>
            <p> {findingProduct.details} </p>
            <hr />
            <h6> Launch Success :</h6>
            <p> {findingProduct.true ? "Passed" : "failed"} </p>
            <hr />
            <h6>List of payloads :</h6>
            <p>N/A</p>
            <hr />
            <h6> Webcast_liftoff :</h6>
            <p> {findingProduct.timeline?.webcast_liftoff} </p>
            <hr />
            <h6> Article :</h6>
            <p> N/A </p>
            <hr />
            <h6> Wikipedia link :</h6>
            <p> N/A </p>
            <hr />
            <h6> Rocket Name :</h6>
            <p> {findingProduct.rocket?.rocket_name} </p>
            <hr />
            <h6> Company name :</h6>
            <p> N/A </p>
            <hr />
            <h6> Country Name :</h6>
            <p> N/A </p>
          </div>
        </div>
        {/* <div className="col-md-7">
            <div className="card">
                <div className="d-flex flex-row align-items-center">
                    <div className="p-ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className="ml-1">5.0</span>
                </div>
                <div className="about"> <span className="font-weight-bold">IKEA x HAY Ypperlig Collection </span>
                    <h4 className="font-weight-bold">$3,444</h4>
                </div>
                <div className="buttons"> <button className="btn btn-outline-warning btn-long cart">Add to Cart</button> <button className="btn btn-warning btn-long buy">Buy it Now</button> <button className="btn btn-light wishlist"> <i className="fa fa-heart"></i> </button> </div>
                <hr/>
                <div className="product-description">
                    <div><span className="font-weight-bold">Color:</span><span> blue</span></div>
                    <div className="my-color"> <label className="radio"> <input type="radio" name="gender" value="MALE" checked> <span className="red"></span> </label> <label className="radio"> <input type="radio" name="gender" value="FEMALE"> <span className="blue"></span> </label> <label className="radio"> <input type="radio" name="gender" value="FEMALE"> <span className="green"></span> </label> <label className="radio"> <input type="radio" name="gender" value="FEMALE"> <span className="orange"></span> </label> </div>
                    <div className="d-flex flex-row align-items-center"> <i className="fa fa-calendar-check-o"></i> <span className="ml-1">Delivery from sweden, 15-45 days</span> </div>
                    <div className="mt-2"> <span className="font-weight-bold">Description</span>
                        <p>The minimalist collaboration features chairs, lightening, Shelves, Sofas, Desks and various home accessories, all offering form and function at the same point.We use high-strength clamps and joinery techniques specially designed for engineered wood beds. Ergo, no irksome creaks - and you can sleep like a baby, well into adulthood!</p>
                        <div className="bullets">
                            <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Best in Quality</span> </div>
                            <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Anti-creak joinery</span> </div>
                            <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Sturdy laminate surfaces</span> </div>
                            <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Relocation friendly design</span> </div>
                            <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">High gloss, high style</span> </div>
                            <div className="d-flex align-items-center"> <span className="dot"></span> <span className="bullet-text">Easy-access hydraulic storage</span> </div>
                        </div>
                    </div>
                    <div className="mt-2"> <span className="font-weight-bold">Store</span> </div>
                    <div className="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/N2fYgvD.png" className="rounded-circle store-image">
                        <div className="d-flex flex-column ml-1 comment-profile">
                            <div className="comment-ratings"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className="username">Rare Boutique</span> <small className="followers">25K Followers</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-2"> <span>Similar items:</span>
                <div className="similar-products mt-2 d-flex flex-row">
                    <div className="card border p-1" style="width: 9rem;margin-right: 3px;"> <img src="https://i.imgur.com/KZpuufK.jpg" className="card-img-top" alt="...">
                        <div className="card-body">
                            <h6 className="card-title">$1,999</h6>
                        </div>
                    </div>
                    <div className="card border p-1" style="width: 9rem;margin-right: 3px;"> <img src="https://i.imgur.com/GwiUmQA.jpg" className="card-img-top" alt="...">
                        <div className="card-body">
                            <h6 className="card-title">$1,699</h6>
                        </div>
                    </div>
                    <div className="card border p-1" style="width: 9rem;margin-right: 3px;"> <img src="https://i.imgur.com/c9uUysL.jpg" className="card-img-top" alt="...">
                        <div className="card-body">
                            <h6 className="card-title">$2,999</h6>
                        </div>
                    </div>
                    <div className="card border p-1" style="width: 9rem;margin-right: 3px;"> <img src="https://i.imgur.com/kYWqL7k.jpg" className="card-img-top" alt="...">
                        <div className="card-body">
                            <h6 className="card-title">$3,999</h6>
                        </div>
                    </div>
                    <div className="card border p-1" style="width: 9rem;"> <img src="https://i.imgur.com/DhKkTrG.jpg" className="card-img-top" alt="...">
                        <div className="card-body">
                            <h6 className="card-title">$999</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default ViewProduct;
