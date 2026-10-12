# microfontend-course
In this course, we explore microfrontend architecture and related concepts.

## Shared dependencies

The container, products, and cart use Module Federation to share
`@faker-js/faker`. The `shared` key must match the actual package name used in
the source imports, and `singleton: true` tells Module Federation to reuse one
instance from the share scope when the MFEs run together. Each MFE still loads
its own remote entry; sharing Faker does not combine the remote entries.
