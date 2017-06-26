var assert = require("assert");
var num = 9;
var arr = [4, 4, 5, 12];

function resTotal(arr, num)
{
  var multiplicacion1 = arr.reduce(function(op1, op2)
  {
    return op1 * op2;
  });
  return multiplicacion1 * num;
}

describe("Multiplicacion", function()
{
  it("La multiplicacion de 4*4*5*12 debe dar 960", function()
  {
    assert.equal(8640, resTotal(arr, num));
  })
});
