export const titleEncoder = (title: string) => {
  return title.toLowerCase().replaceAll(" ", "-");
};
