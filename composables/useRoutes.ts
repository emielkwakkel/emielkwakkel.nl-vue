// composables/useRoutes.ts
export const useRoutes = () => {
  const routes = [
    { label: "Home", path: "" },
    { label: "Talks", path: "/talks" },
    { label: "Blog", path: "/blog" },
  ];

  return { routes };
};
