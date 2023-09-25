export default function groupedIngredients() {
  const groupSize = 3;
  const result = [];

  for (let i = 0; i < this.ingredients.length; i += groupSize) {
    result.push(this.ingredients.slice(i, i + groupSize));
  }

  return result;
}
