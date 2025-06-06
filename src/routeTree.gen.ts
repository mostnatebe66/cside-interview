/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as RepoOwnerNameIndexImport } from './routes/repo/$owner/$name/index'
import { Route as RepoOwnerNameIssuesIndexImport } from './routes/repo/$owner/$name/issues/index'
import { Route as RepoOwnerNameIssuesIssueNumberImport } from './routes/repo/$owner/$name/issues/$issueNumber'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const RepoOwnerNameIndexRoute = RepoOwnerNameIndexImport.update({
  id: '/repo/$owner/$name/',
  path: '/repo/$owner/$name/',
  getParentRoute: () => rootRoute,
} as any)

const RepoOwnerNameIssuesIndexRoute = RepoOwnerNameIssuesIndexImport.update({
  id: '/repo/$owner/$name/issues/',
  path: '/repo/$owner/$name/issues/',
  getParentRoute: () => rootRoute,
} as any)

const RepoOwnerNameIssuesIssueNumberRoute =
  RepoOwnerNameIssuesIssueNumberImport.update({
    id: '/repo/$owner/$name/issues/$issueNumber',
    path: '/repo/$owner/$name/issues/$issueNumber',
    getParentRoute: () => rootRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/repo/$owner/$name/': {
      id: '/repo/$owner/$name/'
      path: '/repo/$owner/$name'
      fullPath: '/repo/$owner/$name'
      preLoaderRoute: typeof RepoOwnerNameIndexImport
      parentRoute: typeof rootRoute
    }
    '/repo/$owner/$name/issues/$issueNumber': {
      id: '/repo/$owner/$name/issues/$issueNumber'
      path: '/repo/$owner/$name/issues/$issueNumber'
      fullPath: '/repo/$owner/$name/issues/$issueNumber'
      preLoaderRoute: typeof RepoOwnerNameIssuesIssueNumberImport
      parentRoute: typeof rootRoute
    }
    '/repo/$owner/$name/issues/': {
      id: '/repo/$owner/$name/issues/'
      path: '/repo/$owner/$name/issues'
      fullPath: '/repo/$owner/$name/issues'
      preLoaderRoute: typeof RepoOwnerNameIssuesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/repo/$owner/$name': typeof RepoOwnerNameIndexRoute
  '/repo/$owner/$name/issues/$issueNumber': typeof RepoOwnerNameIssuesIssueNumberRoute
  '/repo/$owner/$name/issues': typeof RepoOwnerNameIssuesIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/repo/$owner/$name': typeof RepoOwnerNameIndexRoute
  '/repo/$owner/$name/issues/$issueNumber': typeof RepoOwnerNameIssuesIssueNumberRoute
  '/repo/$owner/$name/issues': typeof RepoOwnerNameIssuesIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/repo/$owner/$name/': typeof RepoOwnerNameIndexRoute
  '/repo/$owner/$name/issues/$issueNumber': typeof RepoOwnerNameIssuesIssueNumberRoute
  '/repo/$owner/$name/issues/': typeof RepoOwnerNameIssuesIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/repo/$owner/$name'
    | '/repo/$owner/$name/issues/$issueNumber'
    | '/repo/$owner/$name/issues'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/repo/$owner/$name'
    | '/repo/$owner/$name/issues/$issueNumber'
    | '/repo/$owner/$name/issues'
  id:
    | '__root__'
    | '/'
    | '/repo/$owner/$name/'
    | '/repo/$owner/$name/issues/$issueNumber'
    | '/repo/$owner/$name/issues/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  RepoOwnerNameIndexRoute: typeof RepoOwnerNameIndexRoute
  RepoOwnerNameIssuesIssueNumberRoute: typeof RepoOwnerNameIssuesIssueNumberRoute
  RepoOwnerNameIssuesIndexRoute: typeof RepoOwnerNameIssuesIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  RepoOwnerNameIndexRoute: RepoOwnerNameIndexRoute,
  RepoOwnerNameIssuesIssueNumberRoute: RepoOwnerNameIssuesIssueNumberRoute,
  RepoOwnerNameIssuesIndexRoute: RepoOwnerNameIssuesIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/repo/$owner/$name/",
        "/repo/$owner/$name/issues/$issueNumber",
        "/repo/$owner/$name/issues/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/repo/$owner/$name/": {
      "filePath": "repo/$owner/$name/index.tsx"
    },
    "/repo/$owner/$name/issues/$issueNumber": {
      "filePath": "repo/$owner/$name/issues/$issueNumber.tsx"
    },
    "/repo/$owner/$name/issues/": {
      "filePath": "repo/$owner/$name/issues/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
