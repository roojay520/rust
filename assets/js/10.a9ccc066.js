(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{364:function(t,s,n){t.exports=n.p+"assets/img/trpl04-05.4b14ca48.svg"},407:function(t,s,n){"use strict";n.r(s);var a=n(44),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"引用与借用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用与借用"}},[t._v("#")]),t._v(" 引用与借用")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch04-02-references-and-borrowing.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch04-02-references-and-borrowing.md"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\ncommit 4f19894e592cd24ac1476f1310dcf437ae83d4ba")])]),t._v(" "),a("p",[t._v("示例 4-5 中的元组代码有这样一个问题：我们必须将 "),a("code",[t._v("String")]),t._v(" 返回给调用函数，以便在调用 "),a("code",[t._v("calculate_length")]),t._v(" 后仍能使用 "),a("code",[t._v("String")]),t._v("，因为 "),a("code",[t._v("String")]),t._v(" 被移动到了 "),a("code",[t._v("calculate_length")]),t._v(" 内。")]),t._v(" "),a("p",[t._v("下面是如何定义并使用一个（新的）"),a("code",[t._v("calculate_length")]),t._v(" 函数，它以一个对象的引用作为参数而不是获取值的所有权：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calculate_length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"The length of '{}' is {}.\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("calculate_length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("usize")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("首先，注意变量声明和函数返回值中的所有元组代码都消失了。其次，注意我们传递 "),a("code",[t._v("&s1")]),t._v(" 给 "),a("code",[t._v("calculate_length")]),t._v("，同时在函数定义中，我们获取 "),a("code",[t._v("&String")]),t._v(" 而不是 "),a("code",[t._v("String")]),t._v("。")]),t._v(" "),a("p",[t._v("这些 & 符号就是 "),a("strong",[t._v("引用")]),t._v("，它们允许你使用值但不获取其所有权。图 4-5 展示了一张示意图。")]),t._v(" "),a("img",{staticClass:"center",attrs:{alt:"&String s pointing at String s1",src:n(364)}}),t._v(" "),a("p",[a("span",{staticClass:"caption"},[t._v("图 4-5："),a("code",[t._v("&String s")]),t._v(" 指向 "),a("code",[t._v("String s1")]),t._v(" 示意图")])]),t._v(" "),a("blockquote",[a("p",[t._v("注意：与使用 "),a("code",[t._v("&")]),t._v(" 引用相反的操作是 "),a("strong",[t._v("解引用")]),t._v("（"),a("em",[t._v("dereferencing")]),t._v("），它使用解引用运算符，"),a("code",[t._v("*")]),t._v("。我们将会在第八章遇到一些解引用运算符，并在第十五章详细讨论解引用。")])]),t._v(" "),a("p",[t._v("仔细看看这个函数调用：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[t._v("# "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("calculate_length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("usize")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n#     s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n# "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calculate_length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("code",[t._v("&s1")]),t._v(" 语法让我们创建一个 "),a("strong",[t._v("指向")]),t._v(" 值 "),a("code",[t._v("s1")]),t._v(" 的引用，但是并不拥有它。因为并不拥有这个值，当引用离开作用域时其指向的值也不会被丢弃。")]),t._v(" "),a("p",[t._v("同理，函数签名使用 "),a("code",[t._v("&")]),t._v(" 来表明参数 "),a("code",[t._v("s")]),t._v(" 的类型是一个引用。让我们增加一些解释性的注释：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("calculate_length")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("usize")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// s 是对 String 的引用")]),t._v("\n    s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里，s 离开了作用域。但因为它并不拥有引用值的所有权，")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所以什么也不会发生")]),t._v("\n")])])]),a("p",[t._v("变量 "),a("code",[t._v("s")]),t._v(" 有效的作用域与函数参数的作用域一样，不过当引用离开作用域后并不丢弃它指向的数据，因为我们没有所有权。当函数使用引用而不是实际值作为参数，无需返回值来交还所有权，因为就不曾拥有所有权。")]),t._v(" "),a("p",[t._v("我们将获取引用作为函数参数称为 "),a("strong",[t._v("借用")]),t._v("（"),a("em",[t._v("borrowing")]),t._v("）。正如现实生活中，如果一个人拥有某样东西，你可以从他那里借来。当你使用完毕，必须还回去。")]),t._v(" "),a("p",[t._v("如果我们尝试修改借用的变量呢？尝试示例 4-6 中的代码。剧透：这行不通！")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('fn main() {\n    let s = String::from("hello");\n\n    change(&s);\n}\n\nfn change(some_string: &String) {\n    some_string.push_str(", world");\n}\n')])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 4-6：尝试修改借用的值")])]),t._v(" "),a("p",[t._v("这里是错误：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('error[E0596]: cannot borrow immutable borrowed content `*some_string` as mutable\n --\x3e error.rs:8:5\n  |\n7 | fn change(some_string: &String) {\n  |                        ------- use `&mut String` here to make mutable\n8 |     some_string.push_str(", world");\n  |     ^^^^^^^^^^^ cannot borrow as mutable\n')])])]),a("p",[t._v("正如变量默认是不可变的，引用也一样。（默认）不允许修改引用的值。")]),t._v(" "),a("h3",{attrs:{id:"可变引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可变引用"}},[t._v("#")]),t._v(" 可变引用")]),t._v(" "),a("p",[t._v("我们通过一个小调整就能修复示例 4-6 代码中的错误：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("change")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("change")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("some_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    some_string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('", world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("首先，必须将 "),a("code",[t._v("s")]),t._v(" 改为 "),a("code",[t._v("mut")]),t._v("。然后必须创建一个可变引用 "),a("code",[t._v("&mut s")]),t._v(" 和接受一个可变引用 "),a("code",[t._v("some_string: &mut String")]),t._v("。")]),t._v(" "),a("p",[t._v("不过可变引用有一个很大的限制：在特定作用域中的特定数据只能有一个可变引用。这些代码会失败：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('let mut s = String::from("hello");\n\nlet r1 = &mut s;\nlet r2 = &mut s;\n\nprintln!("{}, {}", r1, r2);\n')])])]),a("p",[t._v("错误如下：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('error[E0499]: cannot borrow `s` as mutable more than once at a time\n --\x3e src/main.rs:5:14\n  |\n4 |     let r1 = &mut s;\n  |              ------ first mutable borrow occurs here\n5 |     let r2 = &mut s;\n  |              ^^^^^^ second mutable borrow occurs here\n6 |\n7 |     println!("{}, {}", r1, r2);\n  |                        -- first borrow later used here\n')])])]),a("p",[t._v("这个限制允许可变性，不过是以一种受限制的方式允许。新 Rustacean 们经常难以适应这一点，因为大部分语言中变量任何时候都是可变的。")]),t._v(" "),a("p",[t._v("这个限制的好处是 Rust 可以在编译时就避免数据竞争。"),a("strong",[t._v("数据竞争")]),t._v("（"),a("em",[t._v("data race")]),t._v("）类似于竞态条件，它可由这三个行为造成：")]),t._v(" "),a("ul",[a("li",[t._v("两个或更多指针同时访问同一数据。")]),t._v(" "),a("li",[t._v("至少有一个指针被用来写入数据。")]),t._v(" "),a("li",[t._v("没有同步数据访问的机制。")])]),t._v(" "),a("p",[t._v("数据竞争会导致未定义行为，难以在运行时追踪，并且难以诊断和修复；Rust 避免了这种情况的发生，因为它甚至不会编译存在数据竞争的代码！")]),t._v(" "),a("p",[t._v("一如既往，可以使用大括号来创建一个新的作用域，以允许拥有多个可变引用，只是不能 "),a("strong",[t._v("同时")]),t._v(" 拥有：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" r1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// r1 在这里离开了作用域，所以我们完全可以创建一个新的引用")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" r2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("类似的规则也存在于同时使用可变与不可变引用中。这些代码会导致一个错误：")]),t._v(" "),a("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('let mut s = String::from("hello");\n\nlet r1 = &s; // 没问题\nlet r2 = &s; // 没问题\nlet r3 = &mut s; // 大问题\n\nprintln!("{}, {}, and {}", r1, r2, r3);\n')])])]),a("p",[t._v("错误如下：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('error[E0502]: cannot borrow `s` as mutable because it is also borrowed as immutable\n --\x3e src/main.rs:6:14\n  |\n4 |     let r1 = &s; // no problem\n  |              -- immutable borrow occurs here\n5 |     let r2 = &s; // no problem\n6 |     let r3 = &mut s; // BIG PROBLEM\n  |              ^^^^^^ mutable borrow occurs here\n7 |\n8 |     println!("{}, {}, and {}", r1, r2, r3);\n  |                                -- immutable borrow later used here\n')])])]),a("p",[t._v("哇哦！我们 "),a("strong",[t._v("也")]),t._v(" 不能在拥有不可变引用的同时拥有可变引用。不可变引用的用户可不希望在他们的眼皮底下值就被意外的改变了！然而，多个不可变引用是可以的，因为没有哪个只能读取数据的人有能力影响其他人读取到的数据。")]),t._v(" "),a("p",[t._v("注意一个引用的作用域从声明的地方开始一直持续到最后一次使用为止。例如，因为最后一次使用不可变引用在声明可变引用之前，所以如下代码是可以编译的：")]),t._v(" "),a("div",{staticClass:"language-rust,edition2018,ignore extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('let mut s = String::from("hello");\n\nlet r1 = &s; // 没问题\nlet r2 = &s; // 没问题\nprintln!("{} and {}", r1, r2);\n// 此位置之后 r1 和 r2 不再使用\n\nlet r3 = &mut s; // 没问题\nprintln!("{}", r3);\n')])])]),a("p",[t._v("不可变引用 "),a("code",[t._v("r1")]),t._v(" 和 "),a("code",[t._v("r2")]),t._v(" 的作用域在 "),a("code",[t._v("println!")]),t._v(" 最后一次使用之后结束，这也是创建可变引用 "),a("code",[t._v("r3")]),t._v(" 的地方。它们的作用域没有重叠，所以代码是可以编译的。")]),t._v(" "),a("p",[t._v("尽管这些错误有时使人沮丧，但请牢记这是 Rust 编译器在提前指出一个潜在的 bug（在编译时而不是在运行时）并精准显示问题所在。这样你就不必去跟踪为何数据并不是你想象中的那样。")]),t._v(" "),a("h3",{attrs:{id:"悬垂引用-dangling-references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#悬垂引用-dangling-references"}},[t._v("#")]),t._v(" 悬垂引用（Dangling References）")]),t._v(" "),a("p",[t._v("在具有指针的语言中，很容易通过释放内存时保留指向它的指针而错误地生成一个 "),a("strong",[t._v("悬垂指针")]),t._v("（"),a("em",[t._v("dangling pointer")]),t._v("），所谓悬垂指针是其指向的内存可能已经被分配给其它持有者。相比之下，在 Rust 中编译器确保引用永远也不会变成悬垂状态：当你拥有一些数据的引用，编译器确保数据不会在其引用之前离开作用域。")]),t._v(" "),a("p",[t._v("让我们尝试创建一个悬垂引用，Rust 会通过一个编译时错误来避免：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('fn main() {\n    let reference_to_nothing = dangle();\n}\n\nfn dangle() -> &String {\n    let s = String::from("hello");\n\n    &s\n}\n')])])]),a("p",[t._v("这里是错误：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("error[E0106]: missing lifetime specifier\n --\x3e main.rs:5:16\n  |\n5 | fn dangle() -> &String {\n  |                ^ expected lifetime parameter\n  |\n  = help: this function's return type contains a borrowed value, but there is\n  no value for it to be borrowed from\n  = help: consider giving it a 'static lifetime\n")])])]),a("p",[t._v("错误信息引用了一个我们还未介绍的功能：生命周期（lifetimes）。第十章会详细介绍生命周期。不过，如果你不理会生命周期部分，错误信息中确实包含了为什么这段代码有问题的关键信息：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("this function's return type contains a borrowed value, but there is no value for it to be borrowed from.\n")])])]),a("p",[t._v("让我们仔细看看我们的 "),a("code",[t._v("dangle")]),t._v(" 代码的每一步到底发生了什么：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('fn dangle() -> &String { // dangle 返回一个字符串的引用\n\n    let s = String::from("hello"); // s 是一个新字符串\n\n    &s // 返回字符串 s 的引用\n} // 这里 s 离开作用域并被丢弃。其内存被释放。\n  // 危险！\n')])])]),a("p",[t._v("因为 "),a("code",[t._v("s")]),t._v(" 是在 "),a("code",[t._v("dangle")]),t._v(" 函数内创建的，当 "),a("code",[t._v("dangle")]),t._v(" 的代码执行完毕后，"),a("code",[t._v("s")]),t._v(" 将被释放。不过我们尝试返回它的引用。这意味着这个引用会指向一个无效的 "),a("code",[t._v("String")]),t._v("，这可不对！Rust 不会允许我们这么做。")]),t._v(" "),a("p",[t._v("这里的解决方法是直接返回 "),a("code",[t._v("String")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("no_dangle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    s\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("这样就没有任何错误了。所有权被移动出去，所以没有值被释放。")]),t._v(" "),a("h3",{attrs:{id:"引用的规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用的规则"}},[t._v("#")]),t._v(" 引用的规则")]),t._v(" "),a("p",[t._v("让我们概括一下之前对引用的讨论：")]),t._v(" "),a("ul",[a("li",[t._v("在任意给定时间，"),a("strong",[t._v("要么")]),t._v(" 只能有一个可变引用，"),a("strong",[t._v("要么")]),t._v(" 只能有多个不可变引用。")]),t._v(" "),a("li",[t._v("引用必须总是有效的。")])]),t._v(" "),a("p",[t._v("接下来，我们来看看另一种不同类型的引用：slice。")])])}),[],!1,null,null,null);s.default=e.exports}}]);