var assert = require("assert"),
    fastBindThis = require("../src/index");


describe("fastBindThis", function() {
    it("should create new function with thisArg bound to this", function() {
        var _this, testBound;

        _this = {
            test: "test"
        };

        function test(a, b, c, d) {
            return this.test + a + b + c + d;
        }

        testBound = fastBindThis(test, _this, 4);

        assert.equal(testBound(0, 1, 2, 3), "test0123");
    });
    it("should fallback to apply all arguments if length is undefined or greater than 5", function() {
        var testBound;

        function test() {
            return 10 + 5;
        }

        testBound = fastBindThis(test);

        assert.equal(testBound(), 15);
    });
});
