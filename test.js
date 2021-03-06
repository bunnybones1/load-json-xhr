var load = require('./');
var test = require('tape');

test('should load URI as a json', function(t) {
    t.plan(1);

    load('test.json', function(err, data) {
        if (err)
            t.fail(err);
        else
            t.equal(data.foo, 'bar');
    })
})

test('should give error', function(t) {
    t.plan(1);

    load('notexisting.json', function(err, data) {
        if (!err)
            t.fail(err);
        else
            t.ok(true, 'gets error '+err);
    })
})

test('accepts options', function(t) {
    t.plan(1);

    load({ uri: 'test.json' }, function(err, data) {
        if (err)
            t.fail(err);
        else
            t.equal(data.foo, 'bar');
    })
})

test('errors on invalid json', function(t) {
    t.plan(1);

    load({ uri: 'test-err.json' }, function(err, data) {
        if (!err)
            t.fail(err);
        else
            t.ok(true, 'gets error '+err);
    })
})

test("doesn't break with resposneType=json", function(t) {
    t.plan(1);

    load({ uri: 'test.json', responseType: 'json' }, function(err, data) {
        if (err)
            t.fail(err);
        else
            t.equal(data.foo, 'bar');
    })
})