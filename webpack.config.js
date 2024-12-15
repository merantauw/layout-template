const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => ({
  entry: {
    index: './src/pages/index.js',
    contacts: './src/pages/contacts.js',
    company: './src/pages/company.js',
    blog: './src/pages/blog.js',
    blog_page: './src/pages/blog_page.js',
    catalog: './src/pages/catalog.js',
    product: './src/pages/product.js',
    systempage: './src/pages/systempage.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/scripts/[name].bundle.js',
    clean: true,
  },
  resolve: {
    alias: {
      scripts: path.resolve(__dirname, 'src/scripts'),
      fonts: path.resolve(__dirname, 'src/fonts'),
      styles: path.resolve(__dirname, 'src/styles'),
      images: path.resolve(__dirname, 'src/images'),
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader',
            options: {
              partialDirs: [
                path.resolve(__dirname, 'src/components'),
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|avif|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
              publicPath: 'assets/images/',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/',
              publicPath: '../fonts/', // Убедитесь, что publicPath указан правильно
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/index.hbs',
      filename: 'index.html',
      chunks: ['index'],
      minify: false,
      inject: 'body',
    }),
     new HtmlWebpackPlugin({
      template: './src/pages/contacts.hbs',
      filename: 'contacts.html',
      chunks: ['contacts'],
      minify: false,
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/company.hbs',
      filename: 'company.html',
      chunks: ['company'],
      minify: false,
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/blog.hbs',
      filename: 'blog.html',
      chunks: ['blog'],
      minify: false,
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/blog_page.hbs',
      filename: 'blog_page.html',
      chunks: ['blog_page'],
      minify: false,
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/catalog.hbs',
      filename: 'catalog.html',
      chunks: ['catalog'],
      minify: false,
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/product.hbs',
      filename: 'product.html',
      chunks: ['product'],
      minify: false,
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/systempage.hbs',
      filename: 'systempage.html',
      chunks: ['systempage'],
      minify: false,
      inject: 'body',
    }),

    /* Сюда вставляй копируй конструкцию сверху с названием страницы. Меняй название сразу в трёх строках */
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/images', to: 'assets/images' },
        { from: 'src/fonts', to: 'assets/fonts' }, // Добавьте это для копирования шрифтов
      ],
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 8000,
    hot: true, // Включите HMR
    liveReload: true, // Включите автоматическую перезагрузку страницы
    watchFiles: ['src/**/*.hbs'], // Добавьте это для отслеживания изменений в .hbs файлах
  },
  mode: 'development',
  optimization: {
    minimize: false,
  },
});