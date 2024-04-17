import foo from './foo.js';

// Should not error
document.querySelector('body');
console.log(foo);

// Should error
console.log(process.argv);
<p>Foo</p>;
