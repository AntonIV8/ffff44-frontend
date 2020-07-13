import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-ffff44-cat', 'Unit | Serializer | i-i-s-ffff44-cat', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-ffff44-cat',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
