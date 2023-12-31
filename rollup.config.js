import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import tsPlugin from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

var defaults = { compilerOptions: { declaration: true } };

export default (async () => ({
	input: 'src/index.tsx',
	output: {
		file: 'dist/bundle.js',
		format: 'iife',
	},
    cache: true,
    plugins: [
        nodeResolve({
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            browser: true
        }),
        commonjs({ sourceMap: false}),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        babel({
            presets: ["@babel/preset-react"],
            exclude: 'node_modules/**',
            plugins: ['external-helpers']
        }),
        tsPlugin({
            tsconfig: './tsconfig.json',
            declaration: true,
            declarationDir: 'dist'
        }),
        serve({
            open: true,
            verbose: true,
            contentBase: ["", "public"],
            host: "localhost",
            port: 3000,
            historyApiFallback: true
        }),
        livereload({ watch: "dist" }),
        terser(),
        postcss(),
    ]
}))();