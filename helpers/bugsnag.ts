import React from "react"
import Bugsnag from "@bugsnag/js"
import BugsnagReact from "@bugsnag/plugin-react"

const apiKey = process.env.NEXT_PUBLIC_BUGSNAG

if (apiKey) {
  Bugsnag.start({
    apiKey,
    releaseStage: process.env.NODE_ENV,
    enabledReleaseStages: ["production"],
    appVersion: process.env.COMMIT_REF || "local", // from Netlify
    metadata: {
      deployUrl: process.env.DEPLOY_URL || "local", // from Netlify
      deployDate: new Date().toString(),
    },
    plugins: [new BugsnagReact(React)],
  })
}

export const ErrorBoundary = apiKey ? Bugsnag.getPlugin("react")?.createErrorBoundary() : null
