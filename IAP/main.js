function myDecorator(originalFunction) {
    return function(...args) {
      console.log('Before calling the original function');
      const result = originalFunction.apply(this, args);
      console.log('After calling the original function');
      return result;
    };
  }
  
  const myFunction = myDecorator(function() {
    console.log('Hello, world!');
  });
  
  myFunction();