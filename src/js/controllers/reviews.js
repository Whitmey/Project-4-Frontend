angular.module('finalProject')
.controller('ReviewsIndexController', ReviewsIndexController)
.controller('ReviewsNewController', ReviewsNewController)
.controller('ReviewsShowController', ReviewsShowController)
.controller('ReviewsEditController', ReviewsEditController);

ReviewsIndexController.$inject = ['Review'];
function ReviewsIndexController(Review) {
  const reviewsIndex = this;

  reviewsIndex.all = Review.query();
}

ReviewsNewController.$inject = ['Review', '$state', '$auth'];
function ReviewsNewController(Review, $state, $auth) {
  const reviewsNew = this;

  reviewsNew.user = {};
  reviewsNew.user.user_id = $auth.getPayload().id; // Gets current user
  // reviewsNew.user.profile_id = reviewsNew.show.profile.id;
  // console.log(reviewsNew.user);
  // Need to get current profile_id set here

  function create() {
    Review.save(reviewsNew.user, () => {
      $state.go('gamesIndex');
    });
  }

  reviewsNew.create = create;
}

ReviewsShowController.$inject = ['Review', '$state', '$auth'];
function ReviewsShowController(Review, $state , $auth) {
  const reviewsShow = this;

  reviewsShow.user = Review.get($state.params);

  function deleteReview() {
    // console.log('I\'m trying to delete a user...');
    reviewsShow.user.$remove(() => {
      $state.go('gamesIndex');
    });
  }

  reviewsShow.delete = deleteReview;
  reviewsShow.isLoggedIn = $auth.isAuthenticated;
}

ReviewsEditController.$inject = ['Review', '$state'];
function ReviewsEditController(Review, $state) {
  const reviewsEdit = this;

  reviewsEdit.user = Review.get($state.params);

  function update() {
    reviewsEdit.user.$update(() => {
      $state.go('reviewsShow', $state.params);
    });
  }

  this.update = update;

}
