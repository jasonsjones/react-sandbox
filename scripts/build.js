import webpack from 'webpack';
import config from '../webpack.config.dev';

webpack(config, (err, stats) => {
    if (err) {
        console.error(err);
        retur;
    }

    console.log(stats.toString({
        chunks: true,
        colors: true
    }));
});