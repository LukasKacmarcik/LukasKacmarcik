import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";
import styles from "./ItemMain.module.scss";

export default function ItemMain() {
  const navigate = useNavigate();
  const urlParams = useParams();
  const dispatch = useDispatch();
  const currentItem = useSelector((state) => state.items.items).find(
    (i) => i.id === urlParams.id
  );

  return (
    currentItem && (
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
          <h4>Owner Id: {currentItem.owner_id}</h4>
          {currentItem.buyer_id !== null && (
            <h4>Buyer Id: {currentItem.owner_id}</h4>
          )}
        </div>
        <Button size="lg" color="success" outline>
          BUY
        </Button>
      </div>
    )
  );
}
