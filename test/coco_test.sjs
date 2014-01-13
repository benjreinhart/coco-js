var expect = require('chai').expect;

describe('in-js', function(){
  it('properly aliases the prototype with dot notation', function(){
    expect(Array::slice.call("string")).to.eql([
      's',
      't',
      'r',
      'i',
      'n',
      'g'
    ]);
  });

  it('properly aliases the prototype with bracket notation', function(){
    var prop = 'slice';
    expect(Array::[prop].call("string")).to.eql([
      's',
      't',
      'r',
      'i',
      'n',
      'g'
    ]);
  });
});
