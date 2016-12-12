"use strict";function Auth(e,t){e.loginUrl=t+"/login",e.signupUrl=t+"/register",e.tokenPrefix=""}function RegisterController(e,t){function r(){e.signup(o.user).then(function(){t.go("landing")})}var o=this;o.user={},o.submit=r}function LoginController(e,t){function r(){e.login(l.credentials).then(function(){t.go("landing")})}function o(t){e.authenticate(t).then(function(e){console.log(e)})}var l=this;l.credentials={},l.submit=r,l.authenticate=o}function Game(e,t){return new e(t+"/games/:id",{id:"@id"},{update:{method:"PUT"}})}function GamesIndexController(e){var t=this;t.all=e.query()}function GamesNewController(e,t){function r(){e.save(o.user,function(){t.go("gamesIndex")})}var o=this;o.user={},o.create=r}function GamesShowController(e,t,r,o){function l(){n.user.$remove(function(){r.go("gamesIndex")})}var n=this;n.game=e.get(r.params),n.game.$promise.then(function(e){n.profiles=t.query({game_id:e.id})}),n.delete=l,n.isLoggedIn=o.isAuthenticated}function GamesEditController(e,t){function r(){o.user.$update(function(){t.go("gamesShow",t.params)})}var o=this;o.user=e.get(t.params),this.update=r}function MainController(e,t,r){function o(){e.logout().then(function(){t.go("usersIndex")})}function l(r,o){n.message=null,!e.isAuthenticated()&&s.includes(o.name)&&(r.preventDefault(),t.go("login"),n.message="You must be logged in to go there!")}var n=this;n.isLoggedIn=e.isAuthenticated,n.message=null;var s=["userEdit"];r.$on("$stateChangeStart",l),n.logout=o}function Profile(e,t){return new e(t+"/profiles/:id",{id:"@id"},{update:{method:"PUT"},create:{method:"POST"}})}function ProfilesIndexController(e){var t=this;t.all=e.query()}function ProfilesNewController(e,t,r){function o(){e.save(l.user,function(){t.go("profilesIndex")})}var l=this;l.user={},l.user.user_id=r.getPayload().id,l.create=o}function ProfilesShowController(e,t,r,o){function l(){n.profile.$remove(function(){r.go("profilesIndex")})}var n=this;n.profile=e.get(r.params),n.profile.$promise.then(function(e){n.reviews=t.query({profile_id:e.id})}),n.delete=l,n.isLoggedIn=o.isAuthenticated}function ProfilesEditController(e,t){function r(){o.user.$update(function(){t.go("profilesShow",t.params)})}var o=this;o.user=e.get(t.params),this.update=r}function Review(e,t){return new e(t+"/reviews/:id",{id:"@id"},{update:{method:"PUT"}})}function ReviewsIndexController(e){var t=this;t.all=e.query()}function ReviewsNewController(e,t){function r(){e.save(o.user,function(){t.go("reviewsIndex")})}var o=this;o.user={},o.create=r}function ReviewsShowController(e,t,r){function o(){l.user.$remove(function(){t.go("reviewsIndex")})}var l=this;l.user=e.get(t.params),l.delete=o,l.isLoggedIn=r.isAuthenticated}function ReviewsEditController(e,t){function r(){o.user.$update(function(){t.go("reviewsShow",t.params)})}var o=this;o.user=e.get(t.params),this.update=r}function Router(e,t){e.state("usersIndex",{url:"/users",templateUrl:"/templates/usersIndex.html",controller:"UsersIndexController as usersIndex"}).state("usersShow",{url:"/users/:id",templateUrl:"/templates/usersShow.html",controller:"UsersShowController as show"}).state("usersEdit",{url:"/users/:id/edit",templateUrl:"/templates/usersEdit.html",controller:"UsersEditController as usersEdit"}).state("register",{url:"/register",templateUrl:"/templates/register.html",controller:"RegisterController as register"}).state("login",{url:"/login",templateUrl:"/templates/login.html",controller:"LoginController as login"}).state("profilesIndex",{url:"/profiles",templateUrl:"/templates/profilesIndex.html",controller:"ProfilesIndexController as profilesIndex"}).state("profilesShow",{url:"/profiles/:id",templateUrl:"/templates/profilesShow.html",controller:"ProfilesShowController as show"}).state("profilesEdit",{url:"/profiles/:id/edit",templateUrl:"/templates/profilesEdit.html",controller:"ProfilesEditController as profilesEdit"}).state("gamesIndex",{url:"/games",templateUrl:"/templates/gamesIndex.html",controller:"GamesIndexController as gamesIndex"}).state("gamesShow",{url:"/games/:id",templateUrl:"/templates/gamesShow.html",controller:"GamesShowController as game"}).state("gamesEdit",{url:"/games/:id/edit",templateUrl:"/templates/gamesEdit.html",controller:"GamesEditController as gamesEdit"}).state("reviewsIndex",{url:"/reviews",templateUrl:"/templates/reviewsIndex.html",controller:"ReviewsIndexController as reviewsIndex"}).state("reviewsShow",{url:"/reviews/:id",templateUrl:"/templates/reviewsShow.html",controller:"ReviewsShowController as review"}).state("reviewsEdit",{url:"/reviews/:id/edit",templateUrl:"/templates/reviewsEdit.html",controller:"ReviewsEditController as reviewsEdit"}).state("home",{url:"/home",templateUrl:"/templates/home.html"}).state("landing",{url:"/landing",templateUrl:"/templates/landing.html"}).state("createProfile",{url:"/createProfile",templateUrl:"/templates/createProfile.html",controller:"ProfilesNewController as profilesNew"}),t.otherwise("/home")}function User(e,t){return new e(t+"/users/:id",{id:"@id"},{update:{method:"PUT"}})}function UsersIndexController(e){var t=this;t.all=e.query()}function UsersNewController(e,t){function r(){e.save(o.user,function(){t.go("usersIndex")})}var o=this;o.user={},o.create=r}function UsersShowController(e,t,r){function o(){l.user.$remove(function(){t.go("usersIndex")})}var l=this;l.user=e.get(t.params),l.delete=o,l.isLoggedIn=r.isAuthenticated}function UsersEditController(e,t){function r(){o.user.$update(function(){t.go("usersShow",t.params)})}var o=this;o.user=e.get(t.params),this.update=r}angular.module("finalProject",["ngResource","ui.router","satellizer"]).constant("API_URL","http://localhost:3000/api").config(Auth),Auth.$inject=["$authProvider","API_URL"],angular.module("finalProject").controller("RegisterController",RegisterController).controller("LoginController",LoginController),RegisterController.$inject=["$auth","$state"],LoginController.$inject=["$auth","$state"],angular.module("finalProject").factory("Game",Game),Game.$inject=["$resource","API_URL"],angular.module("finalProject").controller("GamesIndexController",GamesIndexController).controller("GamesNewController",GamesNewController).controller("GamesShowController",GamesShowController).controller("GamesEditController",GamesEditController),GamesIndexController.$inject=["Game"],GamesNewController.$inject=["Game","$state"],GamesShowController.$inject=["Game","Profile","$state","$auth"],GamesEditController.$inject=["Game","$state"],angular.module("finalProject").controller("MainController",MainController),MainController.$inject=["$auth","$state","$rootScope"],angular.module("finalProject").factory("Profile",Profile),Profile.$inject=["$resource","API_URL"],angular.module("finalProject").controller("ProfilesIndexController",ProfilesIndexController).controller("ProfilesNewController",ProfilesNewController).controller("ProfilesShowController",ProfilesShowController).controller("ProfilesEditController",ProfilesEditController),ProfilesIndexController.$inject=["Profile"],ProfilesNewController.$inject=["Profile","$state","$auth"],ProfilesShowController.$inject=["Profile","Review","$state","$auth"],ProfilesEditController.$inject=["Profile","$state"],angular.module("finalProject").factory("Review",Review),Review.$inject=["$resource","API_URL"],angular.module("finalProject").controller("ReviewsIndexController",ReviewsIndexController).controller("ReviewsNewController",ReviewsNewController).controller("ReviewsShowController",ReviewsShowController).controller("ReviewsEditController",ReviewsEditController),ReviewsIndexController.$inject=["Review"],ReviewsNewController.$inject=["Review","$state"],ReviewsShowController.$inject=["Review","$state","$auth"],ReviewsEditController.$inject=["Review","$state"],angular.module("finalProject").config(Router),Router.$inject=["$stateProvider","$urlRouterProvider"],angular.module("finalProject").factory("User",User),User.$inject=["$resource","API_URL"],angular.module("finalProject").controller("UsersIndexController",UsersIndexController).controller("UsersNewController",UsersNewController).controller("UsersShowController",UsersShowController).controller("UsersEditController",UsersEditController),UsersIndexController.$inject=["User"],UsersNewController.$inject=["User","$state"],UsersShowController.$inject=["User","$state","$auth"],UsersEditController.$inject=["User","$state"];
//# sourceMappingURL=app.js.map
