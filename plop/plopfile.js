export default function (plop) {
  plop.setPartial("name", "{{name}}");
  plop.setPartial("homepage", "{{homepage}}");
  plop.setPartial("repositoryUrl", "{{repositoryUrl}}");

  plop.setGenerator("workspace-package", {
    description: "Creates a workspace",
    prompts: [
      {
        type: "string",
        name: "name",
        message: "Workspace name",
      },
      {
        type: "string",
        name: "homepage",
        message: "Preview URL",
      },
      {
        type: "string",
        name: "repositoryUrl",
        message: "Code URL",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../challenges/{{name}}/package.json",
        templateFile: "./package-template.json",
      },
    ],
  });
}
