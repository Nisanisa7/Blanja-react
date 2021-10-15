import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Edit.module.css";
import NavbarSeller from "../../Component/modules/Navbar_seller";
import Sidebar_seller from "../../Component/modules/Sidebar_seller";
import Input_seller from "../../Component/base_profile/Input_profile";
import Swal from "sweetalert2";

const Editproduct = (props) => {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    brands: "",
    idCategory: "",
    stock: "",
    image: null,
    imagePreview: null,
  }); // product = default , setState = untuk mengubah datanya
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_API}/products/${props.match.params.id}`
      )
      .then((res) => {
        // setItems(res.data.data)
        const data = res.data.data[0];
        setProduct({
          productName: data.productName,
          description: data.description,
          price: data.price,
          brands: data.brands,
          idCategory: data.idCategory,
          stock: data.stock,
          image: data.image,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(product);
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const formData = new FormData();
  formData.append("productName", product.productName);
  formData.append("description", product.description);
  formData.append("price", product.price);
  formData.append("brands", product.brands);
  formData.append("idCategory", product.idCategory);
  console.log(product.idCategory);
  formData.append("stock", product.stock);
  formData.append("image", product.image);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_API}/products/${props.match.params.id}`, formData)
      .then((res) => {
        Swal.fire("Success", "Data has been updated", "success");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response,
        });
      });
  };

  const handleInputImage = (e) => {
    setProduct({
      ...product,
      image: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0]),
    });
  }
  return (
    <div>
      {/* <p>{JSON.stringify(product)}</p> */}
      <NavbarSeller />
          <Sidebar_seller />
      <div className="container">
          <form className={style.form}>
            <div className={`card ${style.topCard}`}>
              <div className={`card-header ${style.headCard}`}>
                <h4 className={`card-title ${style.mineOrder}`}>Inventory</h4>
              </div>

              <div className="card-body">
                <Input_seller label="Name of goods" />
                <input
                  type="text"
                  name="productName"
                  value={product.productName}
                  onChange={(e) => handleChange(e)}
                  className={style.inpt}
                />
              </div>
            </div>

            <div className={`card ${style.detail_card}`}>
              <div className={`card-header ${style.headCard}`}>
                <h4 className={`card-title ${style.mineOrder}`}>
                  Item details
                </h4>
              </div>

              <div className="card-body">
                <Input_seller label="Unit Price" />
                <input
                  type="text"
                  name="price"
                  value={product.price}
                  onChange={(e) => handleChange(e)}
                  className={style.inpt}
                />

                <Input_seller label="Stock" />
                <input
                  type="text"
                  name="stock"
                  value={product.stock}
                  onChange={(e) => handleChange(e)}
                  className={style.inpt}
                />

                <Input_seller label="Brands" />
                <input
                  type="text"
                  name="brands"
                  value={product.brands}
                  onChange={(e) => handleChange(e)}
                  className={style.inpt}
                />

                <Input_seller label="Category" />
                <input
                  type="text"
                  name="category"
                  value={product.idCategory}
                  onChange={(e) => handleChange(e)}
                  className={style.inpt}
                />
              </div>
            </div>

            <div className={`card ${style.imageCard}`}>
              <div className={`card-header ${style.headCard}`}>
                <h4 className={`card-title ${style.mineOrder}`}>
                  Photo of goods
                </h4>
              </div>

              <div className="card-body">
                <div className={style.box_Wrapper}>
                  <div className={style.image_Box}>
                    <img
                      className={style.images}
                      src={product.imagePreview ? product.imagePreview : product.image}
                      alt=""
                    />
                  </div>
                  <div className={style.image_Box2}></div>
                  <div className={style.image_Box3}></div>
                  <div className={style.image_Box4}></div>
                </div>
                <hr className={style.line} />

                <div className={style.button_Wrap}>
                  <label className={style.button} for="upload">
                    Upload File
                  </label>
                  <input
                    id="upload"
                    type="file"
                    name="image"
                    onChange={handleInputImage}
                  />
                </div>
              </div>
            </div>

            <div className={`card ${style.third_Card}`}>
              <div className={`card-header ${style.headCard}`}>
                <h4 className={`card-title ${style.mineOrder}`}>Description</h4>
              </div>

              <div className="card-body">
                <input
                  type="text"
                  name="description"
                  value={product.description}
                  onChange={(e) => handleChange(e)}
                  className={style.inpt_Address}
                />
              </div>
            </div>
            <div className={style.btnCenter}>
              <button onClick={handleUpdate} className="btn btn-success">
                Update
              </button>
            </div>
          </form>
        <div className={style.aaa}>aaaaa</div>
      </div>
    </div>
  );
};

export default Editproduct;
