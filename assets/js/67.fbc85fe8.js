(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{423:function(e,n,_){"use strict";_.r(n);var v=_(44),r=Object(v.a)({},(function(){var e=this,n=e.$createElement,_=e._self._c||n;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h2",{attrs:{id:"重构改进模块性和错误处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重构改进模块性和错误处理"}},[e._v("#")]),e._v(" 重构改进模块性和错误处理")]),e._v(" "),_("blockquote",[_("p",[_("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch12-03-improving-error-handling-and-modularity.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("ch12-03-improving-error-handling-and-modularity.md"),_("OutboundLink")],1),e._v(" "),_("br"),e._v("\ncommit 426f3e4ec17e539ae9905ba559411169d303a031")])]),e._v(" "),_("p",[e._v("为了改善我们的程序这里有四个问题需要修复，而且他们都与程序的组织方式和如何处理潜在错误有关。")]),e._v(" "),_("p",[e._v("第一，"),_("code",[e._v("main")]),e._v(" 现在进行了两个任务：它解析了参数并打开了文件。对于一个这样的小函数，这并不是一个大问题。然而如果 "),_("code",[e._v("main")]),e._v(" 中的功能持续增加，"),_("code",[e._v("main")]),e._v(" 函数处理的独立任务也会增加。当函数承担了更多责任，它就更难以推导，更难以测试，并且更难以在不破坏其他部分的情况下做出修改。最好能分离出功能以便每个函数就负责一个任务。")]),e._v(" "),_("p",[e._v("这同时也关系到第二个问题："),_("code",[e._v("query")]),e._v(" 和 "),_("code",[e._v("filename")]),e._v(" 是程序中的配置变量，而像 "),_("code",[e._v("contents")]),e._v(" 则用来执行程序逻辑。随着 "),_("code",[e._v("main")]),e._v(" 函数的增长，就需要引入更多的变量到作用域中，而当作用域中有更多的变量时，将更难以追踪每个变量的目的。最好能将配置变量组织进一个结构，这样就能使他们的目的更明确了。")]),e._v(" "),_("p",[e._v("第三个问题是如果打开文件失败我们使用 "),_("code",[e._v("expect")]),e._v(" 来打印出错误信息，不过这个错误信息只是说 "),_("code",[e._v("Something went wrong reading the file")]),e._v("。读取文件失败的原因有多种：例如文件不存在，或者没有打开此文件的权限。目前，无论处于何种情况，我们只是打印出“文件读取出现错误”的信息，这并没有给予使用者具体的信息！")]),e._v(" "),_("p",[e._v("第四，我们不停地使用 "),_("code",[e._v("expect")]),e._v(" 来处理不同的错误，如果用户没有指定足够的参数来运行程序，他们会从 Rust 得到 "),_("code",[e._v("index out of bounds")]),e._v(" 错误，而这并不能明确地解释问题。如果所有的错误处理都位于一处，这样将来的维护者在需要修改错误处理逻辑时就只需要考虑这一处代码。将所有的错误处理都放在一处也有助于确保我们打印的错误信息对终端用户来说是有意义的。")]),e._v(" "),_("p",[e._v("让我们通过重构项目来解决这些问题。")]),e._v(" "),_("h3",{attrs:{id:"二进制项目的关注分离"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二进制项目的关注分离"}},[e._v("#")]),e._v(" 二进制项目的关注分离")]),e._v(" "),_("p",[_("code",[e._v("main")]),e._v(" 函数负责多个任务的组织问题在许多二进制项目中很常见。所以 Rust 社区开发出一类在 "),_("code",[e._v("main")]),e._v(" 函数开始变得庞大时进行二进制程序的关注分离的指导性过程。这些过程有如下步骤：")]),e._v(" "),_("ul",[_("li",[e._v("将程序拆分成 "),_("em",[e._v("main.rs")]),e._v(" 和 "),_("em",[e._v("lib.rs")]),e._v(" 并将程序的逻辑放入 "),_("em",[e._v("lib.rs")]),e._v(" 中。")]),e._v(" "),_("li",[e._v("当命令行解析逻辑比较小时，可以保留在 "),_("em",[e._v("main.rs")]),e._v(" 中。")]),e._v(" "),_("li",[e._v("当命令行解析开始变得复杂时，也同样将其从 "),_("em",[e._v("main.rs")]),e._v(" 提取到 "),_("em",[e._v("lib.rs")]),e._v(" 中。")])]),e._v(" "),_("p",[e._v("经过这些过程之后保留在 "),_("code",[e._v("main")]),e._v(" 函数中的责任应该被限制为：")]),e._v(" "),_("ul",[_("li",[e._v("使用参数值调用命令行解析逻辑")]),e._v(" "),_("li",[e._v("设置任何其他的配置")]),e._v(" "),_("li",[e._v("调用 "),_("em",[e._v("lib.rs")]),e._v(" 中的 "),_("code",[e._v("run")]),e._v(" 函数")]),e._v(" "),_("li",[e._v("如果 "),_("code",[e._v("run")]),e._v(" 返回错误，则处理这个错误")])]),e._v(" "),_("p",[e._v("这个模式的一切就是为了关注分离："),_("em",[e._v("main.rs")]),e._v(" 处理程序运行，而 "),_("em",[e._v("lib.rs")]),e._v(" 处理所有的真正的任务逻辑。因为不能直接测试 "),_("code",[e._v("main")]),e._v(" 函数，这个结构通过将所有的程序逻辑移动到 "),_("em",[e._v("lib.rs")]),e._v(" 的函数中使得我们可以测试他们。仅仅保留在 "),_("em",[e._v("main.rs")]),e._v(" 中的代码将足够小以便阅读就可以验证其正确性。让我们遵循这些步骤来重构程序。")]),e._v(" "),_("h3",{attrs:{id:"提取参数解析器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#提取参数解析器"}},[e._v("#")]),e._v(" 提取参数解析器")]),e._v(" "),_("p",[e._v("首先，我们将解析参数的功能提取到一个 "),_("code",[e._v("main")]),e._v(" 将会调用的函数中，为将命令行解析逻辑移动到 "),_("em",[e._v("src/lib.rs")]),e._v(" 中做准备。示例 12-5 中展示了新 "),_("code",[e._v("main")]),e._v(" 函数的开头，它调用了新函数 "),_("code",[e._v("parse_config")]),e._v("。目前它仍将定义在 "),_("em",[e._v("src/main.rs")]),e._v(" 中：")]),e._v(" "),_("p",[_("span",{staticClass:"filename"},[e._v("文件名: src/main.rs")])]),e._v(" "),_("div",{staticClass:"language-rust,ignore extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("fn main() {\n    let args: Vec<String> = env::args().collect();\n\n    let (query, filename) = parse_config(&args);\n\n    // --snip--\n}\n\nfn parse_config(args: &[String]) -> (&str, &str) {\n    let query = &args[1];\n    let filename = &args[2];\n\n    (query, filename)\n}\n")])])]),_("p",[_("span",{staticClass:"caption"},[e._v("示例 12-5：从 "),_("code",[e._v("main")]),e._v(" 中提取出 "),_("code",[e._v("parse_config")]),e._v(" 函数")])]),e._v(" "),_("p",[e._v("我们仍然将命令行参数收集进一个 vector，不过不同于在 "),_("code",[e._v("main")]),e._v(" 函数中将索引 1 的参数值赋值给变量 "),_("code",[e._v("query")]),e._v(" 和将索引 2 的值赋值给变量 "),_("code",[e._v("filename")]),e._v("，我们将整个 vector 传递给 "),_("code",[e._v("parse_config")]),e._v(" 函数。接着 "),_("code",[e._v("parse_config")]),e._v(" 函数将包含决定哪个参数该放入哪个变量的逻辑，并将这些值返回到 "),_("code",[e._v("main")]),e._v("。仍然在 "),_("code",[e._v("main")]),e._v(" 中创建变量 "),_("code",[e._v("query")]),e._v(" 和 "),_("code",[e._v("filename")]),e._v("，不过 "),_("code",[e._v("main")]),e._v(" 不再负责处理命令行参数与变量如何对应。")]),e._v(" "),_("p",[e._v("这对重构我们这小程序可能有点大材小用，不过我们将采用小的、增量的步骤进行重构。在做出这些改变之后，再次运行程序并验证参数解析是否仍然正常。经常验证你的进展是一个好习惯，这样在遇到问题时能帮助你定位问题的成因。")]),e._v(" "),_("h3",{attrs:{id:"组合配置值"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组合配置值"}},[e._v("#")]),e._v(" 组合配置值")]),e._v(" "),_("p",[e._v("我们可以采取另一个小的步骤来进一步改善这个函数。现在函数返回一个元组，不过立刻又将元组拆成了独立的部分。这是一个我们可能没有进行正确抽象的信号。")]),e._v(" "),_("p",[e._v("另一个表明还有改进空间的迹象是 "),_("code",[e._v("parse_config")]),e._v(" 名称的 "),_("code",[e._v("config")]),e._v(" 部分，它暗示了我们返回的两个值是相关的并都是一个配置值的一部分。目前除了将这两个值组合进元组之外并没有表达这个数据结构的意义：我们可以将这两个值放入一个结构体并给每个字段一个有意义的名字。这会让未来的维护者更容易理解不同的值如何相互关联以及他们的目的。")]),e._v(" "),_("blockquote",[_("p",[e._v("注意：一些同学将这种在复杂类型更为合适的场景下使用基本类型的反模式称为 "),_("strong",[e._v("基本类型偏执")]),e._v("（"),_("em",[e._v("primitive obsession")]),e._v("）。")])]),e._v(" "),_("p",[e._v("示例 12-6 展示了 "),_("code",[e._v("parse_config")]),e._v(" 函数的改进。")]),e._v(" "),_("p",[_("span",{staticClass:"filename"},[e._v("文件名: src/main.rs")])]),e._v(" "),_("div",{staticClass:"language-rust,should_panic extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('# use std::env;\n# use std::fs;\n#\nfn main() {\n    let args: Vec<String> = env::args().collect();\n\n    let config = parse_config(&args);\n\n    println!("Searching for {}", config.query);\n    println!("In file {}", config.filename);\n\n    let contents = fs::read_to_string(config.filename)\n        .expect("Something went wrong reading the file");\n\n    // --snip--\n}\n\nstruct Config {\n    query: String,\n    filename: String,\n}\n\nfn parse_config(args: &[String]) -> Config {\n    let query = args[1].clone();\n    let filename = args[2].clone();\n\n    Config { query, filename }\n}\n')])])]),_("p",[_("span",{staticClass:"caption"},[e._v("示例 12-6：重构 "),_("code",[e._v("parse_config")]),e._v(" 返回一个 "),_("code",[e._v("Config")]),e._v(" 结构体实例")])]),e._v(" "),_("p",[e._v("新定义的结构体 "),_("code",[e._v("Config")]),e._v(" 中包含字段 "),_("code",[e._v("query")]),e._v(" 和 "),_("code",[e._v("filename")]),e._v("。\n"),_("code",[e._v("parse_config")]),e._v(" 的签名表明它现在返回一个 "),_("code",[e._v("Config")]),e._v(" 值。在之前的 "),_("code",[e._v("parse_config")]),e._v(" 函数体中，我们返回了引用 "),_("code",[e._v("args")]),e._v(" 中 "),_("code",[e._v("String")]),e._v(" 值的字符串 slice，现在我们定义 "),_("code",[e._v("Config")]),e._v(" 来包含拥有所有权的 "),_("code",[e._v("String")]),e._v(" 值。"),_("code",[e._v("main")]),e._v(" 中的 "),_("code",[e._v("args")]),e._v(" 变量是参数值的所有者并只允许 "),_("code",[e._v("parse_config")]),e._v(" 函数借用他们，这意味着如果 "),_("code",[e._v("Config")]),e._v(" 尝试获取 "),_("code",[e._v("args")]),e._v(" 中值的所有权将违反 Rust 的借用规则。")]),e._v(" "),_("p",[e._v("还有许多不同的方式可以处理 "),_("code",[e._v("String")]),e._v(" 的数据，而最简单但有些不太高效的方式是调用这些值的 "),_("code",[e._v("clone")]),e._v(" 方法。这会生成 "),_("code",[e._v("Config")]),e._v(" 实例可以拥有的数据的完整拷贝，不过会比储存字符串数据的引用消耗更多的时间和内存。不过拷贝数据使得代码显得更加直白因为无需管理引用的生命周期，所以在这种情况下牺牲一小部分性能来换取简洁性的取舍是值得的。")]),e._v(" "),_("blockquote",[_("h4",{attrs:{id:"使用-clone-的权衡取舍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用-clone-的权衡取舍"}},[e._v("#")]),e._v(" 使用 "),_("code",[e._v("clone")]),e._v(" 的权衡取舍")]),e._v(" "),_("p",[e._v("由于其运行时消耗，许多 Rustacean 之间有一个趋势是倾向于避免使用 "),_("code",[e._v("clone")]),e._v(" 来解决所有权问题。在关于迭代器的第十三章中，我们将会学习如何更有效率的处理这种情况，不过现在，复制一些字符串来取得进展是没有问题的，因为只会进行一次这样的拷贝，而且文件名和要搜索的字符串都比较短。在第一轮编写时拥有一个可以工作但有点低效的程序要比尝试过度优化代码更好一些。随着你对 Rust 更加熟练，将能更轻松的直奔合适的方法，不过现在调用 "),_("code",[e._v("clone")]),e._v(" 是完全可以接受的。")])]),e._v(" "),_("p",[e._v("我们更新 "),_("code",[e._v("main")]),e._v(" 将 "),_("code",[e._v("parse_config")]),e._v(" 返回的 "),_("code",[e._v("Config")]),e._v(" 实例放入变量 "),_("code",[e._v("config")]),e._v(" 中，并将之前分别使用 "),_("code",[e._v("query")]),e._v(" 和 "),_("code",[e._v("filename")]),e._v(" 变量的代码更新为现在的使用 "),_("code",[e._v("Config")]),e._v(" 结构体的字段的代码。")]),e._v(" "),_("p",[e._v("现在代码更明确的表现了我们的意图，"),_("code",[e._v("query")]),e._v(" 和 "),_("code",[e._v("filename")]),e._v(" 是相关联的并且他们的目的是配置程序如何工作。任何使用这些值的代码就知道在 "),_("code",[e._v("config")]),e._v(" 实例中对应目的的字段名中寻找他们。")]),e._v(" "),_("h3",{attrs:{id:"创建一个-config-的构造函数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创建一个-config-的构造函数"}},[e._v("#")]),e._v(" 创建一个 "),_("code",[e._v("Config")]),e._v(" 的构造函数")]),e._v(" "),_("p",[e._v("目前为止，我们将负责解析命令行参数的逻辑从 "),_("code",[e._v("main")]),e._v(" 提取到了 "),_("code",[e._v("parse_config")]),e._v(" 函数中，这有助于我们看清值 "),_("code",[e._v("query")]),e._v(" 和 "),_("code",[e._v("filename")]),e._v(" 是相互关联的并应该在代码中表现这种关系。接着我们增加了 "),_("code",[e._v("Config")]),e._v(" 结构体来描述 "),_("code",[e._v("query")]),e._v(" 和 "),_("code",[e._v("filename")]),e._v(" 的相关性，并能够从 "),_("code",[e._v("parse_config")]),e._v(" 函数中将这些值的名称作为结构体字段名称返回。")]),e._v(" "),_("p",[e._v("所以现在 "),_("code",[e._v("parse_config")]),e._v(" 函数的目的是创建一个 "),_("code",[e._v("Config")]),e._v(" 实例，我们可以将 "),_("code",[e._v("parse_config")]),e._v(" 从一个普通函数变为一个叫做 "),_("code",[e._v("new")]),e._v(" 的与结构体关联的函数。做出这个改变使得代码更符合习惯：可以像标准库中的 "),_("code",[e._v("String")]),e._v(" 调用 "),_("code",[e._v("String::new")]),e._v(" 来创建一个该类型的实例那样，将 "),_("code",[e._v("parse_config")]),e._v(" 变为一个与 "),_("code",[e._v("Config")]),e._v(" 关联的 "),_("code",[e._v("new")]),e._v(" 函数。示例 12-7 展示了需要做出的修改：")]),e._v(" "),_("p",[_("span",{staticClass:"filename"},[e._v("文件名: src/main.rs")])]),e._v(" "),_("div",{staticClass:"language-rust,should_panic extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("# use std::env;\n#\nfn main() {\n    let args: Vec<String> = env::args().collect();\n\n    let config = Config::new(&args);\n\n    // --snip--\n}\n\n# struct Config {\n#     query: String,\n#     filename: String,\n# }\n#\n// --snip--\n\nimpl Config {\n    fn new(args: &[String]) -> Config {\n        let query = args[1].clone();\n        let filename = args[2].clone();\n\n        Config { query, filename }\n    }\n}\n")])])]),_("p",[_("span",{staticClass:"caption"},[e._v("示例 12-7：将 "),_("code",[e._v("parse_config")]),e._v(" 变为 "),_("code",[e._v("Config::new")])])]),e._v(" "),_("p",[e._v("这里将 "),_("code",[e._v("main")]),e._v(" 中调用 "),_("code",[e._v("parse_config")]),e._v(" 的地方更新为调用 "),_("code",[e._v("Config::new")]),e._v("。我们将 "),_("code",[e._v("parse_config")]),e._v(" 的名字改为 "),_("code",[e._v("new")]),e._v(" 并将其移动到 "),_("code",[e._v("impl")]),e._v(" 块中，这使得 "),_("code",[e._v("new")]),e._v(" 函数与 "),_("code",[e._v("Config")]),e._v(" 相关联。再次尝试编译并确保它可以工作。")]),e._v(" "),_("h3",{attrs:{id:"修复错误处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#修复错误处理"}},[e._v("#")]),e._v(" 修复错误处理")]),e._v(" "),_("p",[e._v("现在我们开始修复错误处理。回忆一下之前提到过如果 "),_("code",[e._v("args")]),e._v(" vector 包含少于 3 个项并尝试访问 vector 中索引 "),_("code",[e._v("1")]),e._v(" 或索引 "),_("code",[e._v("2")]),e._v(" 的值会造成程序 panic。尝试不带任何参数运行程序；这将看起来像这样：")]),e._v(" "),_("div",{staticClass:"language-text extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("$ cargo run\n   Compiling minigrep v0.1.0 (file:///projects/minigrep)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs\n     Running `target/debug/minigrep`\nthread 'main' panicked at 'index out of bounds: the len is 1\nbut the index is 1', src/main.rs:25:21\nnote: Run with `RUST_BACKTRACE=1` for a backtrace.\n")])])]),_("p",[_("code",[e._v("index out of bounds: the len is 1 but the index is 1")]),e._v(" 是一个针对程序员的错误信息，然而这并不能真正帮助终端用户理解发生了什么和他们应该做什么。现在就让我们修复它吧。")]),e._v(" "),_("h4",{attrs:{id:"改善错误信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#改善错误信息"}},[e._v("#")]),e._v(" 改善错误信息")]),e._v(" "),_("p",[e._v("在示例 12-8 中，在 "),_("code",[e._v("new")]),e._v(" 函数中增加了一个检查在访问索引 "),_("code",[e._v("1")]),e._v(" 和 "),_("code",[e._v("2")]),e._v(" 之前检查 slice 是否足够长。如果 slice 不够长，我们使用一个更好的错误信息 panic 而不是 "),_("code",[e._v("index out of bounds")]),e._v(" 信息：")]),e._v(" "),_("p",[_("span",{staticClass:"filename"},[e._v("文件名: src/main.rs")])]),e._v(" "),_("div",{staticClass:"language-rust,ignore extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('// --snip--\nfn new(args: &[String]) -> Config {\n    if args.len() < 3 {\n        panic!("not enough arguments");\n    }\n    // --snip--\n')])])]),_("p",[_("span",{staticClass:"caption"},[e._v("示例 12-8：增加一个参数数量检查")])]),e._v(" "),_("p",[e._v("这类似于 "),_("RouterLink",{attrs:{to:"/ch09-03-to-panic-or-not-to-panic.html#creating-custom-types-for-validation"}},[e._v("示例 9-10 中的 "),_("code",[e._v("Guess::new")]),e._v(" 函数")]),e._v("，那里如果 "),_("code",[e._v("value")]),e._v(" 参数超出了有效值的范围就调用 "),_("code",[e._v("panic!")]),e._v("。不同于检查值的范围，这里检查 "),_("code",[e._v("args")]),e._v(" 的长度至少是 "),_("code",[e._v("3")]),e._v("，而函数的剩余部分则可以在假设这个条件成立的基础上运行。如果 "),_("code",[e._v("args")]),e._v(" 少于 3 个项，则这个条件将为真，并调用 "),_("code",[e._v("panic!")]),e._v(" 立即终止程序。")],1),e._v(" "),_("p",[e._v("有了 "),_("code",[e._v("new")]),e._v(" 中这几行额外的代码，再次不带任何参数运行程序并看看现在错误看起来像什么：")]),e._v(" "),_("div",{staticClass:"language-text extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("$ cargo run\n   Compiling minigrep v0.1.0 (file:///projects/minigrep)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs\n     Running `target/debug/minigrep`\nthread 'main' panicked at 'not enough arguments', src/main.rs:26:13\nnote: Run with `RUST_BACKTRACE=1` for a backtrace.\n")])])]),_("p",[e._v("这个输出就好多了，现在有了一个合理的错误信息。然而，还是有一堆额外的信息我们不希望提供给用户。所以在这里使用示例 9-9 中的技术可能不是最好的；正如 "),_("RouterLink",{attrs:{to:"/ch09-03-to-panic-or-not-to-panic.html#guidelines-for-error-handling"}},[e._v("第九章")]),e._v(" 所讲到的一样，"),_("code",[e._v("panic!")]),e._v(" 的调用更趋向于程序上的问题而不是使用上的问题。相反我们可以使用第九章学习的另一个技术 —— 返回一个可以表明成功或错误的 "),_("RouterLink",{attrs:{to:"/ch09-02-recoverable-errors-with-result.html"}},[_("code",[e._v("Result")])]),e._v("。")],1),e._v(" "),_("h4",{attrs:{id:"从-new-中返回-result-而不是调用-panic"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从-new-中返回-result-而不是调用-panic"}},[e._v("#")]),e._v(" 从 "),_("code",[e._v("new")]),e._v(" 中返回 "),_("code",[e._v("Result")]),e._v(" 而不是调用 "),_("code",[e._v("panic!")])]),e._v(" "),_("p",[e._v("我们可以选择返回一个 "),_("code",[e._v("Result")]),e._v(" 值，它在成功时会包含一个 "),_("code",[e._v("Config")]),e._v(" 的实例，而在错误时会描述问题。当 "),_("code",[e._v("Config::new")]),e._v(" 与 "),_("code",[e._v("main")]),e._v(" 交流时，可以使用 "),_("code",[e._v("Result")]),e._v(" 类型来表明这里存在问题。接着修改 "),_("code",[e._v("main")]),e._v(" 将 "),_("code",[e._v("Err")]),e._v(" 成员转换为对用户更友好的错误，而不是 "),_("code",[e._v("panic!")]),e._v(" 调用产生的关于 "),_("code",[e._v("thread 'main'")]),e._v(" 和 "),_("code",[e._v("RUST_BACKTRACE")]),e._v(" 的文本。")]),e._v(" "),_("p",[e._v("示例 12-9 展示了为了返回 "),_("code",[e._v("Result")]),e._v(" 在 "),_("code",[e._v("Config::new")]),e._v(" 的返回值和函数体中所需的改变。注意这还不能编译，直到下一个示例同时也更新了 "),_("code",[e._v("main")]),e._v(" 之后。")]),e._v(" "),_("p",[_("span",{staticClass:"filename"},[e._v("文件名: src/main.rs")])]),e._v(" "),_("div",{staticClass:"language-rust,ignore extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('impl Config {\n    fn new(args: &[String]) -> Result<Config, &\'static str> {\n        if args.len() < 3 {\n            return Err("not enough arguments");\n        }\n\n        let query = args[1].clone();\n        let filename = args[2].clone();\n\n        Ok(Config { query, filename })\n    }\n}\n')])])]),_("p",[_("span",{staticClass:"caption"},[e._v("示例 12-9：从 "),_("code",[e._v("Config::new")]),e._v(" 中返回 "),_("code",[e._v("Result")])])]),e._v(" "),_("p",[e._v("现在 "),_("code",[e._v("new")]),e._v(" 函数返回一个 "),_("code",[e._v("Result")]),e._v("，在成功时带有一个 "),_("code",[e._v("Config")]),e._v(" 实例而在出现错误时带有一个 "),_("code",[e._v("&'static str")]),e._v("。回忆一下第十章 “静态生命周期” 中讲到 "),_("code",[e._v("&'static str")]),e._v(" 是字符串字面值的类型，也是目前的错误信息。")]),e._v(" "),_("p",[_("code",[e._v("new")]),e._v(" 函数体中有两处修改：当没有足够参数时不再调用 "),_("code",[e._v("panic!")]),e._v("，而是返回 "),_("code",[e._v("Err")]),e._v(" 值。同时我们将 "),_("code",[e._v("Config")]),e._v(" 返回值包装进 "),_("code",[e._v("Ok")]),e._v(" 成员中。这些修改使得函数符合其新的类型签名。")]),e._v(" "),_("p",[e._v("通过让 "),_("code",[e._v("Config::new")]),e._v(" 返回一个 "),_("code",[e._v("Err")]),e._v(" 值，这就允许 "),_("code",[e._v("main")]),e._v(" 函数处理 "),_("code",[e._v("new")]),e._v(" 函数返回的 "),_("code",[e._v("Result")]),e._v(" 值并在出现错误的情况更明确的结束进程。")]),e._v(" "),_("h4",{attrs:{id:"config-new-调用并处理错误"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#config-new-调用并处理错误"}},[e._v("#")]),e._v(" "),_("code",[e._v("Config::new")]),e._v(" 调用并处理错误")]),e._v(" "),_("p",[e._v("为了处理错误情况并打印一个对用户友好的信息，我们需要像示例 12-10 那样更新 "),_("code",[e._v("main")]),e._v(" 函数来处理现在 "),_("code",[e._v("Config::new")]),e._v(" 返回的 "),_("code",[e._v("Result")]),e._v("。另外还需要手动实现原先由 "),_("code",[e._v("panic!")]),e._v("负责的工作，即以非零错误码退出命令行工具的工作。非零的退出状态是一个惯例信号，用来告诉调用程序的进程：该程序以错误状态退出了。")]),e._v(" "),_("p",[_("span",{staticClass:"filename"},[e._v("文件名: src/main.rs")])]),e._v(" "),_("div",{staticClass:"language-rust,ignore extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('use std::process;\n\nfn main() {\n    let args: Vec<String> = env::args().collect();\n\n    let config = Config::new(&args).unwrap_or_else(|err| {\n        println!("Problem parsing arguments: {}", err);\n        process::exit(1);\n    });\n\n    // --snip--\n')])])]),_("p",[_("span",{staticClass:"caption"},[e._v("示例 12-10：如果新建 "),_("code",[e._v("Config")]),e._v(" 失败则使用错误码退出")])]),e._v(" "),_("p",[e._v("在上面的示例中，使用了一个之前没有涉及到的方法："),_("code",[e._v("unwrap_or_else")]),e._v("，它定义于标准库的 "),_("code",[e._v("Result<T, E>")]),e._v(" 上。使用 "),_("code",[e._v("unwrap_or_else")]),e._v(" 可以进行一些自定义的非 "),_("code",[e._v("panic!")]),e._v(" 的错误处理。当 "),_("code",[e._v("Result")]),e._v(" 是 "),_("code",[e._v("Ok")]),e._v(" 时，这个方法的行为类似于 "),_("code",[e._v("unwrap")]),e._v("：它返回 "),_("code",[e._v("Ok")]),e._v(" 内部封装的值。然而，当其值是 "),_("code",[e._v("Err")]),e._v(" 时，该方法会调用一个 "),_("strong",[e._v("闭包")]),e._v("（"),_("em",[e._v("closure")]),e._v("），也就是一个我们定义的作为参数传递给 "),_("code",[e._v("unwrap_or_else")]),e._v(" 的匿名函数。"),_("RouterLink",{attrs:{to:"/ch13-00-functional-features.html"}},[e._v("第十三章")]),e._v(" 会更详细的介绍闭包。现在你需要理解的是 "),_("code",[e._v("unwrap_or_else")]),e._v(" 会将 "),_("code",[e._v("Err")]),e._v(" 的内部值，也就是示例 12-9 中增加的 "),_("code",[e._v("not enough arguments")]),e._v(" 静态字符串的情况，传递给闭包中位于两道竖线间的参数 "),_("code",[e._v("err")]),e._v("。闭包中的代码在其运行时可以使用这个 "),_("code",[e._v("err")]),e._v(" 值。")],1),e._v(" "),_("p",[e._v("我们新增了一个 "),_("code",[e._v("use")]),e._v(" 行来从标准库中导入 "),_("code",[e._v("process")]),e._v("。在错误的情况闭包中将被运行的代码只有两行：我们打印出了 "),_("code",[e._v("err")]),e._v(" 值，接着调用了 "),_("code",[e._v("std::process::exit")]),e._v("。"),_("code",[e._v("process::exit")]),e._v(" 会立即停止程序并将传递给它的数字作为退出状态码。这类似于示例 12-8 中使用的基于 "),_("code",[e._v("panic!")]),e._v(" 的错误处理，除了不会再得到所有的额外输出了。让我们试试：")]),e._v(" "),_("div",{staticClass:"language-text extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("$ cargo run\n   Compiling minigrep v0.1.0 (file:///projects/minigrep)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.48 secs\n     Running `target/debug/minigrep`\nProblem parsing arguments: not enough arguments\n")])])]),_("p",[e._v("非常好！现在输出对于用户来说就友好多了。")]),e._v(" "),_("h3",{attrs:{id:"从-main-提取逻辑"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从-main-提取逻辑"}},[e._v("#")]),e._v(" 从 "),_("code",[e._v("main")]),e._v(" 提取逻辑")]),e._v(" "),_("p",[e._v("现在我们完成了配置解析的重构：让我们转向程序的逻辑。正如 "),_("a",{attrs:{href:"#separation-of-concerns-for-binary-projects"}},[e._v("“二进制项目的关注分离”")]),e._v(" 部分所展开的讨论，我们将提取一个叫做 "),_("code",[e._v("run")]),e._v(" 的函数来存放目前 "),_("code",[e._v("main")]),e._v("函数中不属于设置配置或处理错误的所有逻辑。一旦完成这些，"),_("code",[e._v("main")]),e._v(" 函数将简明得足以通过观察来验证，而我们将能够为所有其他逻辑编写测试。")]),e._v(" "),_("p",[e._v("示例 12-11 展示了提取出来的 "),_("code",[e._v("run")]),e._v(" 函数。目前我们只进行小的增量式的提取函数的改进。我们仍将在 "),_("em",[e._v("src/main.rs")]),e._v(" 中定义这个函数：")]),e._v(" "),_("p",[_("span",{staticClass:"filename"},[e._v("文件名: src/main.rs")])]),e._v(" "),_("div",{staticClass:"language-rust,ignore extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('fn main() {\n    // --snip--\n\n    println!("Searching for {}", config.query);\n    println!("In file {}", config.filename);\n\n    run(config);\n}\n\nfn run(config: Config) {\n    let contents = fs::read_to_string(config.filename)\n        .expect("Something went wrong reading the file");\n\n    println!("With text:\\n{}", contents);\n}\n\n// --snip--\n')])])]),_("p",[_("span",{staticClass:"caption"},[e._v("示例 12-11：提取 "),_("code",[e._v("run")]),e._v(" 函数来包含剩余的程序逻辑")])]),e._v(" "),_("p",[e._v("现在 "),_("code",[e._v("run")]),e._v(" 函数包含了 "),_("code",[e._v("main")]),e._v(" 中从读取文件开始的剩余的所有逻辑。"),_("code",[e._v("run")]),e._v(" 函数获取一个 "),_("code",[e._v("Config")]),e._v(" 实例作为参数。")]),e._v(" "),_("h4",{attrs:{id:"从-run-函数中返回错误"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从-run-函数中返回错误"}},[e._v("#")]),e._v(" 从 "),_("code",[e._v("run")]),e._v(" 函数中返回错误")]),e._v(" "),_("p",[e._v("通过将剩余的逻辑分离进 "),_("code",[e._v("run")]),e._v(" 函数而不是留在 "),_("code",[e._v("main")]),e._v(" 中，就可以像示例 12-9 中的 "),_("code",[e._v("Config::new")]),e._v(" 那样改进错误处理。不再通过 "),_("code",[e._v("expect")]),e._v(" 允许程序 panic，"),_("code",[e._v("run")]),e._v(" 函数将会在出错时返回一个 "),_("code",[e._v("Result<T, E>")]),e._v("。这让我们进一步以一种对用户友好的方式统一 "),_("code",[e._v("main")]),e._v(" 中的错误处理。示例 12-12 展示了 "),_("code",[e._v("run")]),e._v(" 签名和函数体中的改变：")]),e._v(" "),_("p",[_("span",{staticClass:"filename"},[e._v("文件名: src/main.rs")])]),e._v(" "),_("div",{staticClass:"language-rust,ignore extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('use std::error::Error;\n\n// --snip--\n\nfn run(config: Config) -> Result<(), Box<dyn Error>> {\n    let contents = fs::read_to_string(config.filename)?;\n\n    println!("With text:\\n{}", contents);\n\n    Ok(())\n}\n')])])]),_("p",[_("span",{staticClass:"caption"},[e._v("示例 12-12：修改 "),_("code",[e._v("run")]),e._v(" 函数返回 "),_("code",[e._v("Result")])])]),e._v(" "),_("p",[e._v("这里我们做出了三个明显的修改。首先，将 "),_("code",[e._v("run")]),e._v(" 函数的返回类型变为 "),_("code",[e._v("Result<(), Box<dyn Error>>")]),e._v("。之前这个函数返回 unit 类型 "),_("code",[e._v("()")]),e._v("，现在它仍然保持作为 "),_("code",[e._v("Ok")]),e._v(" 时的返回值。")]),e._v(" "),_("p",[e._v("对于错误类型，使用了 "),_("strong",[e._v("trait 对象")]),e._v(" "),_("code",[e._v("Box<dyn Error>")]),e._v("（在开头使用了 "),_("code",[e._v("use")]),e._v(" 语句将 "),_("code",[e._v("std::error::Error")]),e._v(" 引入作用域）。"),_("RouterLink",{attrs:{to:"/ch17-00-oop.html"}},[e._v("第十七章")]),e._v(" 会涉及 trait 对象。目前只需知道 "),_("code",[e._v("Box<dyn Error>")]),e._v(" 意味着函数会返回实现了 "),_("code",[e._v("Error")]),e._v(" trait 的类型，不过无需指定具体将会返回的值的类型。这提供了在不同的错误场景可能有不同类型的错误返回值的灵活性。这也就是 "),_("code",[e._v("dyn")]),e._v("，它是 “动态的”（“dynamic”）的缩写。")],1),e._v(" "),_("p",[e._v("第二个改变是去掉了 "),_("code",[e._v("expect")]),e._v(" 调用并替换为 "),_("RouterLink",{attrs:{to:"/ch09-02-recoverable-errors-with-result.html#a-shortcut-for-propagating-errors-the--operator"}},[e._v("第九章")]),e._v(" 讲到的 "),_("code",[e._v("?")]),e._v("。不同于遇到错误就 "),_("code",[e._v("panic!")]),e._v("，"),_("code",[e._v("?")]),e._v(" 会从函数中返回错误值并让调用者来处理它。")],1),e._v(" "),_("p",[e._v("第三个修改是现在成功时这个函数会返回一个 "),_("code",[e._v("Ok")]),e._v(" 值。因为 "),_("code",[e._v("run")]),e._v(" 函数签名中声明成功类型返回值是 "),_("code",[e._v("()")]),e._v("，这意味着需要将 unit 类型值包装进 "),_("code",[e._v("Ok")]),e._v(" 值中。"),_("code",[e._v("Ok(())")]),e._v(" 一开始看起来有点奇怪，不过这样使用 "),_("code",[e._v("()")]),e._v(" 是惯用的做法，表明调用 "),_("code",[e._v("run")]),e._v(" 函数只是为了它的副作用；函数并没有返回什么有意义的值。")]),e._v(" "),_("p",[e._v("上述代码能够编译，不过会有一个警告：")]),e._v(" "),_("div",{staticClass:"language-text extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("warning: unused `std::result::Result` that must be used\n  --\x3e src/main.rs:17:5\n   |\n17 |     run(config);\n   |     ^^^^^^^^^^^^\n   |\n   = note: #[warn(unused_must_use)] on by default\n   = note: this `Result` may be an `Err` variant, which should be handled\n")])])]),_("p",[e._v("Rust 提示我们的代码忽略了 "),_("code",[e._v("Result")]),e._v(" 值，它可能表明这里存在一个错误。但我们却没有检查这里是否有一个错误，而编译器提醒我们这里应该有一些错误处理代码！现在就让我们修正这个问题。")]),e._v(" "),_("h4",{attrs:{id:"处理-main-中-run-返回的错误"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#处理-main-中-run-返回的错误"}},[e._v("#")]),e._v(" 处理 "),_("code",[e._v("main")]),e._v(" 中 "),_("code",[e._v("run")]),e._v(" 返回的错误")]),e._v(" "),_("p",[e._v("我们将检查错误并使用类似示例 12-10 中 "),_("code",[e._v("Config::new")]),e._v(" 处理错误的技术来处理他们，不过有一些细微的不同：")]),e._v(" "),_("p",[_("span",{staticClass:"filename"},[e._v("文件名: src/main.rs")])]),e._v(" "),_("div",{staticClass:"language-rust,ignore extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v('fn main() {\n    // --snip--\n\n    println!("Searching for {}", config.query);\n    println!("In file {}", config.filename);\n\n    if let Err(e) = run(config) {\n        println!("Application error: {}", e);\n\n        process::exit(1);\n    }\n}\n')])])]),_("p",[e._v("我们使用 "),_("code",[e._v("if let")]),e._v(" 来检查 "),_("code",[e._v("run")]),e._v(" 是否返回一个 "),_("code",[e._v("Err")]),e._v(" 值，不同于 "),_("code",[e._v("unwrap_or_else")]),e._v("，并在出错时调用 "),_("code",[e._v("process::exit(1)")]),e._v("。"),_("code",[e._v("run")]),e._v(" 并不返回像 "),_("code",[e._v("Config::new")]),e._v(" 返回的 "),_("code",[e._v("Config")]),e._v(" 实例那样需要 "),_("code",[e._v("unwrap")]),e._v(" 的值。因为 "),_("code",[e._v("run")]),e._v(" 在成功时返回 "),_("code",[e._v("()")]),e._v("，而我们只关心检测错误，所以并不需要 "),_("code",[e._v("unwrap_or_else")]),e._v(" 来返回未封装的值，因为它只会是 "),_("code",[e._v("()")]),e._v("。")]),e._v(" "),_("p",[e._v("不过两个例子中 "),_("code",[e._v("if let")]),e._v(" 和 "),_("code",[e._v("unwrap_or_else")]),e._v(" 的函数体都一样：打印出错误并退出。")]),e._v(" "),_("h3",{attrs:{id:"将代码拆分到库-crate"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#将代码拆分到库-crate"}},[e._v("#")]),e._v(" 将代码拆分到库 crate")]),e._v(" "),_("p",[e._v("现在我们的 "),_("code",[e._v("minigrep")]),e._v(" 项目看起来好多了！现在我们将要拆分 "),_("em",[e._v("src/main.rs")]),e._v(" 并将一些代码放入 "),_("em",[e._v("src/lib.rs")]),e._v("，这样就能测试他们并拥有一个含有更少功能的 "),_("code",[e._v("main")]),e._v(" 函数。")]),e._v(" "),_("p",[e._v("让我们将所有不是 "),_("code",[e._v("main")]),e._v(" 函数的代码从 "),_("em",[e._v("src/main.rs")]),e._v(" 移动到新文件 "),_("em",[e._v("src/lib.rs")]),e._v(" 中：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("run")]),e._v(" 函数定义")]),e._v(" "),_("li",[e._v("相关的 "),_("code",[e._v("use")]),e._v(" 语句")]),e._v(" "),_("li",[_("code",[e._v("Config")]),e._v(" 的定义")]),e._v(" "),_("li",[_("code",[e._v("Config::new")]),e._v(" 函数定义")])]),e._v(" "),_("p",[e._v("现在 "),_("em",[e._v("src/lib.rs")]),e._v(" 的内容应该看起来像示例 12-13（为了简洁省略了函数体）。注意直到下一个示例修改完 "),_("em",[e._v("src/main.rs")]),e._v(" 之后，代码还不能编译：")]),e._v(" "),_("p",[_("span",{staticClass:"filename"},[e._v("文件名: src/lib.rs")])]),e._v(" "),_("div",{staticClass:"language-rust,ignore extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("use std::error::Error;\nuse std::fs;\n\npub struct Config {\n    pub query: String,\n    pub filename: String,\n}\n\nimpl Config {\n    pub fn new(args: &[String]) -> Result<Config, &'static str> {\n        // --snip--\n    }\n}\n\npub fn run(config: Config) -> Result<(), Box<dyn Error>> {\n    // --snip--\n}\n")])])]),_("p",[_("span",{staticClass:"caption"},[e._v("示例 12-13：将 "),_("code",[e._v("Config")]),e._v(" 和 "),_("code",[e._v("run")]),e._v(" 移动到 "),_("em",[e._v("src/lib.rs")])])]),e._v(" "),_("p",[e._v("这里使用了公有的 "),_("code",[e._v("pub")]),e._v(" 关键字：在 "),_("code",[e._v("Config")]),e._v("、其字段和其 "),_("code",[e._v("new")]),e._v(" 方法，以及 "),_("code",[e._v("run")]),e._v(" 函数上。现在我们有了一个拥有可以测试的公有 API 的库 crate 了。")]),e._v(" "),_("p",[e._v("现在需要在 "),_("em",[e._v("src/main.rs")]),e._v(" 中将移动到 "),_("em",[e._v("src/lib.rs")]),e._v(" 的代码引入二进制 crate 的作用域中，如示例 12-14 所示：")]),e._v(" "),_("p",[_("span",{staticClass:"filename"},[e._v("Filename: src/main.rs")])]),e._v(" "),_("div",{staticClass:"language-rust,ignore extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v("use std::env;\nuse std::process;\n\nuse minigrep::Config;\n\nfn main() {\n    // --snip--\n    if let Err(e) = minigrep::run(config) {\n        // --snip--\n    }\n}\n")])])]),_("p",[_("span",{staticClass:"caption"},[e._v("示例 12-14：将 "),_("code",[e._v("minigrep")]),e._v(" crate 引入 "),_("em",[e._v("src/main.rs")]),e._v(" 的作用域中")])]),e._v(" "),_("p",[e._v("我们添加了一行 "),_("code",[e._v("use minigrep::Config")]),e._v("，它将 "),_("code",[e._v("Config")]),e._v(" 类型引入作用域，并使用 crate 名称作为 "),_("code",[e._v("run")]),e._v(" 函数的前缀。通过这些重构，所有功能应该能够联系在一起并运行了。运行 "),_("code",[e._v("cargo run")]),e._v(" 来确保一切都正确的衔接在一起。")]),e._v(" "),_("p",[e._v("哇哦！我们做了大量的工作，不过我们为将来的成功打下了基础。现在处理错误将更容易，同时代码也更加模块化。从现在开始几乎所有的工作都将在 "),_("em",[e._v("src/lib.rs")]),e._v(" 中进行。")]),e._v(" "),_("p",[e._v("让我们利用这些新创建的模块的优势来进行一些在旧代码中难以展开的工作，这些工作在新代码中非常容易实现，那就是：编写测试！")])])}),[],!1,null,null,null);n.default=r.exports}}]);