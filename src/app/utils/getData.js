export default function getData(count = 1000) {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    description: `Description - ${index + 1}`,
  }));
}
