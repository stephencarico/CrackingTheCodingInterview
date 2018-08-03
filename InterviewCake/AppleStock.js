stock_prices = [10, 7, 5, 8, 11, 9]
stock_prices1 = [10, 7, 5, 4, 3, 2]
stock_prices2 = [1, 1, 1, 1]

function get_max_profit(stock_prices) {
  var min = stock_prices[0];
  var max_sale = stock_prices[1] - stock_prices[0]

  for (let i = 1; i < stock_prices.length - 1; i++) {
    let current_price = stock_prices[i];

    let profit = current_price - min;

    max_sale = Math.max(max_sale, profit)

    min = Math.min(current_price, min)
  }

  return max_sale
}

console.log(get_max_profit(stock_prices), 6)
console.log(get_max_profit(stock_prices1), -1)
console.log(get_max_profit(stock_prices2), 0)