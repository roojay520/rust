(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{477:function(t,s,a){"use strict";a.r(s);var e=a(44),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"不安全-rust"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不安全-rust"}},[t._v("#")]),t._v(" 不安全 Rust")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/rust-lang/book/blob/main/src/ch19-01-unsafe-rust.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch19-01-unsafe-rust.md"),a("OutboundLink")],1),t._v(" "),a("br"),t._v("\ncommit 28fa3d15b0bc67ea5e79eeff2198e4277fc61baf")])]),t._v(" "),a("p",[t._v("目前为止讨论过的代码都有 Rust 在编译时会强制执行的内存安全保证。然而，Rust 还隐藏有第二种语言，它不会强制执行这类内存安全保证：这被称为 "),a("strong",[t._v("不安全 Rust")]),t._v("（"),a("em",[t._v("unsafe Rust")]),t._v("）。它与常规 Rust 代码无异，但是会提供额外的超级力量。")]),t._v(" "),a("p",[t._v("不安全 Rust 之所以存在，是因为静态分析本质上是保守的。当编译器尝试确定一段代码是否支持某个保证时，拒绝一些有效的程序比接受无效程序要好一些。这必然意味着有时代码可能是合法的，但是 Rust 不这么认为！在这种情况下，可以使用不安全代码告诉编译器，“相信我，我知道我在干什么。”这么做的缺点就是你只能靠自己了：如果不安全代码出错了，比如解引用空指针，可能会导致不安全的内存使用。")]),t._v(" "),a("p",[t._v("另一个 Rust 存在不安全一面的原因是：底层计算机硬件固有的不安全性。如果 Rust 不允许进行不安全操作，那么有些任务则根本完成不了。Rust 需要能够进行像直接与操作系统交互，甚至于编写你自己的操作系统这样的底层系统编程！这也是 Rust 语言的目标之一。让我们看看不安全 Rust 能做什么，和怎么做。")]),t._v(" "),a("h3",{attrs:{id:"不安全的超级力量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不安全的超级力量"}},[t._v("#")]),t._v(" 不安全的超级力量")]),t._v(" "),a("p",[t._v("可以通过 "),a("code",[t._v("unsafe")]),t._v(" 关键字来切换到不安全 Rust，接着可以开启一个新的存放不安全代码的块。这里有五类可以在不安全 Rust 中进行而不能用于安全 Rust 的操作，它们称之为 “不安全的超级力量。” 这些超级力量是：")]),t._v(" "),a("ul",[a("li",[t._v("解引用裸指针")]),t._v(" "),a("li",[t._v("调用不安全的函数或方法")]),t._v(" "),a("li",[t._v("访问或修改可变静态变量")]),t._v(" "),a("li",[t._v("实现不安全 trait")]),t._v(" "),a("li",[t._v("访问 "),a("code",[t._v("union")]),t._v(" 的字段")])]),t._v(" "),a("p",[t._v("有一点很重要，"),a("code",[t._v("unsafe")]),t._v(" 并不会关闭借用检查器或禁用任何其他 Rust 安全检查：如果在不安全代码中使用引用，它仍会被检查。"),a("code",[t._v("unsafe")]),t._v(" 关键字只是提供了那五个不会被编译器检查内存安全的功能。你仍然能在不安全块中获得某种程度的安全。")]),t._v(" "),a("p",[t._v("再者，"),a("code",[t._v("unsafe")]),t._v(" 不意味着块中的代码就一定是危险的或者必然导致内存安全问题：其意图在于作为程序员你将会确保 "),a("code",[t._v("unsafe")]),t._v(" 块中的代码以有效的方式访问内存。")]),t._v(" "),a("p",[t._v("人是会犯错误的，错误总会发生，不过通过要求这五类操作必须位于标记为 "),a("code",[t._v("unsafe")]),t._v(" 的块中，就能够知道任何与内存安全相关的错误必定位于 "),a("code",[t._v("unsafe")]),t._v(" 块内。保持 "),a("code",[t._v("unsafe")]),t._v(" 块尽可能小，如此当之后调查内存 bug 时就会感谢你自己了。")]),t._v(" "),a("p",[t._v("为了尽可能隔离不安全代码，将不安全代码封装进一个安全的抽象并提供安全 API 是一个好主意，当我们学习不安全函数和方法时会讨论到。标准库的一部分被实现为在被评审过的不安全代码之上的安全抽象。这个技术防止了 "),a("code",[t._v("unsafe")]),t._v(" 泄露到所有你或者用户希望使用由 "),a("code",[t._v("unsafe")]),t._v(" 代码实现的功能的地方，因为使用其安全抽象是安全的。")]),t._v(" "),a("p",[t._v("让我们按顺序依次介绍上述五个超级力量，同时我们会看到一些提供不安全代码的安全接口的抽象。")]),t._v(" "),a("h3",{attrs:{id:"解引用裸指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解引用裸指针"}},[t._v("#")]),t._v(" 解引用裸指针")]),t._v(" "),a("p",[t._v("回到第四章的 "),a("RouterLink",{attrs:{to:"/ch04-02-references-and-borrowing.html#dangling-references"}},[t._v("“悬垂引用”")]),t._v("  部分，那里提到了编译器会确保引用总是有效的。不安全 Rust 有两个被称为 "),a("strong",[t._v("裸指针")]),t._v("（"),a("em",[t._v("raw pointers")]),t._v("）的类似于引用的新类型。和引用一样，裸指针是不可变或可变的，分别写作 "),a("code",[t._v("*const T")]),t._v(" 和 "),a("code",[t._v("*mut T")]),t._v("。这里的星号不是解引用运算符；它是类型名称的一部分。在裸指针的上下文中，"),a("strong",[t._v("不可变")]),t._v(" 意味着指针解引用之后不能直接赋值。")],1),t._v(" "),a("p",[t._v("与引用和智能指针的区别在于，记住裸指针")]),t._v(" "),a("ul",[a("li",[t._v("允许忽略借用规则，可以同时拥有不可变和可变的指针，或多个指向相同位置的可变指针")]),t._v(" "),a("li",[t._v("不保证指向有效的内存")]),t._v(" "),a("li",[t._v("允许为空")]),t._v(" "),a("li",[t._v("不能实现任何自动清理功能")])]),t._v(" "),a("p",[t._v("通过去掉 Rust 强加的保证，你可以放弃安全保证以换取性能或使用另一个语言或硬件接口的能力，此时 Rust 的保证并不适用。")]),t._v(" "),a("p",[t._v("示例 19-1 展示了如何从引用同时创建不可变和可变裸指针。")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" r1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" r2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 19-1: 通过引用创建裸指针")])]),t._v(" "),a("p",[t._v("注意这里没有引入 "),a("code",[t._v("unsafe")]),t._v(" 关键字。可以在安全代码中 "),a("strong",[t._v("创建")]),t._v(" 裸指针，只是不能在不安全块之外 "),a("strong",[t._v("解引用")]),t._v(" 裸指针，稍后便会看到。")]),t._v(" "),a("p",[t._v("这里使用 "),a("code",[t._v("as")]),t._v(" 将不可变和可变引用强转为对应的裸指针类型。因为直接从保证安全的引用来创建他们，可以知道这些特定的裸指针是有效，但是不能对任何裸指针做出如此假设。")]),t._v(" "),a("p",[t._v("接下来会创建一个不能确定其有效性的裸指针，示例 19-2 展示了如何创建一个指向任意内存地址的裸指针。尝试使用任意内存是未定义行为：此地址可能有数据也可能没有，编译器可能会优化掉这个内存访问，或者程序可能会出现段错误（segmentation fault）。通常没有好的理由编写这样的代码，不过却是可行的：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" address "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x012345usize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" address "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 19-2: 创建指向任意内存地址的裸指针")])]),t._v(" "),a("p",[t._v("记得我们说过可以在安全代码中创建裸指针，不过不能 "),a("strong",[t._v("解引用")]),t._v(" 裸指针和读取其指向的数据。现在我们要做的就是对裸指针使用解引用运算符 "),a("code",[t._v("*")]),t._v("，这需要一个 "),a("code",[t._v("unsafe")]),t._v(" 块，如示例 19-3 所示：")]),t._v(" "),a("div",{staticClass:"language-rust,unsafe extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('let mut num = 5;\n\nlet r1 = &num as *const i32;\nlet r2 = &mut num as *mut i32;\n\nunsafe {\n    println!("r1 is: {}", *r1);\n    println!("r2 is: {}", *r2);\n}\n')])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 19-3: 在 "),a("code",[t._v("unsafe")]),t._v(" 块中解引用裸指针")])]),t._v(" "),a("p",[t._v("创建一个指针不会造成任何危险；只有当访问其指向的值时才有可能遇到无效的值。")]),t._v(" "),a("p",[t._v("还需注意示例 19-1 和 19-3 中创建了同时指向相同内存位置 "),a("code",[t._v("num")]),t._v(" 的裸指针 "),a("code",[t._v("*const i32")]),t._v(" 和 "),a("code",[t._v("*mut i32")]),t._v("。相反如果尝试创建 "),a("code",[t._v("num")]),t._v(" 的不可变和可变引用，这将无法编译因为 Rust 的所有权规则不允许拥有可变引用的同时拥有不可变引用。通过裸指针，就能够同时创建同一地址的可变指针和不可变指针，若通过可变指针修改数据，则可能潜在造成数据竞争。请多加小心！")]),t._v(" "),a("p",[t._v("既然存在这么多的危险，为何还要使用裸指针呢？一个主要的应用场景便是调用 C 代码接口，这在下一部分 "),a("a",{attrs:{href:"#calling-an-unsafe-function-or-method"}},[t._v("“调用不安全函数或方法”")]),t._v("  中会讲到。另一个场景是构建借用检查器无法理解的安全抽象。让我们先介绍不安全函数，接着看一看使用不安全代码的安全抽象的例子。")]),t._v(" "),a("h3",{attrs:{id:"调用不安全函数或方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用不安全函数或方法"}},[t._v("#")]),t._v(" 调用不安全函数或方法")]),t._v(" "),a("p",[t._v("第二类要求使用不安全块的操作是调用不安全函数。不安全函数和方法与常规函数方法十分类似，除了其开头有一个额外的 "),a("code",[t._v("unsafe")]),t._v("。在此上下文中，关键字"),a("code",[t._v("unsafe")]),t._v("表示该函数具有调用时需要满足的要求，而 Rust 不会保证满足这些要求。通过在 "),a("code",[t._v("unsafe")]),t._v(" 块中调用不安全函数，表明我们已经阅读过此函数的文档并对其是否满足函数自身的契约负责。")]),t._v(" "),a("p",[t._v("如下是一个没有做任何操作的不安全函数 "),a("code",[t._v("dangerous")]),t._v(" 的例子：")]),t._v(" "),a("div",{staticClass:"language-rust,unsafe extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("unsafe fn dangerous() {}\n\nunsafe {\n    dangerous();\n}\n")])])]),a("p",[t._v("必须在一个单独的 "),a("code",[t._v("unsafe")]),t._v(" 块中调用 "),a("code",[t._v("dangerous")]),t._v(" 函数。如果尝试不使用 "),a("code",[t._v("unsafe")]),t._v(" 块调用 "),a("code",[t._v("dangerous")]),t._v("，则会得到一个错误：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("error[E0133]: call to unsafe function requires unsafe function or block\n --\x3e\n  |\n4 |     dangerous();\n  |     ^^^^^^^^^^^ call to unsafe function\n")])])]),a("p",[t._v("通过将 "),a("code",[t._v("dangerous")]),t._v(" 调用插入 "),a("code",[t._v("unsafe")]),t._v(" 块中，我们就向 Rust 保证了我们已经阅读过函数的文档，理解如何正确使用，并验证过其满足函数的契约。")]),t._v(" "),a("p",[t._v("不安全函数体也是有效的 "),a("code",[t._v("unsafe")]),t._v(" 块，所以在不安全函数中进行另一个不安全操作时无需新增额外的 "),a("code",[t._v("unsafe")]),t._v(" 块。")]),t._v(" "),a("h4",{attrs:{id:"创建不安全代码的安全抽象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建不安全代码的安全抽象"}},[t._v("#")]),t._v(" 创建不安全代码的安全抽象")]),t._v(" "),a("p",[t._v("仅仅因为函数包含不安全代码并不意味着整个函数都需要标记为不安全的。事实上，将不安全代码封装进安全函数是一个常见的抽象。作为一个例子，标准库中的函数，"),a("code",[t._v("split_at_mut")]),t._v("，它需要一些不安全代码，让我们探索如何可以实现它。这个安全函数定义于可变 slice 之上：它获取一个 slice 并从给定的索引参数开始将其分为两个 slice。"),a("code",[t._v("split_at_mut")]),t._v(" 的用法如示例 19-4 所示：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("vec!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" v"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split_at_mut")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("assert_eq!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("assert_eq!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mut")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 19-4: 使用安全的 "),a("code",[t._v("split_at_mut")]),t._v(" 函数")])]),t._v(" "),a("p",[t._v("这个函数无法只通过安全 Rust 实现。一个尝试可能看起来像示例 19-5，它不能编译。出于简单考虑，我们将 "),a("code",[t._v("split_at_mut")]),t._v(" 实现为函数而不是方法，并只处理 "),a("code",[t._v("i32")]),t._v(" 值而非泛型 "),a("code",[t._v("T")]),t._v(" 的 slice。")]),t._v(" "),a("div",{staticClass:"language-rust,ignore,does_not_compile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("fn split_at_mut(slice: &mut [i32], mid: usize) -> (&mut [i32], &mut [i32]) {\n    let len = slice.len();\n\n    assert!(mid <= len);\n\n    (&mut slice[..mid],\n     &mut slice[mid..])\n}\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 19-5: 尝试只使用安全 Rust 来实现 "),a("code",[t._v("split_at_mut")])])]),t._v(" "),a("p",[t._v("此函数首先获取 slice 的长度，然后通过检查参数是否小于或等于这个长度来断言参数所给定的索引位于 slice 当中。该断言意味着如果传入的索引比要分割的 slice 的索引更大，此函数在尝试使用这个索引前 panic。")]),t._v(" "),a("p",[t._v("之后我们在一个元组中返回两个可变的 slice：一个从原始 slice 的开头直到 "),a("code",[t._v("mid")]),t._v(" 索引，另一个从 "),a("code",[t._v("mid")]),t._v(" 直到原 slice 的结尾。")]),t._v(" "),a("p",[t._v("如果尝试编译示例 19-5 的代码，会得到一个错误：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("error[E0499]: cannot borrow `*slice` as mutable more than once at a time\n --\x3e\n  |\n6 |     (&mut slice[..mid],\n  |           ----- first mutable borrow occurs here\n7 |      &mut slice[mid..])\n  |           ^^^^^ second mutable borrow occurs here\n8 | }\n  | - first borrow ends here\n")])])]),a("p",[t._v("Rust 的借用检查器不能理解我们要借用这个 slice 的两个不同部分：它只知道我们借用了同一个 slice 两次。本质上借用 slice 的不同部分是可以的，因为结果两个 slice 不会重叠，不过 Rust 还没有智能到能够理解这些。当我们知道某些事是可以的而 Rust 不知道的时候，就是触及不安全代码的时候了")]),t._v(" "),a("p",[t._v("示例 19-6 展示了如何使用 "),a("code",[t._v("unsafe")]),t._v(" 块，裸指针和一些不安全函数调用来实现 "),a("code",[t._v("split_at_mut")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-rust,unsafe extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("use std::slice;\n\nfn split_at_mut(slice: &mut [i32], mid: usize) -> (&mut [i32], &mut [i32]) {\n    let len = slice.len();\n    let ptr = slice.as_mut_ptr();\n\n    assert!(mid <= len);\n\n    unsafe {\n        (slice::from_raw_parts_mut(ptr, mid),\n         slice::from_raw_parts_mut(ptr.add(mid), len - mid))\n    }\n}\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 19-6: 在 "),a("code",[t._v("split_at_mut")]),t._v(" 函数的实现中使用不安全代码")])]),t._v(" "),a("p",[t._v("回忆第四章的 "),a("RouterLink",{attrs:{to:"/ch04-03-slices.html#the-slice-type"}},[t._v("“Slice 类型” ")]),t._v(" 部分，slice 是一个指向一些数据的指针，并带有该 slice 的长度。可以使用 "),a("code",[t._v("len")]),t._v(" 方法获取 slice 的长度，使用 "),a("code",[t._v("as_mut_ptr")]),t._v(" 方法访问 slice 的裸指针。在这个例子中，因为有一个 "),a("code",[t._v("i32")]),t._v(" 值的可变 slice，"),a("code",[t._v("as_mut_ptr")]),t._v(" 返回一个 "),a("code",[t._v("*mut i32")]),t._v(" 类型的裸指针，储存在 "),a("code",[t._v("ptr")]),t._v(" 变量中。")],1),t._v(" "),a("p",[t._v("我们保持索引 "),a("code",[t._v("mid")]),t._v(" 位于 slice 中的断言。接着是不安全代码："),a("code",[t._v("slice::from_raw_parts_mut")]),t._v(" 函数获取一个裸指针和一个长度来创建一个 slice。这里使用此函数从 "),a("code",[t._v("ptr")]),t._v(" 中创建了一个有 "),a("code",[t._v("mid")]),t._v(" 个项的 slice。之后在 "),a("code",[t._v("ptr")]),t._v(" 上调用 "),a("code",[t._v("add")]),t._v(" 方法并使用 "),a("code",[t._v("mid")]),t._v(" 作为参数来获取一个从 "),a("code",[t._v("mid")]),t._v(" 开始的裸指针，使用这个裸指针并以 "),a("code",[t._v("mid")]),t._v(" 之后项的数量为长度创建一个 slice。")]),t._v(" "),a("p",[a("code",[t._v("slice::from_raw_parts_mut")]),t._v(" 函数是不安全的因为它获取一个裸指针，并必须确信这个指针是有效的。裸指针上的 "),a("code",[t._v("add")]),t._v(" 方法也是不安全的，因为其必须确信此地址偏移量也是有效的指针。因此必须将 "),a("code",[t._v("slice::from_raw_parts_mut")]),t._v(" 和 "),a("code",[t._v("add")]),t._v(" 放入 "),a("code",[t._v("unsafe")]),t._v(" 块中以便能调用它们。通过观察代码，和增加 "),a("code",[t._v("mid")]),t._v(" 必然小于等于 "),a("code",[t._v("len")]),t._v(" 的断言，我们可以说 "),a("code",[t._v("unsafe")]),t._v(" 块中所有的裸指针将是有效的 slice 中数据的指针。这是一个可以接受的 "),a("code",[t._v("unsafe")]),t._v(" 的恰当用法。")]),t._v(" "),a("p",[t._v("注意无需将 "),a("code",[t._v("split_at_mut")]),t._v(" 函数的结果标记为 "),a("code",[t._v("unsafe")]),t._v("，并可以在安全 Rust 中调用此函数。我们创建了一个不安全代码的安全抽象，其代码以一种安全的方式使用了 "),a("code",[t._v("unsafe")]),t._v(" 代码，因为其只从这个函数访问的数据中创建了有效的指针。")]),t._v(" "),a("p",[t._v("与此相对，示例 19-7 中的 "),a("code",[t._v("slice::from_raw_parts_mut")]),t._v(" 在使用 slice 时很有可能会崩溃。这段代码获取任意内存地址并创建了一个长为一万的 slice：")]),t._v(" "),a("div",{staticClass:"language-rust,unsafe extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("use std::slice;\n\nlet address = 0x01234usize;\nlet r = address as *mut i32;\n\nlet slice: &[i32] = unsafe {\n    slice::from_raw_parts_mut(r, 10000)\n};\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 19-7: 通过任意内存地址创建 slice")])]),t._v(" "),a("p",[t._v("我们并不拥有这个任意地址的内存，也不能保证这段代码创建的 slice 包含有效的 "),a("code",[t._v("i32")]),t._v(" 值。试图使用臆测为有效的 "),a("code",[t._v("slice")]),t._v(" 会导致未定义的行为。")]),t._v(" "),a("h4",{attrs:{id:"使用-extern-函数调用外部代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-extern-函数调用外部代码"}},[t._v("#")]),t._v(" 使用 "),a("code",[t._v("extern")]),t._v(" 函数调用外部代码")]),t._v(" "),a("p",[t._v("有时你的 Rust 代码可能需要与其他语言编写的代码交互。为此 Rust 有一个关键字，"),a("code",[t._v("extern")]),t._v("，有助于创建和使用 "),a("strong",[t._v("外部函数接口")]),t._v("（"),a("em",[t._v("Foreign Function Interface")]),t._v("， FFI）。外部函数接口是一个编程语言用以定义函数的方式，其允许不同（外部）编程语言调用这些函数。")]),t._v(" "),a("p",[t._v("示例 19-8 展示了如何集成 C 标准库中的 "),a("code",[t._v("abs")]),t._v(" 函数。"),a("code",[t._v("extern")]),t._v(" 块中声明的函数在 Rust 代码中总是不安全的。因为其他语言不会强制执行 Rust 的规则且 Rust 无法检查它们，所以确保其安全是程序员的责任：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust,unsafe extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('extern "C" {\n    fn abs(input: i32) -> i32;\n}\n\nfn main() {\n    unsafe {\n        println!("Absolute value of -3 according to C: {}", abs(-3));\n    }\n}\n')])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 19-8: 声明并调用另一个语言中定义的 "),a("code",[t._v("extern")]),t._v(" 函数")])]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v('extern "C"')]),t._v(" 块中，列出了我们希望能够调用的另一个语言中的外部函数的签名和名称。"),a("code",[t._v('"C"')]),t._v(" 部分定义了外部函数所使用的 "),a("strong",[t._v("应用二进制接口")]),t._v("（"),a("em",[t._v("application binary interface")]),t._v("，ABI） —— ABI 定义了如何在汇编语言层面调用此函数。"),a("code",[t._v('"C"')]),t._v(" ABI 是最常见的，并遵循 C 编程语言的 ABI。")]),t._v(" "),a("blockquote",[a("h4",{attrs:{id:"从其它语言调用-rust-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从其它语言调用-rust-函数"}},[t._v("#")]),t._v(" 从其它语言调用 Rust 函数")]),t._v(" "),a("p",[t._v("也可以使用 "),a("code",[t._v("extern")]),t._v(" 来创建一个允许其他语言调用 Rust 函数的接口。不同于 "),a("code",[t._v("extern")]),t._v(" 块，就在 "),a("code",[t._v("fn")]),t._v(" 关键字之前增加 "),a("code",[t._v("extern")]),t._v(" 关键字并指定所用到的 ABI。还需增加 "),a("code",[t._v("#[no_mangle]")]),t._v(" 注解来告诉 Rust 编译器不要 mangle 此函数的名称。"),a("em",[t._v("Mangling")]),t._v(" 发生于当编译器将我们指定的函数名修改为不同的名称时，这会增加用于其他编译过程的额外信息，不过会使其名称更难以阅读。每一个编程语言的编译器都会以稍微不同的方式 mangle 函数名，所以为了使 Rust 函数能在其他语言中指定，必须禁用 Rust 编译器的 name mangling。")]),t._v(" "),a("p",[t._v("在如下的例子中，一旦其编译为动态库并从 C 语言中链接，"),a("code",[t._v("call_from_c")]),t._v(" 函数就能够在 C 代码中访问：")]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[no_mangle]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extern")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"C"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("call_from_c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Just called a Rust function from C!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("extern")]),t._v(" 的使用无需 "),a("code",[t._v("unsafe")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"访问或修改可变静态变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问或修改可变静态变量"}},[t._v("#")]),t._v(" 访问或修改可变静态变量")]),t._v(" "),a("p",[t._v("目前为止全书都尽量避免讨论 "),a("strong",[t._v("全局变量")]),t._v("（"),a("em",[t._v("global variables")]),t._v("），Rust 确实支持他们，不过这对于 Rust 的所有权规则来说是有问题的。如果有两个线程访问相同的可变全局变量，则可能会造成数据竞争。")]),t._v(" "),a("p",[t._v("全局变量在 Rust 中被称为 "),a("strong",[t._v("静态")]),t._v("（"),a("em",[t._v("static")]),t._v("）变量。示例 19-9 展示了一个拥有字符串 slice 值的静态变量的声明和应用：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HELLO_WORLD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("str")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name is: {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HELLO_WORLD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 19-9: 定义和使用一个不可变静态变量")])]),t._v(" "),a("p",[a("code",[t._v("static")]),t._v(" 变量类似于第三章 "),a("RouterLink",{attrs:{to:"/ch03-01-variables-and-mutability.html#differences-between-variables-and-constants"}},[t._v("“变量和常量的区别”")]),t._v("  部分讨论的常量。通常静态变量的名称采用 "),a("code",[t._v("SCREAMING_SNAKE_CASE")]),t._v(" 写法，并 "),a("strong",[t._v("必须")]),t._v(" 标注变量的类型，在这个例子中是 "),a("code",[t._v("&'static str")]),t._v("。静态变量只能储存拥有 "),a("code",[t._v("'static")]),t._v(" 生命周期的引用，这意味着 Rust 编译器可以自己计算出其生命周期而无需显式标注。访问不可变静态变量是安全的。")],1),t._v(" "),a("p",[t._v("常量与不可变静态变量可能看起来很类似，不过一个微妙的区别是静态变量中的值有一个固定的内存地址。使用这个值总是会访问相同的地址。另一方面，常量则允许在任何被用到的时候复制其数据。")]),t._v(" "),a("p",[t._v("常量与静态变量的另一个区别在于静态变量可以是可变的。访问和修改可变静态变量都是 "),a("strong",[t._v("不安全")]),t._v(" 的。示例 19-10 展示了如何声明、访问和修改名为 "),a("code",[t._v("COUNTER")]),t._v(" 的可变静态变量：")]),t._v(" "),a("p",[a("span",{staticClass:"filename"},[t._v("文件名: src/main.rs")])]),t._v(" "),a("div",{staticClass:"language-rust,unsafe extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('static mut COUNTER: u32 = 0;\n\nfn add_to_count(inc: u32) {\n    unsafe {\n        COUNTER += inc;\n    }\n}\n\nfn main() {\n    add_to_count(3);\n\n    unsafe {\n        println!("COUNTER: {}", COUNTER);\n    }\n}\n')])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 19-10: 读取或修改一个可变静态变量是不安全的")])]),t._v(" "),a("p",[t._v("就像常规变量一样，我们使用 "),a("code",[t._v("mut")]),t._v(" 关键来指定可变性。任何读写 "),a("code",[t._v("COUNTER")]),t._v(" 的代码都必须位于 "),a("code",[t._v("unsafe")]),t._v(" 块中。这段代码可以编译并如期打印出 "),a("code",[t._v("COUNTER: 3")]),t._v("，因为这是单线程的。拥有多个线程访问 "),a("code",[t._v("COUNTER")]),t._v(" 则可能导致数据竞争。")]),t._v(" "),a("p",[t._v("拥有可以全局访问的可变数据，难以保证不存在数据竞争，这就是为何 Rust 认为可变静态变量是不安全的。任何可能的情况，请优先使用第十六章讨论的并发技术和线程安全智能指针，这样编译器就能检测不同线程间的数据访问是否是安全的。")]),t._v(" "),a("h3",{attrs:{id:"实现不安全-trait"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现不安全-trait"}},[t._v("#")]),t._v(" 实现不安全 trait")]),t._v(" "),a("p",[t._v("最后一个只能用在 "),a("code",[t._v("unsafe")]),t._v(" 中的操作是实现不安全 trait。当至少有一个方法中包含编译器不能验证的不变量时 trait 是不安全的。可以在 "),a("code",[t._v("trait")]),t._v(" 之前增加 "),a("code",[t._v("unsafe")]),t._v(" 关键字将 trait 声明为 "),a("code",[t._v("unsafe")]),t._v("，同时 trait 的实现也必须标记为 "),a("code",[t._v("unsafe")]),t._v("，如示例 19-11 所示：")]),t._v(" "),a("div",{staticClass:"language-rust,unsafe extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("unsafe trait Foo {\n    // methods go here\n}\n\nunsafe impl Foo for i32 {\n    // method implementations go here\n}\n")])])]),a("p",[a("span",{staticClass:"caption"},[t._v("示例 19-11: 定义并实现不安全 trait")])]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("unsafe impl")]),t._v("，我们承诺将保证编译器所不能验证的不变量。")]),t._v(" "),a("p",[t._v("作为一个例子，回忆第十六章 "),a("RouterLink",{attrs:{to:"/ch16-04-extensible-concurrency-sync-and-send.html#extensible-concurrency-with-the-sync-and-send-traits"}},[t._v("“使用 "),a("code",[t._v("Sync")]),t._v(" 和 "),a("code",[t._v("Send")]),t._v(" trait 的可扩展并发”")]),t._v("  部分中的 "),a("code",[t._v("Sync")]),t._v(" 和 "),a("code",[t._v("Send")]),t._v(" 标记 trait，编译器会自动为完全由 "),a("code",[t._v("Send")]),t._v(" 和 "),a("code",[t._v("Sync")]),t._v(" 类型组成的类型自动实现他们。如果实现了一个包含一些不是 "),a("code",[t._v("Send")]),t._v(" 或 "),a("code",[t._v("Sync")]),t._v(" 的类型，比如裸指针，并希望将此类型标记为 "),a("code",[t._v("Send")]),t._v(" 或 "),a("code",[t._v("Sync")]),t._v("，则必须使用 "),a("code",[t._v("unsafe")]),t._v("。Rust 不能验证我们的类型保证可以安全的跨线程发送或在多线程间访问，所以需要我们自己进行检查并通过 "),a("code",[t._v("unsafe")]),t._v(" 表明。")],1),t._v(" "),a("h3",{attrs:{id:"访问联合体中的字段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问联合体中的字段"}},[t._v("#")]),t._v(" 访问联合体中的字段")]),t._v(" "),a("p",[a("code",[t._v("union")]),t._v(" 和 "),a("code",[t._v("struct")]),t._v(" 类似，但是在一个实例中同时只能使用一个声明的字段。联合体主要用于和 C 代码中的联合体交互。访问联合体的字段是不安全的，因为 Rust 无法保证当前存储在联合体实例中数据的类型。可以查看"),a("a",{attrs:{href:"https://doc.rust-lang.org/reference/items/unions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文档"),a("OutboundLink")],1),t._v("了解有关联合体的更多信息。")]),t._v(" "),a("h3",{attrs:{id:"何时使用不安全代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#何时使用不安全代码"}},[t._v("#")]),t._v(" 何时使用不安全代码")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("unsafe")]),t._v(" 来进行这五个操作（超级力量）之一是没有问题的，甚至是不需要深思熟虑的，不过使得 "),a("code",[t._v("unsafe")]),t._v(" 代码正确也实属不易，因为编译器不能帮助保证内存安全。当有理由使用 "),a("code",[t._v("unsafe")]),t._v(" 代码时，是可以这么做的，通过使用显式的 "),a("code",[t._v("unsafe")]),t._v(" 标注使得在出现错误时易于追踪问题的源头。")])])}),[],!1,null,null,null);s.default=n.exports}}]);