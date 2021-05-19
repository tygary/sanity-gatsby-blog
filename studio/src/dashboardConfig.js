export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60a579e8dda17200ce96c4cc",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-kedcff54",
                  apiId: "f0e97f9d-8cb5-4bcd-8bf5-ac02a061dd0e",
                },
                {
                  buildHookId: "60a579e876dabf00999708bf",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-3xr2ds4o",
                  apiId: "e0ebee2d-a886-4886-b348-26230de88682",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/tygary/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-3xr2ds4o.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
