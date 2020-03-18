import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default ({ price }) => {
  const priceeForStripe = price * 100;
  const publishableKey = 'pk_test_qv5iAfzQ8VcRiF0OBBSl3jxF00kg81HN8m';

  const onToken = token => {
    console.log(token);
    alert('Paymen Success');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='STAR labs INC'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceeForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
