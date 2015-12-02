[![Build Status](https://travis-ci.org/InterSIS/API.svg)](https://travis-ci.org/InterSIS/API)
[![GitHub release](https://img.shields.io/github/release/InterSIS/API.svg)]()

API
===

InterSIS is an API and SDK for student/educator information and authentication, using OAuth 2.0. InterSIS delivers resources over a RESTful API using JSON.

This repo provides the InterSIS API specification. Explore this spec at [explore.intersis.org](https://explore.intersis.org). Read more at [intersis.org](intersis.org).

Specification
=============

The InterSIS API is written using the [Swagger](http://swagger.io/) 2.0 API documentation standard, using the [YAML](http://yaml.org/) data-serialization format.

Description
===========

The Swagger 2.0 standard includes a section for narrative API documentation. This section may optionally be written in [Markdown](https://daringfireball.net/projects/markdown/). 

Markdown Extensions
-------------------

The [InterSIS API Explorer](https://github.com/InterSIS/api-explorer) project extends Markdown to render some additional tags:

### {{see #tag}}

Use the {{see #tag}} to include a tag of API endpoint docs in the narrative documentation. For example:

```
    ### Client Registration
    
    See the following endpoints on client registration:
    
    {{see #clients}}
```

### {{spec #tag}}

Use the {{spec #tag}} to describe semantic requirements for the API:

```
    ### Client Registration
    
    See the following endpoints on client registration:
    
    {{see #clients}}
    {{spec #students: the staff role of district administrator grants retrieve on all students.}}
    {{spec #students: a guardian may retrieve only on those students with which it has the student-guardian relationship.}}
```

Development Process
===================

The InterSIS API is currently under closed development; only members of the InterSIS team may contribute at this time. 

[GitHub](https://github.com/InterSIS/API) is the canonical location of this project. Branches .70, 1.0, etc., are production target branches.

Here's the general sequence of events for code contribution:

1. Create a feature branch from the target production branch, including your name and intended features. Eg. `0.7-jschilz-add-guardian-site-relation`.
2. Checkout the feature branch to your personal workspace, make changes, and push them back to GitHub.
3. Open a pull request back into the target production branch. Jenkins-CI will perform a trial merge and test for build pass; if these tests pass, the approve and confirm the merge.
4. Delete the feature branch.

The production server will pull down an updated copy of the production branch within a few seconds of merging your changes, using web hooks.
