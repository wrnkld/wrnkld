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

export const scenarios: Scenario[] = [
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
    id: "lineage",
    group: "Explore",
    name: "Trace lineage",
    cmdLabel: "montecarlo lineage get",
    title: "Trace lineage",
    cmd: '$ montecarlo lineage get --mcon "<mcon>" \\n    --direction UPSTREAM --hops 2',
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
    name: "List alerts",
    cmdLabel: "montecarlo alerts list",
    title: "List alerts",
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
    id: "list-monitors",
    group: "Monitors",
    name: "List monitors",
    cmdLabel: "montecarlo monitors list",
    title: "List monitors",
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
];

export const groups = ["Explore", "Triage", "Monitors"];
