module TemplateParameterEditor {
  export function generateJSON(parameterModelItems: ParameterModelItem[]) {
    var template = new DeploymentParameters();
    template.$schema = "http://schema.management.azure.com/schemas/2014-04-01-preview/deploymentParameters.json";
    template.contentVersion = "1.0.0.0";
    template.parameters = { p: Parameter };
    parameterModelItems.forEach(param => {
      template.parameters[param.name] = new Parameter(param.value);
    });

    var json = JSON.stringify(template, null, 2);

    return json;
  }
}
