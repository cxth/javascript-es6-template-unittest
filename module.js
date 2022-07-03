export function hello() {
  return 'Hello';
}

export function get_multiples(number) {
  let total = 0;
  for (let i = 1; i < number; i++) {
      total += (i % 3 === 0 || i % 5 === 0) ? i : 0;
  }
  return total;
}
