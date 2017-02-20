/* eslint-disable global-require, import/no-dynamic-require */
import octonode from 'octonode';
import githubTransporter from './githubTransporter';

export default ({ transporter, credentials }, ...args) => {
    switch (transporter) {
    case 'github':
        return githubTransporter(octonode.client(credentials), ...args);
    default:
        throw new Error(`No existing "${transporter}" git transporter.`);
    }
};
