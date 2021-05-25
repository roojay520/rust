(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{418:function(t,s,e){"use strict";e.r(s);var a=e(44),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"控制测试如何运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#控制测试如何运行"}},[t._v("#")]),t._v(" 控制测试如何运行")]),t._v(" "),e("blockquote",[e("p",[e("a",{attrs:{href:"https://github.com/rust-lang/book/blob/master/src/ch11-02-running-tests.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("ch11-02-running-tests.md"),e("OutboundLink")],1),t._v(" "),e("br"),t._v("\ncommit 42b802f26197f9a066e4a671d2b062af25972c13")])]),t._v(" "),e("p",[t._v("就像 "),e("code",[t._v("cargo run")]),t._v(" 会编译代码并运行生成的二进制文件一样，"),e("code",[t._v("cargo test")]),t._v(" 在测试模式下编译代码并运行生成的测试二进制文件。可以指定命令行参数来改变 "),e("code",[t._v("cargo test")]),t._v(" 的默认行为。例如，"),e("code",[t._v("cargo test")]),t._v(" 生成的二进制文件的默认行为是并行的运行所有测试，并截获测试运行过程中产生的输出，阻止他们被显示出来，使得阅读测试结果相关的内容变得更容易。")]),t._v(" "),e("p",[t._v("可以将一部分命令行参数传递给 "),e("code",[t._v("cargo test")]),t._v("，而将另外一部分传递给生成的测试二进制文件。为了分隔这两种参数，需要先列出传递给 "),e("code",[t._v("cargo test")]),t._v(" 的参数，接着是分隔符 "),e("code",[t._v("--")]),t._v("，再之后是传递给测试二进制文件的参数。运行 "),e("code",[t._v("cargo test --help")]),t._v(" 会提示 "),e("code",[t._v("cargo test")]),t._v(" 的有关参数，而运行 "),e("code",[t._v("cargo test -- --help")]),t._v(" 可以提示在分隔符 "),e("code",[t._v("--")]),t._v(" 之后使用的有关参数。")]),t._v(" "),e("h3",{attrs:{id:"并行或连续的运行测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#并行或连续的运行测试"}},[t._v("#")]),t._v(" 并行或连续的运行测试")]),t._v(" "),e("p",[t._v("当运行多个测试时， Rust 默认使用线程来并行运行。这意味着测试会更快地运行完毕，所以你可以更快的得到代码能否工作的反馈。因为测试是在同时运行的，你应该确保测试不能相互依赖，或依赖任何共享的状态，包括依赖共享的环境，比如当前工作目录或者环境变量。")]),t._v(" "),e("p",[t._v("举个例子，每一个测试都运行一些代码，假设这些代码都在硬盘上创建一个 "),e("em",[t._v("test-output.txt")]),t._v(" 文件并写入一些数据。接着每一个测试都读取文件中的数据并断言这个文件包含特定的值，而这个值在每个测试中都是不同的。因为所有测试都是同时运行的，一个测试可能会在另一个测试读写文件过程中修改了文件。那么第二个测试就会失败，并不是因为代码不正确，而是因为测试并行运行时相互干扰。一个解决方案是使每一个测试读写不同的文件；另一个解决方案是一次运行一个测试。")]),t._v(" "),e("p",[t._v("如果你不希望测试并行运行，或者想要更加精确的控制线程的数量，可以传递 "),e("code",[t._v("--test-threads")]),t._v(" 参数和希望使用线程的数量给测试二进制文件。例如：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cargo test -- --test-threads=1\n")])])]),e("p",[t._v("这里将测试线程设置为 "),e("code",[t._v("1")]),t._v("，告诉程序不要使用任何并行机制。这也会比并行运行花费更多时间，不过在有共享的状态时，测试就不会潜在的相互干扰了。")]),t._v(" "),e("h3",{attrs:{id:"显示函数输出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#显示函数输出"}},[t._v("#")]),t._v(" 显示函数输出")]),t._v(" "),e("p",[t._v("默认情况下，当测试通过时，Rust 的测试库会截获打印到标准输出的所有内容。比如在测试中调用了 "),e("code",[t._v("println!")]),t._v(" 而测试通过了，我们将不会在终端看到 "),e("code",[t._v("println!")]),t._v(" 的输出：只会看到说明测试通过的提示行。如果测试失败了，则会看到所有标准输出和其他错误信息。")]),t._v(" "),e("p",[t._v("例如，示例 11-10 有一个无意义的函数，它打印出其参数的值并接着返回 10。接着还有一个会通过的测试和一个会失败的测试：")]),t._v(" "),e("p",[e("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),e("div",{staticClass:"language-rust,panics extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('fn prints_and_returns_10(a: i32) -> i32 {\n    println!("I got the value {}", a);\n    10\n}\n\n#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn this_test_will_pass() {\n        let value = prints_and_returns_10(4);\n        assert_eq!(10, value);\n    }\n\n    #[test]\n    fn this_test_will_fail() {\n        let value = prints_and_returns_10(8);\n        assert_eq!(5, value);\n    }\n}\n')])])]),e("p",[e("span",{staticClass:"caption"},[t._v("示例 11-10：一个调用了 "),e("code",[t._v("println!")]),t._v(" 的函数的测试")])]),t._v(" "),e("p",[t._v("运行 "),e("code",[t._v("cargo test")]),t._v(" 将会看到这些测试的输出：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("running 2 tests\ntest tests::this_test_will_pass ... ok\ntest tests::this_test_will_fail ... FAILED\n\nfailures:\n\n---- tests::this_test_will_fail stdout ----\nI got the value 8\nthread 'tests::this_test_will_fail' panicked at 'assertion failed: `(left == right)`\n  left: `5`,\n right: `10`', src/lib.rs:19:9\nnote: Run with `RUST_BACKTRACE=1` for a backtrace.\n\nfailures:\n    tests::this_test_will_fail\n\ntest result: FAILED. 1 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out\n")])])]),e("p",[t._v("注意输出中不会出现测试通过时打印的内容，即 "),e("code",[t._v("I got the value 4")]),t._v("。因为当测试通过时，这些输出会被截获。失败测试的输出 "),e("code",[t._v("I got the value 8")]),t._v(" ，则出现在输出的测试摘要部分，同时也显示了测试失败的原因。")]),t._v(" "),e("p",[t._v("如果你希望也能看到通过的测试中打印的值，截获输出的行为可以通过 "),e("code",[t._v("--nocapture")]),t._v(" 参数来禁用：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cargo test -- --nocapture\n")])])]),e("p",[t._v("使用 "),e("code",[t._v("--nocapture")]),t._v(" 参数再次运行示例 11-10 中的测试会显示如下输出：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("running 2 tests\nI got the value 4\nI got the value 8\ntest tests::this_test_will_pass ... ok\nthread 'tests::this_test_will_fail' panicked at 'assertion failed: `(left == right)`\n  left: `5`,\n right: `10`', src/lib.rs:19:9\nnote: Run with `RUST_BACKTRACE=1` for a backtrace.\ntest tests::this_test_will_fail ... FAILED\n\nfailures:\n\nfailures:\n    tests::this_test_will_fail\n\ntest result: FAILED. 1 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out\n")])])]),e("p",[t._v("注意测试的输出和测试结果的输出是相互交叉的，这是由于测试是并行运行的（见上一部分）。尝试一同使用 "),e("code",[t._v("--test-threads=1")]),t._v(" 和 "),e("code",[t._v("--nocapture")]),t._v(" 功能来看看输出是什么样子！")]),t._v(" "),e("h3",{attrs:{id:"通过指定名字来运行部分测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过指定名字来运行部分测试"}},[t._v("#")]),t._v(" 通过指定名字来运行部分测试")]),t._v(" "),e("p",[t._v("有时运行整个测试集会耗费很长时间。如果你负责特定位置的代码，你可能会希望只运行与这些代码相关的测试。你可以向 "),e("code",[t._v("cargo test")]),t._v(" 传递所希望运行的测试名称的参数来选择运行哪些测试。")]),t._v(" "),e("p",[t._v("为了展示如何运行部分测试，示例 11-11 为 "),e("code",[t._v("add_two")]),t._v(" 函数创建了三个测试，我们可以选择具体运行哪一个：")]),t._v(" "),e("p",[e("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("pub")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("add_two")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("i32")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[cfg(test)]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mod")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token module-declaration namespace"}},[t._v("tests")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("use")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[test]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("add_two_and_two")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("assert_eq!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_two")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[test]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("add_three_and_two")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("assert_eq!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_two")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[test]")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("one_hundred")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("assert_eq!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("102")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_two")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[e("span",{staticClass:"caption"},[t._v("示例 11-11：不同名称的三个测试")])]),t._v(" "),e("p",[t._v("如果没有传递任何参数就运行测试，如你所见，所有测试都会并行运行：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("running 3 tests\ntest tests::add_two_and_two ... ok\ntest tests::add_three_and_two ... ok\ntest tests::one_hundred ... ok\n\ntest result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n")])])]),e("h4",{attrs:{id:"运行单个测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行单个测试"}},[t._v("#")]),t._v(" 运行单个测试")]),t._v(" "),e("p",[t._v("可以向 "),e("code",[t._v("cargo test")]),t._v(" 传递任意测试的名称来只运行这个测试：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cargo test one_hundred\n    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs\n     Running target/debug/deps/adder-06a75b4a1f2515e9\n\nrunning 1 test\ntest tests::one_hundred ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 2 filtered out\n")])])]),e("p",[t._v("只有名称为 "),e("code",[t._v("one_hundred")]),t._v(" 的测试被运行了；因为其余两个测试并不匹配这个名称。测试输出在摘要行的结尾显示了 "),e("code",[t._v("2 filtered out")]),t._v(" 表明还存在比本次所运行的测试更多的测试被过滤掉了。")]),t._v(" "),e("p",[t._v("不能像这样指定多个测试名称；只有传递给 "),e("code",[t._v("cargo test")]),t._v(" 的第一个值才会被使用。不过有运行多个测试的方法。")]),t._v(" "),e("h4",{attrs:{id:"过滤运行多个测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#过滤运行多个测试"}},[t._v("#")]),t._v(" 过滤运行多个测试")]),t._v(" "),e("p",[t._v("我们可以指定部分测试的名称，任何名称匹配这个名称的测试会被运行。例如，因为头两个测试的名称包含 "),e("code",[t._v("add")]),t._v("，可以通过 "),e("code",[t._v("cargo test add")]),t._v(" 来运行这两个测试：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cargo test add\n    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs\n     Running target/debug/deps/adder-06a75b4a1f2515e9\n\nrunning 2 tests\ntest tests::add_two_and_two ... ok\ntest tests::add_three_and_two ... ok\n\ntest result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 1 filtered out\n")])])]),e("p",[t._v("这运行了所有名字中带有 "),e("code",[t._v("add")]),t._v(" 的测试，也过滤掉了名为 "),e("code",[t._v("one_hundred")]),t._v(" 的测试。同时注意测试所在的模块也是测试名称的一部分，所以可以通过模块名来运行一个模块中的所有测试。")]),t._v(" "),e("h3",{attrs:{id:"忽略某些测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#忽略某些测试"}},[t._v("#")]),t._v(" 忽略某些测试")]),t._v(" "),e("p",[t._v("有时一些特定的测试执行起来是非常耗费时间的，所以在大多数运行 "),e("code",[t._v("cargo test")]),t._v(" 的时候希望能排除他们。虽然可以通过参数列举出所有希望运行的测试来做到，也可以使用 "),e("code",[t._v("ignore")]),t._v(" 属性来标记耗时的测试并排除他们，如下所示：")]),t._v(" "),e("p",[e("span",{staticClass:"filename"},[t._v("文件名: src/lib.rs")])]),t._v(" "),e("div",{staticClass:"language-rust extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rust"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[test]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("it_works")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("assert_eq!")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[test]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attribute attr-name"}},[t._v("#[ignore]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("expensive_test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要运行一个小时的代码")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("对于想要排除的测试，我们在 "),e("code",[t._v("#[test]")]),t._v(" 之后增加了 "),e("code",[t._v("#[ignore]")]),t._v(" 行。现在如果运行测试，就会发现 "),e("code",[t._v("it_works")]),t._v(" 运行了，而 "),e("code",[t._v("expensive_test")]),t._v(" 没有运行：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cargo test\n   Compiling adder v0.1.0 (file:///projects/adder)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.24 secs\n     Running target/debug/deps/adder-ce99bcc2479f4607\n\nrunning 2 tests\ntest expensive_test ... ignored\ntest it_works ... ok\n\ntest result: ok. 1 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out\n")])])]),e("p",[e("code",[t._v("expensive_test")]),t._v(" 被列为 "),e("code",[t._v("ignored")]),t._v("，如果我们只希望运行被忽略的测试，可以使用 "),e("code",[t._v("cargo test -- --ignored")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ cargo test -- --ignored\n    Finished dev [unoptimized + debuginfo] target(s) in 0.0 secs\n     Running target/debug/deps/adder-ce99bcc2479f4607\n\nrunning 1 test\ntest expensive_test ... ok\n\ntest result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 1 filtered out\n")])])]),e("p",[t._v("通过控制运行哪些测试，你可以确保能够快速地运行 "),e("code",[t._v("cargo test")]),t._v(" 。当你需要运行 "),e("code",[t._v("ignored")]),t._v(" 的测试时，可以执行 "),e("code",[t._v("cargo test -- --ignored")]),t._v("。")])])}),[],!1,null,null,null);s.default=n.exports}}]);