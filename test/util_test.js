var assert = require('assert');
const { getArgumentsFromMessage, getCommandFromArguments } = require('../util');

describe('getArgumentsFromMessage', function() {
  it('should return an array with length 2', function() {
    msg = {content: ',iam   test    '};
    arrayLength = getArgumentsFromMessage(msg).length
    assert.strictEqual(2, arrayLength);
  });
});

describe('getCommandFromArguments', function() {
  it('should return the command \'iam\' in lowercase', function() {
    msg = {content: ',IAM my_argument_1,    my_argument_2'};
    args = getArgumentsFromMessage(msg);
    cmd = getCommandFromArguments(args)
    assert.strictEqual('iam_faile', cmd);
  });
});