// Framework
import React from "react";

// Libraries
import PropTypes from "prop-types";

// Components
import ItemCard from "../components/ItemCard";

const MerchantOrders = ({
  orderDetails,
  onReturnQuantityClick,
  returns,
  onItemReturnSelect
}) =>
  <div className="merchant-orders-container">
    {orderDetails.map(({ name, items }, index) =>
      <div key={index}>
        <div className="merchant-orders-details">
          <div className="merchant-orders-seller">
            {name}
          </div>
          <div className="float-right merchant-orders-pagination">2 of 2</div>
        </div>
        <ItemCard
          items={items}
          returns={returns}
          onItemReturnSelect={onItemReturnSelect}
          onReturnQuantityClick={onReturnQuantityClick}
        />
      </div>
    )}
  </div>;

MerchantOrders.propTypes = {
  returns: PropTypes.array,
  orderDetails: PropTypes.array,
  onItemReturnSelect: PropTypes.func,
  onReturnQuantityClick: PropTypes.func
};

export default MerchantOrders;
