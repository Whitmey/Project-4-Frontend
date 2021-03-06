angular.module('finalProject')
.config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/templates/usersIndex.html',
    controller: 'UsersIndexController as usersIndex'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/templates/usersShow.html',
    controller: 'UsersShowController as show'
  })
  .state('usersEdit', {
    url: '/users/:id/edit',
    templateUrl: '/templates/usersEdit.html',
    controller: 'UsersEditController as usersEdit'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/templates/register.html',
    controller: 'RegisterController as register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/templates/login.html',
    controller: 'LoginController as login'
  })
  .state('profilesIndex', {
    url: '/profiles',
    templateUrl: '/templates/profilesIndex.html',
    controller: 'ProfilesIndexController as profilesIndex'
  })
  .state('profilesShow', {
    url: '/profiles/:id',
    templateUrl: '/templates/profilesShow.html',
    controller: 'ProfilesShowController as show'
  })
  .state('profilesEdit', {
    url: '/profiles/:id/edit',
    templateUrl: '/templates/profilesEdit.html',
    controller: 'ProfilesEditController as profilesEdit'
  })
  .state('gamesIndex', {
    url: '/games',
    templateUrl: '/templates/gamesIndex.html',
    controller: 'GamesIndexController as gamesIndex'
  })
  .state('gamesShow', {
    url: '/games/:id',
    templateUrl: '/templates/gamesShow.html',
    controller: 'GamesShowController as game'
  })
  .state('gamesEdit', {
    url: '/games/:id/edit',
    templateUrl: '/templates/gamesEdit.html',
    controller: 'GamesEditController as gamesEdit'
  })
  .state('reviewsIndex', {
    url: '/reviews',
    templateUrl: '/templates/reviewsIndex.html',
    controller: 'ReviewsIndexController as reviewsIndex'
  })
  .state('reviewsShow', {
    url: '/reviews/:id',
    templateUrl: '/templates/reviewsShow.html',
    controller: 'ReviewsShowController as review'
  })
  .state('reviewsEdit', {
    url: '/reviews/:id/edit',
    templateUrl: '/templates/reviewsEdit.html',
    controller: 'ReviewsEditController as reviewsEdit'
  })
  .state('home', {
    url: '/home',
    templateUrl: '/templates/home.html'
  })
  .state('landing', {
    url: '/landing',
    templateUrl: '/templates/landing.html'
  })
  .state('createProfile', {
    url: '/createProfile',
    templateUrl: '/templates/createProfile.html',
    controller: 'ProfilesNewController as profilesNew'
  });

  $urlRouterProvider.otherwise('/home');
}
