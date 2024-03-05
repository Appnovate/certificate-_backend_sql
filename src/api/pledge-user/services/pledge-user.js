'use strict';

/**
 * pledge-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pledge-user.pledge-user');
