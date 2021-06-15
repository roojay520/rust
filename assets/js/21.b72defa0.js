(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{387:function(v,_,t){"use strict";t.r(_);var d=t(44),e=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"附录-b-运算符与符号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附录-b-运算符与符号"}},[v._v("#")]),v._v(" 附录 B：运算符与符号")]),v._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://github.com/rust-lang/book/blob/main/src/appendix-02-operators.md",target:"_blank",rel:"noopener noreferrer"}},[v._v("appendix-02-operators.md"),t("OutboundLink")],1),v._v(" "),t("br"),v._v("\ncommit 426f3e4ec17e539ae9905ba559411169d303a031")])]),v._v(" "),t("p",[v._v("该附录包含了 Rust 语法的词汇表，包括运算符以及其他的符号，这些符号单独出现或出现在路径、泛型、trait bounds、宏、属性、注释、元组以及大括号上下文中。")]),v._v(" "),t("h3",{attrs:{id:"运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[v._v("#")]),v._v(" 运算符")]),v._v(" "),t("p",[v._v("表 B-1 包含了 Rust 中的运算符、运算符如何出现在上下文中的示例、简短解释以及该运算符是否可重载。如果一个运算符是可重载的，则该运算符上用于重载的相关 trait 也会列出。")]),v._v(" "),t("p",[t("span",{staticClass:"caption"},[v._v("表 B-1: 运算符")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("运算符")]),v._v(" "),t("th",[v._v("示例")]),v._v(" "),t("th",[v._v("解释")]),v._v(" "),t("th",[v._v("是否可重载")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("!")])]),v._v(" "),t("td",[t("code",[v._v("ident!(...)")]),v._v(", "),t("code",[v._v("ident!{...}")]),v._v(", "),t("code",[v._v("ident![...]")])]),v._v(" "),t("td",[v._v("宏展开")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("!")])]),v._v(" "),t("td",[t("code",[v._v("!expr")])]),v._v(" "),t("td",[v._v("按位非或逻辑非")]),v._v(" "),t("td",[t("code",[v._v("Not")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("!=")])]),v._v(" "),t("td",[t("code",[v._v("var != expr")])]),v._v(" "),t("td",[v._v("不等比较")]),v._v(" "),t("td",[t("code",[v._v("PartialEq")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("%")])]),v._v(" "),t("td",[t("code",[v._v("expr % expr")])]),v._v(" "),t("td",[v._v("算术取模")]),v._v(" "),t("td",[t("code",[v._v("Rem")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("%=")])]),v._v(" "),t("td",[t("code",[v._v("var %= expr")])]),v._v(" "),t("td",[v._v("算术取模与赋值")]),v._v(" "),t("td",[t("code",[v._v("RemAssign")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("&")])]),v._v(" "),t("td",[t("code",[v._v("&expr")]),v._v(", "),t("code",[v._v("&mut expr")])]),v._v(" "),t("td",[v._v("借用")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("&")])]),v._v(" "),t("td",[t("code",[v._v("&type")]),v._v(", "),t("code",[v._v("&mut type")]),v._v(", "),t("code",[v._v("&'a type")]),v._v(", "),t("code",[v._v("&'a mut type")])]),v._v(" "),t("td",[v._v("借用指针类型")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("&")])]),v._v(" "),t("td",[t("code",[v._v("expr & expr")])]),v._v(" "),t("td",[v._v("按位与")]),v._v(" "),t("td",[t("code",[v._v("BitAnd")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("&=")])]),v._v(" "),t("td",[t("code",[v._v("var &= expr")])]),v._v(" "),t("td",[v._v("按位与及赋值")]),v._v(" "),t("td",[t("code",[v._v("BitAndAssign")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("&&")])]),v._v(" "),t("td",[t("code",[v._v("expr && expr")])]),v._v(" "),t("td",[v._v("逻辑与")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("*")])]),v._v(" "),t("td",[t("code",[v._v("expr * expr")])]),v._v(" "),t("td",[v._v("算术乘法")]),v._v(" "),t("td",[t("code",[v._v("Mul")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("*=")])]),v._v(" "),t("td",[t("code",[v._v("var *= expr")])]),v._v(" "),t("td",[v._v("算术乘法与赋值")]),v._v(" "),t("td",[t("code",[v._v("MulAssign")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("*")])]),v._v(" "),t("td",[t("code",[v._v("*expr")])]),v._v(" "),t("td",[v._v("解引用")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("*")])]),v._v(" "),t("td",[t("code",[v._v("*const type")]),v._v(", "),t("code",[v._v("*mut type")])]),v._v(" "),t("td",[v._v("裸指针")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("+")])]),v._v(" "),t("td",[t("code",[v._v("trait + trait")]),v._v(", "),t("code",[v._v("'a + trait")])]),v._v(" "),t("td",[v._v("复合类型限制")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("+")])]),v._v(" "),t("td",[t("code",[v._v("expr + expr")])]),v._v(" "),t("td",[v._v("算术加法")]),v._v(" "),t("td",[t("code",[v._v("Add")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("+=")])]),v._v(" "),t("td",[t("code",[v._v("var += expr")])]),v._v(" "),t("td",[v._v("算术加法与赋值")]),v._v(" "),t("td",[t("code",[v._v("AddAssign")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v(",")])]),v._v(" "),t("td",[t("code",[v._v("expr, expr")])]),v._v(" "),t("td",[v._v("参数以及元素分隔符")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-")])]),v._v(" "),t("td",[t("code",[v._v("- expr")])]),v._v(" "),t("td",[v._v("算术取负")]),v._v(" "),t("td",[t("code",[v._v("Neg")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-")])]),v._v(" "),t("td",[t("code",[v._v("expr - expr")])]),v._v(" "),t("td",[v._v("算术减法")]),v._v(" "),t("td",[t("code",[v._v("Sub")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("-=")])]),v._v(" "),t("td",[t("code",[v._v("var -= expr")])]),v._v(" "),t("td",[v._v("算术减法与赋值")]),v._v(" "),t("td",[t("code",[v._v("SubAssign")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("->")])]),v._v(" "),t("td",[t("code",[v._v("fn(...) -> type")]),v._v(", "),t("code",[v._v("|...| -> type")])]),v._v(" "),t("td",[v._v("函数与闭包，返回类型")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v(".")])]),v._v(" "),t("td",[t("code",[v._v("expr.ident")])]),v._v(" "),t("td",[v._v("成员访问")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("..")])]),v._v(" "),t("td",[t("code",[v._v("..")]),v._v(", "),t("code",[v._v("expr..")]),v._v(", "),t("code",[v._v("..expr")]),v._v(", "),t("code",[v._v("expr..expr")])]),v._v(" "),t("td",[v._v("右排除范围")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("..")])]),v._v(" "),t("td",[t("code",[v._v("..expr")])]),v._v(" "),t("td",[v._v("结构体更新语法")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("..")])]),v._v(" "),t("td",[t("code",[v._v("variant(x, ..)")]),v._v(", "),t("code",[v._v("struct_type { x, .. }")])]),v._v(" "),t("td",[v._v("“与剩余部分”的模式绑定")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("...")])]),v._v(" "),t("td",[t("code",[v._v("expr...expr")])]),v._v(" "),t("td",[v._v("模式: 范围包含模式")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("/")])]),v._v(" "),t("td",[t("code",[v._v("expr / expr")])]),v._v(" "),t("td",[v._v("算术除法")]),v._v(" "),t("td",[t("code",[v._v("Div")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("/=")])]),v._v(" "),t("td",[t("code",[v._v("var /= expr")])]),v._v(" "),t("td",[v._v("算术除法与赋值")]),v._v(" "),t("td",[t("code",[v._v("DivAssign")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v(":")])]),v._v(" "),t("td",[t("code",[v._v("pat: type")]),v._v(", "),t("code",[v._v("ident: type")])]),v._v(" "),t("td",[v._v("约束")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v(":")])]),v._v(" "),t("td",[t("code",[v._v("ident: expr")])]),v._v(" "),t("td",[v._v("结构体字段初始化")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v(":")])]),v._v(" "),t("td",[t("code",[v._v("'a: loop {...}")])]),v._v(" "),t("td",[v._v("循环标志")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v(";")])]),v._v(" "),t("td",[t("code",[v._v("expr;")])]),v._v(" "),t("td",[v._v("语句和语句结束符")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v(";")])]),v._v(" "),t("td",[t("code",[v._v("[...; len]")])]),v._v(" "),t("td",[v._v("固定大小数组语法的部分")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("<<")])]),v._v(" "),t("td",[t("code",[v._v("expr << expr")])]),v._v(" "),t("td",[v._v("左移")]),v._v(" "),t("td",[t("code",[v._v("Shl")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("<<=")])]),v._v(" "),t("td",[t("code",[v._v("var <<= expr")])]),v._v(" "),t("td",[v._v("左移与赋值")]),v._v(" "),t("td",[t("code",[v._v("ShlAssign")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("<")])]),v._v(" "),t("td",[t("code",[v._v("expr < expr")])]),v._v(" "),t("td",[v._v("小于比较")]),v._v(" "),t("td",[t("code",[v._v("PartialOrd")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("<=")])]),v._v(" "),t("td",[t("code",[v._v("expr <= expr")])]),v._v(" "),t("td",[v._v("小于等于比较")]),v._v(" "),t("td",[t("code",[v._v("PartialOrd")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("=")])]),v._v(" "),t("td",[t("code",[v._v("var = expr")]),v._v(", "),t("code",[v._v("ident = type")])]),v._v(" "),t("td",[v._v("赋值/等值")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("==")])]),v._v(" "),t("td",[t("code",[v._v("expr == expr")])]),v._v(" "),t("td",[v._v("等于比较")]),v._v(" "),t("td",[t("code",[v._v("PartialEq")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("=>")])]),v._v(" "),t("td",[t("code",[v._v("pat => expr")])]),v._v(" "),t("td",[v._v("匹配准备语法的部分")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v(">")])]),v._v(" "),t("td",[t("code",[v._v("expr > expr")])]),v._v(" "),t("td",[v._v("大于比较")]),v._v(" "),t("td",[t("code",[v._v("PartialOrd")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v(">=")])]),v._v(" "),t("td",[t("code",[v._v("expr >= expr")])]),v._v(" "),t("td",[v._v("大于等于比较")]),v._v(" "),t("td",[t("code",[v._v("PartialOrd")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v(">>")])]),v._v(" "),t("td",[t("code",[v._v("expr >> expr")])]),v._v(" "),t("td",[v._v("右移")]),v._v(" "),t("td",[t("code",[v._v("Shr")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v(">>=")])]),v._v(" "),t("td",[t("code",[v._v("var >>= expr")])]),v._v(" "),t("td",[v._v("右移与赋值")]),v._v(" "),t("td",[t("code",[v._v("ShrAssign")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("@")])]),v._v(" "),t("td",[t("code",[v._v("ident @ pat")])]),v._v(" "),t("td",[v._v("模式绑定")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("^")])]),v._v(" "),t("td",[t("code",[v._v("expr ^ expr")])]),v._v(" "),t("td",[v._v("按位异或")]),v._v(" "),t("td",[t("code",[v._v("BitXor")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("^=")])]),v._v(" "),t("td",[t("code",[v._v("var ^= expr")])]),v._v(" "),t("td",[v._v("按位异或与赋值")]),v._v(" "),t("td",[t("code",[v._v("BitXorAssign")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("|")])]),v._v(" "),t("td",[t("code",[v._v("pat | pat")])]),v._v(" "),t("td",[v._v("模式选择")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("|")])]),v._v(" "),t("td",[t("code",[v._v("expr | expr")])]),v._v(" "),t("td",[v._v("按位或")]),v._v(" "),t("td",[t("code",[v._v("BitOr")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("|=")])]),v._v(" "),t("td",[t("code",[v._v("var |= expr")])]),v._v(" "),t("td",[v._v("按位或与赋值")]),v._v(" "),t("td",[t("code",[v._v("BitOrAssign")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("||")])]),v._v(" "),t("td",[t("code",[v._v("expr || expr")])]),v._v(" "),t("td",[v._v("逻辑或")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[t("code",[v._v("?")])]),v._v(" "),t("td",[t("code",[v._v("expr?")])]),v._v(" "),t("td",[v._v("错误传播")]),v._v(" "),t("td")])])]),v._v(" "),t("h3",{attrs:{id:"非运算符符号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#非运算符符号"}},[v._v("#")]),v._v(" 非运算符符号")]),v._v(" "),t("p",[v._v("下面的列表中包含了所有和运算符不一样功能的非字符符号；也就是说，他们并不像函数调用或方法调用一样表现。")]),v._v(" "),t("p",[v._v("表 B-2 展示了以其自身出现以及出现在合法其他各个地方的符号。")]),v._v(" "),t("p",[t("span",{staticClass:"caption"},[v._v("表 B-2：独立语法")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("符号")]),v._v(" "),t("th",[v._v("解释")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("'ident")])]),v._v(" "),t("td",[v._v("命名生命周期或循环标签")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("...u8")]),v._v(", "),t("code",[v._v("...i32")]),v._v(", "),t("code",[v._v("...f64")]),v._v(", "),t("code",[v._v("...usize")]),v._v(", 等")]),v._v(" "),t("td",[v._v("指定类型的数值常量")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v('"..."')])]),v._v(" "),t("td",[v._v("字符串常量")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v('r"..."')]),v._v(", "),t("code",[v._v('r#"..."#')]),v._v(", "),t("code",[v._v('r##"..."##')]),v._v(", etc.")]),v._v(" "),t("td",[v._v("原始字符串字面值, 未处理的转义字符")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v('b"..."')])]),v._v(" "),t("td",[v._v("字节字符串字面值; 构造一个 "),t("code",[v._v("[u8]")]),v._v(" 类型而非字符串")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v('br"..."')]),v._v(", "),t("code",[v._v('br#"..."#')]),v._v(", "),t("code",[v._v('br##"..."##')]),v._v(", 等")]),v._v(" "),t("td",[v._v("原始字节字符串字面值，原始和字节字符串字面值的结合")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("'...'")])]),v._v(" "),t("td",[v._v("字符字面值")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("b'...'")])]),v._v(" "),t("td",[v._v("ASCII 码字节字面值")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("|...| expr")])]),v._v(" "),t("td",[v._v("闭包")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("!")])]),v._v(" "),t("td",[v._v("离散函数的总是为空的类型")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("_")])]),v._v(" "),t("td",[v._v("“忽略” 模式绑定；也用于增强整型字面值的可读性")])])])]),v._v(" "),t("p",[v._v("表 B-3 展示了出现在从模块结构到项的路径上下文中的符号")]),v._v(" "),t("p",[t("span",{staticClass:"caption"},[v._v("表 B-3：路径相关语法")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("符号")]),v._v(" "),t("th",[v._v("解释")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("ident::ident")])]),v._v(" "),t("td",[v._v("命名空间路径")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("::path")])]),v._v(" "),t("td",[v._v("与 crate 根相对的路径（如一个显式绝对路径）")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("self::path")])]),v._v(" "),t("td",[v._v("与当前模块相对的路径（如一个显式相对路径）")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("super::path")])]),v._v(" "),t("td",[v._v("与父模块相对的路径")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("type::ident")]),v._v(", "),t("code",[v._v("<type as trait>::ident")])]),v._v(" "),t("td",[v._v("关联常量、函数以及类型")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("<type>::...")])]),v._v(" "),t("td",[v._v("不可以被直接命名的关联项类型（如 "),t("code",[v._v("<&T>::...")]),v._v("，"),t("code",[v._v("<[T]>::...")]),v._v("， 等）")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("trait::method(...)")])]),v._v(" "),t("td",[v._v("通过命名定义的 trait 来消除方法调用的二义性")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("type::method(...)")])]),v._v(" "),t("td",[v._v("通过命名定义的类型来消除方法调用的二义性")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("<type as trait>::method(...)")])]),v._v(" "),t("td",[v._v("通过命名 trait 和类型来消除方法调用的二义性")])])])]),v._v(" "),t("p",[v._v("表 B-4 展示了出现在泛型类型参数上下文中的符号。")]),v._v(" "),t("p",[t("span",{staticClass:"caption"},[v._v("表 B-4：泛型")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("符号")]),v._v(" "),t("th",[v._v("解释")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("path<...>")])]),v._v(" "),t("td",[v._v("为一个类型中的泛型指定具体参数（如 "),t("code",[v._v("Vec<u8>")]),v._v("）")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("path::<...>")]),v._v(", "),t("code",[v._v("method::<...>")])]),v._v(" "),t("td",[v._v("为一个泛型、函数或表达式中的方法指定具体参数，通常指 turbofish（如 "),t("code",[v._v('"42".parse::<i32>()')]),v._v("）")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("fn ident<...> ...")])]),v._v(" "),t("td",[v._v("泛型函数定义")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("struct ident<...> ...")])]),v._v(" "),t("td",[v._v("泛型结构体定义")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("enum ident<...> ...")])]),v._v(" "),t("td",[v._v("泛型枚举定义")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("impl<...> ...")])]),v._v(" "),t("td",[v._v("定义泛型实现")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("for<...> type")])]),v._v(" "),t("td",[v._v("高级生命周期限制")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("type<ident=type>")])]),v._v(" "),t("td",[v._v("泛型，其一个或多个相关类型必须被指定为特定类型（如 "),t("code",[v._v("Iterator<Item=T>")]),v._v("）")])])])]),v._v(" "),t("p",[v._v("表 B-5 展示了出现在使用 trait bounds 约束泛型参数上下文中的符号。")]),v._v(" "),t("p",[t("span",{staticClass:"caption"},[v._v("表 B-5: Trait Bound 约束")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("符号")]),v._v(" "),t("th",[v._v("解释")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("T: U")])]),v._v(" "),t("td",[v._v("泛型参数 "),t("code",[v._v("T")]),v._v(" 约束于实现了 "),t("code",[v._v("U")]),v._v(" 的类型")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("T: 'a")])]),v._v(" "),t("td",[v._v("泛型 "),t("code",[v._v("T")]),v._v(" 的生命周期必须长于 "),t("code",[v._v("'a")]),v._v("（意味着该类型不能传递包含生命周期短于 "),t("code",[v._v("'a")]),v._v(" 的任何引用）")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("T : 'static")])]),v._v(" "),t("td",[v._v("泛型 T 不包含除 'static 之外的借用引用")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("'b: 'a")])]),v._v(" "),t("td",[v._v("泛型 "),t("code",[v._v("'b")]),v._v(" 生命周期必须长于泛型 "),t("code",[v._v("'a")])])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("T: ?Sized")])]),v._v(" "),t("td",[v._v("使用一个不定大小的泛型类型")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("'a + trait")]),v._v(", "),t("code",[v._v("trait + trait")])]),v._v(" "),t("td",[v._v("复合类型限制")])])])]),v._v(" "),t("p",[v._v("表 B-6 展示了在调用或定义宏以及在其上指定属性时的上下文中出现的符号。")]),v._v(" "),t("p",[t("span",{staticClass:"caption"},[v._v("表 B-6: 宏与属性")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("符号")]),v._v(" "),t("th",[v._v("解释")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("#[meta]")])]),v._v(" "),t("td",[v._v("外部属性")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("#![meta]")])]),v._v(" "),t("td",[v._v("内部属性")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("$ident")])]),v._v(" "),t("td",[v._v("宏替换")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("$ident:kind")])]),v._v(" "),t("td",[v._v("宏捕获")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("$(…)…")])]),v._v(" "),t("td",[v._v("宏重复")])])])]),v._v(" "),t("p",[v._v("表 B-7 展示了写注释的符号。")]),v._v(" "),t("p",[t("span",{staticClass:"caption"},[v._v("表 B-7: 注释")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("符号")]),v._v(" "),t("th",[v._v("注释")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("//")])]),v._v(" "),t("td",[v._v("行注释")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("//!")])]),v._v(" "),t("td",[v._v("内部行文档注释")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("///")])]),v._v(" "),t("td",[v._v("外部行文档注释")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("/*...*/")])]),v._v(" "),t("td",[v._v("块注释")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("/*!...*/")])]),v._v(" "),t("td",[v._v("内部块文档注释")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("/**...*/")])]),v._v(" "),t("td",[v._v("外部块文档注释")])])])]),v._v(" "),t("p",[v._v("表 B-8 展示了出现在使用元组时上下文中的符号。")]),v._v(" "),t("p",[t("span",{staticClass:"caption"},[v._v("表 B-8: 元组")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("符号")]),v._v(" "),t("th",[v._v("解释")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("()")])]),v._v(" "),t("td",[v._v("空元组（亦称单元），即是字面值也是类型")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("(expr)")])]),v._v(" "),t("td",[v._v("括号表达式")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("(expr,)")])]),v._v(" "),t("td",[v._v("单一元素元组表达式")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("(type,)")])]),v._v(" "),t("td",[v._v("单一元素元组类型")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("(expr, ...)")])]),v._v(" "),t("td",[v._v("元组表达式")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("(type, ...)")])]),v._v(" "),t("td",[v._v("元组类型")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("expr(expr, ...)")])]),v._v(" "),t("td",[v._v("函数调用表达式；也用于初始化元组结构体 "),t("code",[v._v("struct")]),v._v(" 以及元组枚举 "),t("code",[v._v("enum")]),v._v(" 变体")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("ident!(...)")]),v._v(", "),t("code",[v._v("ident!{...}")]),v._v(", "),t("code",[v._v("ident![...]")])]),v._v(" "),t("td",[v._v("宏调用")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("expr.0")]),v._v(", "),t("code",[v._v("expr.1")]),v._v(", etc.")]),v._v(" "),t("td",[v._v("元组索引")])])])]),v._v(" "),t("p",[v._v("表 B-9 展示了使用大括号的上下文。")]),v._v(" "),t("p",[t("span",{staticClass:"caption"},[v._v("表 B-9: 大括号")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("符号")]),v._v(" "),t("th",[v._v("解释")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("{...}")])]),v._v(" "),t("td",[v._v("块表达式")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("Type {...}")])]),v._v(" "),t("td",[t("code",[v._v("struct")]),v._v(" 字面值")])])])]),v._v(" "),t("p",[v._v("表 B-10 展示了使用方括号的上下文。")]),v._v(" "),t("p",[t("span",{staticClass:"caption"},[v._v("表 B-10: 方括号")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("符号")]),v._v(" "),t("th",[v._v("解释")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[t("code",[v._v("[...]")])]),v._v(" "),t("td",[v._v("数组")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("[expr; len]")])]),v._v(" "),t("td",[v._v("复制了 "),t("code",[v._v("len")]),v._v("个 "),t("code",[v._v("expr")]),v._v("的数组")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("[type; len]")])]),v._v(" "),t("td",[v._v("包含 "),t("code",[v._v("len")]),v._v("个 "),t("code",[v._v("type")]),v._v(" 类型的数组")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("expr[expr]")])]),v._v(" "),t("td",[v._v("集合索引。 重载（"),t("code",[v._v("Index")]),v._v(", "),t("code",[v._v("IndexMut")]),v._v("）")])]),v._v(" "),t("tr",[t("td",[t("code",[v._v("expr[..]")]),v._v(", "),t("code",[v._v("expr[a..]")]),v._v(", "),t("code",[v._v("expr[..b]")]),v._v(", "),t("code",[v._v("expr[a..b]")])]),v._v(" "),t("td",[v._v("集合索引，使用 "),t("code",[v._v("Range")]),v._v("，"),t("code",[v._v("RangeFrom")]),v._v("，"),t("code",[v._v("RangeTo")]),v._v(" 或 "),t("code",[v._v("RangeFull")]),v._v(" 作为索引来代替集合 slice")])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);