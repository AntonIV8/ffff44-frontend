import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  direction: DS.attr('string'),
  cat: DS.belongsTo('i-i-s-ffff44-cat', { inverse: 'paws', async: false })
});

export let ValidationRules = {
  direction: {
    descriptionKey: 'models.i-i-s-ffff44-paws.validations.direction.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  cat: {
    descriptionKey: 'models.i-i-s-ffff44-paws.validations.cat.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('PawsE', 'i-i-s-ffff44-paws', {
    direction: attr('Direction', { index: 0 })
  });
};
