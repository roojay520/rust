module.exports = {
  base: '/rust/',
  title: 'Rust 程序设计语言（中文版）',
  description: 'Rust 程序设计语言',
  themeConfig: {
    lastUpdated: 'Last Updated',
    smoothScroll: false,
    nav: [
      { text: 'GitHub', link: 'https://github.com/roojay520/trpl-zh-cn' },
      {
        text: '其它',
        items: [
          { text: 'The Rust Programming Language', link: 'https://github.com/rust-lang/book' },
          { text: 'Rust 程序设计语言（第二版 & 2018 edition）', link: 'https://github.com/KaiserY/trpl-zh-cn' },
          { text: 'Rust语言中文社区', link: 'https://rust.cc/' },
        ],
      },
    ],
    sidebar: [
      {
        title: '目录',
        path: '/',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          {
            title: '入门指南',
            children: [
              ['title-page.md', 'Rust 程序设计语言'],
              ['foreword.md', '前言'],
              ['ch00-00-introduction.md', '介绍'],
              {
                title: '入门指南',
                path: '/ch01-00-getting-started',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  'ch01-01-installation.md',
                  'ch01-02-hello-world.md',
                  'ch01-03-hello-cargo.md',
                  'ch02-00-guessing-game-tutorial.md',
                ],
              },
              {
                title: '常见编程概念',
                path: '/ch03-00-common-programming-concepts',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  'ch03-01-variables-and-mutability.md',
                  'ch03-02-data-types.md',
                  'ch03-03-how-functions-work.md',
                  'ch03-04-comments.md',
                  'ch03-05-control-flow.md',
                ],
              },

              {
                title: '认识所有权',
                path: '/ch04-00-understanding-ownership',
                collapsable: false,
                sidebarDepth: 0,
                children: ['ch04-01-what-is-ownership.md', 'ch04-02-references-and-borrowing.md', 'ch04-03-slices.md'],
              },

              {
                title: '使用结构体来组织相关联的数据',
                path: '/ch05-00-structs',
                collapsable: false,
                sidebarDepth: 0,
                children: ['ch05-01-defining-structs.md', 'ch05-02-example-structs.md', 'ch05-03-method-syntax.md'],
              },
              {
                title: '枚举与模式匹配',
                path: '/ch06-00-enums',
                collapsable: false,
                sidebarDepth: 0,
                children: ['ch06-01-defining-an-enum.md', 'ch06-02-match.md', 'ch06-03-if-let.md'],
              },
            ],
          },
          {
            title: '基本 Rust 技能',
            children: [
              {
                title: '使用包、Crate 和模块管理不断增长的项目',
                path: '/ch07-00-managing-growing-projects-with-packages-crates-and-modules',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  'ch07-01-packages-and-crates.md',
                  'ch07-02-defining-modules-to-control-scope-and-privacy.md',
                  'ch07-03-paths-for-referring-to-an-item-in-the-module-tree.md',
                  'ch07-04-bringing-paths-into-scope-with-the-use-keyword.md',
                  'ch07-05-separating-modules-into-different-files.md',
                ],
              },
              {
                title: '常见集合',
                path: '/ch08-00-common-collections',
                collapsable: false,
                sidebarDepth: 0,
                children: ['ch08-01-vectors.md', 'ch08-02-strings.md', 'ch08-03-hash-maps.md'],
              },
              {
                title: '错误处理',
                path: '/ch09-00-error-handling',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  'ch09-01-unrecoverable-errors-with-panic.md',
                  'ch09-02-recoverable-errors-with-result.md',
                  'ch09-03-to-panic-or-not-to-panic.md',
                ],
              },
              {
                title: '泛型、trait 与生命周期',
                path: '/ch10-00-generics',
                collapsable: false,
                sidebarDepth: 0,
                children: ['ch10-01-syntax.md', 'ch10-02-traits.md', 'ch10-03-lifetime-syntax.md'],
              },

              {
                title: '测试',
                path: '/ch11-00-testing',
                collapsable: false,
                sidebarDepth: 0,
                children: ['ch11-01-writing-tests.md', 'ch11-02-running-tests.md', 'ch11-03-test-organization.md'],
              },

              {
                title: '一个 I/O 项目：构建命令行程序',
                path: '/ch12-00-an-io-project',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  'ch12-01-accepting-command-line-arguments.md',
                  'ch12-02-reading-a-file.md',
                  'ch12-03-improving-error-handling-and-modularity.md',
                  'ch12-04-testing-the-librarys-functionality.md',
                  'ch12-05-working-with-environment-variables.md',
                  'ch12-06-writing-to-stderr-instead-of-stdout.md',
                ],
              },
            ],
          },
          {
            title: 'Rust 编程思想',
            children: [
              {
                title: 'Rust 中的函数式语言功能：迭代器与闭包',
                path: '/ch13-00-functional-features',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  'ch13-01-closures.md',
                  'ch13-02-iterators.md',
                  'ch13-03-improving-our-io-project.md',
                  'ch13-04-performance.md',
                ],
              },

              {
                title: '更多关于 Cargo 和 Crates.io 的内容',
                path: '/ch14-00-more-about-cargo',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  'ch14-01-release-profiles.md',
                  'ch14-02-publishing-to-crates-io.md',
                  'ch14-03-cargo-workspaces.md',
                  'ch14-04-installing-binaries.md',
                  'ch14-05-extending-cargo.md',
                ],
              },

              {
                title: '智能指针',
                path: '/ch15-00-smart-pointers',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  'ch15-01-box.md',
                  'ch15-02-deref.md',
                  'ch15-03-drop.md',
                  'ch15-04-rc.md',
                  'ch15-05-interior-mutability.md',
                  'ch15-06-reference-cycles.md',
                ],
              },

              {
                title: '无畏并发',
                path: '/ch16-00-concurrency',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  'ch16-01-threads.md',
                  'ch16-02-message-passing.md',
                  'ch16-03-shared-state.md',
                  'ch16-04-extensible-concurrency-sync-and-send.md',
                ],
              },

              {
                title: 'Rust 的面向对象编程特性',
                path: '/ch17-00-oop',
                collapsable: false,
                sidebarDepth: 0,
                children: ['ch17-01-what-is-oo.md', 'ch17-02-trait-objects.md', 'ch17-03-oo-design-patterns.md'],
              },
            ],
          },

          {
            title: '高级主题',
            children: [
              {
                title: '模式用来匹配值的结构',
                path: '/ch18-00-patterns',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  'ch18-01-all-the-places-for-patterns.md',
                  'ch18-02-refutability.md',
                  'ch18-03-pattern-syntax.md',
                ],
              },

              {
                title: '高级特征',
                path: '/ch19-00-advanced-features',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  'ch19-01-unsafe-rust.md',
                  'ch19-03-advanced-traits.md',
                  'ch19-04-advanced-types.md',
                  'ch19-05-advanced-functions-and-closures.md',
                  'ch19-06-macros.md',
                ],
              },
              {
                title: '最后的项目: 构建多线程 web server',
                path: '/ch20-00-final-project-a-web-server',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  'ch20-01-single-threaded.md',
                  'ch20-02-multithreaded.md',
                  'ch20-03-graceful-shutdown-and-cleanup.md',
                ],
              },
              {
                title: '附录',
                path: '/appendix-00',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  'appendix-01-keywords.md',
                  'appendix-02-operators.md',
                  'appendix-03-derivable-traits.md',
                  'appendix-04-useful-development-tools.md',
                  'appendix-05-editions.md',
                  'appendix-06-translation.md',
                  'appendix-07-nightly-rust.md',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
