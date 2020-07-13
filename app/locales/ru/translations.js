import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'A for test',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'A for test',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'A for test',
          title: 'A for test'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'a-for-test': {
          caption: 'AForTest',
          title: 'AForTest',
          'i-i-s-ffff44-cat-l': {
            caption: 'Cat',
            title: ''
          },
          'i-i-s-ffff44-dog-l': {
            caption: 'Dog',
            title: ''
          },
          'i-i-s-ffff44-animal-l': {
            caption: 'Animal',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
