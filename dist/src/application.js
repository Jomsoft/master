"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_action_provider_1 = require("./providers/auth-action.provider");
const auth_strategy_provider_1 = require("./providers/auth-strategy.provider");
const boot_1 = require("@loopback/boot");
const rest_explorer_1 = require("@loopback/rest-explorer");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const service_proxy_1 = require("@loopback/service-proxy");
const path = require("path");
const sequence_1 = require("./sequence");
const agenda_define_1 = require("./cron/agenda/agenda.define");
const authentication_1 = require("@loopback/authentication");
class LoopbackBillingApplication extends boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))) {
    constructor(options = {}) {
        super(options);
        // Bind auth provider
        this.component(authentication_1.AuthenticationComponent);
        this.bind(authentication_1.AuthenticationBindings.STRATEGY).toProvider(auth_strategy_provider_1.AuthStrategyProvider);
        this.bind(authentication_1.AuthenticationBindings.AUTH_ACTION).toProvider(auth_action_provider_1.AuthenticateActionProvider);
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path.join(__dirname, '../../public'));
        // Customize @loopback/rest-explorer configuration here
        this.bind(rest_explorer_1.RestExplorerBindings.CONFIG).to({
            path: '/explorer',
        });
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
        agenda_define_1.defineAgenda();
    }
}
exports.LoopbackBillingApplication = LoopbackBillingApplication;
//# sourceMappingURL=application.js.map