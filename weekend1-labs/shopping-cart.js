// You are given 2 arrays, one called shoppingList and one called cart.
// Create a new version of shoppingList where the items in the cart have been removed.

const shoppingList = ['eggs', 'milk', 'cheese', 'steak', 'wine', 'bread']
const groceryCart = ['cheese', 'milk', 'bread']

function shoppingListWithoutCartItems(list, cart) {
  const newList = list

  for (let i = 0; i < cart.length; i++) {
    const listIndex = list.indexOf(cart[i])

    if (listIndex > -1) {
      newList.splice(listIndex, 1)
    }
  }

  return newList
}

console.log(shoppingListWithoutCartItems(shoppingList, groceryCart))
