const Evertree = artifacts.require("Evertree");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Evertree", function (/* accounts */) {
  it("should assert true", async function () {
    await Evertree.deployed();
    return assert.isTrue(true);
  });
});
