import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-ffff44-animal', 'Unit | Model | i-i-s-ffff44-animal', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-ffff44-animal',
    'model:i-i-s-ffff44-cat',
    'model:i-i-s-ffff44-dog',
    'model:i-i-s-ffff44-paws',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
