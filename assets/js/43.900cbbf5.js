(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{399:function(r,e,t){"use strict";t.r(e);var a=t(44),c=Object(a.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h2",{attrs:{id:"包和-crate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#包和-crate"}},[r._v("#")]),r._v(" 包和 crate")]),r._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch07-01-packages-and-crates.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("ch07-01-packages-and-crates.md"),t("OutboundLink")],1),r._v(" "),t("br"),r._v("\ncommit 879fef2345bf32751a83a9e779e0cb84e79b6d3d")])]),r._v(" "),t("p",[r._v("模块系统的第一部分，我们将介绍包和 crate。crate 是一个二进制项或者库。"),t("em",[r._v("crate root")]),r._v(" 是一个源文件，Rust 编译器以它为起始点，并构成你的 crate 的根模块（我们将在 “"),t("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch07-02-defining-modules-to-control-scope-and-privacy.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("定义模块来控制作用域与私有性"),t("OutboundLink")],1),r._v("” 一节深入解读）。"),t("em",[r._v("包")]),r._v("（"),t("em",[r._v("package")]),r._v("） 是提供一系列功能的一个或者多个 crate。一个包会包含有一个 "),t("em",[r._v("Cargo.toml")]),r._v(" 文件，阐述如何去构建这些 crate。")]),r._v(" "),t("p",[r._v("包中所包含的内容由几条规则来确立。一个包中至多 "),t("strong",[r._v("只能")]),r._v(" 包含一个库 crate(library crate)；包中可以包含任意多个二进制 crate(binary crate)；包中至少包含一个 crate，无论是库的还是二进制的。")]),r._v(" "),t("p",[r._v("让我们来看看创建包的时候会发生什么。首先，我们输入命令 "),t("code",[r._v("cargo new")]),r._v("：")]),r._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[r._v("$ cargo new my-project\n     Created binary (application) `my-project` package\n$ ls my-project\nCargo.toml\nsrc\n$ ls my-project/src\nmain.rs\n")])])]),t("p",[r._v("当我们输入了这条命令，Cargo 会给我们的包创建一个 "),t("em",[r._v("Cargo.toml")]),r._v(" 文件。查看 "),t("em",[r._v("Cargo.toml")]),r._v(" 的内容，会发现并没有提到 "),t("em",[r._v("src/main.rs")]),r._v("，因为 Cargo 遵循的一个约定："),t("em",[r._v("src/main.rs")]),r._v(" 就是一个与包同名的二进制 crate 的 crate 根。同样的，Cargo 知道如果包目录中包含 "),t("em",[r._v("src/lib.rs")]),r._v("，则包带有与其同名的库 crate，且 "),t("em",[r._v("src/lib.rs")]),r._v(" 是 crate 根。crate 根文件将由 Cargo 传递给 "),t("code",[r._v("rustc")]),r._v(" 来实际构建库或者二进制项目。")]),r._v(" "),t("p",[r._v("在此，我们有了一个只包含 "),t("em",[r._v("src/main.rs")]),r._v(" 的包，意味着它只含有一个名为 "),t("code",[r._v("my-project")]),r._v(" 的二进制 crate。如果一个包同时含有 "),t("em",[r._v("src/main.rs")]),r._v(" 和 "),t("em",[r._v("src/lib.rs")]),r._v("，则它有两个 crate：一个库和一个二进制项，且名字都与包相同。通过将文件放在 "),t("em",[r._v("src/bin")]),r._v(" 目录下，一个包可以拥有多个二进制 crate：每个 "),t("em",[r._v("src/bin")]),r._v(" 下的文件都会被编译成一个独立的二进制 crate。")]),r._v(" "),t("p",[r._v("一个 crate 会将一个作用域内的相关功能分组到一起，使得该功能可以很方便地在多个项目之间共享。举一个例子，我们在 "),t("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch02-00-guessing-game-tutorial.md#generating-a-random-number",target:"_blank",rel:"noopener noreferrer"}},[r._v("第二章"),t("OutboundLink")],1),r._v(" 使用的 "),t("code",[r._v("rand")]),r._v(" crate 提供了生成随机数的功能。通过将 "),t("code",[r._v("rand")]),r._v(" crate 加入到我们项目的作用域中，我们就可以在自己的项目中使用该功能。"),t("code",[r._v("rand")]),r._v(" crate 提供的所有功能都可以通过该 crate 的名字："),t("code",[r._v("rand")]),r._v(" 进行访问。")]),r._v(" "),t("p",[r._v("将一个 crate 的功能保持在其自身的作用域中，可以知晓一些特定的功能是在我们的 crate 中定义的还是在 "),t("code",[r._v("rand")]),r._v(" crate 中定义的，这可以防止潜在的冲突。例如，"),t("code",[r._v("rand")]),r._v(" crate 提供了一个名为 "),t("code",[r._v("Rng")]),r._v(" 的特性（trait）。我们还可以在我们自己的 crate 中定义一个名为 "),t("code",[r._v("Rng")]),r._v(" 的 "),t("code",[r._v("struct")]),r._v("。因为一个 crate 的功能是在自身的作用域进行命名的，当我们将 "),t("code",[r._v("rand")]),r._v(" 作为一个依赖，编译器不会混淆 "),t("code",[r._v("Rng")]),r._v(" 这个名字的指向。在我们的 crate 中，它指向的是我们自己定义的 "),t("code",[r._v("struct Rng")]),r._v("。我们可以通过 "),t("code",[r._v("rand::Rng")]),r._v(" 这一方式来访问 "),t("code",[r._v("rand")]),r._v(" crate 中的 "),t("code",[r._v("Rng")]),r._v(" 特性（trait）。")]),r._v(" "),t("p",[r._v("接下来让我们来说一说模块系统！")])])}),[],!1,null,null,null);e.default=c.exports}}]);