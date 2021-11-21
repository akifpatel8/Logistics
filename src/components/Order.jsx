import * as React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
import "./Order.css";

import Button from "@mui/material/Button";
import { AuthContext } from "../ContextApi/ContextProvider";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
const Order = () => {
  const { currentuser } = useContext(AuthContext);

  const [props, setProps] = useState([]);
  //   console.log(currentuser.orders);
  const x = currentuser.orders;

  async function orderdetail(el) {
    const res = await axios.get(`http://localhost:9090/orders/${el}`);
    // console.log(res.data.order);
    // setProps([...props, res.data.order]);
    setProps((prev) => [...prev, res]);
  }
  console.log(props);
  console.log(currentuser);
  useEffect(() => x.map((el) => orderdetail(el)), []);
  return (
    // <>hii</>
    // <div id="orders">
    //   {props
    //     ? props.map((d, i) => (
    //         <div key={`${i}`} className="">
    //           <Card sx={{ display: "flex", maxWidth: 1200 }}>
    //             <Box sx={{ display: "flex", flexDirection: "column" }}>
    //               <CardContent sx={{ flex: "2 2 auto" }}>
    //                 <Typography component="div" variant="h3">
    //                   {d.data.order._id}
    //                 </Typography>
    //               </CardContent>
    //             </Box>
    //             <Box sx={{ display: "flex", flexDirection: "column" }}>
    //               <CardContent sx={{ flex: "1 0 auto" }}>
    //                 <Typography component="div" variant="h3">
    //                   {d.data.order.from}
    //                 </Typography>
    //               </CardContent>
    //             </Box>
    //             <Box sx={{ display: "flex", flexDirection: "column" }}>
    //               <CardContent sx={{ flex: "1 0 auto" }}>
    //                 <Typography component="div" variant="h3">
    //                   {d.data.order.to}
    //                 </Typography>
    //               </CardContent>
    //             </Box>
    //             <Box sx={{ display: "flex", flexDirection: "column" }}>
    //               <CardContent sx={{ flex: "1 0 auto" }}>
    //                 <button>Track</button>
    //               </CardContent>
    //             </Box>
    //           </Card>
    //         </div>
    //       ))
    //     : "Loading..."}
    // </div>
    <div className="container">
      <div className="card">
        <header className="card-header"> My Orders / Tracking </header>
        {props
          ? props.map((d, i) => (
              <div className="card-body">
                <h6>Order ID: {d.data.order._id}</h6>

                <div className="card-body-row">
                  <div className="col">
                    {" "}
                    <strong>From</strong> <br />
                    {d.data.order.from}
                  </div>
                  <div className="col">
                    {" "}
                    <strong>To</strong> <br /> {d.data.order.to}
                  </div>
                  <div className="col">
                    {" "}
                    <strong>Status:</strong> <br /> Picked by Anil Kumar,
                    Delivery Executive <br />
                    <i className="fa fa-phone"></i> +91598675986{" "}
                  </div>
                  <div className="col">
                    {" "}
                    <strong>Tracking #:</strong> <br /> {d.data.order._id}{" "}
                  </div>
                  <div className="col">
                    {" "}
                    <Button color="secondary" variant="contained">
                      {" "}
                      Track Order
                    </Button>
                  </div>
                </div>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
};
export default Order;
