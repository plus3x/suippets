const codeTemplate = ( name ) => `
<h4 class="page-section"> Code </h4>

<div class="code">
  <h1 class="code-title"> HTML </h1>
  <pre code="./../app/views/components/${name}/example.html"> Loading ... </pre>
</div>

<div class="code">
  <h1 class="code-title"> SASS </h1>
  <pre code="./../app/sass/components/${name}.scss"> Loading ... </pre>
</div>

<div class="code">
  <h1 class="code-title"> Javascript (with jQuery slim) </h1>
  <pre code="./../app/js/components/${name}.js"> Loading ... </pre>
</div>
`;

module.exports = codeTemplate;