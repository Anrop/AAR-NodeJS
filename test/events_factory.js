module.exports.playerConnected = function () {
  return {
    type: 'PlayerConnected',
    timestamp: new Date(),
    player: {
      name: 'test',
      nid: '123',
      uid: '123',
    },
  };
};

module.exports.playerDisconnected = function () {
  return {
    type: 'PlayerDisconnected',
    timestamp: new Date(),
    player: {
      name: 'test',
      nid: '123',
      uid: '123',
    },
  };
};

module.exports.unitCreated = function () {
  return {
    type: 'UnitCreated',
    timestamp: new Date(),
    player: {
      name: 'test',
      nid: '123',
      uid: '123',
    },
    unit: {
      class: 'UnitClass',
      name: 'MyUnit',
      position: {
        x: 1,
        y: 2,
        z: 3,
      },
    },
  };
};

module.exports.unitFired = function () {
  return {
    type: 'UnitFired',
    timestamp: new Date(),
    ammo: {
      class: 'AmmoClass',
      name: 'MyAmmo',
    },
    player: {
      name: 'test',
      nid: '123',
      uid: '123',
    },
    unit: {
      class: 'UnitClass',
      name: 'MyUnit',
      position: {
        x: 1,
        y: 2,
        z: 3,
      },
    },
    weapon: {
      class: 'WeaponClass',
      name: 'MyWeapon',
    },
  };
};

module.exports.unitPosition = function () {
  return {
    type: 'UnitPosition',
    timestamp: new Date(),
    player: {
      name: 'test',
      nid: '123',
      uid: '123',
    },
    unit: {
      class: 'UnitClass',
      name: 'MyUnit',
      position: {
        x: 1,
        y: 2,
        z: 3,
      },
    },
  };
};
