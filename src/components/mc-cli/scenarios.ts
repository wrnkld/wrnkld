export type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";

export interface Scenario {
  id: string;
  group: string;
  name: string;
  cmdLabel: string;
  title: string;
  cmd: string;
  http: { method: HttpMethod; path: string; headers: [string, string][] };
  body: Record<string, unknown> | null;
  res: Record<string, unknown>;
}

const ACCT = "8038c636-7b67-4412-a620-a26ca9dfcfa2";
const WH = "a1b2c3d4-e5f6-7890-abcd-ef0987654321";

const FT_ORDERS = "snowflake:production.analytics.fact_orders";
const FT_SESSIONS = "snowflake:production.analytics.fact_sessions";
const FT_DIMS = "snowflake:production.dbt_prod.dim_customers";
const FT_STG = "snowflake:production.staging.stg_orders";

const MCON_ORDERS = `MCON++${ACCT}++${WH}++table++${FT_ORDERS}`;
const MCON_SESSIONS = `MCON++${ACCT}++${WH}++table++${FT_SESSIONS}`;
const MCON_DIMS = `MCON++${ACCT}++${WH}++table++${FT_DIMS}`;
const MCON_STG = `MCON++${ACCT}++${WH}++table++${FT_STG}`;

const AID_VOL = "aeb8432c-cd03-4836-8fbb-181e83cebc12";
const AID_FRESH = "b2c3d4e5-f6a7-8901-bcde-f12345678901";
const AID_SCH = "c3d4e5f6-a7b8-9012-cdef-123456789012";

const KEY_HEADERS: [string, string][] = [
  ["x-mcd-id", "<your-key-id>"],
  ["x-mcd-token", "<your-token>"],
];
const JSON_HEADERS: [string, string][] = [...KEY_HEADERS, ["Content-Type", "application/json"]];

