import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as CatMixin
} from '../mixins/regenerated/models/i-i-s-ffff44-cat';

import AnimalModel from './i-i-s-ffff44-animal';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-ffff44-animal';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = AnimalModel.extend(CatMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
