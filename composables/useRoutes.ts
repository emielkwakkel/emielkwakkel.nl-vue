// composables/useRoutes.ts
export const useRoutes = () => {
  const routes = [
    { label: "Home", path: "" },
    { label: "Talks", path: "/talks" },
    { label: "Events", path: "/events" },
    { label: "Blog", path: "/blog" },
  ];

  return { routes };
};