export const scenarios: Scenario[] = [
  {
    id: "whoami",
    group: "Setup",
    name: "Verify credentials",
    cmdLabel: "montecarlo whoami",
    title: "Verify credentials",
    cmd: "$ montecarlo whoami",
    http: { method: "GET", path: "/v1/whoami", headers: KEY_HEADERS },
    body: null,
    res: {
      email: "sarah.chen@acme-analytics.com",
      first_name: "Sarah",
      last_name: "Chen",
      role: "user",
      created_on: "2024-09-03T14:22:00.000000+00:00",
      account: { name: "Acme Analytics", account_id: ACCT },
    },
  },
  {
    id: "search",
    group: "Explore",
    name: "Search for a table",
    cmdLabel: "montecarlo tables search",
    title: "Search for a table",
    cmd: '$ montecarlo tables search --query "fact_orders" --limit 3',
    http: { method: "GET", path: "/v1/tables?query=fact_orders&limit=3", headers: KEY_HEADERS },
    body: null,
    res: {
      total_count: 3,
      data: [
        { mcon: MCON_ORDERS, full_table_id: FT_ORDERS, table_type: "TABLE", is_key_asset: true },
        { mcon: MCON_DIMS, full_table_id: FT_DIMS, table_type: "TABLE", is_key_asset: true },
        { mcon: MCON_STG, full_table_id: FT_STG, table_type: "TABLE", is_key_asset: false },
      ],
    },
  },
  {
    id: "get-table",
    group: "Explore",
    name: "Get table",
    cmdLabel: "montecarlo tables get",
    title: "Get table",
    cmd: '$ montecarlo tables get --mcon "<mcon>"',
    http: { method: "GET", path: "/v1/tables?mcon=<mcon>", headers: KEY_HEADERS },
    body: null,
    res: {
      mcon: MCON_ORDERS,
      full_table_id: FT_ORDERS,
      table_type: "TABLE",
      is_key_asset: true,
      is_muted: false,
      is_monitored: true,
      last_activity: "2026-08-09T22:14:55.000000+00:00",
      last_read: "2026-08-10T08:33:01.000000+00:00",
      last_write: "2026-08-09T22:14:55.000000+00:00",
      importance_score: 9.2,
      table_stats: {
        avg_reads_per_active_day: 142.3,
        avg_writes_per_active_day: 24.1,
        total_users: 12,
        degree_out: 11,
      },
      database: "production",
      schema: "analytics",
      table_name: "fact_orders",
    },
  },
  {
    id: "table-freshness",
    group: "Explore",
    name: "Table freshness",
    cmdLabel: "montecarlo tables freshness",
    title: "Table freshness",
    cmd: '$ montecarlo tables freshness --mcon "<mcon>"',
    http: { method: "GET", path: "/v1/tables/freshness?mcon=<mcon>", headers: KEY_HEADERS },
    body: null,
    res: {
      full_table_id: FT_ORDERS,
      last_updated_on: "2026-08-09T22:14:55.000000+00:00",
      freshness_status: "STALE",
      hours_since_last_update: 10.3,
      measurements: [
        { measured_at: "2026-08-09T22:00:00+00:00", last_updated_on: "2026-08-09T22:14:55+00:00" },
        { measured_at: "2026-08-09T21:00:00+00:00", last_updated_on: "2026-08-09T21:11:02+00:00" },
        { measured_at: "2026-08-09T20:00:00+00:00", last_updated_on: "2026-08-09T20:09:44+00:00" },
      ],
    },
  },
  {
    id: "table-queries",
    group: "Explore",
    name: "Who's querying this?",
    cmdLabel: "montecarlo tables queries",
    title: "Who's querying this?",
    cmd: '$ montecarlo tables queries --mcon "<mcon>" \\\n    --query-type source --limit 5',
    http: {
      method: "GET",
      path: "/v1/tables/queries?mcon=<mcon>&query_type=source&limit=5",
      headers: KEY_HEADERS,
    },
    body: null,
    res: {
      total: 847,
      count: 5,
      has_more: true,
      queries: [
        { user_name: "dbt_prod", sub_category: "SELECT", timestamp: "2026-08-10T08:33:01+00:00", runtime: 14.23, rows_produced: 142083 },
        { user_name: "revenue_analyst@acme.com", sub_category: "SELECT", timestamp: "2026-08-10T07:55:22+00:00", runtime: 4.31, rows_produced: 8441 },
        { user_name: "looker_embed_runner", sub_category: "SELECT", timestamp: "2026-08-10T07:30:45+00:00", runtime: 28.1, rows_produced: 250 },
        { user_name: "airflow@data-platform", sub_category: "SELECT", timestamp: "2026-08-10T06:01:33+00:00", runtime: 6.82, rows_produced: 142083 },
        { user_name: "data_science@acme.com", sub_category: "SELECT", timestamp: "2026-08-10T04:17:09+00:00", runtime: 91.45, rows_produced: 142083 },
      ],
    },
  },
  {
    id: "lineage",
    group: "Explore",
    name: "Trace data lineage",
    cmdLabel: "montecarlo lineage get",
    title: "Trace data lineage",
    cmd: '$ montecarlo lineage get --mcon "<mcon>" \\\n    --direction UPSTREAM --hops 2',
    http: {
      method: "GET",
      path: "/v1/lineage?mcon=<mcon>&direction=UPSTREAM&hops=2",
      headers: KEY_HEADERS,
    },
    body: null,
    res: {
      mcon: MCON_ORDERS,
      direction: "UPSTREAM",
      hops: 2,
      total_edges: 3,
      edges: [
        { source: MCON_STG, target: MCON_ORDERS, source_type: "table", target_type: "table" },
        { source: MCON_DIMS, target: MCON_ORDERS, source_type: "table", target_type: "table" },
        {
          source: `MCON++${ACCT}++fivetran++job++shopify-production`,
          target: MCON_STG,
          source_type: "job",
          target_type: "table",
        },
      ],
    },
  },
  {
    id: "list-alerts",
    group: "Triage",
    name: "List open alerts",
    cmdLabel: "montecarlo alerts list",
    title: "List open alerts",
    cmd: "$ montecarlo alerts list --status NOT_ACKNOWLEDGED --limit 5",
    http: {
      method: "GET",
      path: "/v1/alerts?status=NOT_ACKNOWLEDGED&limit=5",
      headers: KEY_HEADERS,
    },
    body: null,
    res: {
      total_count: 7,
      data: [
        {
          alert_id: AID_VOL,
          alert_types: ["Volume"],
          status: "NOT_ACKNOWLEDGED",
          triage_priority: "NOT_TRIAGED",
          title: "Row count dropped 86% in production.analytics.fact_orders",
          created_time: "2026-08-09T22:18:04.000000+00:00",
          assets: [{ mcon: MCON_ORDERS, full_table_id: FT_ORDERS, asset_type: "table" }],
        },
        {
          alert_id: AID_FRESH,
          alert_types: ["Freshness"],
          status: "NOT_ACKNOWLEDGED",
          triage_priority: "NOT_TRIAGED",
          title: "production.analytics.fact_sessions not updated in 4h 12m",
          created_time: "2026-08-09T18:44:30.000000+00:00",
          assets: [{ mcon: MCON_SESSIONS, full_table_id: FT_SESSIONS, asset_type: "table" }],
        },
        {
          alert_id: AID_SCH,
          alert_types: ["Schema Changes"],
          status: "NOT_ACKNOWLEDGED",
          triage_priority: "NOT_TRIAGED",
          title: "Column order_currency added to production.staging.stg_orders",
          created_time: "2026-08-09T11:02:17.000000+00:00",
          assets: [{ mcon: MCON_STG, full_table_id: FT_STG, asset_type: "table" }],
        },
      ],
    },
  },
  {
    id: "alert-assess",
    group: "Triage",
    name: "AI alert assessment",
    cmdLabel: "montecarlo alerts assess",
    title: "AI alert assessment",
    cmd: `$ montecarlo alerts assess \\\n    --alert-id "${AID_VOL}"`,
    http: { method: "POST", path: `/v1/alerts/${AID_VOL}/assess`, headers: KEY_HEADERS },
    body: null,
    res: {
      incident_id: AID_VOL,
      incident_likelihood: "HIGH",
      alert_impact: "HIGH",
      alert_description:
        "Row count for production.analytics.fact_orders dropped 86% at 22:14 UTC. Only 142,083 rows were added versus the expected 850,000-1,200,000 range.",
      triage_summary:
        "The upstream table stg_orders shows a matching gap in writes starting at 21:55 UTC, consistent with a Fivetran sync failure. fact_orders has 11 downstream tables including the revenue dashboard and customer_ltv model.",
      status: "success",
    },
  },
  {
    id: "resolve",
    group: "Triage",
    name: "Resolve an alert",
    cmdLabel: "montecarlo alerts update --status FIXED",
    title: "Resolve an alert",
    cmd: `$ montecarlo alerts update \\\n    --alert-id "${AID_VOL}" \\\n    --status FIXED \\\n    --comment "Fivetran sync lag from Shopify API outage (8pm-10pm UTC). Data fully backfilled."`,
    http: { method: "PATCH", path: `/v1/alerts/${AID_VOL}`, headers: JSON_HEADERS },
    body: {
      status: "FIXED",
      comment: "Fivetran sync lag from Shopify API outage (8pm-10pm UTC). Data fully backfilled.",
    },
    res: {
      alert_id: AID_VOL,
      status: "FIXED",
      updated_time: "2026-08-10T09:32:11.000000+00:00",
      alert_types: ["Volume"],
    },
  },
  {
    id: "list-monitors",
    group: "Monitors",
    name: "List monitors on a table",
    cmdLabel: "montecarlo monitors list",
    title: "List monitors on a table",
    cmd: '$ montecarlo monitors list --mcon "<mcon>"',
    http: { method: "GET", path: "/v1/monitors?mcon=<mcon>", headers: KEY_HEADERS },
    body: null,
    res: {
      count: 3,
      monitors: [
        { monitor_id: "a1b2c3d4-e5f6-7890-abcd-111111111111", monitor_type: "VOLUME", display_name: "fact_orders volume", is_paused: false, breached: "BREACHED", prev_execution_time: "2026-08-09T22:14:55+00:00", seven_days_incident_count: 1, table_mcons: [MCON_ORDERS] },
        { monitor_id: "b2c3d4e5-f6a7-8901-bcde-222222222222", monitor_type: "FRESHNESS", display_name: "fact_orders freshness", is_paused: false, breached: "NOT_BREACHED", prev_execution_time: "2026-08-10T02:00:00+00:00", seven_days_incident_count: 0, table_mcons: [MCON_ORDERS] },
        { monitor_id: "c3d4e5f6-a7b8-9012-cdef-333333333333", monitor_type: "CUSTOM_SQL", display_name: "null order_id check", is_paused: false, breached: "NOT_BREACHED", prev_execution_time: "2026-08-10T03:00:00+00:00", seven_days_incident_count: 0, table_mcons: [MCON_ORDERS] },
      ],
    },
  },
  {
    id: "monitor-report",
    group: "Monitors",
    name: "Monitor breach report",
    cmdLabel: "montecarlo monitors report",
    title: "Monitor breach report",
    cmd: '$ montecarlo monitors report \\\n    --monitor-id "a1b2c3d4-e5f6-7890-abcd-111111111111"',
    http: {
      method: "GET",
      path: "/v1/monitors/a1b2c3d4-e5f6-7890-abcd-111111111111/report",
      headers: KEY_HEADERS,
    },
    body: null,
    res: {
      monitor_id: "a1b2c3d4-e5f6-7890-abcd-111111111111",
      monitor_type: "VOLUME",
      display_name: "fact_orders volume",
      breached: "BREACHED",
      prev_execution_time: "2026-08-09T22:14:55+00:00",
      next_execution_time: "2026-08-10T22:00:00+00:00",
      thirty_days_incident_count: 2,
      seven_days_incident_count: 1,
      last_observed_value: 142083,
      table_mcons: [MCON_ORDERS],
    },
  },
  {
    id: "create-monitor",
    group: "Monitors",
    name: "Add a SQL monitor",
    cmdLabel: "montecarlo monitors create --type CUSTOM_SQL",
    title: "Add a SQL monitor",
    cmd: '$ montecarlo monitors create \\\n    --type CUSTOM_SQL \\\n    --mcon "<mcon>" \\\n    --name "null order_id guard" \\\n    --sql "SELECT COUNT(*) FROM production.analytics.fact_orders WHERE order_id IS NULL"',
    http: { method: "POST", path: "/v1/monitors", headers: JSON_HEADERS },
    body: {
      monitor_type: "CUSTOM_SQL",
      display_name: "null order_id guard",
      table_mcons: [MCON_ORDERS],
      custom_sql:
        "SELECT COUNT(*) FROM production.analytics.fact_orders WHERE order_id IS NULL",
    },
    res: {
      monitor_id: "f9a0b1c2-d3e4-5678-9abc-def012345678",
      monitor_type: "CUSTOM_SQL",
      display_name: "null order_id guard",
      created_time: "2026-08-10T09:40:00.000000+00:00",
      is_paused: false,
      table_mcons: [MCON_ORDERS],
    },
  },
];

export const groups = ["Setup", "Explore", "Triage", "Monitors"];
