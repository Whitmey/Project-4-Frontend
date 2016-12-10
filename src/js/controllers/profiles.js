angular.module('finalProject')
.controller('ProfilesIndexController', ProfilesIndexController)
.controller('ProfilesNewController', ProfilesNewController)
.controller('ProfilesShowController', ProfilesShowController)
.controller('ProfilesEditController', ProfilesEditController);

ProfilesIndexController.$inject = ['Profile'];
function ProfilesIndexController(Profile) {
  const profilesIndex = this;

  profilesIndex.all = Profile.query();
}

ProfilesNewController.$inject = ['Profile', '$state'];
function ProfilesNewController(Profile, $state) {
  const profilesNew = this;

  profilesNew.user = {};

  function create() {
    Profile.save(profilesNew.user, () => {
      $state.go('profilesIndex');
    });
  }

  profilesNew.create = create;
}

ProfilesShowController.$inject = ['Profile', '$state', '$auth'];
function ProfilesShowController(Profile, $state , $auth) {
  const profilesShow = this;

  profilesShow.user = Profile.get($state.params);

  function deleteProfile() {
    // console.log('I\'m trying to delete a user...');
    profilesShow.user.$remove(() => {
      $state.go('profilesIndex');
    });
  }

  profilesShow.delete = deleteProfile;
  profilesShow.isLoggedIn = $auth.isAuthenticated;
}

ProfilesEditController.$inject = ['Profile', '$state'];
function ProfilesEditController(Profile, $state) {
  const profilesEdit = this;

  profilesEdit.user = Profile.get($state.params);

  function update() {
    profilesEdit.user.$update(() => {
      $state.go('profilesShow', $state.params);
    });
  }

  this.update = update;

}
