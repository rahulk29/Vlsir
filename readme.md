# Vlsir

Interchange formats for chip design.

---

Vlsir defines data schema for integrated circuit (IC) circuits, layouts, and simulations,
using Google's [Protocol Buffer](https://developers.google.com/protocol-buffers/) schema definition language.

The name _Vlsir_ is a merger of _VLSI_ (very large scale integration - a way-outdated chip-world acronym)
and _IR_ (intermediate representation - the term every cool-kid copying compiler designers uses nowadays).

## Contents

All of Vlsir's schema-definitions live in the [protos](./protos) directory.

| Schema                                 | Description                     |
| -------------------------------------- | ------------------------------- |
| [Circuit](./protos/circuit.proto)      | Circuit / Hardware Descriptions |
| [Raw Layout](./protos/raw.proto)       | "Raw Polygon" IC Layout         |
| [Tetris Layout](./protos/tetris.proto) | "Tetris" Gridded IC Layout      |
| [Spice](./protos/spice.proto)          | Spice-Class Simulator Interface |
| [Utilities](./protos/utils.proto)      | Shared Utilities                |

## Language Bindings

_Vlsir_ defines a data schema, which related projects use in code.
Projects using _vlsir_ can be written in any language with protobuf-compiler bindings - 
which includes essentially every popular programming language. 
Existing projects have prominently used Python, C++, and Rust.
Bindings to each language are distributed through their language-specific package managers. 

| Language | Bindings Package | Compiler | 
| -------- | ---------------- | -------- | 
| Python   | https://pypi.org/project/vlsir/ | Google `protoc` |
| Rust     | https://crates.io/crates/vlsir  | [Prost](https://github.com/tokio-rs/prost) |
| JavaScript | (Coming Soon!) | [protobuf.js](https://github.com/protobufjs/protobuf.js/) | 

## Vlsir Tools 

The `Vlsir` repository also serves as home for the Python-language [VlsirTools](https://pypi.org/project/vlsirtools/) package. 
`VlsirTools` is a collection of tools for working with Vlsir's schema, including: 

* Netlisting to industry-standard formats (SPICE, Verilog, etc.)
* Drivers and result-parsers for Spice-class simulators
## Projects

Ongoing, co-developed projects which use `vlsir`: 

| Project  | Description | Language |
| -------- | ----------- | -------- |
| [Hdl21](https://github.com/dan-fritchman/Hdl21)        | Generator-Based Hardware Description Library | Python |
| [Layout21](https://github.com/dan-fritchman/Layout21)  | Multi-Layered Layout-Programming | Rust |
| [Boralago](https://github.com/growly/boralago)         | Layout Generation for Open-Source FPGAs (and other cool stuff too) | C++ |
