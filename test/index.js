var tape = require("tape"),
    fastBindThis = require("../src/index");


tape("should create new function with thisArg bound to this", function(assert) {
    var _this, testBound;

    _this = {
        test: "test"
    };

    function test(a, b, c, d) {
        return this.test + a + b + c + d;
    }

    testBound = fastBindThis(test, _this, 4);

    assert.equal(testBound(0, 1, 2, 3), "test0123");
    assert.end();
});
tape("should fallback to apply all arguments if length is undefined or greater than 5", function(assert) {
    var testBound;

    function test() {
        return 10 + 5;
    }

    testBound = fastBindThis(test);

    assert.equal(testBound(), 15);
    assert.end();
});
