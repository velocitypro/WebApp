window.name = 'NG_DEFER_BOOTSTRAP!';
        require.config({
          'baseUrl': '/js',
          'paths': {
            'angular': 'angular.min'
          },
          'shim': {
            'angular': {
              'exports': 'angular'
            }
          }
        });
        require([
          'angular',
          'app'
        ], function (angular, app) {
          angular.element(document.getElementsByTagName('html')[0]);
          angular.element().ready(function() {
            angular.resumeBootstrap([app.name]);
          });
        });