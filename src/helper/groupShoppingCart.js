export const groupShoppingCart = (shoppingCart) => {
  // reduce fx: group shoppingCart item by - 1. name  2. weight  3. packaging  4. price
  let groupedCart = shoppingCart.reduce((groupedCart, cartProduct) => {
    console.log("cartProduct - price", cartProduct.price);
    if (
      groupedCart.findIndex(
        (e) =>
          e.name === cartProduct.name &&
          e.weight === cartProduct.weight &&
          e.packaging === cartProduct.packaging &&
          e.price == cartProduct.price
      ) === -1
    ) {
      let productQty = cartProduct.quantity;
      groupedCart.push({
        name: cartProduct.name,
        price: cartProduct.price,
        image: cartProduct.image,
        weight: cartProduct.weight,
        packaging: cartProduct.packaging,
        quantity: productQty,
        itemTotal: productQty * parseFloat(cartProduct.price),
      });
    } else {
      let i = groupedCart.findIndex(
        (e) =>
          e.name === cartProduct.name &&
          e.weight === cartProduct.weight &&
          e.packaging === cartProduct.packaging &&
          e.price == cartProduct.price
      );

      groupedCart[i] = {
        ...groupedCart[i],
        quantity:
          parseFloat(groupedCart[i].quantity) +
          parseFloat(cartProduct.quantity),
        itemTotal:
          (parseFloat(groupedCart[i].quantity) +
            parseFloat(cartProduct.quantity)) *
          parseFloat(cartProduct.price),
      };
    }

    return groupedCart;
  }, []);

  // return groupedCart to main fx
  return groupedCart;
};
