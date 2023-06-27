module.exports = {
  title: "犴云山",
  description: "这是一个测试博客",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    sidebar: [
      {
        title: '测试页面2',
        children: ['/docs/test2'],
        initialOpenGroupIndex: 1 // 可选的, 默认值是 0
      }
    ]
  },
};