// importing group model
var Group = require('./groupSchema');

// POST Endpoint /api/groups
exports.postGroup = function(req, res) {
    console.log('SERVER: POST group request');
    console.log(req);
    var group = new Group(req.body);
    group.published_date = new Date();

    group.save(function(err, group) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(201).json(group);
    });
};

// GET Endpoint /api/groups
exports.getGroups = function(req, res) {
    console.log('SERVER: GET group request')

    Group.find(function(err, groups) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(groups);
    });
};

// GET Endpoint /api/groups/:group_id
exports.getGroup = function(req, res) {
    console.log('SERVER: GET group request')

    Group.findById(req.params.group_id, function(err, group) {
        if (err) {
            res.status(500).send(err)
            return;
        };

        res.json(group);
    });
};

// PUT Endpoint /api/groups/:group_id
exports.putGroup = function(req, res) {
    console.log('SERVER: PUT group request')

    Group.findByIdAndUpdate(
        req.params.group_id,
        req.body,
        {
            //pass the new object to cb function
            new: true,
            //run validations
            runValidators: true
        }, function (err, group) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(group);
    });
};

// DELETE endpoint /api/groups/:group_id
exports.deleteGroup = function(req, res) {
    console.log('SERVER: delete group request')

    Group.findById(req.params.group_id, function(err, group) {
        if (err) {
            res.status(500).send(err);
            return;
        }
        group.remove();
        res.sendStatus(200);
    });
};
