### [Webpack](https://webpack.js.org) - entry point, output point, loaders, plugins

Create local folder:

```bash
rm -rf folder-name
cd d:/projects/training
mkdir webpack-bundler
cd webpack-bundler

cp /d/projects/goit-markup-hw-08/.prettierrc.json /d/projects/training/webpack-bundler/

cp /d/projects/goit-markup-hw-08/.gitignore /d/projects/training/webpack-bundler/

mkdir src
touch webpack.config.js src/index.js src/index.html
echo "# webpack-bundler" >> README.md
```

Initialize git repo and push to remote on github:

```bash
git init -b main && git add . && git commit -m 'first commit'
git remote add origin https://github.com/KostiantynO/webpack-bundler.git
git push -u origin main
```

Install modules:

```bash
npm init -y
npm i -D webpack webpack-cli
npm i -D webpack-dev-server
npm i -D html-webpack-plugin
npm i -D css-loader style-loader
npm i -D babel-loader @babel/core @babel/preset-env
npm i -D sass-loader sass
npm i -D mini-css-extract-plugin
```

`webpack.config.js`:

```js
const path = require('path');  // require('') - import in commonJS modules for Node.js
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html generator

module.exports = { // Node.js export
  entry: './src/index.js', // main js file (dependency graph root)

  output: {
    path: path.resolve(__dirname, 'build'), // make relative path to absolute path in OS. 'build' - is folder name

    filename: 'bundle.js',
  }

  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),  // generates html from template
    new MiniCssExtractPlugin({filename: 'styles.css'}), // generates css from js imports
    new CleanWebpackPlugin(),
  ],

  stats: 'errors-only', // clean console on server start

  devServer: {
    port: 4444,
    open: true, // opens index.html in browser on server start
  }
}
```

`package.json`:

```json
{
  // some stuff

  "scripts": {
    "dev": "webpack serve --mode=development",
    "prod": "webpack --mode=production"
  },

  "devDependencies": {
    "@babel/core": "^7.15.8",
    "@babel/preset-env": "^7.15.8",
    "babel-loader": "^8.2.3",
    "css-loader": "^6.5.0",
    "html-webpack-plugin": "^5.5.0",
    "mini-css-extract-plugin": "^2.4.3",
    "sass": "^1.43.4",
    "sass-loader": "^12.3.0",
    "style-loader": "^3.3.1",
    "webpack": "^5.60.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.4.0"
  }
}
```

```bash
git add . && git commit -m "adds modules and webpack config" && git push
```

1. Готовим сборку `webpack` (использую сборку).
2. Устанавливаю все зависимости, которые мне нужны, чтобы они у меня были в
   `node_modules`
3. Потом пишу код, css, js, html.
4. И в результате `webpack` выкидывает мне сборку для хостинга. Все собранное,
   все оптимизированное, все красивое.
5. А пока я разрабатываю, я использую `webpack-dev-server`, чтобы он делал мне
   это же каждый раз при каждом изменении файла, только локально и без
   оптимизации.

Вот наш miniCCSextractPlugin

1. MiniCssExtractPlugin
2. Смотрим, че надо сделать?
3. Надо просто его добавить как пакет. Неожиданно :)

Наша задача: привыкнуть просто к вот этой мантре.

1. Поставить пакетик.
2. Почитать доки.
3. Добавить настройку.

Так работает, в принципе, весь фронт, та и бек, ели мы говорим о написании кода.
