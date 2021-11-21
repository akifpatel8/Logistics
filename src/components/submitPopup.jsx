import styles from "./submitPopup.module.css";
import { Link } from "react-router-dom";
export const Popup = () => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupSection}>
        <h1 style={{ textAlign: "center" }}>Shipping Review</h1>
        <p style={{ textAlign: "center" }}>Best Safety Standards. We Care.</p>
        <div className={styles.confirm}>
          <img
            src="https://d2kh7o38xye1vj.cloudfront.net/wp-content/uploads/2021/10/order-received.png"
            style={{ alignItems: "center" }}
            alt=""
          />
          <h3 style={{ marginLeft: "-2%", textAlign: "center" }}>
            Order Confirmation
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "100%",
              textAlign: "center",
            }}
          >
            Your order has been received by your courier partner
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "10%",
            justifyContent: "space-evenly",
            margin: "auto",
          }}
        >
          <Link to="/home">
            {" "}
            <button className={styles.editBtn}>Home</button>
          </Link>
          <Link to="/orders">
            {" "}
            <button className={styles.confirmBtn}>Track</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
