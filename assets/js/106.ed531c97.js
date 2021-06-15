(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{480:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"高级类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级类型"}},[t._v("#")]),t._v(" 高级类型")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/main/src/ch19-04-advanced-types.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch19-04-advanced-types.md"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\ncommit 426f3e4ec17e539ae9905ba559411169d303a031")])]),t._v(" "),a("p",[t._v("Rust 的类型系统有一些我们曾经提到但没有讨论过的功能。首先我们从一个关于为什么 newtype 与类型一样有用的更宽泛的讨论开始。接着会转向类型别名（type aliases），一个类似于 newtype 但有着稍微不同的语义的功能。我们还会讨论 "),a("code",[t._v("!")]),t._v(" 类型和动态大小类型。")]),t._v(" "),a("blockquote",[a("p",[t._v("这一部分假设你已经阅读了之前的 "),a("RouterLink",{attrs:{to:"/ch19-03-advanced-traits.html#using-the-newtype-pattern-to-implement-external-traits-on-external-types"}},[t._v("“newtype 模式用于在外部类型上实现外部 trait”")]),t._v("  部分。")],1)]),t._v(" "),a("h3",{attrs:{id:"为了类型安全和抽象而使用-newtype-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为了类型安全和抽象而使用-newtype-模式"}},[t._v("#")]),t._v(" 为了类型安全和抽象而使用 newtype 模式")]),t._v(" "),a("p",[t._v("newtype 模式可以用于一些其他我们还未讨论的功能，包括静态的确保某值不被混淆，和用来表示一个值的单元。实际上示例 19-15 中已经有一个这样的例子："),a("code",[t._v("Millimeters")]),t._v(" 和 "),a("code",[t._v("Meters")]),t._v(" 结构体都在 newtype 中封装了 "),a("code",[t._v("u32")]),t._v(" 值。如果编写了一个有 "),a("code",[t._v("Millimeters")]),t._v(" 类型参数的函数，不小心使用 "),a("code",[t._v("Meters")]),t._v(" 或普通的 "),a("code",[t._v("u32")]),t._v(" 值来调用该函数的程序是不能编译的。")]),t._v(" "),a("p",[t._v("另一个 newtype 模式的应用在于抽象掉一些类型的实现细节：例如，封装类型可以暴露出与直接使用其内部私有类型时所不同的公有 API，以便限制其功能。")]),t._v(" "),a("p",[t._v("newtype 也可以隐藏其内部的泛型类型。例如，可以提供一个封装了 "),a("code",[t._v("HashMap<i32, String>")]),t._v(" 的 "),a("code",[t._v("People")]),t._v(" 类型，用来储存人名以及相应的 ID。使用 "),a("code",[t._v("People")]),t._v(" 的代码只需与提供的公有 API 交互即可，比如向 "),a("code",[t._v("People")]),t._v(" 集合增加名字字符串的方法，这样这些代码就无需知道在内部我们将一个 "),a("code",[t._v("i32")]),t._v(" ID 赋予了这个名字了。newtype 模式是一种实现第十七章 "),a("RouterLink",{attrs:{to:"/ch17-01-what-is-oo.html#encapsulation-that-hides-implementation-details"}},[t._v("“封装隐藏了实现细节”")]),t._v("  部分所讨论的隐藏实现细节的封装的轻量级方法。")],1),t._v(" "),a("h3",{attrs:{id:"类型别名用来创建类型同义词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型别名用来创建类型同义词"}},[t._v("#")]),t._v(" 类型别名用来创建类型同义词")]),t._v(" "),a("p",[t._v("连同 newtype 模式，Rust 还提供了声明 "),a("strong",[t._v("类型别名")]),t._v("（"),a("em",[t._v("type alias")]),t._v("）的能力，使用 "),a("code",[t._v("type")]),t._v(" 关键字来给予现有类型另一个名字。例如，可以像这样创建 "),a("code",[t._v("i32")]),t._v(" 的别名 "),a("code",[t._v("Kilometers")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Kilometers")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这意味着 "),a("code",[t._v("Kilometers")]),t._v(" 是 "),a("code",[t._v("i32")]),t._v(" 的 "),a("strong",[t._v("同义词")]),t._v("（"),a("em",[t._v("synonym")]),t._v("）；不同于示例 19-15 中创建的 "),a("code",[t._v("Millimeters")]),t._v(" 和 "),a("code",[t._v("Meters")]),t._v(" 类型。"),a("code",[t._v("Kilometers")]),t._v(" 不是一个新的、单独的类型。"),a("code",[t._v("Kilometers")]),t._v(" 类型的值将被完全当作 "),a("code",[t._v("i32")]),t._v(" 类型值来对待：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Kilometers")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Kilometers")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x + y = {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("因为 "),a("code",[t._v("Kilometers")]),t._v(" 是 "),a("code",[t._v("i32")]),t._v(" 的别名，他们是同一类型，可以将 "),a("code",[t._v("i32")]),t._v(" 与 "),a("code",[t._v("Kilometers")]),t._v(" 相加，也可以将 "),a("code",[t._v("Kilometers")]),t._v(" 传递给获取 "),a("code",[t._v("i32")]),t._v(" 参数的函数。但通过这种手段无法获得上一部分讨论的 newtype 模式所提供的类型检查的好处。")]),t._v(" "),a("p",[t._v("类型别名的主要用途是减少重复。例如，可能会有这样很长的类型：")]),t._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Box<dyn Fn() + Send + 'static>\n")])])]),a("p",[t._v("在函数签名或类型注解中每次都书写这个类型将是枯燥且易于出错的。想象一下如示例 19-24 这样全是如此代码的项目：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("dyn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Send")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'static")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token closure-params"}},[a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("takes_long_type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("dyn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Send")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'static")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --snip--")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("returns_long_type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("dyn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Send")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'static")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --snip--")]),t._v("\n#     "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token closure-params"}},[a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 19-24: 在很多地方使用名称很长的类型")])]),t._v(" "),a("p",[t._v("类型别名通过减少项目中重复代码的数量来使其更加易于控制。这里我们为这个冗长的类型引入了一个叫做 "),a("code",[t._v("Thunk")]),t._v(" 的别名，这样就可以如示例 19-25 所示将所有使用这个类型的地方替换为更短的 "),a("code",[t._v("Thunk")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thunk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("dyn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Send")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'static")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thunk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token closure-params"}},[a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("takes_long_type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thunk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --snip--")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("returns_long_type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thunk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --snip--")]),t._v("\n#     "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token closure-params"}},[a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token closure-punctuation punctuation"}},[t._v("|")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 19-25: 引入类型别名 "),a("code",[t._v("Thunk")]),t._v(" 来减少重复")])]),t._v(" "),a("p",[t._v("这样就读写起来就容易多了！为类型别名选择一个好名字也可以帮助你表达意图（单词 "),a("em",[t._v("thunk")]),t._v(" 表示会在之后被计算的代码，所以这是一个存放闭包的合适的名字）。")]),t._v(" "),a("p",[t._v("类型别名也经常与 "),a("code",[t._v("Result<T, E>")]),t._v(" 结合使用来减少重复。考虑一下标准库中的 "),a("code",[t._v("std::io")]),t._v(" 模块。I/O 操作通常会返回一个 "),a("code",[t._v("Result<T, E>")]),t._v("，因为这些操作可能会失败。标准库中的 "),a("code",[t._v("std::io::Error")]),t._v(" 结构体代表了所有可能的 I/O 错误。"),a("code",[t._v("std::io")]),t._v(" 中大部分函数会返回 "),a("code",[t._v("Result<T, E>")]),t._v("，其中 "),a("code",[t._v("E")]),t._v(" 是 "),a("code",[t._v("std::io::Error")]),t._v("，比如 "),a("code",[t._v("Write")]),t._v(" trait 中的这些函数：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),t._v("fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("trait")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Write")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("write")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("usize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("flush")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("write_all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("write_fmt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arguments")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这里出现了很多的 "),a("code",[t._v("Result<..., Error>")]),t._v("。为此，"),a("code",[t._v("std::io")]),t._v(" 有这个类型别名声明：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Result")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),t._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("因为这位于 "),a("code",[t._v("std::io")]),t._v(" 中，可用的完全限定的别名是 "),a("code",[t._v("std::io::Result<T>")]),t._v(" —— 也就是说，"),a("code",[t._v("Result<T, E>")]),t._v(" 中 "),a("code",[t._v("E")]),t._v(" 放入了 "),a("code",[t._v("std::io::Error")]),t._v("。"),a("code",[t._v("Write")]),t._v(" trait 中的函数最终看起来像这样：")]),t._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("pub trait Write {\n    fn write(&mut self, buf: &[u8]) -> Result<usize>;\n    fn flush(&mut self) -> Result<()>;\n\n    fn write_all(&mut self, buf: &[u8]) -> Result<()>;\n    fn write_fmt(&mut self, fmt: Arguments) -> Result<()>;\n}\n")])])]),a("p",[t._v("类型别名在两个方面有帮助：易于编写 "),a("strong",[t._v("并")]),t._v(" 在整个 "),a("code",[t._v("std::io")]),t._v(" 中提供了一致的接口。因为这是一个别名，它只是另一个 "),a("code",[t._v("Result<T, E>")]),t._v("，这意味着可以在其上使用 "),a("code",[t._v("Result<T, E>")]),t._v(" 的任何方法，以及像 "),a("code",[t._v("?")]),t._v(" 这样的特殊语法。")]),t._v(" "),a("h3",{attrs:{id:"从不返回的-never-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从不返回的-never-type"}},[t._v("#")]),t._v(" 从不返回的 never type")]),t._v(" "),a("p",[t._v("Rust 有一个叫做 "),a("code",[t._v("!")]),t._v(" 的特殊类型。在类型理论术语中，它被称为 "),a("em",[t._v("empty type")]),t._v("，因为它没有值。我们更倾向于称之为 "),a("em",[t._v("never type")]),t._v("。这个名字描述了它的作用：在函数从不返回的时候充当返回值。例如：")]),t._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("fn bar() -> ! {\n    // --snip--\n}\n")])])]),a("p",[t._v("这读 “函数 "),a("code",[t._v("bar")]),t._v(" 从不返回”，而从不返回的函数被称为 "),a("strong",[t._v("发散函数")]),t._v("（"),a("em",[t._v("diverging functions")]),t._v("）。不能创建 "),a("code",[t._v("!")]),t._v(" 类型的值，所以 "),a("code",[t._v("bar")]),t._v(" 也不可能返回值。")]),t._v(" "),a("p",[t._v("不过一个不能创建值的类型有什么用呢？如果你回想一下示例 2-5 中的代码，曾经有一些看起来像这样的代码，如示例 19-26 所重现的：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[t._v("# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" guess "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("loop")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("u32")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("match")]),t._v(" guess"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ok")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 19-26: "),a("code",[t._v("match")]),t._v(" 语句和一个以 "),a("code",[t._v("continue")]),t._v(" 结束的分支")])]),t._v(" "),a("p",[t._v("当时我们忽略了代码中的一些细节。在第六章 "),a("RouterLink",{attrs:{to:"/ch06-02-match.html#the-match-control-flow-operator"}},[t._v("“"),a("code",[t._v("match")]),t._v(" 控制流运算符”")]),t._v(" 部分，我们学习了 "),a("code",[t._v("match")]),t._v(" 的分支必须返回相同的类型。如下代码不能工作：")],1),t._v(" "),a("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('let guess = match guess.trim().parse() {\n    Ok(_) => 5,\n    Err(_) => "hello",\n}\n')])])]),a("p",[t._v("这里的 "),a("code",[t._v("guess")]),t._v(" 必须既是整型 "),a("strong",[t._v("也是")]),t._v(" 字符串，而 Rust 要求 "),a("code",[t._v("guess")]),t._v(" 只能是一个类型。那么 "),a("code",[t._v("continue")]),t._v(" 返回了什么呢？为什么示例 19-26 中会允许一个分支返回 "),a("code",[t._v("u32")]),t._v(" 而另一个分支却以 "),a("code",[t._v("continue")]),t._v(" 结束呢？")]),t._v(" "),a("p",[t._v("正如你可能猜到的，"),a("code",[t._v("continue")]),t._v(" 的值是 "),a("code",[t._v("!")]),t._v("。也就是说，当 Rust 要计算 "),a("code",[t._v("guess")]),t._v(" 的类型时，它查看这两个分支。前者是 "),a("code",[t._v("u32")]),t._v(" 值，而后者是 "),a("code",[t._v("!")]),t._v(" 值。因为 "),a("code",[t._v("!")]),t._v(" 并没有一个值，Rust 决定 "),a("code",[t._v("guess")]),t._v(" 的类型是 "),a("code",[t._v("u32")]),t._v("。")]),t._v(" "),a("p",[t._v("描述 "),a("code",[t._v("!")]),t._v(" 的行为的正式方式是 never type 可以强转为任何其他类型。允许 "),a("code",[t._v("match")]),t._v(" 的分支以 "),a("code",[t._v("continue")]),t._v(" 结束是因为 "),a("code",[t._v("continue")]),t._v(" 并不真正返回一个值；相反它把控制权交回上层循环，所以在 "),a("code",[t._v("Err")]),t._v(" 的情况，事实上并未对 "),a("code",[t._v("guess")]),t._v(" 赋值。")]),t._v(" "),a("p",[t._v("never type 的另一个用途是 "),a("code",[t._v("panic!")]),t._v("。还记得 "),a("code",[t._v("Option<T>")]),t._v(" 上的 "),a("code",[t._v("unwrap")]),t._v(" 函数吗？它产生一个值或 panic。这里是它的定义：")]),t._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('impl<T> Option<T> {\n    pub fn unwrap(self) -> T {\n        match self {\n            Some(val) => val,\n            None => panic!("called `Option::unwrap()` on a `None` value"),\n        }\n    }\n}\n')])])]),a("p",[t._v("这里与示例 19-34 中的 "),a("code",[t._v("match")]),t._v(" 发生了相同的情况：Rust 知道 "),a("code",[t._v("val")]),t._v(" 是 "),a("code",[t._v("T")]),t._v(" 类型，"),a("code",[t._v("panic!")]),t._v(" 是 "),a("code",[t._v("!")]),t._v(" 类型，所以整个 "),a("code",[t._v("match")]),t._v(" 表达式的结果是 "),a("code",[t._v("T")]),t._v(" 类型。这能工作是因为 "),a("code",[t._v("panic!")]),t._v(" 并不产生一个值；它会终止程序。对于 "),a("code",[t._v("None")]),t._v(" 的情况，"),a("code",[t._v("unwrap")]),t._v(" 并不返回一个值，所以这些代码是有效。")]),t._v(" "),a("p",[t._v("最后一个有着 "),a("code",[t._v("!")]),t._v(" 类型的表达式是 "),a("code",[t._v("loop")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('print!("forever ");\n\nloop {\n    print!("and ever ");\n}\n')])])]),a("p",[t._v("这里，循环永远也不结束，所以此表达式的值是 "),a("code",[t._v("!")]),t._v("。但是如果引入 "),a("code",[t._v("break")]),t._v(" 这就不为真了，因为循环在执行到 "),a("code",[t._v("break")]),t._v(" 后就会终止。")]),t._v(" "),a("h3",{attrs:{id:"动态大小类型和-sized-trait"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态大小类型和-sized-trait"}},[t._v("#")]),t._v(" 动态大小类型和 "),a("code",[t._v("Sized")]),t._v(" trait")]),t._v(" "),a("p",[t._v("因为 Rust 需要知道例如应该为特定类型的值分配多少空间这样的信息其类型系统的一个特定的角落可能令人迷惑：这就是 "),a("strong",[t._v("动态大小类型")]),t._v("（"),a("em",[t._v("dynamically sized types")]),t._v("）的概念。这有时被称为 “DST” 或 “unsized types”，这些类型允许我们处理只有在运行时才知道大小的类型。")]),t._v(" "),a("p",[t._v("让我们深入研究一个贯穿本书都在使用的动态大小类型的细节："),a("code",[t._v("str")]),t._v("。没错，不是 "),a("code",[t._v("&str")]),t._v("，而是 "),a("code",[t._v("str")]),t._v(" 本身。"),a("code",[t._v("str")]),t._v(" 是一个 DST；直到运行时我们都不知道字符串有多长。因为直到运行时都不能知道大其小，也就意味着不能创建 "),a("code",[t._v("str")]),t._v(" 类型的变量，也不能获取 "),a("code",[t._v("str")]),t._v(" 类型的参数。考虑一下这些代码，他们不能工作：")]),t._v(" "),a("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('let s1: str = "Hello there!";\nlet s2: str = "How\'s it going?";\n')])])]),a("p",[t._v("Rust 需要知道应该为特定类型的值分配多少内存，同时所有同一类型的值必须使用相同数量的内存。如果允许编写这样的代码，也就意味着这两个 "),a("code",[t._v("str")]),t._v(" 需要占用完全相同大小的空间，不过它们有着不同的长度。这也就是为什么不可能创建一个存放动态大小类型的变量的原因。")]),t._v(" "),a("p",[t._v("那么该怎么办呢？你已经知道了这种问题的答案："),a("code",[t._v("s1")]),t._v(" 和 "),a("code",[t._v("s2")]),t._v(" 的类型是 "),a("code",[t._v("&str")]),t._v(" 而不是 "),a("code",[t._v("str")]),t._v("。如果你回想第四章 "),a("RouterLink",{attrs:{to:"/ch04-03-slices.html#string-slices"}},[t._v("“字符串 slice”")]),t._v("  部分，slice 数据结储存了开始位置和 slice 的长度。")],1),t._v(" "),a("p",[t._v("所以虽然 "),a("code",[t._v("&T")]),t._v(" 是一个储存了 "),a("code",[t._v("T")]),t._v(" 所在的内存位置的单个值，"),a("code",[t._v("&str")]),t._v(" 则是 "),a("strong",[t._v("两个")]),t._v(" 值："),a("code",[t._v("str")]),t._v(" 的地址和其长度。这样，"),a("code",[t._v("&str")]),t._v(" 就有了一个在编译时可以知道的大小：它是 "),a("code",[t._v("usize")]),t._v(" 长度的两倍。也就是说，我们总是知道 "),a("code",[t._v("&str")]),t._v(" 的大小，而无论其引用的字符串是多长。这里是 Rust 中动态大小类型的常规用法：他们有一些额外的元信息来储存动态信息的大小。这引出了动态大小类型的黄金规则：必须将动态大小类型的值置于某种指针之后。")]),t._v(" "),a("p",[t._v("可以将 "),a("code",[t._v("str")]),t._v(" 与所有类型的指针结合：比如 "),a("code",[t._v("Box<str>")]),t._v(" 或 "),a("code",[t._v("Rc<str>")]),t._v("。事实上，之前我们已经见过了，不过是另一个动态大小类型：trait。每一个 trait 都是一个可以通过 trait 名称来引用的动态大小类型。在第十七章 "),a("RouterLink",{attrs:{to:"/ch17-02-trait-objects.html#using-trait-objects-that-allow-for-values-of-different-types"}},[t._v("“为使用不同类型的值而设计的 trait 对象”")]),t._v(" 部分，我们提到了为了将 trait 用于 trait 对象，必须将他们放入指针之后，比如 "),a("code",[t._v("&dyn Trait")]),t._v(" 或 "),a("code",[t._v("Box<dyn Trait>")]),t._v("（"),a("code",[t._v("Rc<dyn Trait>")]),t._v(" 也可以）。")],1),t._v(" "),a("p",[t._v("为了处理 DST，Rust 有一个特定的 trait 来决定一个类型的大小是否在编译时可知：这就是 "),a("code",[t._v("Sized")]),t._v(" trait。这个 trait 自动为编译器在编译时就知道大小的类型实现。另外，Rust 隐式的为每一个泛型函数增加了 "),a("code",[t._v("Sized")]),t._v(" bound。也就是说，对于如下泛型函数定义：")]),t._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("fn generic<T>(t: T) {\n    // --snip--\n}\n")])])]),a("p",[t._v("实际上被当作如下处理：")]),t._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("fn generic<T: Sized>(t: T) {\n    // --snip--\n}\n")])])]),a("p",[t._v("泛型函数默认只能用于在编译时已知大小的类型。然而可以使用如下特殊语法来放宽这个限制：")]),t._v(" "),a("div",{staticClass:"language-rust,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("fn generic<T: ?Sized>(t: &T) {\n    // --snip--\n}\n")])])]),a("p",[a("code",[t._v("?Sized")]),t._v(" trait bound 与 "),a("code",[t._v("Sized")]),t._v(" 相对；也就是说，它可以读作 “"),a("code",[t._v("T")]),t._v(" 可能是也可能不是 "),a("code",[t._v("Sized")]),t._v(" 的”。这个语法只能用于 "),a("code",[t._v("Sized")]),t._v(" ，而不能用于其他 trait。")]),t._v(" "),a("p",[t._v("另外注意我们将 "),a("code",[t._v("t")]),t._v(" 参数的类型从 "),a("code",[t._v("T")]),t._v(" 变为了 "),a("code",[t._v("&T")]),t._v("：因为其类型可能不是 "),a("code",[t._v("Sized")]),t._v(" 的，所以需要将其置于某种指针之后。在这个例子中选择了引用。")]),t._v(" "),a("p",[t._v("接下来，让我们讨论一下函数和闭包！")])])}),[],!1,null,null,null);s.default=e.exports}}]);