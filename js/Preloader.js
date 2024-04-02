function Preloader() {
  var view = View.getInstance();

  var loadingPercentage;

  var imageSources;
  var soundSources;

  var that = this;

  this.init = function() {
    loadingPercentage = view.create('div');

    view.addClass(loadingPercentage, 'loading-percentage');
    view.setHTML(loadingPercentage, '0%');
    view.appendToBody(loadingPercentage);

    imageSources = {
      1: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134715/back-btn.png',
      2: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134715/bg.png',
      3: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134716/bullet.png',
      4: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134717/clear-map-btn.png',
      5: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134717/coin.png',
      6: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134717/delete-all-btn.png',
      7: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134718/editor-btn.png',
      8: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134719/elements.png',
      9: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134719/enemies.png',
      10: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134720/flag-pole.png',
      11: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134719/flag.png',
      12: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327163511/start-screen.jpg',
      13: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134720/grid-large-btn.png',
      14: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134720/grid-medium-btn.png',
      15: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134720/grid-small-btn.png',
      16: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134720/grid.png',
      17: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134721/lvl-size.png',
      18: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134721/mario-head.png',
      19: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134349/mario-sprites.png',
      20: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134722/powerups.png',
      21: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134723/save-map-btn.png',
      22: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134723/saved-btn.png',
      23: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134723/slider-left.png',
      24: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134723/slider-right.png',
      25: 'https://media.geeksforgeeks.org/wp-content/uploads/20240327134724/start-btn.png'
    };

    that.loadImages(imageSources);
  };

  this.loadImages = function(imageSources) {
    var images = {};
    var loadedImages = 0;
    var totalImages = 0;

    for (var key in imageSources) {
      totalImages++;
    }

    for (var key in imageSources) {
      images[key] = new Image();
      images[key].src = imageSources[key];

      images[key].onload = function() {
        loadedImages++;
        percentage = Math.floor(loadedImages * 100 / totalImages);

        view.setHTML(loadingPercentage, percentage + '%'); //displaying percentage

        if (loadedImages >= totalImages) {
          view.removeFromBody(loadingPercentage);
          that.initMainApp();
        }
      };
    }
  };

  this.initMainApp = function() {
    var marioMakerInstance = MarioMaker.getInstance();
    marioMakerInstance.init();
  };
}

window.onload = function() {
  var preloader = new Preloader();
  preloader.init();
};
