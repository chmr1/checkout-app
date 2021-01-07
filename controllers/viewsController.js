exports.getCheckoutView = (req, res) => {
  res.status(200).render('checkout', {
    title: 'Checkout'
  })
}

exports.getSuccessView = (req, res) => {
  res.status(200).render('success', {
    title: 'success'
  })
}