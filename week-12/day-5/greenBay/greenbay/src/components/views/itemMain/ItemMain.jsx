import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";
import styles from "./ItemMain.module.scss";
import { fetchUsernamesByIds } from "../../../Redux/slices/session";

export default function ItemMain() {
  const urlParams = useParams();
  const dispatch = useDispatch();
  const currentItem = useSelector((state) => state.items.items).find(
    (i) => i.id === urlParams.id
  );
  const sellerName = useSelector((state) => state.session.sellerName);
  const buyerName = useSelector((state) => state.session.buyerName);

  useEffect(() => {
    if (currentItem) {
      dispatch(
        fetchUsernamesByIds([currentItem.owner_id, currentItem.buyer_id])
      );
    }
  }, [dispatch, currentItem]);

  return currentItem ? (
    <div className={styles.itemMain}>
      <div className={styles.imageContainer}>
        <img
          height={240}
          width="100%"
          style={{
            objectFit: "cover",
            borderRadius: "5px",
          }}
          src={currentItem.img_url}
          alt="item"
        />
      </div>
      <div className={styles.itemInfo}>
        <h2>Name: {currentItem.name}</h2>
        <p>Description: {currentItem.description}</p>
        <h4>Price: {currentItem.price}</h4>
        <h4>Sellername: {sellerName}</h4>
        {buyerName && <h4>Buyername: {buyerName}</h4>}
      </div>
      <Button size="lg" color="success" outline>
        BUY
      </Button>
    </div>
  ) : (
    <h1>Item not found</h1>
  );
}
