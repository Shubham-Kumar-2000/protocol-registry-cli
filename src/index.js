#!/usr/bin/env node
'use strict';

// Code for the CLI App
const ProtocolRegistry = require('protocol-registry');
const argParser = require('./argParser');

const args = argParser();
const { mode, protocol, command, override, terminal, script } = args;

// Registers the Protocol
if (mode == 'register')
    ProtocolRegistry.register({
        protocol,
        command,
        override,
        terminal,
        script
    }).catch(console.log);
else
    ProtocolRegistry.checkifExists(protocol)
        .then(console.log)
        .catch(console.log);
