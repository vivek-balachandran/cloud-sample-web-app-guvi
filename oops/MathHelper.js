class MathHelper {
  static calculateTax(price, rate) {
    return price * rate;
  }
}

// Usage without "new"
console.log(MathHelper.calculateTax(100, 0.15));
