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

ProfilesNewController.$inject = ['Profile', '$state', '$auth'];
function ProfilesNewController(Profile, $state, $auth) {
  const profilesNew = this;

  profilesNew.user = {};
  profilesNew.user.user_id = $auth.getPayload().id; //Gets the current user

  function create() {
    Profile.save(profilesNew.user, () => {
      $state.go('profilesIndex');
    });
  }

  profilesNew.create = create;
}

ProfilesShowController.$inject = ['Profile', 'Review', '$state', '$auth'];
function ProfilesShowController(Profile, Review, $state , $auth) {
  const profilesShow = this;

  profilesShow.profile = Profile.get($state.params); //Gets the current profile
  profilesShow.profile.$promise.then((profile) => {
    profilesShow.reviews = Review.query({ profile_id: profile.id });
  });

  function deleteProfile() {
    // console.log('I\'m trying to delete a user...');
    profilesShow.profile.$remove(() => {
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
