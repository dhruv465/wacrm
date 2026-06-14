<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


<claude-mem-context>
# Memory Context

# [wacrm] recent context, 2026-05-31 10:34pm GMT+5:30

Legend: 🎯session 🔴bugfix 🟣feature 🔄refactor ✅change 🔵discovery ⚖️decision 🚨security_alert 🔐security_note
Format: ID TIME TYPE TITLE
Fetch details: get_observations([IDs]) | Search: mem-search skill

Stats: 19 obs (7,802t read) | 345,171t work | 98% savings

### May 20, 2026
785 3:30p 🔵 WACRM Project Architecture and Setup Requirements
### May 27, 2026
940 3:13p 🔵 Two concurrent RLS-gated query failures traced to auth layer
943 3:14p 🔵 Root cause confirmed: flows tables missing from remote database due to unapplied migrations
944 " 🔴 Applied missing migrations 011 and 012 to remote database
945 3:15p 🔴 Flows tables successfully deployed to remote database
946 " 🔵 API endpoint still returns 500 after migrations applied, suggesting cached schema or auth issue
947 " 🔴 Both errors resolved: flows API and profile queries now working after server restart
### May 30, 2026
1056 4:40p 🔵 CardReach branch 102 commits behind main; flows removed while upstream developed it heavily
1057 4:46p 🔵 Template Manager Status Config Missing Keys Causing Runtime Error
1058 " 🔵 Missing Dependency and Incomplete Status Config Root Causes Identified
### May 31, 2026
1059 9:43p 🔵 PR #163 feedback: dirty state tracking issue with updateNodePositions
1060 9:44p 🔵 Dirty state tracking implementation uses wrapper setState that always marks dirty
1061 9:45p 🟣 Test added for applyNodePositions utility function
1062 9:46p 🔴 Fixed automatic layout triggering false dirty state on flow open
1063 " ✅ Tests pass validating the dirty state fix
1064 " ✅ Full test suite passes confirming no regressions from dirty state fix
1065 9:47p ✅ Production build succeeds validating fix is production-ready
1066 " 🔴 Flow canvas Dagre layout no longer marks editor dirty on load
1067 9:49p 🔴 Dagre auto-layout hydration no longer marks flow editor dirty

Access 345k tokens of past work via get_observations([IDs]) or mem-search skill.
</claude-mem-context>