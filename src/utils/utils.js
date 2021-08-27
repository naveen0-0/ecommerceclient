export const noofProductsInTheCart = cart => {
  let noofproductsinthecart = 0
  cart.map(cartProduct => {
    noofproductsinthecart += cartProduct.noofProducts
  })
  return noofproductsinthecart;
}
