'use strict';

/**
 * autentication service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::autentication.autentication');
