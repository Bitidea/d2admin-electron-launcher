# D2Admin Electron 启动器

使用 electron 打包 d2admin

## 如何使用？

### 1. 初始化项目

```bash
npm install
```

### 2. 编译**你自己**的 d2admin 项目

```bash
npm run build
```

### 3. 将编译好的 d2admin 项目的 dist 目录里的文件复制到本项目的 public 目录中

```bash
cp -r <你的 d2admin 项目路径>/dist/* <本项目路径>/public
```

### 4. 开始打包

```bash
npm run electron:build
```

## Electron 下载镜像

```bash
export ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/
```

## 打包过程中卡在下载 winCodeSign 等文件上？

请手动下载这些文件，并且 **解压** 到相应目录，具体请看 [这里](https://github.com/electron-userland/electron-builder/issues/1859)

## 相关项目

* [d2admin](https://d2.pub/zh/doc/d2-admin/)
* [vue-cli-plugin-electron-builder](https://nklayman.github.io/vue-cli-plugin-electron-builder/)
