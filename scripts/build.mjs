import * as esbuild from 'esbuild'
import { rimraf } from 'rimraf'
import stylePlugin from 'esbuild-style-plugin'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { copyFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const args = process.argv.slice(2)
const isProd = args[0] === '--production'

await rimraf('dist')

// 确保 dist 目录存在
if (!existsSync('dist')) {
  mkdirSync('dist', { recursive: true })
}

// 复制 public 目录下的静态文件
const publicFiles = ['sitemap.xml', 'robots.txt']
publicFiles.forEach(file => {
  const srcPath = join('public', file)
  const destPath = join('dist', file)
  if (existsSync(srcPath)) {
    copyFileSync(srcPath, destPath)
    console.log(`✅ 复制 ${file} 到 dist 目录`)
  } else {
    console.warn(`⚠️  文件不存在: ${srcPath}`)
  }
})

/**
 * @type {esbuild.BuildOptions}
 */
const esbuildOpts = {
  color: true,
  entryPoints: ['src/main.tsx', 'index.html'],
  outdir: 'dist',
  entryNames: '[name]',
  write: true,
  bundle: true,
  format: 'iife',
  sourcemap: isProd ? false : 'linked',
  minify: isProd,
  treeShaking: true,
  jsx: 'automatic',
  loader: {
    '.html': 'copy',
    '.png': 'file',
  },
  plugins: [
    stylePlugin({
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    }),
  ],
}

if (isProd) {
  await esbuild.build(esbuildOpts)
} else {
  const ctx = await esbuild.context(esbuildOpts)
  await ctx.watch()
  const { hosts, port } = await ctx.serve()
  console.log(`Running on:`)
  hosts.forEach((host) => {
    console.log(`http://${host}:${port}`)
  })
}
