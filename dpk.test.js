const { deterministicPartitionKey } = require("./dpk");

const KEY_LENGTH_LARGER_THAN_MAX_PARITION_KEY_LENGTH =
  "aposdfijawefkjaasdklfjwoeifjalskjvzxoijfqpwifaskdjfhasdhfoqwiuhfaxjvzkxjcvhquhefoashdxcvzlkjxhfqoiuehfalsdjhzxkcjvhoisudfhqwokejfhalskjvhzxduhfqoiweuhfaslkdjfhasduvhaosidufhqowefhaskdjhvasdfhqoiwuehfalskdjvhaosdfhqoiweuhfalsdkjvhaodufhoqjhaksdgoiquwhfealksjdhvaosidjhfoqiwuehfalskdjhfaskdjfhowiefuh";

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal hash-key when given event is string", () => {
    const trivialKey = deterministicPartitionKey("test-key");
    expect(trivialKey).toBe(
      "6a927bbc510a17e11b2257603702977a7ca3bdb0000f6233d0b572bc4ba6adfe01af96df6a9293e2cf9b2b3619fdd6737532985b0df0c80b10a9d16b7575ba75"
    );
  });

  it("Returns the literal same key when given event is greater than max partition key length", () => {
    const trivialKey = deterministicPartitionKey(
      KEY_LENGTH_LARGER_THAN_MAX_PARITION_KEY_LENGTH
    );
    expect(trivialKey).toBe(
      "3e341fd7268ce76a7d14ad7a297b91345462556572eb17abc6c2405b77d49a2998695470d2f0bf63b665104178c2ab5f9af06b381c7f7268376cb764d55e9d8a"
    );
  });

  it("Returns the literal same key when given event has partitionKey", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "my-test" });
    expect(trivialKey).toBe("my-test");
  });

  it("Returns the literal same key when given event has partitionKey greater than max partition key length", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: KEY_LENGTH_LARGER_THAN_MAX_PARITION_KEY_LENGTH,
    });
    expect(trivialKey).toBe(
      "3e341fd7268ce76a7d14ad7a297b91345462556572eb17abc6c2405b77d49a2998695470d2f0bf63b665104178c2ab5f9af06b381c7f7268376cb764d55e9d8a"
    );
  });
});
