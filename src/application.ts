import {AuthenticateActionProvider} from './providers/auth-action.provider';
import {AuthStrategyProvider} from './providers/auth-strategy.provider';


import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {RestExplorerBindings, RestExplorerComponent,} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import * as path from 'path';
import {MySequence} from './sequence';
import {AuthenticationBindings, AuthenticationComponent} from '@loopback/authentication';

export class LoopbackBillingApplication extends BootMixin(
    ServiceMixin(RepositoryMixin(RestApplication)),
) {
    constructor(options: ApplicationConfig = {}) {

        super(options);

        // Bind auth provider
        this.component(AuthenticationComponent);
        this.bind(AuthenticationBindings.STRATEGY).toProvider(AuthStrategyProvider);
        this.bind(AuthenticationBindings.AUTH_ACTION).toProvider(
            AuthenticateActionProvider);
        // Set up the custom sequence
        this.sequence(MySequence);

        // Set up default home page
        this.static('/', path.join(__dirname, '../../public'));

        // Customize @loopback/rest-explorer configuration here
        this.bind(RestExplorerBindings.CONFIG).to({
            path: '/explorer',
        });
        this.component(RestExplorerComponent);

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
    }
}
