import Modal from 'app/components/Modal';
import useModal from 'app/components/Modal/useModal';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { kitchenActions } from '../../slice';
// import { ActionMode } from '../../constants';
import { ICreateOrderAction, IProduct } from '../../types';
import { ProductForm } from './ProductForm';

export function ProductControls(props: IProduct) {
  const { toggle, visible } = useModal();
  const dispatch = useDispatch();
  //   const [mode, setMode] = React.useState(ActionMode.Create);
  const handleSubmit = (values: ICreateOrderAction) => {
    toggle();
    dispatch(kitchenActions.createOrder(values));
  };
  return (
    <div className="product-controls">
      <button className={`flat-button active`} onClick={toggle}>
        Create Order
      </button>
      <Modal visible={visible} toggle={toggle} title={`Order ${props.name}`}>
        <ProductForm {...props} onSubmit={handleSubmit} onCancel={toggle} />
      </Modal>
    </div>
  );
}
