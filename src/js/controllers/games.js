angular.module('finalProject')
.controller('GamesIndexController', GamesIndexController)
.controller('GamesNewController', GamesNewController)
.controller('GamesShowController', GamesShowController)
.controller('GamesEditController', GamesEditController);

GamesIndexController.$inject = ['Game'];
function GamesIndexController(Game) {
  const gamesIndex = this;

  gamesIndex.all = Game.query();
}

GamesNewController.$inject = ['Game', '$state'];
function GamesNewController(Game, $state) {
  const gamesNew = this;

  gamesNew.user = {};

  function create() {
    Game.save(gamesNew.user, () => {
      $state.go('gamesIndex');
    });
  }

  gamesNew.create = create;
}

GamesShowController.$inject = ['Game', 'Profile', '$state', '$auth'];
function GamesShowController(Game, Profile, $state , $auth) {
  const gamesShow = this;

  gamesShow.game = Game.get($state.params);
  gamesShow.game.$promise.then((game) => {
    gamesShow.profiles = Profile.query({ game_id: game.id });
  });


  function deleteGame() {
    console.log('I\'m trying to delete a game...');
    gamesShow.user.$remove(() => {
      $state.go('gamesIndex');
    });
  }

  gamesShow.delete = deleteGame;
  gamesShow.isLoggedIn = $auth.isAuthenticated;
}

GamesEditController.$inject = ['Game', '$state'];
function GamesEditController(Game, $state) {
  const gamesEdit = this;

  gamesEdit.user = Game.get($state.params);

  function update() {
    gamesEdit.user.$update(() => {
      $state.go('gamesShow', $state.params);
    });
  }

  this.update = update;

}
