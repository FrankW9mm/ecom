import React, { useEffect, useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import './checkout-header.css'
import './checkout.css'
import CheckoutHeader from '../../components/CheckoutHeader'
import { formatMoney } from '../../utils/money'
import PaymentSummary from './PaymentSummary'
import OrderSummery from './OrderSummery'
const CheckOutPage = ({ cart }) => {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
      .then((response) => {
        setDeliveryOptions(response.data);
      })
    axios.get('/api/payment-summary')
      .then((response) => {
        setPaymentSummary(response.data);
      })
  }, [])



  return (
    <>
      <title>Checkout</title>
      <CheckoutHeader items={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>



        <div className="checkout-grid">
          <OrderSummery cart={cart} deliveryOptions={deliveryOptions} />
          {
            paymentSummary && (
              <PaymentSummary paymentSummary={paymentSummary} />
            )


          }

        </div>
      </div>
    </>
  )
}

export default CheckOutPage