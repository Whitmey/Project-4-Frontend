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

GamesShowController.$inject = ['Game', '$state', '$auth'];
function GamesShowController(Game, $state , $auth) {
  const gamesShow = this;

  gamesShow.user = Game.get($state.params);

  function deleteGame() {
    // console.log('I\'m trying to delete a user...');
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
