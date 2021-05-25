(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{370:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"附录-d-实用开发工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附录-d-实用开发工具"}},[t._v("#")]),t._v(" 附录 D：实用开发工具")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/appendix-04-useful-development-tools.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("appendix-04-useful-development-tools.md"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\ncommit 70a82519e48b8a61f98cabb8ff443d1b21962fea")])]),t._v(" "),a("p",[t._v("本附录，我们将讨论 Rust 项目提供的用于开发 Rust 代码的工具。")]),t._v(" "),a("h3",{attrs:{id:"通过-rustfmt-自动格式化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-rustfmt-自动格式化"}},[t._v("#")]),t._v(" 通过 "),a("code",[t._v("rustfmt")]),t._v(" 自动格式化")]),t._v(" "),a("p",[a("code",[t._v("rustfmt")]),t._v(" 工具根据社区代码风格格式化代码。很多项目使用 "),a("code",[t._v("rustfmt")]),t._v(" 来避免编写 Rust 风格的争论：所有人都用这个工具格式化代码！")]),t._v(" "),a("p",[t._v("安装 "),a("code",[t._v("rustfmt")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ rustup component add rustfmt\n")])])]),a("p",[t._v("这会提供 "),a("code",[t._v("rustfmt")]),t._v(" 和 "),a("code",[t._v("cargo-fmt")]),t._v("，类似于 Rust 同时安装 "),a("code",[t._v("rustc")]),t._v(" 和 "),a("code",[t._v("cargo")]),t._v("。为了格式化整个 Cargo 项目：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cargo fmt\n")])])]),a("p",[t._v("运行此命令会格式化当前 crate 中所有的 Rust 代码。这应该只会改变代码风格，而不是代码语义。请查看 "),a("a",{attrs:{href:"https://github.com/rust-lang-nursery/rustfmt",target:"_blank",rel:"noopener noreferrer"}},[t._v("该文档"),a("OutboundLink")],1),t._v(" 了解 "),a("code",[t._v("rustfmt")]),t._v(" 的更多信息。")]),t._v(" "),a("h3",{attrs:{id:"通过-rustfix-修复代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-rustfix-修复代码"}},[t._v("#")]),t._v(" 通过 "),a("code",[t._v("rustfix")]),t._v(" 修复代码")]),t._v(" "),a("p",[t._v("如果你编写过 Rust 代码，那么你可能见过编译器警告。例如，考虑如下代码：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("do_something")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_something")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这里调用了 "),a("code",[t._v("do_something")]),t._v(" 函数 100 次，不过从未在 "),a("code",[t._v("for")]),t._v(" 循环体中使用变量 "),a("code",[t._v("i")]),t._v("。Rust 会警告说：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cargo build\n   Compiling myprogram v0.1.0 (file:///projects/myprogram)\nwarning: unused variable: `i`\n --\x3e src/main.rs:4:9\n  |\n4 |     for i in 1..100 {\n  |         ^ help: consider using `_i` instead\n  |\n  = note: #[warn(unused_variables)] on by default\n\n    Finished dev [unoptimized + debuginfo] target(s) in 0.50s\n")])])]),a("p",[t._v("警告中建议使用 "),a("code",[t._v("_i")]),t._v(" 名称：下划线表明该变量有意不使用。我们可以通过 "),a("code",[t._v("cargo fix")]),t._v(" 命令使用 "),a("code",[t._v("rustfix")]),t._v(" 工具来自动采用该建议：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cargo fix\n    Checking myprogram v0.1.0 (file:///projects/myprogram)\n      Fixing src/main.rs (1 fix)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.59s\n")])])]),a("p",[t._v("如果再次查看 "),a("em",[t._v("src/main.rs")]),t._v("，会发现 "),a("code",[t._v("cargo fix")]),t._v(" 修改了代码：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("do_something")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" _i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_something")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("现在 "),a("code",[t._v("for")]),t._v(" 循环变量变为 "),a("code",[t._v("_i")]),t._v("，警告也不再出现。")]),t._v(" "),a("p",[a("code",[t._v("cargo fix")]),t._v(" 命令可以用于在不同 Rust 版本间迁移代码。版本在附录 E 中介绍。")]),t._v(" "),a("h3",{attrs:{id:"通过-clippy-提供更多-lint-功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-clippy-提供更多-lint-功能"}},[t._v("#")]),t._v(" 通过 "),a("code",[t._v("clippy")]),t._v(" 提供更多 lint 功能")]),t._v(" "),a("p",[a("code",[t._v("clippy")]),t._v(" 工具是一系列 lint 的集合，用于捕捉常见错误和改进 Rust 代码。")]),t._v(" "),a("p",[t._v("安装 "),a("code",[t._v("clippy")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ rustup component add clippy\n")])])]),a("p",[t._v("对任何 Cargo 项目运行 clippy 的 lint：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cargo clippy\n")])])]),a("p",[t._v("例如，如果程序使用了如 pi 这样数学常数的近似值，如下：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.1415")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"the area of the circle is {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在此项目上运行 "),a("code",[t._v("cargo clippy")]),t._v(" 会导致这个错误：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("error: approximate value of `f{32, 64}::consts::PI` found. Consider using it directly\n --\x3e src/main.rs:2:13\n  |\n2 |     let x = 3.1415;\n  |             ^^^^^^\n  |\n  = note: #[deny(clippy::approx_constant)] on by default\n  = help: for further information visit https://rust-lang-nursery.github.io/rust-clippy/master/index.html#approx_constant\n")])])]),a("p",[t._v("这告诉我们 Rust 定义了更为精确的常量，而如果使用了这些常量程序将更加准确。如下代码就不会导致 "),a("code",[t._v("clippy")]),t._v(" 产生任何错误或警告：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("f64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("consts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"the area of the circle is {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("请查看 "),a("a",{attrs:{href:"https://github.com/rust-lang/rust-clippy",target:"_blank",rel:"noopener noreferrer"}},[t._v("其文档"),a("OutboundLink")],1),t._v(" 来了解 "),a("code",[t._v("clippy")]),t._v(" 的更多信息。")]),t._v(" "),a("h3",{attrs:{id:"使用-rust-language-server-的-ide-集成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-rust-language-server-的-ide-集成"}},[t._v("#")]),t._v(" 使用 Rust Language Server 的 IDE 集成")]),t._v(" "),a("p",[t._v("为了帮助 IDE 集成，Rust 项目分发了 "),a("code",[t._v("rls")]),t._v("，其为 Rust Language Server 的缩写。这个工具采用 "),a("a",{attrs:{href:"http://langserver.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Language Server Protocol"),a("OutboundLink")],1),t._v("，这是一个 IDE 与编程语言沟通的规格说明。"),a("code",[t._v("rls")]),t._v(" 可以用于不同的客户端，比如 "),a("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=rust-lang.rust",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visual Studio: Code 的 Rust 插件"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("rls")]),t._v(" 工具的质量还未达到发布 1.0 版本的水平，不过目前有一个可用的预览版。请尝试使用并告诉我们它如何！")]),t._v(" "),a("p",[t._v("安装 "),a("code",[t._v("rls")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ rustup component add rls\n")])])]),a("p",[t._v("接着为特定的 IDE 安装 language server 支持，如此便会获得如自动补全、跳转到定义和 inline error 之类的功能。")]),t._v(" "),a("p",[t._v("请查看 "),a("a",{attrs:{href:"https://github.com/rust-lang/rls",target:"_blank",rel:"noopener noreferrer"}},[t._v("其文档"),a("OutboundLink")],1),t._v(" 来了解 "),a("code",[t._v("rls")]),t._v(" 的更多信息。")])])}),[],!1,null,null,null);s.default=e.exports}}]);