module.exports = {
  "extends": [
    "airbnb"
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "ecmaFeatures": {
    "jsx": true,
    "es6": true,
    "classes": true
  },
  "globals": {},
  "rules": {
    "react/forbid-prop-types": 0,
    "comma-dangle": [1, "always-multiline"],
    "no-underscore-dangle": 0,
    "max-len": [1, 180, 4],
    "no-use-before-define": [0],
    "arrow-body-style": [0],
    "no-shadow": [1],
    "no-confusing-arrow": ["error", {"allowParens": true}],
    "react/jsx-no-bind": [0],
    "import/no-extraneous-dependencies": [0],
    "react/jsx-filename-extension": [0],
    "import/no-named-as-default": [0],
    "react/self-closing-comp": [0],
    "no-plusplus": [0],
    "react/prefer-stateless-function": [1],
    "import/prefer-default-export": [0],
    "import/no-unresolved": [0],
    "jsx-a11y/no-static-element-interactions": 0,
    "linebreak-style": 0
  }
};
