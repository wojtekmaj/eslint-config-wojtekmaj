import foo from './foo.js';

// Should not error
document.querySelector('body');
console.log(foo);
<p>Foo</p>;

// Should error
console.log(process.argv);
