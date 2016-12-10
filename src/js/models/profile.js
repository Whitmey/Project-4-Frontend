angular.module('finalProject')
  .factory('Profile', Profile);

Profile.$inject = ['$resource', 'API_URL'];
function Profile($resource, API_URL) {
  return new $resource(`${API_URL}/profiles/:id`, { id: '@id' }, {
    update: { method: 'PUT' }
  });
}
