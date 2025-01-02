export const addReadmoreToContent = (
  blogs: any[],
  t: (key: string) => string,
) => {
  return blogs.map((content) => {
    return {
      ...content,
      link: {
        title: t("content.read-more"),
        href: content._path,
      },
    };
  });
};

export const addLinkToEvents = (events: any[], t: (key: string) => string) => {
  return events.map((content) => {
    if (!content.website && !content.recording) return content;

    return {
      ...content,
      link: {
        title: content.recording
          ? t("events.actions.watch-recording")
          : t("events.actions.event-website"),
        href: content.recording ? content.recording : content.website,
      },
    };
  });
};
