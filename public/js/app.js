"use strict";function Auth(e,r){e.loginUrl=r+"/login",e.signupUrl=r+"/register",e.tokenPrefix=""}function RegisterController(e,r){function t(){e.signup(o.user).then(function(){r.go("login")})}var o=this;o.user={},o.submit=t}function LoginController(e,r){function t(){e.login(l.credentials).then(function(){r.go("usersIndex")})}function o(r){e.authenticate(r).then(function(e){console.log(e)})}var l=this;l.credentials={},l.submit=t,l.authenticate=o}function Game(e,r){return new e(r+"/games/:id",{id:"@id"},{update:{method:"PUT"}})}function GamesIndexController(e){var r=this;r.all=e.query()}function GamesNewController(e,r){function t(){e.save(o.user,function(){r.go("gamesIndex")})}var o=this;o.user={},o.create=t}function GamesShowController(e,r,t){function o(){l.user.$remove(function(){r.go("gamesIndex")})}var l=this;l.user=e.get(r.params),l.delete=o,l.isLoggedIn=t.isAuthenticated}function GamesEditController(e,r){function t(){o.user.$update(function(){r.go("gamesShow",r.params)})}var o=this;o.user=e.get(r.params),this.update=t}function MainController(e,r,t){function o(){e.logout().then(function(){r.go("usersIndex")})}function l(t,o){n.message=null,!e.isAuthenticated()&&s.includes(o.name)&&(t.preventDefault(),r.go("login"),n.message="You must be logged in to go there!")}var n=this;n.isLoggedIn=e.isAuthenticated,n.message=null;var s=["userEdit"];t.$on("$stateChangeStart",l),n.logout=o}function Profile(e,r){return new e(r+"/profiles/:id",{id:"@id"},{update:{method:"PUT"}})}function ProfilesIndexController(e){var r=this;r.all=e.query()}function ProfilesNewController(e,r){function t(){e.save(o.user,function(){r.go("profilesIndex")})}var o=this;o.user={},o.create=t}function ProfilesShowController(e,r,t){function o(){l.user.$remove(function(){r.go("profilesIndex")})}var l=this;l.user=e.get(r.params),l.delete=o,l.isLoggedIn=t.isAuthenticated}function ProfilesEditController(e,r){function t(){o.user.$update(function(){r.go("profilesShow",r.params)})}var o=this;o.user=e.get(r.params),this.update=t}function Router(e,r){e.state("usersIndex",{url:"/users",templateUrl:"/templates/usersIndex.html",controller:"UsersIndexController as usersIndex"}).state("usersShow",{url:"/users/:id",templateUrl:"/templates/usersShow.html",controller:"UsersShowController as show"}).state("usersEdit",{url:"/users/:id/edit",templateUrl:"/templates/usersEdit.html",controller:"UsersEditController as usersEdit"}).state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("login",{url:"/login",templateUrl:"/templates/login.html",controller:"LoginController as login"}).state("profilesIndex",{url:"/profiles",templateUrl:"/templates/profilesIndex.html",controller:"ProfilesIndexController as profilesIndex"}).state("profilesShow",{url:"/profiles/:id",templateUrl:"/templates/profilesShow.html",controller:"ProfilesShowController as profile"}).state("profilesEdit",{url:"/profiles/:id/edit",templateUrl:"/templates/profilesEdit.html",controller:"ProfilesEditController as profilesEdit"}).state("gamesIndex",{url:"/games",templateUrl:"/templates/gamesIndex.html",controller:"GamesIndexController as gamesIndex"}).state("gamesShow",{url:"/games/:id",templateUrl:"/templates/gamesShow.html",controller:"GamesShowController as game"}).state("gamesEdit",{url:"/games/:id/edit",templateUrl:"/templates/gamesEdit.html",controller:"GamesEditController as gamesEdit"}),r.otherwise("/users")}function User(e,r){return new e(r+"/users/:id",{id:"@id"},{update:{method:"PUT"}})}function UsersIndexController(e){var r=this;r.all=e.query()}function UsersNewController(e,r){function t(){e.save(o.user,function(){r.go("usersIndex")})}var o=this;o.user={},o.create=t}function UsersShowController(e,r,t){function o(){l.user.$remove(function(){r.go("usersIndex")})}var l=this;l.user=e.get(r.params),l.delete=o,l.isLoggedIn=t.isAuthenticated}function UsersEditController(e,r){function t(){o.user.$update(function(){r.go("usersShow",r.params)})}var o=this;o.user=e.get(r.params),this.update=t}angular.module("finalProject",["ngResource","ui.router","satellizer"]).constant("API_URL","http://localhost:3000/api").config(Auth),Auth.$inject=["$authProvider","API_URL"],angular.module("finalProject").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state"],LoginController.$inject=["$auth","$state"],angular.module("finalProject").factory("Game",Game),Game.$inject=["$resource","API_URL"],angular.module("finalProject").controller("GamesIndexController",GamesIndexController).controller("GamesNewController",GamesNewController).controller("GamesShowController",GamesShowController).controller("GamesEditController",GamesEditController),GamesIndexController.$inject=["Game"],GamesNewController.$inject=["Game","$state"],GamesShowController.$inject=["Game","$state","$auth"],GamesEditController.$inject=["Game","$state"],angular.module("finalProject").controller("MainController",MainController),MainController.$inject=["$auth","$state","$rootScope"],angular.module("finalProject").factory("Profile",Profile),Profile.$inject=["$resource","API_URL"],angular.module("finalProject").controller("ProfilesIndexController",ProfilesIndexController).controller("ProfilesNewController",ProfilesNewController).controller("ProfilesShowController",ProfilesShowController).controller("ProfilesEditController",ProfilesEditController),ProfilesIndexController.$inject=["Profile"],ProfilesNewController.$inject=["Profile","$state"],ProfilesShowController.$inject=["Profile","$state","$auth"],ProfilesEditController.$inject=["Profile","$state"],angular.module("finalProject").config(Router),Router.$inject=["$stateProvider","$urlRouterProvider"],angular.module("finalProject").factory("User",User),User.$inject=["$resource","API_URL"],angular.module("finalProject").controller("UsersIndexController",UsersIndexController).controller("UsersNewController",UsersNewController).controller("UsersShowController",UsersShowController).controller("UsersEditController",UsersEditController),UsersIndexController.$inject=["User"],UsersNewController.$inject=["User","$state"],UsersShowController.$inject=["User","$state","$auth"],UsersEditController.$inject=["User","$state"];
//# sourceMappingURL=app.js.map
