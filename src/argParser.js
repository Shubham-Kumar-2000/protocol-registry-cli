const { ArgumentParser } = require('argparse');
const { version } = require('../package.json');

const parser = new ArgumentParser({
    description:
        'A command line tool to register custom protocols mapped with custom commands in your system.'
});

parser.add_argument('-v', '--version', { action: 'version', version });
parser.add_argument('mode', {
    help:
        'Allows you to set whether you want to check or you want to register a protocol.',
    type: String,
    choices: ['register', 'check'],
    nargs: '?',
    default: 'register'
});
parser.add_argument('-p', '--protocol', {
    help: 'Helps you to specify the protocol.',
    required: true
});
parser.add_argument('-c', '--command', {
    help:
        'Helps you to specify the command you want to map with the protocol. $_URL_ mentioned anywhere in your command will be replaced by the url by which it is initiated.'
});
parser.add_argument('-t', '--terminal', {
    action: 'store_true',
    help:
        'This option tells the system to first launch a terminal and then execute the command inside it. Otherwise commands are executed in background.'
});
parser.add_argument('-o', '--override', {
    action: 'store_true',
    help:
        'Use this with caution as it will override all previous registrations on this protocol with this command.'
});
parser.add_argument('-s', '--script', {
    action: 'store_true',
    help:
        'This tells the system to save your command in a script and then run that script for the protocol.'
});

const preProcess = (args) => {
    if (
        args.mode == 'register' &&
        (!args.command || args.command.trim().length < 1)
    ) {
        throw new Error(
            'Command is a required option while registering protocol'
        );
    }

    global.args = args;
    return args;
};

const argParser = () => preProcess(parser.parse_args());
module.exports = argParser;
