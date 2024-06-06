

          // module: {
          //      rules: [
          //           {
          //                test: /\.js$/,
          //                exclude: /node_modules/, // Exclude node_modules directory
          //                use: {
          //                     loader: "babel-loader",
          //                     options: {
          //                          presets: ["@babel/preset-env"],
          //                     },
          //                },
          //           },
          //      ],
          // },
          
          // configure: (webpackConfig, { env, paths }) => {
          //      if (env === "production") {
          //           // Code splitting
          //           webpackConfig.optimization.splitChunks = {
          //                chunks: "all",
          //                maxInitialRequests: Infinity,
          //                minSize: 0,
          //                cacheGroups: {
          //                     vendor: {
          //                          test: /[\\/]node_modules[\\/]/,
          //                          name: 'vendors',
          //                          chunks: 'all',
          //                          reuseExistingChunk: true,
          //                     } 
          //                     common: {
          //                          name: "common",
          //                          chunks: "initial",
          //                          reuseExistingChunk: true,
          //                          enforce: true,
          //                     },
          //                },
          //           };

          //           // Minification with Terser
          //           webpackConfig.optimization.minimizer = [
          //                new TerserPlugin({
          //                     terserOptions: {
          //                          compress: {
          //                               drop_console: true,
          //                          },
          //                     },
          //                }),
          //           ];

          //           // Bundle Analyzer
          //           webpackConfig.plugins.push(
          //                new BundleAnalyzerPlugin({
          //                     analyzerMode: "static",
          //                     openAnalyzer: false,
          //                })
          //           );

          //           // Compression Plugin
          //           webpackConfig.plugins.push(
          //                new CompressionPlugin({
          //                     test: /\.(js|css|html|svg)$/,
          //                     algorithm: "gzip",
          //                })
          //           );

          //           // Define Plugin to set environment variables
          //           webpackConfig.plugins.push(
          //                new DefinePlugin({
          //                     "process.env.NODE_ENV": JSON.stringify("production"),
          //                })
          //           );
          //      }

          //      return webpackConfig;
          // }, 