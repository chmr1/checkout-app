// Create an instance of the Stripe object with your publishable API key
var stripe = Stripe('pk_test_51I5bDJGoLbaErS5OiP2NuyDCcf2GKJn8grvPbczt6dE0CTtT6tUrguh3Hf99x0ICFJ5ITodfcJkWIyai63ekONiR00zcBM6dkN');
var checkoutButton = document.getElementById('checkout-button');

if (checkoutButton) {
  checkoutButton.addEventListener('click', () => {
    // Create a new Checkout Session using the server-side endpoint you
    // created in step 3.
    fetch('/api/checkout', {
      method: 'POST',
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(session) {
      return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .then(function(result) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, you should display the localized error message to your
      // customer using `error.message`.
      if (result.error) {
        alert(result.error.message);
      }
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
  });
}
