module.exports = {
  extends: [
    'angular',
  ],
  globals: {
  	AmCharts: true,
  	randomColor: true,
    particlesJS: true
  },
  rules: {
    'angular/no-service-method': 'off',
    'angular/timeout-service': 'off',
    'angular/document-service': 'off',
    "no-unused-vars": [2, {"vars": "local", "args": "none"}],
    "no-mixed-spaces-and-tabs": [0, "smart-tabs"]
  }
}
