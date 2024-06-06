const path = require("path");
// const TerserPlugin = require("terser-webpack-plugin");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// const CompressionPlugin = require("compression-webpack-plugin");
// const { DefinePlugin } = require("webpack"); 

module.exports = {
     webpack: {
          alias: {
               "@components": path.resolve(__dirname, "src/components"),
               "@config": path.resolve(__dirname, "src/config"),
               "@layouts": path.resolve(__dirname, "src/layouts"),
               "@hooks": path.resolve(__dirname, "src/hooks"),
               "@pages": path.resolve(__dirname, "src/pages"),
               "@services": path.resolve(__dirname, "src/services"),
               "@helper": path.resolve(__dirname, "src/helper"),
               "@routes": path.resolve(__dirname, "src/routes"),
               "@constants": path.resolve(__dirname, "src/constants"),
               "@icons": path.resolve(__dirname, "src/icons"),
               "@utils": path.resolve(__dirname, "src/utils"),
          },
          optimization: {
               splitChunks: {
                    chunks: 'all'
               }
          },
     }
};