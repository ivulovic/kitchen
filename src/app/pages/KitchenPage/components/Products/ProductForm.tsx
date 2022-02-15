import * as React from 'react';
import { useDispatch } from 'react-redux';
import { kitchenActions } from '../../slice';
import { IProductFormProps } from '../../types';

const initialFormState = {
  delivery: true,
  fullPortions: '0',
  halfPortions: '0',
  description: '',
};
const initialErrorState = {
  quantity: false,
};
export function ProductForm(props: IProductFormProps) {
  const [form, setForm] = React.useState(initialFormState);
  const [errors, setErrors] = React.useState(initialErrorState);
  const cId = `delivery_${props._id}`;

  const handleSubmit = () => {
    if (form.fullPortions == '0' && form.halfPortions == '0') {
      setErrors({
        quantity: true,
      });
      return;
    } else {
      setErrors(initialErrorState);
    }
    props.onSubmit({
      productId: props._id,
      delivery: form.delivery,
      quantity: [form.fullPortions, form.halfPortions].join('_'),
      description: form.description,
    });
  };
  return (
    <div className="product-form">
      <div>
        <span>Delivery</span>
        <label htmlFor={cId} className="checkbox">
          <input
            type="checkbox"
            id={cId}
            defaultChecked={form.delivery}
            onChange={e => setForm({ ...form, delivery: e.target.checked })}
          />
          <span>I want food to be delivered to my address</span>
        </label>
      </div>

      <div>
        <span className={errors.quantity ? 'error' : ''}>* Quantity: </span>
        <div className="quantity">
          <div>
            <span>Full portions:</span>
            <select
              defaultValue={form.fullPortions}
              onChange={e => setForm({ ...form, fullPortions: e.target.value })}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <span>Half portions:</span>
            <select
              defaultValue={form.halfPortions}
              onChange={e => setForm({ ...form, halfPortions: e.target.value })}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <span>Message: </span>
        <div className="input">
          <input
            type={'text'}
            onChange={e => setForm({ ...form, description: e.target.value })}
            placeholder="Optional message for delivery person"
          />
        </div>
      </div>
      <button className={`flat-button active`} onClick={handleSubmit}>
        Add
      </button>
      <button className={`flat-button danger`} onClick={props.onCancel}>
        Cancel
      </button>
    </div>
  );
}
