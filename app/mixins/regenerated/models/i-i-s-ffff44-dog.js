import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  age: DS.attr('number'),
  dogName: DS.attr('string')
});

export let ValidationRules = {
  age: {
    descriptionKey: 'models.i-i-s-ffff44-dog.validations.age.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  dogName: {
    descriptionKey: 'models.i-i-s-ffff44-dog.validations.dogName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-ffff44-animal'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('DogE', 'i-i-s-ffff44-dog', {
    age: attr('Age', { index: 0 }),
    dogName: attr('Dog name', { index: 1 }),
    weight: attr('Weight', { index: 2 })
  });

  modelClass.defineProjection('DogL', 'i-i-s-ffff44-dog', {
    age: attr('Age', { index: 0 }),
    dogName: attr('Dog name', { index: 1 }),
    weight: attr('Weight', { index: 2 })
  });
};
