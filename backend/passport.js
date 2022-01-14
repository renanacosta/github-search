const GithubStrategy = require('passport-github2').Strategy;
const passport = require('passport');

passport.use(
  new GithubStrategy(
    {
      clientID: '2bdd3c702c99249326f7',
      clientSecret: 'd50da72bb7a4debe520ab4d7edf9a160633b6a42',
      callbackURL: '/auth/github/callback',
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
