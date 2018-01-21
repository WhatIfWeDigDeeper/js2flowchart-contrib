# js2flowchart-contrib
Contribution to js2flowchart to allow for more customization

### shorcuts
* npm test
* npm t
* npm start

### find commands available
    ls node_modules/.bin
    
### convention for pre/post hooks
    "pretest": "npm run lint",
    "posttest": "echo \"done\""
    # composition
    "test": "npm run lint && npm run test:unit"

### composition
* pre & post hook convention
* combine with double ampersands
* combine with ; which ignores exit codes of previous commands
* combine with pipe | when calling non-npm commands?

