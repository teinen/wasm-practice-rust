const js = import('./node_modules/@teinen/wasm-practice-rust/wasm_practice_rust.js')

js.then(js => {
  js.greet("WebAssembly")
})
