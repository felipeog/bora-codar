module.exports = function (plop) {
  plop.setPartial("packageName", "{{packageName}}");
  plop.setPartial("homepage", "{{homepage}}");
  plop.setPartial("repositoryUrl", "{{repositoryUrl}}");

  plop.setGenerator("workspace-package", {
    description: "Creates a workspace",
    prompts: [
      {
        type: "string",
        name: "packageName",
        message: "Workspace name",
      },
      {
        type: "string",
        name: "homepage",
        message: "Preview",
      },
      {
        type: "string",
        name: "repositoryUrl",
        message: "Code",
      },
    ],
    actions: [
      {
        type: "add",
        path: "challenges/{{packageName}}/package.json",
        templateFile: "plop-templates/workspace-package.json",
      },
    ],
  });
};
