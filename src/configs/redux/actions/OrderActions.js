import axios from "axios";
import Swal from "sweetalert2";

export const addOrder =
  (productName, idCustommer, totalPrice, orderQty, payment, token, history) =>
  (dispatch, getState) => {
    const dataOrder = {
      productName,
      idCustommer,
      totalPrice,
      payment,
      orderQty,
    };
    console.log(dataOrder);
    // if(productName === " " &&  idCustommer === " " && )
    axios
      .post(`${process.env.REACT_APP_BACKEND_API}/orders`, dataOrder, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        const orderResult = result.data.data;
        console.log(orderResult, "action order");
        dispatch({ type: "ADD_ORDER", payload: orderResult });
        localStorage.setItem("Order", orderResult.idOrder);
        localStorage.removeItem(
          "Cart",
          JSON.stringify(getState().cartItem.cart)
        );
        Swal.fire(
          "Order Succes",
          "Please wait for seller confirmation",
          "success"
        );
        // .push('/home')history
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response?.data?.message,
        });
      });
  };
