import TrashIcon from 'app/icons/TrashIcon';
import * as React from 'react';
import { formatDate, formatTime } from 'utils/date';
import { IGroupedOrderItemProps } from '../../types';

export function GroupedOrderItem(props: IGroupedOrderItemProps) {
  const {
    order: { product, people },
    onRemoveOrder,
    user,
  } = props;
  return (
    <div className="grouped-order-item">
      <div className="order-product">
        <h1>{product.name}</h1>
        <div
          className="image"
          style={{
            backgroundImage: `url(${product.imageUrl})`,
          }}
        ></div>
      </div>
      <div className="order-details">
        <strong className="title">Description:</strong>
        <p className="description">{product.description}</p>

        <strong className="title">Orders:</strong>
        <div className="table">
          <div className="row header">
            <div>Name</div>
            <div>Delivery</div>
            <div>Message</div>
            <div className="numeric">Full Portions</div>
            <div className="numeric">Half Portions</div>
            <div className="numeric">Controls</div>
            {/* <div>Status</div> */}
          </div>

          {people.map(
            (
              {
                firstName,
                lastName,
                fullPortions,
                halfPortions,
                orderDescription,
                orderStatus,
                delivery,
                orderId,
                email,
              },
              i,
            ) => {
              const isCreator = user.email === email;
              return (
                <div key={email + '_' + i}>
                  <div className="row body">
                    <div>
                      {firstName} {lastName}
                    </div>
                    <div>{delivery ? 'Yes' : 'No'}</div>
                    <div>{orderDescription || '-'}</div>
                    <div className="numeric">{fullPortions}</div>
                    <div className="numeric">{halfPortions}</div>
                    <div className="numeric">
                      {isCreator && (
                        <button
                          className="control danger"
                          onClick={() => onRemoveOrder(orderId)}
                        >
                          <TrashIcon />
                        </button>
                      )}
                    </div>
                    {/* <div>{orderStatus || '-'}</div> */}
                  </div>
                  {i === people.length - 1 && (
                    <>
                      <div className="row total">
                        <div>Deliver to address:</div>
                        <div></div>
                        <div></div>
                        <div className="numeric">
                          {product.totalFullPortionsWithDelivery}
                        </div>
                        <div className="numeric">
                          {product.totalHalfPortionsWithDelivery}
                        </div>
                      </div>

                      <div className="row total">
                        <div>Leave at restaurant:</div>
                        <div></div>
                        <div></div>
                        <div className="numeric">
                          {product.totalFullPortions -
                            product.totalFullPortionsWithDelivery}
                        </div>
                        <div className="numeric">
                          {product.totalHalfPortions -
                            product.totalHalfPortionsWithDelivery}
                        </div>
                      </div>
                      <div className="row total">
                        <div>Total:</div>
                        <div></div>
                        <div></div>
                        <div className="numeric">
                          {product.totalFullPortions}
                        </div>
                        <div className="numeric">
                          {product.totalHalfPortions}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}
