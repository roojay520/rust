(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{401:function(t,a,s){"use strict";s.r(a);var n=s(44),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"路径用于引用模块树中的项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路径用于引用模块树中的项"}},[t._v("#")]),t._v(" 路径用于引用模块树中的项")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch07-03-paths-for-referring-to-an-item-in-the-module-tree.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch07-03-paths-for-referring-to-an-item-in-the-module-tree.md"),s("OutboundLink")],1),t._v(" "),s("br"),t._v("\ncommit cc6a1ef2614aa94003566027b285b249ccf961fa")])]),t._v(" "),s("p",[t._v("来看一下 Rust 如何在模块树中找到一个项的位置，我们使用路径的方式，就像在文件系统使用路径一样。如果我们想要调用一个函数，我们需要知道它的路径。")]),t._v(" "),s("p",[t._v("路径有两种形式：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("绝对路径")]),t._v("（"),s("em",[t._v("absolute path")]),t._v("）从 crate 根开始，以 crate 名或者字面值 "),s("code",[t._v("crate")]),t._v(" 开头。")]),t._v(" "),s("li",[s("strong",[t._v("相对路径")]),t._v("（"),s("em",[t._v("relative path")]),t._v("）从当前模块开始，以 "),s("code",[t._v("self")]),t._v("、"),s("code",[t._v("super")]),t._v(" 或当前模块的标识符开头。")])]),t._v(" "),s("p",[t._v("绝对路径和相对路径都后跟一个或多个由双冒号（"),s("code",[t._v("::")]),t._v("）分割的标识符。")]),t._v(" "),s("p",[t._v("让我们回到示例 7-1。我们如何调用 "),s("code",[t._v("add_to_waitlist")]),t._v(" 函数？还是同样的问题，"),s("code",[t._v("add_to_waitlist")]),t._v(" 函数的路径是什么？在示例 7-3 中，我们通过删除一些模块和函数，稍微简化了一下我们的代码。我们在 crate 根定义了一个新函数 "),s("code",[t._v("eat_at_restaurant")]),t._v("，并在其中展示调用 "),s("code",[t._v("add_to_waitlist")]),t._v(" 函数的两种方法。"),s("code",[t._v("eat_at_restaurant")]),t._v(" 函数是我们 crate 库的一个公共API，所以我们使用 "),s("code",[t._v("pub")]),t._v(" 关键字来标记它。在 “"),s("RouterLink",{attrs:{to:"/ch07-03-paths-for-referring-to-an-item-in-the-module-tree.html#exposing-paths-with-the-pub-keyword"}},[t._v("使用"),s("code",[t._v("pub")]),t._v("关键字暴露路径")]),t._v("” 一节，我们将详细介绍 "),s("code",[t._v("pub")]),t._v("。注意，这个例子无法编译通过，我们稍后会解释原因。")],1),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),s("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mod front_of_house {\n    mod hosting {\n        fn add_to_waitlist() {}\n    }\n}\n\npub fn eat_at_restaurant() {\n    // Absolute path\n    crate::front_of_house::hosting::add_to_waitlist();\n\n    // Relative path\n    front_of_house::hosting::add_to_waitlist();\n}\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 7-3: 使用绝对路径和相对路径来调用 "),s("code",[t._v("add_to_waitlist")]),t._v(" 函数")])]),t._v(" "),s("p",[t._v("第一种方式，我们在 "),s("code",[t._v("eat_at_restaurant")]),t._v(" 中调用 "),s("code",[t._v("add_to_waitlist")]),t._v(" 函数，使用的是绝对路径。"),s("code",[t._v("add_to_waitlist")]),t._v(" 函数与 "),s("code",[t._v("eat_at_restaurant")]),t._v(" 被定义在同一 crate 中，这意味着我们可以使用 "),s("code",[t._v("crate")]),t._v(" 关键字为起始的绝对路径。")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("crate")]),t._v(" 后面，我们持续地嵌入模块，直到我们找到 "),s("code",[t._v("add_to_waitlist")]),t._v("。你可以想象出一个相同结构的文件系统，我们通过指定路径 "),s("code",[t._v("/front_of_house/hosting/add_to_waitlist")]),t._v(" 来执行 "),s("code",[t._v("add_to_waitlist")]),t._v(" 程序。我们使用 "),s("code",[t._v("crate")]),t._v(" 从 crate 根开始就类似于在 shell 中使用 "),s("code",[t._v("/")]),t._v(" 从文件系统根开始。")]),t._v(" "),s("p",[t._v("第二种方式，我们在 "),s("code",[t._v("eat_at_restaurant")]),t._v(" 中调用 "),s("code",[t._v("add_to_waitlist")]),t._v("，使用的是相对路径。这个路径以 "),s("code",[t._v("front_of_house")]),t._v(" 为起始，这个模块在模块树中，与 "),s("code",[t._v("eat_at_restaurant")]),t._v(" 定义在同一层级。与之等价的文件系统路径就是 "),s("code",[t._v("front_of_house/hosting/add_to_waitlist")]),t._v("。以名称为起始，意味着该路径是相对路径。")]),t._v(" "),s("p",[t._v("选择使用相对路径还是绝对路径，还是要取决于你的项目。取决于你是更倾向于将项的定义代码与使用该项的代码分开来移动，还是一起移动。举一个例子，如果我们要将 "),s("code",[t._v("front_of_house")]),t._v(" 模块和 "),s("code",[t._v("eat_at_restaurant")]),t._v(" 函数一起移动到一个名为 "),s("code",[t._v("customer_experience")]),t._v(" 的模块中，我们需要更新 "),s("code",[t._v("add_to_waitlist")]),t._v(" 的绝对路径，但是相对路径还是可用的。然而，如果我们要将 "),s("code",[t._v("eat_at_restaurant")]),t._v(" 函数单独移到一个名为 "),s("code",[t._v("dining")]),t._v(" 的模块中，还是可以使用原本的绝对路径来调用 "),s("code",[t._v("add_to_waitlist")]),t._v("，但是相对路径必须要更新。我们更倾向于使用绝对路径，因为把代码定义和项调用各自独立地移动是更常见的。")]),t._v(" "),s("p",[t._v("让我们试着编译一下示例 7-3，并查明为何不能编译！示例 7-4 展示了这个错误。")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ cargo build\n   Compiling restaurant v0.1.0 (file:///projects/restaurant)\nerror[E0603]: module `hosting` is private\n --\x3e src/lib.rs:9:28\n  |\n9 |     crate::front_of_house::hosting::add_to_waitlist();\n  |                            ^^^^^^^\n\nerror[E0603]: module `hosting` is private\n  --\x3e src/lib.rs:12:21\n   |\n12 |     front_of_house::hosting::add_to_waitlist();\n   |                     ^^^^^^^\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 7-4: 构建示例 7-3 出现的编译器错误")])]),t._v(" "),s("p",[t._v("错误信息说 "),s("code",[t._v("hosting")]),t._v(" 模块是私有的。换句话说，我们拥有 "),s("code",[t._v("hosting")]),t._v(" 模块和 "),s("code",[t._v("add_to_waitlist")]),t._v(" 函数的的正确路径，但是 Rust 不让我们使用，因为它不能访问私有片段。")]),t._v(" "),s("p",[t._v("模块不仅对于你组织代码很有用。他们还定义了 Rust 的 "),s("em",[t._v("私有性边界")]),t._v("（"),s("em",[t._v("privacy boundary")]),t._v("）：这条界线不允许外部代码了解、调用和依赖被封装的实现细节。所以，如果你希望创建一个私有函数或结构体，你可以将其放入模块。")]),t._v(" "),s("p",[t._v("Rust 中默认所有项（函数、方法、结构体、枚举、模块和常量）都是私有的。父模块中的项不能使用子模块中的私有项，但是子模块中的项可以使用他们父模块中的项。这是因为子模块封装并隐藏了他们的实现详情，但是子模块可以看到他们定义的上下文。继续拿餐馆作比喻，把私有性规则想象成餐馆的后台办公室：餐馆内的事务对餐厅顾客来说是不可知的，但办公室经理可以洞悉其经营的餐厅并在其中做任何事情。")]),t._v(" "),s("p",[t._v("Rust 选择以这种方式来实现模块系统功能，因此默认隐藏内部实现细节。这样一来，你就知道可以更改内部代码的哪些部分而不会破坏外部代码。你还可以通过使用 "),s("code",[t._v("pub")]),t._v(" 关键字来创建公共项，使子模块的内部部分暴露给上级模块。")]),t._v(" "),s("h3",{attrs:{id:"使用-pub-关键字暴露路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-pub-关键字暴露路径"}},[t._v("#")]),t._v(" 使用 "),s("code",[t._v("pub")]),t._v(" 关键字暴露路径")]),t._v(" "),s("p",[t._v("让我们回头看一下示例 7-4 的错误，它告诉我们 "),s("code",[t._v("hosting")]),t._v(" 模块是私有的。我们想让父模块中的 "),s("code",[t._v("eat_at_restaurant")]),t._v(" 函数可以访问子模块中的 "),s("code",[t._v("add_to_waitlist")]),t._v(" 函数，因此我们使用 "),s("code",[t._v("pub")]),t._v(" 关键字来标记 "),s("code",[t._v("hosting")]),t._v(" 模块，如示例 7-5 所示。")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),s("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mod front_of_house {\n    pub mod hosting {\n        fn add_to_waitlist() {}\n    }\n}\n\npub fn eat_at_restaurant() {\n    // Absolute path\n    crate::front_of_house::hosting::add_to_waitlist();\n\n    // Relative path\n    front_of_house::hosting::add_to_waitlist();\n}\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 7-5: 使用 "),s("code",[t._v("pub")]),t._v(" 关键字声明 "),s("code",[t._v("hosting")]),t._v(" 模块使其可在 "),s("code",[t._v("eat_at_restaurant")]),t._v(" 使用")])]),t._v(" "),s("p",[t._v("不幸的是，示例 7-5 的代码编译仍然有错误，如示例 7-6 所示。")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ cargo build\n   Compiling restaurant v0.1.0 (file:///projects/restaurant)\nerror[E0603]: function `add_to_waitlist` is private\n --\x3e src/lib.rs:9:37\n  |\n9 |     crate::front_of_house::hosting::add_to_waitlist();\n  |                                     ^^^^^^^^^^^^^^^\n\nerror[E0603]: function `add_to_waitlist` is private\n  --\x3e src/lib.rs:12:30\n   |\n12 |     front_of_house::hosting::add_to_waitlist();\n   |                              ^^^^^^^^^^^^^^^\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 7-6: 构建示例 7-5 出现的编译器错误")])]),t._v(" "),s("p",[t._v("发生了什么？在 "),s("code",[t._v("mod hosting")]),t._v(" 前添加了 "),s("code",[t._v("pub")]),t._v(" 关键字，使其变成公有的。伴随着这种变化，如果我们可以访问 "),s("code",[t._v("front_of_house")]),t._v("，那我们也可以访问 "),s("code",[t._v("hosting")]),t._v("。但是 "),s("code",[t._v("hosting")]),t._v(" 的 "),s("em",[t._v("内容")]),t._v("（"),s("em",[t._v("contents")]),t._v("） 仍然是私有的；这表明使模块公有并不使其内容也是公有的。模块上的 "),s("code",[t._v("pub")]),t._v(" 关键字只允许其父模块引用它。")]),t._v(" "),s("p",[t._v("示例 7-6 中的错误说，"),s("code",[t._v("add_to_waitlist")]),t._v(" 函数是私有的。私有性规则不但应用于模块，还应用于结构体、枚举、函数和方法。")]),t._v(" "),s("p",[t._v("让我们继续将 "),s("code",[t._v("pub")]),t._v(" 关键字放置在 "),s("code",[t._v("add_to_waitlist")]),t._v(" 函数的定义之前，使其变成公有。如示例 7-7 所示。")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[t._v("front_of_house")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[t._v("hosting")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("add_to_waitlist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("eat_at_restaurant")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Absolute path")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("crate")]),s("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("front_of_house"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("hosting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_to_waitlist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Relative path")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("front_of_house"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("hosting"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_to_waitlist")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n# "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 7-7: 为 "),s("code",[t._v("mod hosting")]),t._v("\n和 "),s("code",[t._v("fn add_to_waitlist")]),t._v(" 添加 "),s("code",[t._v("pub")]),t._v(" 关键字使他们可以在\n"),s("code",[t._v("eat_at_restaurant")]),t._v(" 函数中被调用")])]),t._v(" "),s("p",[t._v("现在代码可以编译通过了！让我们看看绝对路径和相对路径，并根据私有性规则，再检查一下为什么增加 "),s("code",[t._v("pub")]),t._v(" 关键字使得我们可以在 "),s("code",[t._v("add_to_waitlist")]),t._v(" 中调用这些路径。")]),t._v(" "),s("p",[t._v("在绝对路径，我们从 "),s("code",[t._v("crate")]),t._v("，也就是 crate 根开始。然后 crate 根中定义了 "),s("code",[t._v("front_of_house")]),t._v(" 模块。"),s("code",[t._v("front_of_house")]),t._v(" 模块不是公有的，不过因为 "),s("code",[t._v("eat_at_restaurant")]),t._v(" 函数与 "),s("code",[t._v("front_of_house")]),t._v(" 定义于同一模块中（即，"),s("code",[t._v("eat_at_restaurant")]),t._v(" 和 "),s("code",[t._v("front_of_house")]),t._v(" 是兄弟），我们可以从 "),s("code",[t._v("eat_at_restaurant")]),t._v(" 中引用 "),s("code",[t._v("front_of_house")]),t._v("。接下来是使用 "),s("code",[t._v("pub")]),t._v(" 标记的 "),s("code",[t._v("hosting")]),t._v(" 模块。我们可以访问 "),s("code",[t._v("hosting")]),t._v(" 的父模块，所以可以访问 "),s("code",[t._v("hosting")]),t._v("。最后，"),s("code",[t._v("add_to_waitlist")]),t._v(" 函数被标记为 "),s("code",[t._v("pub")]),t._v(" ，我们可以访问其父模块，所以这个函数调用是有效的！")]),t._v(" "),s("p",[t._v("在相对路径，其逻辑与绝对路径相同，除了第一步：不同于从 crate 根开始，路径从 "),s("code",[t._v("front_of_house")]),t._v(" 开始。"),s("code",[t._v("front_of_house")]),t._v(" 模块与 "),s("code",[t._v("eat_at_restaurant")]),t._v(" 定义于同一模块，所以从 "),s("code",[t._v("eat_at_restaurant")]),t._v(" 中开始定义的该模块相对路径是有效的。接下来因为 "),s("code",[t._v("hosting")]),t._v(" 和 "),s("code",[t._v("add_to_waitlist")]),t._v(" 被标记为 "),s("code",[t._v("pub")]),t._v("，路径其余的部分也是有效的，因此函数调用也是有效的！")]),t._v(" "),s("h3",{attrs:{id:"使用-super-起始的相对路径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-super-起始的相对路径"}},[t._v("#")]),t._v(" 使用 "),s("code",[t._v("super")]),t._v(" 起始的相对路径")]),t._v(" "),s("p",[t._v("我们还可以使用 "),s("code",[t._v("super")]),t._v(" 开头来构建从父模块开始的相对路径。这么做类似于文件系统中以 "),s("code",[t._v("..")]),t._v(" 开头的语法。我们为什么要这样做呢？")]),t._v(" "),s("p",[t._v("考虑一下示例 7-8 中的代码，它模拟了厨师更正了一个错误订单，并亲自将其提供给客户的情况。"),s("code",[t._v("fix_incorrect_order")]),t._v(" 函数通过指定的 "),s("code",[t._v("super")]),t._v(" 起始的 "),s("code",[t._v("serve_order")]),t._v(" 路径，来调用 "),s("code",[t._v("serve_order")]),t._v(" 函数：")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("serve_order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[t._v("back_of_house")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("fix_incorrect_order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cook_order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("serve_order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("cook_order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n# "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 7-8: 使用以 "),s("code",[t._v("super")]),t._v(" 开头的相对路径从父目录开始调用函数")])]),t._v(" "),s("p",[s("code",[t._v("fix_incorrect_order")]),t._v(" 函数在 "),s("code",[t._v("back_of_house")]),t._v(" 模块中，所以我们可以使用 "),s("code",[t._v("super")]),t._v(" 进入 "),s("code",[t._v("back_of_house")]),t._v(" 父模块，也就是本例中的 "),s("code",[t._v("crate")]),t._v(" 根。在这里，我们可以找到 "),s("code",[t._v("serve_order")]),t._v("。成功！我们认为 "),s("code",[t._v("back_of_house")]),t._v(" 模块和 "),s("code",[t._v("serve_order")]),t._v(" 函数之间可能具有某种关联关系，并且，如果我们要重新组织这个 crate 的模块树，需要一起移动它们。因此，我们使用 "),s("code",[t._v("super")]),t._v("，这样一来，如果这些代码被移动到了其他模块，我们只需要更新很少的代码。")]),t._v(" "),s("h3",{attrs:{id:"创建公有的结构体和枚举"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建公有的结构体和枚举"}},[t._v("#")]),t._v(" 创建公有的结构体和枚举")]),t._v(" "),s("p",[t._v("我们还可以使用 "),s("code",[t._v("pub")]),t._v(" 来设计公有的结构体和枚举，不过有一些额外的细节需要注意。如果我们在一个结构体定义的前面使用了 "),s("code",[t._v("pub")]),t._v(" ，这个结构体会变成公有的，但是这个结构体的字段仍然是私有的。我们可以根据情况决定每个字段是否公有。在示例 7-9 中，我们定义了一个公有结构体 "),s("code",[t._v("back_of_house:Breakfast")]),t._v("，其中有一个公有字段 "),s("code",[t._v("toast")]),t._v(" 和私有字段 "),s("code",[t._v("seasonal_fruit")]),t._v("。这个例子模拟的情况是，在一家餐馆中，顾客可以选择随餐附赠的面包类型，但是厨师会根据季节和库存情况来决定随餐搭配的水果。餐馆可用的水果变化是很快的，所以顾客不能选择水果，甚至无法看到他们将会得到什么水果。")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[t._v("back_of_house")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Breakfast")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" toast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        seasonal_fruit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("impl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Breakfast")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("summer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("toast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Breakfast")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Breakfast")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                toast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("toast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                seasonal_fruit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"peaches"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("eat_at_restaurant")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Order a breakfast in the summer with Rye toast")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" meal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("back_of_house"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Breakfast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("summer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Rye"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Change our mind about what bread we'd like")]),t._v("\n    meal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wheat"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I\'d like {} toast please"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" meal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The next line won't compile if we uncomment it; we're not allowed")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// to see or modify the seasonal fruit that comes with the meal")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// meal.seasonal_fruit = String::from("blueberries");')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 7-9: 带有公有和私有字段的结构体")])]),t._v(" "),s("p",[t._v("因为 "),s("code",[t._v("back_of_house::Breakfast")]),t._v(" 结构体的 "),s("code",[t._v("toast")]),t._v(" 字段是公有的，所以我们可以在 "),s("code",[t._v("eat_at_restaurant")]),t._v(" 中使用点号来随意的读写 "),s("code",[t._v("toast")]),t._v(" 字段。注意，我们不能在 "),s("code",[t._v("eat_at_restaurant")]),t._v(" 中使用 "),s("code",[t._v("seasonal_fruit")]),t._v(" 字段，因为 "),s("code",[t._v("seasonal_fruit")]),t._v(" 是私有的。尝试去除那一行修改 "),s("code",[t._v("seasonal_fruit")]),t._v(" 字段值的代码的注释，看看你会得到什么错误！")]),t._v(" "),s("p",[t._v("还请注意一点，因为 "),s("code",[t._v("back_of_house::Breakfast")]),t._v(" 具有私有字段，所以这个结构体需要提供一个公共的关联函数来构造 "),s("code",[t._v("Breakfast")]),t._v(" 的实例(这里我们命名为 "),s("code",[t._v("summer")]),t._v(")。如果 "),s("code",[t._v("Breakfast")]),t._v(" 没有这样的函数，我们将无法在 "),s("code",[t._v("eat_at_restaurant")]),t._v(" 中创建 "),s("code",[t._v("Breakfast")]),t._v(" 实例，因为我们不能在 "),s("code",[t._v("eat_at_restaurant")]),t._v(" 中设置私有字段 "),s("code",[t._v("seasonal_fruit")]),t._v(" 的值。")]),t._v(" "),s("p",[t._v("与之相反，如果我们将枚举设为公有，则它的所有成员都将变为公有。我们只需要在 "),s("code",[t._v("enum")]),t._v(" 关键字前面加上 "),s("code",[t._v("pub")]),t._v("，就像示例 7-10 展示的那样。")]),t._v(" "),s("p",[s("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),s("div",{staticClass:"language-rust extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[t._v("back_of_house")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("enum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-definition class-name"}},[t._v("Appetizer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Soup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Salad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("eat_at_restaurant")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" order1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("back_of_house"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Appetizer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Soup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" order2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("back_of_house"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Appetizer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Salad")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("span",{staticClass:"caption"},[t._v("示例 7-10: 设计公有枚举，使其所有成员公有")])]),t._v(" "),s("p",[t._v("因为我们创建了名为 "),s("code",[t._v("Appetizer")]),t._v(" 的公有枚举，所以我们可以在 "),s("code",[t._v("eat_at_restaurant")]),t._v(" 中使用 "),s("code",[t._v("Soup")]),t._v(" 和 "),s("code",[t._v("Salad")]),t._v(" 成员。如果枚举成员不是公有的，那么枚举会显得用处不大；给枚举的所有成员挨个添加 "),s("code",[t._v("pub")]),t._v(" 是很令人恼火的，因此枚举成员默认就是公有的。结构体通常使用时，不必将它们的字段公有化，因此结构体遵循常规，内容全部是私有的，除非使用 "),s("code",[t._v("pub")]),t._v(" 关键字。")]),t._v(" "),s("p",[t._v("还有一种使用 "),s("code",[t._v("pub")]),t._v(" 的场景我们还没有涉及到，那就是我们最后要讲的模块功能："),s("code",[t._v("use")]),t._v(" 关键字。我们将先单独介绍 "),s("code",[t._v("use")]),t._v("，然后展示如何结合使用 "),s("code",[t._v("pub")]),t._v(" 和 "),s("code",[t._v("use")]),t._v("。")])])}),[],!1,null,null,null);a.default=e.exports}}]);