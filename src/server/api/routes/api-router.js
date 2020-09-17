const express = require('express');

const router = express.Router();

// Router imports
const modulesRouter = require('./modules.router');
const usersRouter = require('./users-router');
const channelsRouter = require('./channels-router');

// messages router imports
const messagesRouter = require('./messages-router');
const channelMembersRouter = require('./channel-members.router');

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const channelMembersController = require('./channel-members.router');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0',
      title: 'Final project',
      description: 'API documentation for the final project',
      contact: {},
    },
    host: '',
    basePath: '/api',
  },
  securityDefinitions: {},
  apis: ['./src/server/api/routes/*.js'],
};

const swaggerDocument = swaggerJsDoc(swaggerOptions);

// Route for Swagger API Documentation
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use('/modules', modulesRouter);
router.use('/users', usersRouter);
router.use('/channels', channelsRouter);
router.use('/messages', messagesRouter);
router.use('/channel-members', channelMembersController);
router.use('/channel-members', channelMembersRouter);

module.exports = router;
