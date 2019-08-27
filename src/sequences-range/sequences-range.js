export default function generateFibonacci(num) {
  return num <= 1 ? 1 : generateFibonacci(num - 2) + generateFibonacci(num - 1);
}
