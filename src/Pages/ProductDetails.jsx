import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import Footer from "../Component/Footer";
import MainNav from "../Component/MainNav";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://e-commerce-project-production-2e7f.up.railway.app/user/product/${id}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Product not found");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        toast.error("Error fetching product details.");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-5 text-danger">Product not found.</div>
    );
  }

  const {
    name,
    price,
    title,
    rate,
    photo,
    discount,
    category,
    description,
    soldCount,
  } = product;

  return (
    <>
      <MainNav/>
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-md-6 text-center">
            <img
              src={photo}
              alt={name}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">{title}</h2>
            <p className="text-muted mb-2">{category}</p>
            <h4 className="text-danger mb-3">
              {price}{" "}
              <small className="text-success ms-2">({discount} OFF)</small>
            </h4>
            <p className="mb-2">
              <strong>Rating:</strong> ⭐ {rate} / 5
            </p>
            <p className="mb-2">
              <strong>Sold:</strong> {soldCount} item
              {soldCount !== 1 ? "s" : ""}
            </p>
            <p className="mb-4">{description}</p>
            <button className="btn btn-primary px-4">Add to Cart</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
