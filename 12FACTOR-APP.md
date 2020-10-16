# 12 FACTOR-APP

The 12 factor which a developer should keep in mind to make the best software which is delivered as service. The twelve-factor methodology can be applied to apps written in any programming language, and which use any combination of backing services. Twelve Factor apps are built for agility and rapid deployment, enabling continuous delivery and reducing the time and cost for new developers to join a project. At the same time, they are architected to exploit the principles of modern cloud platforms while permitting maximum portability between them. Finally, they can scale up without significant changes to tooling, architecture or development practices.

>### THE 12 FACTORS
> - ## CODEBASE
> An app is built from one version-controlled codebase. In a Twelve-Factor App, you work from a single codebase, which is tracked in a version control system (such as GitHub or Subversion) and use multiple deployment environments (staging, dev, production, etc.). Look at it this way: If you have multiple codebases, you’ve got a distributed system, not an application.
>
> - ## Dependencies
> An app explicitly declares its dependencies. In a Twelve-Factor App, you guarantee a deterministic build process, so the app can always be built from scratch and dependencies will never be missed or collide internally.
>
> - ## Config
> Store an app’s configuration in environment variables. An application’s configuration is likely to vary from environment to environment. For example, various versions of an app’s code base could be deployed to development, testing, staging, or production environments. The Twelve-Factor App calls for “strict separation of config from code,” and suggests that we store application configuration in environment variables.
>
> - ## Backing services
> Backing services are resources. The code for a twelve-factor app makes no distinction between local and third-party services. To the app, both are attached resources, accessed via a URL or other locator/credentials stored in the config.
>
> - ## Build, release, run
> Separate the stages of your app. In the Twelve-Factor App, there are three main stages: build, release, run. In the build stage, you compile all your code from your version control repo and package that version of the app. The release stage is where you combine the build and the app’s configuration in preparation to deploy it live. Finally, in the run stage, you’ve fully executed the app and have created a new release. Every release should always have a unique release ID, such as a timestamp of the release or an incrementing number.
>
> - ## Processes
> Stateless processes are essential. This is a key factor for creating flexible, scalable cloud apps. You deploy the app into the execution environment as one or more processes, and the processes are stateless and share nothing. Any data that needs to persist must be stored in a stateful backing service, typically a database.
>
> - ## Port binding
> Use port bindings instead of packaging a web server. A Twelve-Factor web app does not include a web server, and instead ships its services over HTTP. The app does this by binding to a port to export and receive requests. This ensures that the app is completely self-contained and doesn’t rely on a specific web server.
>
> - ## Concurrency
> Run processes concurrently. In a Twelve-Factor App, different types of work are handled by different processes. A Twelve-Factor App must be able to scale horizontally, and if you’re using stateless processes, such scale should be achieved seamlessly.
>
> - ## Disposability
> Processes are disposable. A Twelve-Factor App’s processes are disposablem, they can be started or stopped at a moment’s notice. This facilitates fast and elastic scaling, rapid deployment of code or config changes, and robust production deployments.
>
> - ## Dev/prod parity
> Wherever possible, keep dev and prod deploys in sync. The lack of parity can manifest itself as three types of gaps: time, personal, and tools. To prevent these gaps, developers should have their code deployed as soon as possible.
>
> - ## Logs
> Logs are event streams. A log is the stream of aggregated, time-ordered events collected from the output streams of all running processes and backing services. They have no fixed beginning or end, but flow continuously as long as the app is operating. Logs provide visibility into the behavior of a running app.
>
> - ## Admin processes
> Run admin/management processes in the same environment as regular processes. Admin processes should be run in an identical environment as the regular long-running processes of the app. They run against a release, using the same codebase and config as any process run against that release. Admin code must ship with application code to avoid synchronization issues.