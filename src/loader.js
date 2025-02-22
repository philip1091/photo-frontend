export const loader = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch images");
  return response.json();
};
