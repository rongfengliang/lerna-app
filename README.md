# yarn with lerna

## cmd

* init

```code
yarn init -y
yarn lerna --dev
lerna init
```

* config

```code
pacakge.json

"private": true,
  "workspaces":[
    "packages/*"
  ],

lerna.json

  "version": "0.0.0",
  "npmClient":"yarn",
  "useWorkspaces":true

```

