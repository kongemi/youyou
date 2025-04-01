# 个人网站

这是一个简洁、现代的个人展示网站，包含照片轮播、自我介绍和互动聊天功能。

## 功能特点

- 响应式设计，适配各种设备屏幕
- 顶部导航栏，便于页面导航
- 主图片轮播区，展示精选照片
- 个人简介区域，介绍自己
- 作品展示区，以卡片形式展示项目
- 互动聊天功能，与访客交流
- 页脚区域，包含社交媒体链接和版权信息

## 技术栈

- React
- TypeScript
- Vite
- Tailwind CSS
- Swiper (轮播组件)

## 安装与运行

1. 安装依赖：

```bash
npm install
```

2. 开发模式运行：

```bash
npm run dev
```

3. 构建生产版本：

```bash
npm run build
```

4. 预览生产版本：

```bash
npm run preview
```

## 自定义内容

- 在 `src/components/Hero.tsx` 文件中更改轮播图内容
- 在 `src/components/About.tsx` 文件中更新个人信息
- 在 `src/components/Gallery.tsx` 文件中修改作品展示内容
- 在 `src/components/Chat.tsx` 文件中调整聊天功能
- 在 `src/components/Footer.tsx` 文件中更新社交媒体链接

## 响应式设计

网站在不同屏幕尺寸下有良好的显示效果：
- 移动设备：单列布局，导航栏折叠
- 平板电脑：双列布局，部分区域优化
- 桌面电脑：完整布局，最佳视觉体验 