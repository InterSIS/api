QUnit.test( "Test InterSIS spec is valid", function( assert ) {
    var valid;

    valid = true;

    try {
        SwaggerParser.validate("../intersis.yaml", function(err, api) {
            if (err) {
                throw err;
            }
            else {
                console.log("API name: %s, Version: %s", api.info.title, api.info.version);
            }
        });
    } catch(err) {
        valid = false;
    }

    assert.equal(true, valid);

});



