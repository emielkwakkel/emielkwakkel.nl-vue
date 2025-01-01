export const sortContentByDate = (list: any[], slice?: number) => {
  if (!list) return [];

  return [...list]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, slice);
};
