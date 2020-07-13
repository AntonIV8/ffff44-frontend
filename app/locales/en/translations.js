import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISffff44AnimalLForm from './forms/i-i-s-ffff44-animal-l';
import IISffff44CatLForm from './forms/i-i-s-ffff44-cat-l';
import IISffff44DogLForm from './forms/i-i-s-ffff44-dog-l';
import IISffff44AnimalEForm from './forms/i-i-s-ffff44-animal-e';
import IISffff44CatEForm from './forms/i-i-s-ffff44-cat-e';
import IISffff44DogEForm from './forms/i-i-s-ffff44-dog-e';
import IISffff44AnimalModel from './models/i-i-s-ffff44-animal';
import IISffff44CatModel from './models/i-i-s-ffff44-cat';
import IISffff44DogModel from './models/i-i-s-ffff44-dog';
import IISffff44PawsModel from './models/i-i-s-ffff44-paws';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-ffff44-animal': IISffff44AnimalModel,
    'i-i-s-ffff44-cat': IISffff44CatModel,
    'i-i-s-ffff44-dog': IISffff44DogModel,
    'i-i-s-ffff44-paws': IISffff44PawsModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'a-for-test': {
          caption: 'a-for-test',
          title: 'a-for-test',
          'i-i-s-ffff44-cat-l': {
            caption: 'i-i-s-ffff44-cat-l',
            title: 'i-i-s-ffff44-cat-l'
          },
          'i-i-s-ffff44-dog-l': {
            caption: 'i-i-s-ffff44-dog-l',
            title: 'i-i-s-ffff44-dog-l'
          },
          'i-i-s-ffff44-animal-l': {
            caption: 'i-i-s-ffff44-animal-l',
            title: 'i-i-s-ffff44-animal-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-ffff44-animal-l': IISffff44AnimalLForm,
    'i-i-s-ffff44-cat-l': IISffff44CatLForm,
    'i-i-s-ffff44-dog-l': IISffff44DogLForm,
    'i-i-s-ffff44-animal-e': IISffff44AnimalEForm,
    'i-i-s-ffff44-cat-e': IISffff44CatEForm,
    'i-i-s-ffff44-dog-e': IISffff44DogEForm
  },

});

export default translations;
