export const addReadmoreToContent = (
  contents: any,
  t: (key: string) => string,
) => {
  const addLinkToContent = (content: any) => ({
    ...content,
    link: {
      title: t("content.read-more"),
      href: content._path,
    },
  });

  return Array.isArray(contents)
    ? contents.map(addLinkToContent)
    : addLinkToContent(contents);
};
