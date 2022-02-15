import React, { useState } from 'react';
import { IDeliveryFormProps } from '../../types';

const initialState = {
  description: '',
  isDelivered: false,
};

export default function DeliveryForm(props: IDeliveryFormProps) {
  const [form, setForm] = useState(props.model || initialState);
  const [error, setError] = useState(false);
  const handleSubmit = () => {
    if (!form.description) {
      setError(true);
    } else {
      props.onSubmit({
        isDelivered: form.isDelivered,
        description: form.description,
      });
    }
  };
  const cId = 'isDeliveredCheckbox';
  return (
    <div className="product-form">
      {props.model && (
        <div>
          <span>Delivery</span>
          <label htmlFor={cId} className="checkbox">
            <input
              type="checkbox"
              id={cId}
              defaultChecked={form.isDelivered}
              onChange={e =>
                setForm({ ...form, isDelivered: e.target.checked })
              }
            />
            <span>Mark as delivered</span>
          </label>
        </div>
      )}

      <div>
        <span className={`${error ? 'error' : ''}`}>* Message: </span>
        <div className="input">
          <input
            type={'text'}
            defaultValue={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            placeholder="Add approximate time you are going to deliver food"
          />
        </div>
      </div>
      <div className="form-controls">
        <button className={`flat-button active`} onClick={handleSubmit}>
          {props.model ? 'Update' : 'Add'}
        </button>
        <button className={`flat-button danger`} onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
