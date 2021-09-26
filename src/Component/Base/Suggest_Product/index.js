import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const linkStyle = {
  textDecoration: "none",
};
const Suggest_product = ({className, image, productname, link, brand, price, key, onClick}) => {
    return (
        <Styles className={className, "wrapper"} key={key} onClick={onClick}>
            <Link to={link} style={linkStyle}>
            <div className="left">
                <div className="avatar-wrapper">
                    <img src={image} alt="User 1" />
                </div>
                <div className="user-name">
                    <h4 className="text-heading">{productname}</h4>
                    <p className="text">{brand}</p>
                </div>
                <div className="time">
                    <p className="time-text">
                        {price}
                    </p>
                </div>
            </div>
            </Link>
        </Styles>
    )
}

export default Suggest_product
const Styles = styled.div`

box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
display: flex;
height: 60px;
cursor: pointer;
text-decoration: none;

.left {
    display: flex;
    width: 100%;
  }
  .avatar-wrapper {
    width: 40px;
    height: 40px;
    margin-right: 1rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .user-name {
    .text-heading {
      margin: 0;
      font-family: 'Rubik';
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #4d4b57;
      margin-bottom: 10px;
      color: #232323;
        @media screen and (min-width: 576px) {
            font-size: 14px;
        }
        @media screen and (min-width: 768px) {
            font-size: 16px;
        }
        @media screen and (min-width: 992px) {
            font-size: 18px;
        }
    }
    p {
      margin: 0;
      font-family: 'Rubik';
      font-style: normal;
      color: #adadad;
      font-size: 14px;
      line-height: 17px;
    }
  }
  .time{
    margin-left: auto;
      .time-text{
        
        padding-top: 5px;
        font-family: 'Rubik';
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.165px;
        color: #848484;


      }
  }
.wrapper:hover{
  background: pink;
}



`
