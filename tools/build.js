import webpack from 'webpack';
import config from '../webpack-dev.config.babel';

webpack(config, (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(stats.toString({
        chunks: true,
        colors: true
    }));
});