import Modal from 'app/components/Modal';
import useModal from 'app/components/Modal/useModal';
import * as React from 'react';
import { kitchenActions } from '../../slice';
// import { ActionMode } from '../../constants';
import { ICreateOrderAction, IProduct } from '../../types';
import useKitchenDispatch from '../../utils/useKitchenDispatch';
import { ProductForm } from './ProductForm';

export function ProductControls(props: IProduct) {
  const { toggle, visible } = useModal();
  const kitchenDispatch = useKitchenDispatch();
  //   const [mode, setMode] = React.useState(ActionMode.Create);
  const handleSubmit = (values: ICreateOrderAction) => {
    toggle();
    kitchenDispatch(kitchenActions.createOrder(values));
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
