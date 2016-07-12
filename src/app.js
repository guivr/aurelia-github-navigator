export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Github Navigator';
    config.map([
      { route: ['', 'home'],         name: 'home',  moduleId: 'home', nav: false, title: 'Home' },
      { route: 'repos/:owner/:name', name: 'repos', moduleId: 'repos'}
    ]);

    this.router = router;
  }
}
